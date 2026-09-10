import { i as __toESM } from "../_runtime.mjs";
import { c as SERVICES, d as formatPrice, i as FILLER_GROUPS, l as TELEGRAM_BOT, t as CATEGORIES, u as cn } from "./services-BaN4uYOX.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DR80IAlN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AltyevaMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 60 60",
		className,
		"aria-hidden": "true",
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			transform: "translate(30,30)",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 -25 C1.7 -10, 8 -3.3, 23 -1.7 C8 0, 1.7 6.5, 0 21 C-1.7 6.5, -8 0, -23 -1.7 C-8 -3.3, -1.7 -10, 0 -25 Z",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.8",
				strokeLinejoin: "round"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 -11 C0.8 -5.5, 4 -2.5, 10 -1.7 C4 -0.8, 0.8 2.5, 0 8 C-0.8 2.5, -4 -0.8, -10 -1.7 C-4 -2.5, -0.8 -5.5, 0 -11 Z",
				fill: "currentColor",
				opacity: "0.45"
			})]
		})
	});
}
function groupServices(cat) {
	const items = SERVICES.filter((s) => s.cat === cat);
	const groups = [];
	const seen = {};
	for (const s of items) {
		const key = (cat === "filler" ? `${s.subcat}|` : "") + s.name;
		if (seen[key] !== void 0) groups[seen[key]].variants.push(s);
		else {
			seen[key] = groups.length;
			groups.push({
				base: s,
				variants: [s]
			});
		}
	}
	return groups;
}
function ServicesPage() {
	const [mode, setMode] = (0, import_react.useState)("proc");
	const [cat, setCat] = (0, import_react.useState)("botox");
	const [detail, setDetail] = (0, import_react.useState)(null);
	const activeCat = mode === "cons" ? "consultation" : cat;
	const groups = (0, import_react.useMemo)(() => groupServices(activeCat), [activeCat]);
	const procCats = CATEGORIES.filter((c) => c.key !== "consultation");
	if (detail) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceDetail, {
		service: detail.service,
		groupName: detail.groupName,
		onBack: () => setDetail(null)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "relative overflow-hidden border-b border-line bg-linear-to-b from-bg-2 to-bg px-5 pb-7 pt-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AltyevaMark, { className: "mb-3 size-11 text-steel-dk" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-2xs font-semibold uppercase tracking-[0.18em] text-muted",
					children: "Altyeva · эстетическая косметология"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl font-semibold leading-tight text-steel-dk",
					children: "Каталог услуг"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 max-w-[32ch] text-sm leading-snug text-muted",
					children: "Эстетическая косметология · Санкт-Петербург, Лисичанская 6"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-2 px-5 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
				active: mode === "cons",
				onClick: () => setMode("cons"),
				children: "Консультация"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
				active: mode === "proc",
				onClick: () => setMode("proc"),
				children: "Процедуры"
			})]
		}),
		mode === "proc" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-5 pb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "sr-only",
				htmlFor: "cat-select",
				children: "Категория"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				id: "cat-select",
				value: cat,
				onChange: (e) => setCat(e.target.value),
				className: "h-11 w-full appearance-none rounded-md border border-line bg-surface px-3.5 pr-10 text-sm font-semibold text-ink",
				children: procCats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: c.key,
					children: c.label
				}, c.key))
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-3 px-5 pb-8",
			children: groups.map((g) => {
				const s = g.base;
				const showGroup = activeCat === "filler" ? FILLER_GROUPS[s.subcat] : void 0;
				const prev = groups[groups.indexOf(g) - 1];
				const heading = showGroup && prev?.base.subcat !== s.subcat ? showGroup : null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [heading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 mt-3 font-display text-base font-semibold text-muted first:mt-1",
					children: heading
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: cn("relative rounded-lg bg-surface p-4 shadow-[var(--shadow-card)]", s.special && "border border-steel pt-6"),
					children: [
						s.special ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -top-2.5 left-4 rounded-full bg-steel px-2.5 py-0.5 text-2xs font-bold uppercase tracking-wider text-surface",
							children: "Рекомендуем начать с этого"
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold leading-snug text-ink",
							children: s.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted",
							children: g.variants.length > 1 ? s.duration : s.drug ? `${s.drug} · ${s.duration}` : s.duration
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2.5 text-sm leading-relaxed text-ink/70",
							children: s.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-col gap-2",
							children: s.special ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: TELEGRAM_BOT,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex h-10 items-center justify-center rounded-sm border border-line bg-surface-soft px-4 text-sm font-semibold text-steel-dk",
								children: "Написать Екатерине"
							}) : g.variants.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setDetail({
									service: v,
									groupName: s.name
								}),
								className: "inline-flex h-10 items-center justify-center rounded-sm border border-line bg-surface-soft px-4 text-sm font-semibold text-steel-dk",
								children: g.variants.length > 1 ? `Подробнее · ${v.drug}` : "Подробнее"
							}, v.drug || v.url))
						})
					]
				})] }, `${s.cat}-${s.name}-${s.drug}`);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "px-5 pb-2 text-center text-xs text-muted",
			children: [
				"Не уверены, с чего начать?",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/map",
					className: "font-semibold text-steel-dk underline-offset-2 hover:underline",
					children: "Откройте карту лица"
				})
			]
		})
	] });
}
function Chip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("rounded-full border px-4 py-2 text-sm font-semibold", active ? "border-steel bg-steel text-surface" : "border-line bg-transparent text-muted"),
		children
	});
}
function ServiceDetail({ service, groupName, onBack }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-5 pt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onBack,
			className: "mb-4 inline-flex items-center gap-1 text-sm font-semibold text-steel",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Назад к услугам"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-lg bg-surface p-5 shadow-[var(--shadow-card)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold text-steel-dk",
					children: groupName
				}),
				service.drug ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm font-semibold text-steel",
					children: service.drug
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-display text-3xl font-semibold tabular-nums",
					children: formatPrice(service.price)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-2xs font-bold uppercase tracking-wider text-steel",
					children: service.duration
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted",
					children: service.desc
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: service.url,
					target: "_blank",
					rel: "noreferrer",
					className: "mt-6 flex h-12 items-center justify-center rounded-md bg-steel-dk text-sm font-bold text-surface",
					children: "Записаться"
				})
			]
		})]
	});
}
//#endregion
export { ServicesPage as component };
