import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Clock, X } from "lucide-react";
import { CARE, type CareMemo } from "@/data/care";
import { PageHero } from "@/components/app-shell";

export const Route = createFileRoute("/care")({ component: CarePage });

function CarePage() {
  const [memo, setMemo] = useState<CareMemo | null>(null);
  const featured = CARE[0];

  return (
    <div>
      <div className="px-5 pt-6">
        <Link
          to="/more"
          className="mb-3 inline-flex items-center gap-1 text-sm font-semibold text-steel"
        >
          <ArrowLeft className="size-4" />
          Ещё
        </Link>
      </div>
      <PageHero
        eyebrow="После процедуры"
        title={memo ? memo.title : "Памятка по уходу"}
        subtitle={
          memo
            ? "Сохраните памятку или сделайте скриншот."
            : "Самое частое после визита — ботокс. Остальные памятки ниже."
        }
      />
      <div className="px-5 py-6">
        {memo ? (
          <CareDetail memo={memo} onBack={() => setMemo(null)} />
        ) : (
          <CareHome featured={featured} onPick={setMemo} />
        )}
      </div>
    </div>
  );
}

function CareHome({
  featured,
  onPick,
}: {
  featured: CareMemo;
  onPick: (m: CareMemo) => void;
}) {
  const rest = CARE.filter((p) => p.key !== featured.key);
  return (
    <div>
      <button
        type="button"
        onClick={() => onPick(featured)}
        className="w-full rounded-lg border border-steel bg-surface p-5 text-left shadow-[var(--shadow-card)] transition-transform duration-150 active:scale-[0.98]"
      >
        <p className="text-2xs font-bold uppercase tracking-[0.14em] text-steel">
          Часто после визита
        </p>
        <p className="mt-1 font-display text-2xl font-semibold text-steel-dk">{featured.title}</p>
        <p className="mt-1 text-sm text-muted">{featured.sub}</p>
        <p className="mt-3 text-sm font-semibold text-steel-dk">Открыть памятку →</p>
      </button>

      <p className="mb-2.5 mt-6 text-2xs font-bold uppercase tracking-[0.14em] text-muted">
        Другие процедуры
      </p>
      <div className="flex flex-col gap-2">
        {rest.map((p) => (
          <button
            key={p.key}
            type="button"
            onClick={() => onPick(p)}
            className="flex min-h-14 w-full items-center justify-between gap-3 rounded-lg border border-line bg-surface px-4 py-3.5 text-left transition-transform duration-150 active:scale-[0.98]"
          >
            <span>
              <span className="block font-display text-lg font-semibold text-steel-dk">
                {p.title}
              </span>
              <span className="text-xs text-muted">{p.sub}</span>
            </span>
            <ArrowRight className="size-4 shrink-0 text-steel" />
          </button>
        ))}
      </div>
    </div>
  );
}

function CareDetail({ memo, onBack }: { memo: CareMemo; onBack: () => void }) {
  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="mb-4 inline-flex items-center gap-1 text-sm font-semibold text-steel"
      >
        <ArrowLeft className="size-4" />
        Другая процедура
      </button>
      <p className="mb-5 text-sm leading-relaxed text-muted">{memo.lead}</p>
      <Section title="Что делать" tone="do" icon={<Check className="size-3.5" />}>
        {memo.do}
      </Section>
      <Section title="Чего избегать" tone="dont" icon={<X className="size-3.5" />}>
        {memo.dont}
      </Section>
      <Section title="Сроки" tone="when" icon={<Clock className="size-3.5" />}>
        {[memo.when]}
      </Section>
      <div className="mt-5 rounded-md border border-dont/30 bg-dont/10 px-4 py-3.5 text-sm leading-relaxed text-steel-dk">
        Если появились сильная боль, нарастающий отёк, температура или что-то беспокоит —{" "}
        <span className="font-bold text-dont">сразу напишите Екатерине</span>.
      </div>
    </div>
  );
}

function Section({
  title,
  tone,
  icon,
  children,
}: {
  title: string;
  tone: "do" | "dont" | "when";
  icon?: React.ReactNode;
  children: string[];
}) {
  const color =
    tone === "do" ? "text-do" : tone === "dont" ? "text-dont" : "text-steel-dk";
  return (
    <div className="mb-4">
      <p className={`mb-2 text-xs font-bold uppercase tracking-wide ${color}`}>{title}</p>
      <ul className="flex flex-col gap-2">
        {children.map((x) => (
          <li
            key={x}
            className="flex gap-2.5 rounded-md border border-line bg-surface px-3.5 py-3 text-sm leading-snug"
          >
            <span className={`mt-0.5 shrink-0 ${color}`}>{icon}</span>
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
