import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-BaN4uYOX.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatPrice(price) {
	if (price === 0) return "Бесплатно";
	return `${price.toLocaleString("ru-RU")} ₽`;
}
function pluralVisit(n) {
	const abs = Math.abs(n || 0);
	const a = abs % 10;
	const b = abs % 100;
	if (a === 1 && b !== 11) return "визит";
	if ([
		2,
		3,
		4
	].includes(a) && ![
		12,
		13,
		14
	].includes(b)) return "визита";
	return "визитов";
}
var CATEGORIES = [
	{
		key: "botox",
		label: "Ботокс"
	},
	{
		key: "filler",
		label: "Филлеры"
	},
	{
		key: "blanching",
		label: "Бланширование"
	},
	{
		key: "biorevitalization",
		label: "Биоревитализация"
	},
	{
		key: "collagen",
		label: "Коллаген"
	},
	{
		key: "lipolytics",
		label: "Липолитики"
	},
	{
		key: "cleaning",
		label: "Чистка"
	},
	{
		key: "peeling",
		label: "Пилинг"
	},
	{
		key: "consultation",
		label: "Консультация"
	}
];
var FILLER_GROUPS = {
	lips: "Контурная пластика губ",
	cheeks: "Скулы",
	chin: "Подбородок",
	jawline: "Углы челюсти",
	dissolving: "Выведение геля",
	nasolabial: "Носогубные складки"
};
var SERVICES = [
	{
		name: "Лоб + межбровье + глаза",
		cat: "botox",
		subcat: "botox",
		drug: "Rentox",
		duration: "20 мин",
		price: 8500,
		desc: "Одна процедура на три зоны: горизонтальные морщины лба, складка между бровей и гусиные лапки. Результат 4–6 месяцев.",
		url: "https://dkd.su/1788592/s/21815923"
	},
	{
		name: "Лоб + межбровье + глаза",
		cat: "botox",
		subcat: "botox",
		drug: "Релатокс",
		duration: "20 мин",
		price: 14e3,
		desc: "Комплекс на трёх зонах препаратом Релатокс: лоб, межбровье и морщинки вокруг глаз. Результат 4–6 месяцев.",
		url: "https://dkd.su/1788592/s/21815923"
	},
	{
		name: "Лоб + межбровье",
		cat: "botox",
		subcat: "botox",
		drug: "Rentox",
		duration: "20 мин",
		price: 7500,
		desc: "Только верхняя треть: горизонтальные морщины на лбу и вертикальная складка между бровей. Глаза не затрагиваются.",
		url: "https://dkd.su/1788592/s/18950887"
	},
	{
		name: "Лоб + межбровье",
		cat: "botox",
		subcat: "botox",
		drug: "Релатокс",
		duration: "20 мин",
		price: 12e3,
		desc: "Верхняя треть на препарате Релатокс: лоб и межбровная складка.",
		url: "https://dkd.su/1788592/s/18950887"
	},
	{
		name: "Межбровье",
		cat: "botox",
		subcat: "botox",
		drug: "Rentox",
		duration: "15 мин",
		price: 4500,
		desc: "Вертикальные складки между бровей — «морщины гнева». Быстрая процедура.",
		url: "https://dkd.su/1788592/s/21815928"
	},
	{
		name: "Межбровье",
		cat: "botox",
		subcat: "botox",
		drug: "Релатокс",
		duration: "15 мин",
		price: 6e3,
		desc: "Складка между бровей на препарате Релатокс.",
		url: "https://dkd.su/1788592/s/21815928"
	},
	{
		name: "Вокруг глаз",
		cat: "botox",
		subcat: "botox",
		drug: "Rentox",
		duration: "15 мин",
		price: 3500,
		desc: "«Гусиные лапки» — морщинки в уголках глаз при улыбке.",
		url: "https://dkd.su/1788592/s/21815936"
	},
	{
		name: "Вокруг глаз",
		cat: "botox",
		subcat: "botox",
		drug: "Релатокс",
		duration: "15 мин",
		price: 5e3,
		desc: "Гусиные лапки на препарате Релатокс.",
		url: "https://dkd.su/1788592/s/21815936"
	},
	{
		name: "Подбородок",
		cat: "botox",
		subcat: "botox",
		drug: "",
		duration: "15 мин",
		price: 3500,
		desc: "Убирает эффект «апельсиновой корки» на подбородке, расслабляет мышцу.",
		url: "https://dkd.su/1788592/s/21815941"
	},
	{
		name: "Десневая улыбка",
		cat: "botox",
		subcat: "botox",
		drug: "",
		duration: "15 мин",
		price: 4e3,
		desc: "При улыбке десна меньше обнажается. Естественный результат.",
		url: "https://dkd.su/1788592/s/21815946"
	},
	{
		name: "Гипергидроз (подмышки)",
		cat: "botox",
		subcat: "botox",
		drug: "",
		duration: "45 мин",
		price: 18e3,
		desc: "Блокирует потовые железы на 6–8 месяцев. Устраняет потливость и запах.",
		url: "https://dkd.su/1788592/s/19164797"
	},
	{
		name: "Платизма (шея)",
		cat: "botox",
		subcat: "botox",
		drug: "",
		duration: "30 мин",
		price: 9e3,
		desc: "Расслабляет мышцу шеи, тянущую лицо вниз. Лифтинг нижней трети и шеи.",
		url: "https://dkd.su/1788592/s/21815952"
	},
	{
		name: "Жевательные мышцы",
		cat: "botox",
		subcat: "botox",
		drug: "",
		duration: "30 мин",
		price: 9e3,
		desc: "Сужает лицо, делает овал V-образным. Помогает при бруксизме.",
		url: "https://dkd.su/1788592/s/21815960"
	},
	{
		name: "Белотеро Софт",
		cat: "blanching",
		subcat: "blanching",
		drug: "Merz, Германия",
		duration: "60 мин",
		price: 15e3,
		desc: "Немецкий препарат премиум-класса. Для тонкой кожи вокруг глаз и деликатных зон.",
		url: "https://dkd.su/1788592/s/21815966"
	},
	{
		name: "Tesoro Fine",
		cat: "blanching",
		subcat: "blanching",
		drug: "",
		duration: "60 мин",
		price: 11e3,
		desc: "Мягкое разглаживание мелких морщин, увлажнение и улучшение качества кожи.",
		url: "https://dkd.su/1788592/s/19452571"
	},
	{
		name: "Коллост Микро",
		cat: "collagen",
		subcat: "collagen",
		drug: "",
		duration: "60 мин",
		price: 2e4,
		desc: "Инновационная микроформа — мелкие частицы. Для тонкой и деликатной кожи.",
		url: "https://dkd.su/1788592/s/21815971"
	},
	{
		name: "Коллост 7%",
		cat: "collagen",
		subcat: "collagen",
		drug: "",
		duration: "60 мин",
		price: 16e3,
		desc: "Классическая концентрация для умеренной стимуляции коллагена. Кожа средней толщины.",
		url: "https://dkd.su/1788592/s/19014874"
	},
	{
		name: "Коллост 15%",
		cat: "collagen",
		subcat: "collagen",
		drug: "",
		duration: "60 мин",
		price: 17e3,
		desc: "Высокая концентрация для выраженной стимуляции. Для плотной кожи.",
		url: "https://dkd.su/1788592/s/21815974"
	},
	{
		name: "Лицо",
		cat: "lipolytics",
		subcat: "lipolytics",
		drug: "",
		duration: "30 мин",
		price: 1e4,
		desc: "Убирает второй подбородок, брыли, избытки жира в щеках. Курс 3–5 процедур.",
		url: "https://dkd.su/1788592/s/19014821"
	},
	{
		name: "Мезотерапия волос",
		cat: "lipolytics",
		subcat: "lipolytics",
		drug: "",
		duration: "30 мин",
		price: 5e3,
		desc: "Питает волосяные фолликулы, укрепляет волосы, уменьшает выпадение. Курс процедур.",
		url: "https://dikidi.net/ru/profile/ekaterina_1788592/service/22342423"
	},
	{
		name: "Пентакле",
		cat: "biorevitalization",
		subcat: "biorevitalization",
		drug: "базовый",
		duration: "60 мин",
		price: 1e4,
		desc: "Базовое глубокое увлажнение. Для первого знакомства и молодой кожи.",
		url: "https://dkd.su/1788592/s/19804528"
	},
	{
		name: "Реви Стронг / Силк",
		cat: "biorevitalization",
		subcat: "biorevitalization",
		drug: "премиум",
		duration: "60 мин",
		price: 15e3,
		desc: "Премиум-линейка: Силк — увлажнение, Стронг — лифтинг, Ай — зона вокруг глаз. 1 мл.",
		url: "https://dkd.su/1788592/s/21815987"
	},
	{
		name: "Мезовартон",
		cat: "biorevitalization",
		subcat: "biorevitalization",
		drug: "40+",
		duration: "60 мин",
		price: 15e3,
		desc: "Биорепарация и омоложение. Для более возрастной кожи 40+.",
		url: "https://dkd.su/1788592/s/21815993"
	},
	{
		name: "Губы — Южная Корея",
		cat: "filler",
		subcat: "lips",
		drug: "",
		duration: "60 мин",
		price: 15e3,
		desc: "Мягкий пластичный филлер с отличным результатом. Объём и коррекция формы. 1 мл.",
		url: "https://dkd.su/1788592/s/18950942"
	},
	{
		name: "Губы — Франция",
		cat: "filler",
		subcat: "lips",
		drug: "премиум",
		duration: "60 мин",
		price: 18e3,
		desc: "Филлер премиум-класса, мягкая текстура, длительный результат. 1 мл.",
		url: "https://dkd.su/1788592/s/21816000"
	},
	{
		name: "Скулы — Tesoro SAB",
		cat: "filler",
		subcat: "cheeks",
		drug: "",
		duration: "60 мин",
		price: 15e3,
		desc: "Восполнение объёма скуловой области, лифтинг средней трети лица.",
		url: "https://dkd.su/1788592/s/21816006"
	},
	{
		name: "Скулы — Stylage L",
		cat: "filler",
		subcat: "cheeks",
		drug: "",
		duration: "60 мин",
		price: 18e3,
		desc: "Выраженная коррекция скул, чёткий рельеф средней трети.",
		url: "https://dkd.su/1788592/s/21816006"
	},
	{
		name: "Подбородок — Tesoro SAB",
		cat: "filler",
		subcat: "chin",
		drug: "",
		duration: "45 мин",
		price: 15e3,
		desc: "Коррекция формы подбородка, улучшает профиль, устраняет асимметрию.",
		url: "https://dkd.su/1788592/s/19807822"
	},
	{
		name: "Подбородок — Stylage L",
		cat: "filler",
		subcat: "chin",
		drug: "",
		duration: "45 мин",
		price: 18e3,
		desc: "Выраженная коррекция подбородка, плотная фиксация формы.",
		url: "https://dkd.su/1788592/s/19807822"
	},
	{
		name: "Углы челюсти (3 мл)",
		cat: "filler",
		subcat: "jawline",
		drug: "",
		duration: "60 мин",
		price: 3e4,
		desc: "Коррекция углов нижней челюсти. Выраженный эффект jawline и чёткий овал.",
		url: "https://dkd.su/1788592/s/21814912"
	},
	{
		name: "Выведение геля",
		cat: "filler",
		subcat: "dissolving",
		drug: "",
		duration: "45 мин",
		price: 6e3,
		desc: "Растворение гиалуронового филлера при миграции, гиперкоррекции или по желанию.",
		url: "https://dkd.su/1788592/s/21816013"
	},
	{
		name: "Носогубные складки",
		cat: "filler",
		subcat: "nasolabial",
		drug: "",
		duration: "60 мин",
		price: 15e3,
		desc: "Заполнение носогубных складок, смягчает выраженные заломы, освежает лицо.",
		url: "https://dkd.su/1788592/s/21816020"
	},
	{
		name: "Глубокая чистка",
		cat: "cleaning",
		subcat: "cleaning",
		drug: "",
		duration: "90 мин",
		price: 4500,
		desc: "Распаривание + ультразвук + ручная экстракция + маска. Для жирной и проблемной кожи.",
		url: "https://dkd.su/1788592/s/19014940"
	},
	{
		name: "Мягкая чистка (ультразвук)",
		cat: "cleaning",
		subcat: "cleaning",
		drug: "",
		duration: "60 мин",
		price: 2500,
		desc: "Без ручной экстракции. Для чувствительной кожи и поддержания результата.",
		url: "https://dkd.su/1788592/s/21821870"
	},
	{
		name: "Пилинг Джесснера",
		cat: "peeling",
		subcat: "peeling",
		drug: "",
		duration: "30 мин",
		price: 5e3,
		desc: "Поверхностно-срединный. Шелушение 3–5 дней. Для постакне, пигментации, пор.",
		url: "https://dkd.su/1788592/s/19014892"
	},
	{
		name: "Пилинг Bio Re Pill",
		cat: "peeling",
		subcat: "peeling",
		drug: "",
		duration: "30 мин",
		price: 4e3,
		desc: "Поверхностный, минимальная реабилитация (1–2 дня). Поддержание качества кожи.",
		url: "https://dkd.su/1788592/s/19014816"
	},
	{
		name: "Пилинг Peach Peel",
		cat: "peeling",
		subcat: "peeling",
		drug: "",
		duration: "30 мин",
		price: 4200,
		desc: "Поверхностно-срединный. Без выраженного шелушения, глубокая стимуляция.",
		url: "https://dkd.su/1788592/s/21816020"
	},
	{
		name: "Чистка + пилинг",
		cat: "peeling",
		subcat: "peeling",
		drug: "комбо",
		duration: "100 мин",
		price: 6500,
		desc: "Глубокое очищение пор плюс обновление кожи за один визит.",
		url: "https://dkd.su/1788592/s/21816020"
	},
	{
		name: "Консультация косметолога",
		cat: "consultation",
		subcat: "consultation",
		drug: "",
		duration: "20 мин",
		price: 0,
		special: true,
		desc: "Очная встреча с Екатериной: оценка кожи, подбор процедур и план ухода.",
		url: "https://dikidi.net/ru/profile/ekaterina_1788592/service/18950915"
	}
];
var DIKIDI_PROFILE = "https://dikidi.net/ru/profile/katya_1788592";
var DIKIDI_RECORDINGS = "https://dikidi.net/ru/recording/";
var TELEGRAM_BOT = "https://t.me/Altyevabot";
var PRIVACY_URL = "https://bitter-meadow-80cd.tradeban92.workers.dev/privacy.html";
var PREFERRED_TIME_API = "https://unikon777.app.n8n.cloud/webhook/preferred-time";
var LOYALTY_API = "https://unikon777.app.n8n.cloud/webhook/loyalty-status";
//#endregion
export { LOYALTY_API as a, SERVICES as c, formatPrice as d, pluralVisit as f, FILLER_GROUPS as i, TELEGRAM_BOT as l, DIKIDI_PROFILE as n, PREFERRED_TIME_API as o, DIKIDI_RECORDINGS as r, PRIVACY_URL as s, CATEGORIES as t, cn as u };
