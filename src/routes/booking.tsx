import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  DIKIDI_PROFILE,
  DIKIDI_RECORDINGS,
  PREFERRED_TIME_API,
  PRIVACY_URL,
  SERVICES,
} from "@/data/services";
import { getTelegramUser } from "@/lib/telegram";
import { PageHero } from "@/components/app-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/booking")({ component: BookingPage });

function BookingPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(() => {
    const first = SERVICES[0];
    return first.drug ? `${first.name} · ${first.drug}` : first.name;
  });
  const [when, setWhen] = useState("");
  const [status, setStatus] = useState("");

  async function submit(e: FormEvent) {
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
          comment: "",
        }),
      });
      setStatus("Спасибо! Екатерина свяжется с вами и подберёт время.");
      setWhen("");
    } catch {
      setStatus("Не удалось отправить. Попробуйте ещё раз.");
    }
  }

  return (
    <div>
      <PageHero
        eyebrow="Онлайн-запись"
        title="Запись"
        subtitle="Свободные окна смотрите в календаре DIKIDI. Если удобного слота нет — оставьте заявку."
      />
      <div className="flex flex-col gap-4 px-5 py-6">
        <section className="rounded-lg bg-surface p-5 shadow-[var(--shadow-card)]">
          <h2 className="font-display text-2xl font-semibold text-steel-dk">Календарь DIKIDI</h2>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            Актуальные свободные окна, выбор процедуры и подтверждение записи.
          </p>
          <a
            href={DIKIDI_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex h-12 items-center justify-center rounded-md bg-steel-dk text-sm font-bold text-surface transition-transform duration-150 active:scale-[0.98]"
          >
            Открыть календарь
          </a>
          <a
            href={DIKIDI_RECORDINGS}
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex h-11 items-center justify-center text-sm font-semibold text-steel-dk"
          >
            Мои записи
          </a>
        </section>

        <section className="rounded-lg border border-line bg-surface p-5">
          <h2 className="font-display text-xl font-semibold text-steel-dk">Нет удобного времени</h2>
          <p className="mt-1 mb-4 text-sm leading-relaxed text-muted">
            Оставьте заявку — Екатерина напишет и подберёт слот.
          </p>
          <form onSubmit={submit} className="flex flex-col gap-3.5">
            <Field label="Имя">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Анна"
                className="field-input"
              />
            </Field>
            <Field label="Телефон">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="+7 999 000-00-00"
                className="field-input"
              />
            </Field>
            <Field label="Процедура">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="field-input"
              >
                {SERVICES.map((s) => {
                  const label = s.drug ? `${s.name} · ${s.drug}` : s.name;
                  return (
                    <option key={`${s.name}-${s.drug}-${s.url}`} value={label}>
                      {label}
                    </option>
                  );
                })}
              </select>
            </Field>
            <Field label="Желаемые дата и время">
              <input
                value={when}
                onChange={(e) => setWhen(e.target.value)}
                placeholder="Например, 12 сентября после 16:00"
                className="field-input"
              />
            </Field>
            <Button type="submit" className="h-12 w-full">
              Оставить заявку
            </Button>
            <p className="text-2xs leading-snug text-muted">
              Отправляя заявку, вы соглашаетесь с{" "}
              <a href={PRIVACY_URL} target="_blank" rel="noreferrer" className="text-steel">
                политикой обработки персональных данных
              </a>
            </p>
            {status ? <p className="text-sm font-medium text-steel-dk">{status}</p> : null}
          </form>
        </section>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-muted">{label}</span>
      {children}
    </label>
  );
}
