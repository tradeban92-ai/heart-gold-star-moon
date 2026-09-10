import { i as __toESM } from "../_runtime.mjs";
import { c as SERVICES, n as DIKIDI_PROFILE, o as PREFERRED_TIME_API, r as DIKIDI_RECORDINGS, s as PRIVACY_URL } from "./services-BaN4uYOX.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Clock, u as CalendarDays } from "../_libs/lucide-react.mjs";
import { n as PageHero, r as getTelegramUser } from "./router-ceCc6x5n.mjs";
import { t as Button } from "./button-CeUv9uRM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking-B-8oU_tZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BookingPage() {
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [service, setService] = (0, import_react.useState)(() => {
		const first = SERVICES[0];
		return first.drug ? `${first.name} · ${first.drug}` : first.name;
	});
	const [when, setWhen] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("");
	async function submit(e) {
		e.preventDefault();
		if (!name.trim() || !phone.trim()) {
			setStatus("Пожалуйста, укажите имя и телефон.");
			return;
		}
		setStatus("Отправляем…");
		const tg = getTelegramUser();
		try {
			await fetch(PREFERRED_TIME_API, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					user_id: tg?.id || "",
					user_name: name.trim(),
					username: tg?.username || "",
					phone: phone.trim(),
					service,
					desired_time: when.trim(),
					comment: ""
				})
			});
			setStatus("Спасибо! Екатерина свяжется с вами и подберёт время.");
			setWhen("");
		} catch {
			setStatus("Не удалось отправить. Попробуйте ещё раз.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Онлайн-запись",
		title: "Запись",
		subtitle: "Выберите услугу, дату и время на DIKIDI — или оставьте заявку, если слота нет."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 px-5 py-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-lg bg-surface p-5 shadow-[var(--shadow-card)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 flex size-11 items-center justify-center rounded-md bg-bg-2 text-steel-dk",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold text-steel-dk",
					children: "Календарь DIKIDI"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-relaxed text-muted",
					children: "Актуальные свободные окна, выбор процедуры и подтверждение записи."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: DIKIDI_PROFILE,
					target: "_blank",
					rel: "noreferrer",
					className: "mt-4 flex h-12 items-center justify-center rounded-md bg-steel-dk text-sm font-bold text-surface",
					children: "Записаться на DIKIDI"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: DIKIDI_RECORDINGS,
					target: "_blank",
					rel: "noreferrer",
					className: "mt-2.5 flex h-12 items-center justify-center rounded-md border border-line text-sm font-bold text-steel-dk",
					children: "Посмотреть мои записи"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-lg bg-surface p-5 shadow-[var(--shadow-card)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 flex size-11 items-center justify-center rounded-md bg-bg-2 text-steel-dk",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold text-steel-dk",
					children: "Нет подходящего времени"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 mb-4 text-sm leading-relaxed text-muted",
					children: "Если в календаре нет удобного слота — оставьте заявку. Екатерина напишет и подберёт другое время."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "flex flex-col gap-3.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Имя",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: name,
								onChange: (e) => setName(e.target.value),
								placeholder: "Анна",
								className: "field-input"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Телефон",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: phone,
								onChange: (e) => setPhone(e.target.value),
								type: "tel",
								placeholder: "+7 999 000-00-00",
								className: "field-input"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Процедура",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: service,
								onChange: (e) => setService(e.target.value),
								className: "field-input",
								children: SERVICES.map((s) => {
									const label = s.drug ? `${s.name} · ${s.drug}` : s.name;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: label,
										children: label
									}, `${s.name}-${s.drug}-${s.url}`);
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Желаемые дата и время",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: when,
								onChange: (e) => setWhen(e.target.value),
								placeholder: "Например, 12 сентября после 16:00",
								className: "field-input"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "h-12 w-full",
							children: "Оставить заявку"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-2xs leading-snug text-muted",
							children: [
								"Отправляя заявку, вы соглашаетесь с",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: PRIVACY_URL,
									target: "_blank",
									rel: "noreferrer",
									className: "text-steel",
									children: "политикой обработки персональных данных"
								})
							]
						}),
						status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-steel-dk",
							children: status
						}) : null
					]
				})
			]
		})]
	})] });
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-xs font-semibold text-muted",
			children: label
		}), children]
	});
}
//#endregion
export { BookingPage as component };
