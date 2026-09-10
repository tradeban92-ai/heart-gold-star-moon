import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Clock } from "lucide-react";
import {
  CATEGORIES,
  FILLER_GROUPS,
  SERVICES,
  TELEGRAM_BOT,
  type Service,
  type ServiceCategory,
} from "@/data/services";
import { formatPrice, cn } from "@/lib/utils";
import { AltyevaMark } from "@/components/mark";
import { PrivacyNote } from "@/components/app-shell";

export const Route = createFileRoute("/")({ component: ServicesPage });

type Group = { base: Service; variants: Service[] };

function groupServices(cat: ServiceCategory): Group[] {
  const items = SERVICES.filter((s) => s.cat === cat);
  const groups: Group[] = [];
  const seen: Record<string, number> = {};
  for (const s of items) {
    const key = (cat === "filler" ? `${s.subcat}|` : "") + s.name;
    if (seen[key] !== undefined) {
      groups[seen[key]].variants.push(s);
    } else {
      seen[key] = groups.length;
      groups.push({ base: s, variants: [s] });
    }
  }
  return groups;
}

function ServicesPage() {
  const [mode, setMode] = useState<"proc" | "cons">("cons");
  const [cat, setCat] = useState<ServiceCategory>("botox");
  const [detail, setDetail] = useState<{ service: Service; groupName: string } | null>(
    null,
  );

  const activeCat: ServiceCategory = mode === "cons" ? "consultation" : cat;
  const groups = useMemo(() => groupServices(activeCat), [activeCat]);
  const procCats = CATEGORIES.filter((c) => c.key !== "consultation");

  if (detail) {
    return (
      <ServiceDetail
        service={detail.service}
        groupName={detail.groupName}
        onBack={() => setDetail(null)}
      />
    );
  }

  return (
    <div>
      <header className="border-b border-line bg-linear-to-b from-bg-2 to-bg px-5 pb-7 pt-9">
        <div className="flex items-start gap-4">
          <div className="min-w-0 flex-1">
            <AltyevaMark className="mb-3 size-10 text-steel-dk" />
            <p className="mb-2 text-2xs font-semibold uppercase tracking-[0.18em] text-muted">
              Altyeva · эстетическая косметология
            </p>
            <h1 className="font-display text-[2.15rem] font-semibold leading-[1.08] text-steel-dk">
              Каталог услуг
            </h1>
            <p className="mt-2 max-w-[28ch] text-sm leading-relaxed text-muted">
              Санкт-Петербург, Лисичанская 6
            </p>
          </div>
          <img
            src="/ekaterina-avatar.jpg"
            alt="Екатерина Алтыева"
            width={80}
            height={80}
            className="mt-1 size-20 shrink-0 rounded-full object-cover object-[center_18%] ring-1 ring-line"
          />
        </div>
      </header>

      <div className="flex flex-wrap gap-2 px-5 py-5">
        <Chip active={mode === "cons"} onClick={() => setMode("cons")}>
          Консультация
        </Chip>
        <Chip active={mode === "proc"} onClick={() => setMode("proc")}>
          Процедуры
        </Chip>
      </div>

      {mode === "proc" ? (
        <div className="px-5 pb-3">
          <label className="sr-only" htmlFor="cat-select">
            Категория
          </label>
          <select
            id="cat-select"
            value={cat}
            onChange={(e) => setCat(e.target.value as ServiceCategory)}
            className="h-11 w-full appearance-none rounded-md border border-line bg-surface px-3.5 pr-10 text-sm font-semibold text-ink"
          >
            {procCats.map((c) => (
              <option key={c.key} value={c.key}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <div className="flex flex-col gap-3.5 px-5 pb-8">
        {groups.map((g) => {
          const s = g.base;
          const showGroup =
            activeCat === "filler" ? FILLER_GROUPS[s.subcat] : undefined;
          const prev = groups[groups.indexOf(g) - 1];
          const heading =
            showGroup && prev?.base.subcat !== s.subcat ? showGroup : null;
          const minPrice = Math.min(...g.variants.map((v) => v.price));
          return (
            <div key={`${s.cat}-${s.name}-${s.drug}`}>
              {heading ? (
                <p className="mb-2 mt-3 font-display text-base font-semibold text-muted first:mt-1">
                  {heading}
                </p>
              ) : null}
              <article
                className={cn(
                  "relative rounded-lg bg-surface p-5 transition-transform duration-150",
                  s.special
                    ? "border border-steel pt-7 shadow-[var(--shadow-card)]"
                    : "shadow-[var(--shadow-hair)]",
                )}
              >
                {s.special ? (
                  <span className="absolute -top-2.5 left-4 rounded-full bg-steel-dk px-2.5 py-0.5 text-2xs font-bold uppercase tracking-wider text-surface">
                    Рекомендуем начать с этого
                  </span>
                ) : null}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="min-w-0 font-display text-[1.35rem] font-semibold leading-snug text-ink">
                    {s.name}
                  </h3>
                  <p className="shrink-0 pt-0.5 text-right text-sm font-bold tabular-nums text-steel-dk">
                    {s.special ? "Бесплатно" : formatPrice(minPrice)}
                  </p>
                </div>
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted">
                  <Clock className="size-3.5 shrink-0" strokeWidth={1.75} />
                  {g.variants.length > 1
                    ? s.duration
                    : s.drug
                      ? `${s.drug} · ${s.duration}`
                      : s.duration}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{s.desc}</p>
                <div className="mt-4 flex flex-col gap-2">
                  {s.special ? (
                    <a
                      href={TELEGRAM_BOT}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 items-center justify-center rounded-md bg-steel-dk px-4 text-sm font-bold text-surface transition-transform duration-150 active:scale-[0.98]"
                    >
                      Написать Екатерине
                    </a>
                  ) : (
                    g.variants.map((v) => (
                      <button
                        key={v.drug || v.url}
                        type="button"
                        onClick={() => setDetail({ service: v, groupName: s.name })}
                        className="inline-flex h-11 items-center justify-center rounded-md border border-line bg-surface-soft px-4 text-sm font-semibold text-steel-dk transition-transform duration-150 active:scale-[0.98]"
                      >
                        {g.variants.length > 1 ? `Подробнее · ${v.drug}` : "Подробнее"}
                      </button>
                    ))
                  )}
                </div>
              </article>
            </div>
          );
        })}
      </div>

      <p className="px-5 pb-2 text-center text-xs text-muted">
        Не уверены, с чего начать?{" "}
        <Link to="/map" className="font-semibold text-steel-dk underline-offset-2 hover:underline">
          Откройте карту лица
        </Link>
      </p>
      <PrivacyNote />
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-150",
        active
          ? "border-steel bg-steel text-surface"
          : "border-line bg-transparent text-muted",
      )}
    >
      {children}
    </button>
  );
}

function ServiceDetail({
  service,
  groupName,
  onBack,
}: {
  service: Service;
  groupName: string;
  onBack: () => void;
}) {
  return (
    <div className="px-5 pt-8">
      <button
        type="button"
        onClick={onBack}
        className="mb-5 inline-flex items-center gap-1 text-sm font-semibold text-steel"
      >
        <ArrowLeft className="size-4" />
        Назад к услугам
      </button>
      <article className="rounded-lg bg-surface p-5 shadow-[var(--shadow-card)]">
        <h2 className="font-display text-2xl font-semibold text-steel-dk">{groupName}</h2>
        {service.drug ? (
          <p className="mt-1 text-sm font-semibold text-steel">{service.drug}</p>
        ) : null}
        <p className="mt-4 font-display text-3xl font-semibold tabular-nums">
          {formatPrice(service.price)}
        </p>
        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-steel">
          <Clock className="size-3.5" strokeWidth={1.75} />
          {service.duration}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted">{service.desc}</p>
        <a
          href={service.url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex h-12 items-center justify-center rounded-md bg-steel-dk text-sm font-bold text-surface transition-transform duration-150 active:scale-[0.98]"
        >
          Записаться
        </a>
      </article>
    </div>
  );
}
