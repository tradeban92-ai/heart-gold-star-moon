#!/usr/bin/env python3
"""Build a Cloudflare-safe self-contained index.html."""
from __future__ import annotations

import base64
import io
import re
from pathlib import Path

from PIL import Image

ROOT = Path("/workspace")
SRC = ROOT / "attachments" / "index.html"
FRONT = ROOT / "public" / "face-front.jpg"
AVATAR = ROOT / "public" / "ekaterina-avatar.jpg"
OUTS = [
    ROOT / "artifacts" / "index.html",
    ROOT / "ОТКРЫВАЙ ЭТО.html",
    ROOT / "artifacts" / "ОТКРЫВАЙ ЭТО.html",
]


def wrap_data_uri(mime: str, raw: bytes, width: int = 76) -> str:
    b64 = base64.b64encode(raw).decode("ascii")
    body = "\n".join(b64[i : i + width] for i in range(0, len(b64), width))
    return f"data:{mime};base64,{body}"


def jpeg_bytes(path: Path, max_w: int, quality: int) -> bytes:
    im = Image.open(path).convert("RGB")
    if im.width > max_w:
        h = int(im.height * max_w / im.width)
        im = im.resize((max_w, h), Image.Resampling.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, "JPEG", quality=quality, optimize=True)
    return buf.getvalue()


FRONT_URI = wrap_data_uri("image/jpeg", jpeg_bytes(FRONT, 720, 82))
AVATAR_URI = wrap_data_uri("image/jpeg", jpeg_bytes(AVATAR, 160, 88))

EXTRA_CSS = r"""
  .hero-row{display:flex;align-items:flex-start;gap:16px;}
  .hero-row .hero-copy{flex:1;min-width:0;}
  .hero-avatar{width:80px;height:80px;border-radius:50%;object-fit:cover;object-position:center 18%;flex:none;margin-top:4px;box-shadow:0 0 0 1px var(--line);}
  .zone-chips{display:flex;gap:6px;overflow-x:auto;padding:10px 18px 8px;scrollbar-width:none;}
  .zone-chips::-webkit-scrollbar{display:none;}
  .zchip{flex:none;width:36px;height:36px;border-radius:999px;border:1px solid var(--line);background:#fff;color:var(--steel-dk);font-family:'Manrope',sans-serif;font-size:13px;font-weight:700;cursor:pointer;}
  .zchip.on{background:var(--steel-dk);border-color:var(--steel-dk);color:#fff;}
  .zchip span{display:none;}
  .face-stage{margin:4px 18px 0;border-radius:18px;overflow:hidden;background:#E8E8EA;border:1px solid var(--line);}
  .facewrap{position:relative;width:100%;max-width:520px;margin:0 auto;}
  .facewrap img{width:100%;display:block;}
  .facewrap svg{position:absolute;inset:0;width:100%;height:100%;}
  .zone-path{fill:transparent;stroke:transparent;pointer-events:none;}
  .zone-hit{fill:transparent;stroke:transparent;stroke-width:8;cursor:pointer;}
  .badge-circle{fill:rgba(247,249,251,0.88);stroke:rgba(74,163,212,0.7);stroke-width:0.35;}
  .badge-num{fill:rgba(61,146,194,0.95);pointer-events:none;}
  .badge-g{transform-box:fill-box;transform-origin:center;}
  .zone-g:hover .badge-circle,.zone-g.is-on .badge-circle{fill:#4a5a6e;stroke:#4a5a6e;}
  .zone-g:hover .badge-num,.zone-g.is-on .badge-num{fill:#fff;}
  .zone-g:hover .badge-g,.zone-g.is-on .badge-g{transform:scale(1.18);}
  .fview-btn{display:none !important;}
  .fempty{margin:8px 18px 16px;background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:18px;}
  .fempty h3{font-family:'Cormorant Garamond',serif;font-size:20px;color:var(--steel-dk);margin:0 0 6px;}
  .fempty p{font-size:13px;color:var(--muted);margin:0;line-height:1.45;}
"""

