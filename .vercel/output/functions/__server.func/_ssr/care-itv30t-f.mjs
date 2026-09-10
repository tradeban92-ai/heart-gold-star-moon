import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Clock, d as ArrowRight, f as ArrowLeft, l as Check, t as X } from "../_libs/lucide-react.mjs";
import { n as PageHero } from "./router-ceCc6x5n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/care-itv30t-f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CARE = [
	{
		key: "botox",
		title: "Ботулинотерапия",
		sub: "ботокс: лоб, межбровье, глаза и др.",
		lead: "После инъекций ботулотоксина важно не дать препарату сместиться в первые часы.",
		do: [
			"Держитесь вертикально первые 4 часа — не наклоняйтесь и не ложитесь",
			"Слегка поработайте обработанными мышцами в первый час",
			"Спите на спине первую ночь"
		],
		dont: [
			"Не трогайте и не массируйте зону 2 недели",
			"Без спорта, бани, сауны и алкоголя 24 часа",
			"Без наклонов головы вниз и тепла в первый день",
			"Без макияжа на зону 12 часов"
		],
		when: "Эффект нарастает 3–5 дней, полный — через 10–14. Держится 4–6 месяцев."
	},
	{
		key: "filler",
		title: "Филлеры / контурная пластика",
		sub: "губы, скулы, подбородок, челюсть",
		lead: "Гиалуроновый филлер занимает форму за 2–3 дня. Помогите ему.",
		do: [
			"Прикладывайте холод при отёке первые часы",
			"Пейте больше воды",
			"Спите на спине первые 2 ночи"
		],
		dont: [
			"Не разминайте зону руками 6 часов",
			"Без спорта, бани, сауны, солярия, алкоголя 2 недели",
			"Без массажа лица и перелётов 2 недели",
			"Не спите лицом в подушку"
		],
		when: "Отёк и синячки проходят за 3–7 дней. Окончательный вид — через 2–3 дня. Держится 6–12 месяцев."
	},
	{
		key: "blanching",
		title: "Бланширование",
		sub: "разглаживание мелких морщин",
		lead: "Поверхностные микроинъекции — кожа чувствительна.",
		do: ["Увлажняйте мягким кремом", "SPF 50+ при выходе на улицу"],
		dont: [
			"Без макияжа 12 часов",
			"Без бани, сауны, солярия, алкоголя 3–5 дней",
			"Не трите зону"
		],
		when: "Папулы рассасываются за 1–3 дня. Эффект накопительный, лучше курсом."
	},
	{
		key: "biorevitalization",
		title: "Биоревитализация",
		sub: "глубокое увлажнение",
		lead: "Возможны папулы после введения — это нормально.",
		do: ["Пейте больше воды", "Увлажняйте кожу, SPF 50+"],
		dont: [
			"Не трогайте папулы — уйдут за 1–2 дня",
			"Без бани, сауны, солярия, бассейна, алкоголя 3 дня",
			"Без активного спорта 2 дня"
		],
		when: "Папулы уходят за 1–2 дня. Результат после курса 3–4 процедур."
	},
	{
		key: "collagen",
		title: "Коллагенотерапия",
		sub: "Коллост — стимуляция коллагена",
		lead: "Эффект накопительный — кожа плотнеет постепенно.",
		do: ["Увлажняйте кожу", "SPF 50+ первые 2 недели"],
		dont: [
			"Не массируйте зону",
			"Без бани, сауны, солярия, алкоголя 3–5 дней",
			"Без интенсивного спорта 2 дня"
		],
		when: "Папулы проходят за несколько дней. Кожа плотнеет за 1–2 месяца."
	},
	{
		key: "lipolytics",
		title: "Липолитики",
		sub: "коррекция локального жира",
		lead: "Возможны отёк и уплотнение в зоне — это норма.",
		do: ["Пейте больше воды", "Лёгкие прогулки/дренаж приветствуются"],
		dont: [
			"Без бани, сауны, солярия, алкоголя 3–5 дней",
			"Не грейте зону первые дни",
			"Отёк проходит за 3–7 дней"
		],
		when: "Результат после курса 3–5 процедур с интервалом 2–3 недели."
	},
	{
		key: "mesohair",
		title: "Мезотерапия волос",
		sub: "против выпадения, укрепление",
		lead: "Не смывайте препарат слишком рано.",
		do: ["Не мойте голову 24 часа", "Мягкий шампунь при первом мытье"],
		dont: [
			"Без бани, сауны, бассейна, спорта 2 дня",
			"Не массируйте кожу головы жёстко первый день",
			"Без окрашивания 3–5 дней"
		],
		when: "Курс 6–10 процедур. Результат за 1–2 месяца."
	},
	{
		key: "cleaning",
		title: "Чистка лица",
		sub: "глубокая / ультразвуковая",
		lead: "Поры открыты — берегите кожу от загрязнений.",
		do: [
			"Умывайтесь мягким средством",
			"SPF при выходе",
			"Успокаивающий крем при покраснении"
		],
		dont: [
			"Без макияжа до конца дня",
			"Не трогайте лицо руками",
			"Без бани, сауны, бассейна 2–3 дня",
			"Ничего не выдавливайте сами"
		],
		when: "Покраснение проходит за часы — 1 день. Повтор раз в 1–2 месяца."
	},
	{
		key: "peeling",
		title: "Пилинг",
		sub: "Джесснера, Bio Re Pill, Peach Peel",
		lead: "Кожа обновляется — шелушение это нормально.",
		do: [
			"Увлажняйте интенсивно",
			"SPF 50+ строго 2 недели",
			"Дайте коже шелушиться естественно"
		],
		dont: [
			"Не сдирайте кожу — риск пятен и рубцов",
			"Без бани, сауны, солярия, бассейна 2 недели",
			"Без скрабов, кислот, ретинола до восстановления",
			"Без прямого солнца"
		],
		when: "Шелушение 1–5 дней. Курс 4–6 процедур осенью-зимой."
	}
];
function CarePage() {
	const [memo, setMemo] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "После процедуры",
		title: memo ? memo.title : "Памятка по уходу",
		subtitle: memo ? "Сохраните памятку или сделайте скриншот." : "Выберите процедуру, которую вы сделали — покажу, как ухаживать за собой после."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "px-5 py-6",
		children: memo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareDetail, {
			memo,
			onBack: () => setMemo(null)
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareGrid, { onPick: setMemo })
	})] });
}
function CareGrid({ onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col gap-2.5",
		children: CARE.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onPick(p),
			className: "flex min-h-14 w-full items-center justify-between gap-3 rounded-lg border border-line bg-surface px-4 py-3.5 text-left shadow-[var(--shadow-card)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block font-display text-lg font-semibold text-steel-dk",
				children: p.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted",
				children: p.sub
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 shrink-0 text-steel" })]
		}, p.key))
	});
}
function CareDetail({ memo, onBack }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onBack,
			className: "mb-4 inline-flex items-center gap-1 text-sm font-semibold text-steel",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Другая процедура"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-5 text-sm leading-relaxed text-muted",
			children: memo.lead
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Что делать",
			tone: "do",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }),
			children: memo.do
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Чего избегать",
			tone: "dont",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" }),
			children: memo.dont
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Сроки",
			tone: "when",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5" }),
			children: [memo.when]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 rounded-md border border-dont/30 bg-dont/10 px-4 py-3.5 text-sm leading-relaxed text-steel-dk",
			children: [
				"Если появились сильная боль, нарастающий отёк, температура или что-то беспокоит —",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-bold text-dont",
					children: "сразу напишите Екатерине"
				}),
				"."
			]
		})
	] });
}
function Section({ title, tone, icon, children }) {
	const color = tone === "do" ? "text-do" : tone === "dont" ? "text-dont" : "text-steel-dk";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `mb-2 text-xs font-bold uppercase tracking-wide ${color}`,
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-2",
			children: children.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-2.5 rounded-md border border-line bg-surface px-3.5 py-3 text-sm leading-snug",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `mt-0.5 shrink-0 ${color}`,
					children: icon
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: x })]
			}, x))
		})]
	});
}
//#endregion
export { CarePage as component };
