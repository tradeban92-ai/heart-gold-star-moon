import { i as __toESM } from "../_runtime.mjs";
import { a as LOYALTY_API, f as pluralVisit, u as cn } from "./services-BaN4uYOX.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PageHero, r as getTelegramUser } from "./router-ceCc6x5n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/loyalty-Cbvq0JT2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TIERS = [
	{
		name: "Новый клиент",
		req: 0,
		perk: "без скидки"
	},
	{
		name: "Серебро",
		req: 3,
		perk: "скидка 3%"
	},
	{
		name: "Золото",
		req: 6,
		perk: "скидка 5%"
	},
	{
		name: "Платина",
		req: 10,
		perk: "скидка 7%"
	}
];
function LoyaltyPage() {
	const [data, setData] = (0, import_react.useState)(null);
	const [note, setNote] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		async function load() {
			const tg = getTelegramUser();
			if (!tg?.id) {
				setLoading(false);
				setNote("Откройте приложение через бота, чтобы увидеть свою карту.");
				return;
			}
			try {
				const d = await (await fetch(`${LOYALTY_API}?user_id=${tg.id}`)).json();
				if (!cancelled) setData(d);
			} catch {
				if (!cancelled) setNote("Не удалось загрузить карту. Попробуйте позже.");
			} finally {
				if (!cancelled) setLoading(false);
			}
		}
		load();
		return () => {
			cancelled = true;
		};
	}, []);
	const level = data?.level || (loading ? "Загрузка…" : note ? "Недоступно" : "Новый клиент");
	const visits = data?.totalVisits ?? 0;
	const tier = TIERS.find((t) => t.name === level);
	const history = data?.recentServices ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Программа лояльности",
		title: "Карта клиента"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-lg border border-line bg-linear-to-br from-bg-2 to-bg p-5 shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-2xs font-semibold uppercase tracking-[0.14em] text-muted",
								children: "Карта постоянного клиента"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-2xl font-bold text-steel-dk",
								children: level
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: data?.user_name || ""
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-steel/15 px-3 py-1 text-2xs font-bold text-steel-dk",
							children: loading ? "—" : `${visits} ${pluralVisit(visits)}`
						})]
					}),
					tier && tier.perk !== "без скидки" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm font-bold text-steel-dk",
						children: ["Ваша скидка: ", tier.perk.replace("скидка ", "")]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-muted",
						children: data?.nextLevelAt ? `До следующего уровня: ещё ${data.nextLevelAt - visits} ${pluralVisit(data.nextLevelAt - visits)}` : loading ? "До следующего уровня" : "Максимальный уровень достигнут"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-1.5 overflow-hidden rounded-full bg-line/60",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-steel-dk transition-[width] duration-500",
							style: { width: `${data?.progressPercent ?? 0}%` }
						})
					}),
					data?.lastVisitDate ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3.5 text-xs text-muted",
						children: ["Последний визит: ", data.lastVisitDate]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 overflow-hidden rounded-lg border border-line",
				children: TIERS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flex items-center justify-between border-b border-line px-4 py-3 last:border-b-0", t.name === level && "bg-surface-soft"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm font-bold text-steel-dk",
						children: [t.name, t.req > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-1.5 text-xs font-medium text-muted",
							children: [
								"от ",
								t.req,
								" визитов"
							]
						}) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-bold text-steel",
						children: t.perk
					})]
				}, t.name))
			}),
			history.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-semibold text-steel-dk",
						children: "История визитов"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 mt-1 text-xs leading-snug text-muted",
						children: "В уровень входят только состоявшиеся визиты — по дате посещения, не позже сегодня."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-2",
						children: history.map((v, i) => {
							const svc = typeof v === "string" ? v : v.service || "";
							const date = typeof v === "object" ? v.date || "" : "";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-md border border-line bg-surface px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-steel-dk",
									children: svc
								}), date ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-xs text-muted",
									children: date
								}) : null]
							}, `${svc}-${date}-${i}`);
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: note || "Ждём вашего первого визита — тогда здесь появится история."
			})
		]
	})] });
}
//#endregion
export { LoyaltyPage as component };