NEW_FACE = f"""  <div class="fmap-toolbar">
    <p class="fhint" id="fhint">Нажмите зону на схеме или номер.</p>
  </div>
  <div class="zone-chips" id="zoneChips"></div>
  <div class="face-stage">
    <div class="facewrap" id="facewrap">
      <img id="faceImg" src="{FRONT_URI}" alt="3D-модель лица">
      <svg id="faceSvg" viewBox="0 0 100 133.11" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"></svg>
    </div>
  </div>
  <div class="fpanel" id="fpanel" style="display:none;"></div>
  <div class="fdetail" id="fdetail"></div>
</div>
"""

NEW_JS = r"""
// ===== Карта лица =====
const FACE_ZONES = [
  {key:'forehead', n:1, title:'Лоб', hint:'Горизонтальные морщины', items:[
    {name:'Ботулинотерапия', drug:'Rentox', price:7500, desc:'Убирает горизонтальные морщины на лбу. Результат 4–6 месяцев.', url:'https://dkd.su/1788592/s/18950887'},
    {name:'Ботулинотерапия', drug:'Релатокс', price:12000, desc:'Лоб на препарате Релатокс. Результат 4–6 месяцев.', url:'https://dkd.su/1788592/s/18950887'}
  ]},
  {key:'glabella', n:2, title:'Межбровье', hint:'Морщины гнева', items:[
    {name:'Ботулинотерапия', drug:'Rentox', price:4500, desc:'Убирает вертикальную складку между бровей — «морщины гнева».', url:'https://dkd.su/1788592/s/21815928'},
    {name:'Ботулинотерапия', drug:'Релатокс', price:6000, desc:'Межбровье на препарате Релатокс.', url:'https://dkd.su/1788592/s/21815928'}
  ]},
  {key:'eyes', n:3, title:'Вокруг глаз', hint:'Гусиные лапки', items:[
    {name:'Ботулинотерапия', drug:'Rentox', price:3500, desc:'Разглаживает «гусиные лапки» в уголках глаз при улыбке.', url:'https://dkd.su/1788592/s/21815936'},
    {name:'Ботулинотерапия', drug:'Релатокс', price:5000, desc:'Гусиные лапки на препарате Релатокс.', url:'https://dkd.su/1788592/s/21815936'}
  ]},
  {key:'cheeks', n:4, title:'Скулы', hint:'Объём средней трети', items:[
    {name:'Филлер', drug:'Tesoro SAB', price:15000, desc:'Восполнение объёма скул, лифтинг средней трети лица.', url:'https://dkd.su/1788592/s/21816006'},
    {name:'Филлер', drug:'Stylage L', price:18000, desc:'Выраженная коррекция скул, чёткий рельеф средней трети.', url:'https://dkd.su/1788592/s/21816006'}
  ]},
  {key:'nasolabial', n:5, title:'Носогубные', hint:'Складки от носа к губам', items:[
    {name:'Филлер', drug:'коррекция складок', price:15000, desc:'Заполнение носогубных складок, смягчает заломы, освежает лицо.', url:'https://dkd.su/1788592/s/21816020'}
  ]},
  {key:'lips', n:6, title:'Губы', hint:'Объём и форма', items:[
    {name:'Контурная пластика', drug:'Южная Корея', price:15000, desc:'Мягкий пластичный филлер, объём и коррекция формы. За 1 мл.', url:'https://dkd.su/1788592/s/18950942'},
    {name:'Контурная пластика', drug:'Франция', price:18000, desc:'Филлер премиум-класса, мягкая текстура, длительный результат. За 1 мл.', url:'https://dkd.su/1788592/s/21816000'}
  ]},
  {key:'chin', n:7, title:'Подбородок', hint:'Профиль и форма', items:[
    {name:'Филлер', drug:'Tesoro SAB', price:15000, desc:'Коррекция формы подбородка, улучшает профиль.', url:'https://dkd.su/1788592/s/19807822'},
    {name:'Филлер', drug:'Stylage L', price:18000, desc:'Выраженная коррекция подбородка, плотная фиксация формы.', url:'https://dkd.su/1788592/s/19807822'},
    {name:'Ботулинотерапия', drug:'гипертонус', price:3500, desc:'Убирает эффект «апельсиновой корки» на подбородке.', url:'https://dkd.su/1788592/s/21815941'}
  ]},
  {key:'jawline', n:8, title:'Челюсть', hint:'Овал и углы', items:[
    {name:'Филлер', drug:'углы НЧ 3 мл', price:30000, desc:'Коррекция углов нижней челюсти. Чёткий овал лица, эффект jawline.', url:'https://dkd.su/1788592/s/21814912'}
  ]},
  {key:'neck', n:9, title:'Шея', hint:'Платизма', items:[
    {name:'Ботулинотерапия', drug:'Платизма', price:9000, desc:'Расслабляет мышцу шеи, тянущую лицо вниз. Лифтинг нижней трети и шеи.', url:'https://dkd.su/1788592/s/21815952'}
  ]},
  {key:'decollete', n:10, title:'Декольте', hint:'Зона груди', items:[
    {name:'Биоревитализация', drug:'Реви Стронг / Силк', price:15000, desc:'Увлажнение и качество кожи декольте. 1 мл.', url:'https://dkd.su/1788592/s/21815987'},
    {name:'Пилинг', drug:'Bio Re Pill', price:4000, desc:'Поверхностный пилинг зоны декольте, минимальная реабилитация.', url:'https://dkd.su/1788592/s/19014816'}
  ]}
];
const SHAPES = [
  {key:'forehead', badges:[{x:37.6,y:25.2,r:2.9}], paths:['M34.5 26.5a15.5 7.2 0 1 0 31 0a15.5 7.2 0 1 0 -31 0']},
  {key:'glabella', badges:[{x:50.6,y:45.8,r:1.7}], paths:['M44.8 35.2a5.2 3 0 1 0 10.4 0a5.2 3 0 1 0 -10.4 0']},
  {key:'eyes', badges:[{x:67.7,y:42.7,r:2.2}], paths:['M31.3 39.8a8.2 3.4 0 1 0 16.4 0a8.2 3.4 0 1 0 -16.4 0','M52.3 39.8a8.2 3.4 0 1 0 16.4 0a8.2 3.4 0 1 0 -16.4 0']},
  {key:'cheeks', badges:[{x:38.5,y:55.4,r:2.9}], paths:['M30.2 50.5a7.8 8.8 0 1 0 15.6 0a7.8 8.8 0 1 0 -15.6 0','M54.2 50.5a7.8 8.8 0 1 0 15.6 0a7.8 8.8 0 1 0 -15.6 0']},
  {key:'nasolabial', badges:[{x:56.8,y:58.8,r:1.8}], paths:['M41.2 53.8a3.6 5.2 0 1 0 7.2 0a3.6 5.2 0 1 0 -7.2 0','M51.6 53.8a3.6 5.2 0 1 0 7.2 0a3.6 5.2 0 1 0 -7.2 0']},
  {key:'lips', badges:[{x:59.0,y:64.8,r:2.9}], paths:['M41.6 57.2a8.4 3.4 0 1 0 16.8 0a8.4 3.4 0 1 0 -16.8 0']},
  {key:'chin', badges:[{x:56.5,y:75.5,r:2.9}], paths:['M41.8 66.4a8.2 5 0 1 0 16.4 0a8.2 5 0 1 0 -16.4 0']},
  {key:'jawline', badges:[{x:36.5,y:68.5,r:2.9}], paths:['M31.2 61.5a4.6 8 0 1 0 9.2 0a4.6 8 0 1 0 -9.2 0','M59.6 61.5a4.6 8 0 1 0 9.2 0a4.6 8 0 1 0 -9.2 0']},
  {key:'neck', badges:[{x:61.2,y:91.3,r:2.9}], paths:['M40.4 82a4.4 11.5 0 1 0 8.8 0a4.4 11.5 0 1 0 -8.8 0','M50.8 82a4.4 11.5 0 1 0 8.8 0a4.4 11.5 0 1 0 -8.8 0']},
  {key:'decollete', badges:[{x:63.7,y:106.2,r:2.9}], paths:['M18 110a32 8.5 0 1 0 64 0a32 8.5 0 1 0 -64 0']}
];

let faceActive = null;
function fmtP(p){ return p.toLocaleString('ru-RU')+' ₽'; }

function renderFace(){
  const svg = document.getElementById('faceSvg');
  let markup = '';
  SHAPES.forEach(shape=>{
    const meta = FACE_ZONES.find(z=>z.key===shape.key);
    const on = faceActive===shape.key ? ' is-on' : '';
    markup += `<g class="zone-g${on}" data-zone="${shape.key}" style="cursor:pointer">`;
    shape.paths.forEach(d=>{
      markup += `<path class="zone-hit" d="${d}"></path>`;
    });
    (shape.badges||[]).forEach(badge=>{
      const r = badge.r || 2.9;
      markup += `<g class="badge-g">
      <circle class="badge-circle" cx="${badge.x}" cy="${badge.y}" r="${r}"></circle>
      <text class="badge-num" x="${badge.x}" y="${badge.y+r*0.35}" text-anchor="middle" font-size="${(r*1.05).toFixed(2)}" font-weight="600" font-family="Manrope,sans-serif">${meta.n}</text>
    </g>`;
    });
    markup += `</g>`;
  });
  svg.innerHTML = markup;
  svg.querySelectorAll('[data-zone]').forEach(el=>{
    el.addEventListener('click', ()=>selectZone(el.getAttribute('data-zone')));
  });
  document.querySelectorAll('.zchip').forEach(b=>{
    b.classList.toggle('on', b.dataset.zone===faceActive);
  });
  const hint = document.getElementById('fhint');
  if (hint) {
    const zd = FACE_ZONES.find(z=>z.key===faceActive);
    hint.textContent = zd ? (zd.n + ' · ' + zd.title + ' — ' + zd.hint) : 'Нажмите зону на схеме или номер.';
  }
}

function selectZone(key){
  const e=document.getElementById('fempty'); if(e) e.style.display='none';
  faceActive = key;
  document.getElementById('fdetail').innerHTML = '';
  const zd = FACE_ZONES.find(z=>z.key===key);
  const box = document.getElementById('fpanel');
  box.style.display = 'block';
  box.innerHTML = `<h3 class="fpanel-title">${zd.title}</h3><p style="font-size:13px;color:var(--muted);margin:0 0 12px;">${zd.hint}</p>`;
  zd.items.forEach(it=>{
    const d=document.createElement('div'); d.className='fopt';
    d.innerHTML=`<div><div class="fopt-name">${it.name}</div><div class="fopt-sub">${it.drug}</div></div><button class="fopt-btn">Подробнее</button>`;
    d.querySelector('.fopt-btn').onclick=()=>fShowDetail(zd.title,it);
    box.appendChild(d);
  });
  renderFace();
  box.scrollIntoView({behavior:'smooth',block:'nearest'});
}

function fShowDetail(zoneTitle,it){
  const det=document.getElementById('fdetail');
  det.innerHTML=`
    <button class="fback" type="button" id="fBackBtn">← Назад к вариантам</button>
    <div class="fdetail-card">
      <div class="fdetail-zone">${zoneTitle}</div>
      <h3 class="fdetail-name">${it.name}</h3>
      <div class="fdetail-drug">${it.drug}</div>
      <div class="fdetail-price">${fmtP(it.price)}</div>
      <p class="fdetail-desc">${it.desc}</p>
      <a class="fdetail-book" href="${it.url}" target="_blank">Записаться</a>
    </div>`;
  document.getElementById('fBackBtn').onclick=()=>{ det.innerHTML=''; };
  det.scrollIntoView({behavior:'smooth',block:'start'});
}

function initFaceMap(){
  const chips=document.getElementById('zoneChips');
  chips.innerHTML='';
  FACE_ZONES.forEach(z=>{
    const b=document.createElement('button');
    b.type='button';
    b.className='zchip';
    b.dataset.zone=z.key;
    b.setAttribute('aria-label', z.title);
    b.innerHTML=`<b>${z.n}</b>`;
    b.onclick=()=>selectZone(z.key);
    chips.appendChild(b);
  });
  renderFace();
  if (!document.getElementById('fempty')) {
    const empty=document.createElement('div');
    empty.className='fempty';
    empty.id='fempty';
    empty.innerHTML='<h3>Выберите зону</h3><p>Нажмите пунктир на фото или номер — откроются процедуры для этой области.</p>';
    document.getElementById('fpanel').insertAdjacentElement('beforebegin', empty);
  }
}

initFaceMap();
"""


def wrap_long_lines(html: str, limit: int = 480) -> str:
    """Only wrap data-URI lines. Never split JS/CSS."""
    out = []
    for line in html.splitlines(keepends=True):
        raw = line.rstrip("\n")
        nl = "\n" if line.endswith("\n") else ""
        if "data:image" in raw and len(raw) > limit:
            chunks = [raw[i : i + 76] for i in range(0, len(raw), 76)]
            out.append("\n".join(chunks) + nl)
        else:
            out.append(raw + nl)
    return "".join(out)


def main() -> None:
    html = SRC.read_text(encoding="utf-8")
    html = html.replace("--gold: #A98B54;", "--gold: #4A5A6E;")

    css_end = html.rfind("</style>")
    html = html[:css_end] + EXTRA_CSS + html[css_end:]

    # hero avatar
    html = html.replace(
        """    <p class="eyebrow">Altyeva · эстетическая косметология</p>
    <h1>Каталог услуг</h1>
    <p>Эстетическая косметология · Санкт-Петербург, Лисичанская 6</p>
  </div>""",
        f"""    <div class="hero-row">
      <div class="hero-copy">
        <p class="eyebrow">Altyeva · эстетическая косметология</p>
        <h1>Каталог услуг</h1>
        <p>Санкт-Петербург, Лисичанская 6</p>
      </div>
      <img class="hero-avatar" src="{AVATAR_URI}" alt="Екатерина Алтыева" width="80" height="80">
    </div>
  </div>""",
    )

    face_start = html.find('  <div class="fmap-toolbar">')
    if face_start < 0:
        face_start = html.find('<div class="fmap-toolbar">')
    booking = html.find('<div class="page" id="page-booking">')
    if face_start < 0 or booking < 0:
        raise SystemExit(f"markers missing face={face_start} booking={booking}")
    html = html[:face_start] + NEW_FACE + html[booking:]

    js_start = html.find("// ===== Карта лица =====")
    script_end = html.find("</script>\n</body>")
    if js_start < 0:
        script_end = html.rfind("</script>")
        # fall back: append before last script close
        if script_end < 0:
            raise SystemExit("no script end")
        html = html[:script_end] + NEW_JS + html[script_end:]
    else:
        if script_end < 0:
            script_end = html.rfind("</script>")
        html = html[:js_start] + NEW_JS + html[script_end:]

    # consultation first
    html = html.replace(
        "const bCons=document.createElement('button'); bCons.className='chip'; bCons.textContent='Консультация';\n  const bProc=document.createElement('button'); bProc.className='chip active'; bProc.textContent='Процедуры';",
        "const bCons=document.createElement('button'); bCons.className='chip active'; bCons.textContent='Консультация';\n  const bProc=document.createElement('button'); bProc.className='chip'; bProc.textContent='Процедуры';",
    )
    html = html.replace(
        "  // старт: Процедуры + dropdown виден\n  dd.classList.add('show');\n}",
        "  // старт: консультация\n  render('consultation');\n}",
    )

    # drop leftover 3/4 data uri if present
    html = re.sub(
        r"const FACE_IMG = \{[\s\S]*?\};",
        "const FACE_IMG = {};",
        html,
        count=1,
    )

    html = html.replace(
        "initChips(); render('botox'); initTabs(); initServiceSelect(); initRequestForm();  loadLoyalty();",
        "initChips(); initTabs(); try{initServiceSelect()}catch(e){}; try{initRequestForm()}catch(e){}; try{loadLoyalty()}catch(e){};",
    )

    html = wrap_long_lines(html)
    longest = max(len(l) for l in html.splitlines())
    for dest in OUTS:
        dest.write_text(html, encoding="utf-8")
        print(f"wrote {dest} {dest.stat().st_size} bytes, maxline {longest}")


if __name__ == "__main__":
    main()
