import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { LOYALTY_API } from "@/data/services";
import { getTelegramUser } from "@/lib/telegram";
import { cn, pluralVisit } from "@/lib/utils";
import { PageHero } from "@/components/app-shell";

export const Route = createFileRoute("/loyalty")({ component: LoyaltyPage });

const TIERS = [
  { name: "Новый клиент", req: 0, perk: "без скидки" },
  { name: "Серебро", req: 3, perk: "−3%" },
  { name: "Золото", req: 6, perk: "−5%" },
  { name: "Платина", req: 10, perk: "−7%" },
] as const;

type HistoryItem = string | { service?: string; date?: string };

type LoyaltyData = {
  level?: string;
  totalVisits?: number;
  progressPercent?: number;
  nextLevelAt?: number;
  lastVisitDate?: string;
  user_name?: string;
  recentServices?: HistoryItem[];
};

function LoyaltyPage() {
  const [data, setData] = useState<LoyaltyData | null>(null);
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const tg = getTelegramUser();
      if (!tg?.id) {
        setLoading(false);
        setNote("Откройте приложение через бота, чтобы увидеть свою карту.");
        return;
      }
      try {
        const r = await fetch(`${LOYALTY_API}?user_id=${tg.id}`);
        const d = (await r.json()) as LoyaltyData;
        if (!cancelled) setData(d);
      } catch {
        if (!cancelled) setNote("Не удалось загрузить карту. Попробуйте позже.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  const level = data?.level || (loading ? "Загрузка…" : note ? "Недоступно" : "Новый клиент");
  const visits = data?.totalVisits ?? 0;
  const tier = TIERS.find((t) => t.name === level);
  const history = data?.recentServices ?? [];

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
      <PageHero eyebrow="Программа лояльности" title="Карта клиента" />
      <div className="px-5 py-6">
        <div className="relative overflow-hidden rounded-xl bg-steel-dk p-5 text-surface shadow-[var(--shadow-card)]">
          <p className="text-2xs font-semibold uppercase tracking-[0.16em] text-surface/55">
            Altyeva · постоянный клиент
          </p>
          <p className="mt-3 font-display text-3xl font-semibold leading-none">{level}</p>
          <p className="mt-1 text-sm text-surface/70">{data?.user_name || " "}</p>
          <div className="mt-5 flex items-end justify-between gap-3">
            <div>
              {tier && tier.perk !== "без скидки" ? (
                <p className="text-sm font-bold">Скидка {tier.perk}</p>
              ) : (
                <p className="text-sm text-surface/70">Пока без скидки</p>
              )}
              {data?.lastVisitDate ? (
                <p className="mt-1 text-xs text-surface/55">Последний визит: {data.lastVisitDate}</p>
              ) : null}
            </div>
            <span className="rounded-full bg-surface/12 px-3 py-1 text-2xs font-bold">
              {loading ? "—" : `${visits} ${pluralVisit(visits)}`}
            </span>
          </div>
          <div className="mt-4 h-1 overflow-hidden rounded-full bg-surface/15">
            <div
              className="h-full rounded-full bg-surface transition-[width] duration-500"
              style={{ width: `${data?.progressPercent ?? 0}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-surface/55">
            {data?.nextLevelAt
              ? `До следующего уровня: ещё ${data.nextLevelAt - visits} ${pluralVisit(data.nextLevelAt - visits)}`
              : loading
                ? "До следующего уровня"
                : "Максимальный уровень достигнут"}
          </p>
        </div>

        <div className="mt-5 overflow-hidden rounded-lg border border-line">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={cn(
                "flex items-center justify-between border-b border-line px-4 py-3.5 last:border-b-0",
                t.name === level && "bg-surface",
              )}
            >
              <span className="text-sm font-bold text-steel-dk">
                {t.name}
                {t.req > 0 ? (
                  <span className="ml-1.5 text-xs font-medium text-muted">от {t.req}</span>
                ) : null}
              </span>
              <span className="text-sm font-bold text-steel">{t.perk}</span>
            </div>
          ))}
        </div>

        {history.length > 0 ? (
          <div className="mt-7">
            <h2 className="font-display text-xl font-semibold text-steel-dk">История визитов</h2>
            <p className="mb-3 mt-1 text-xs leading-snug text-muted">
              В уровень входят только состоявшиеся визиты.
            </p>
            <div className="flex flex-col gap-2">
              {history.map((v, i) => {
                const svc = typeof v === "string" ? v : v.service || "";
                const date = typeof v === "object" ? v.date || "" : "";
                return (
                  <div key={`${svc}-${date}-${i}`} className="rounded-md border border-line bg-surface px-4 py-3">
                    <p className="text-sm font-semibold text-steel-dk">{svc}</p>
                    {date ? <p className="mt-0.5 text-xs text-muted">{date}</p> : null}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <p className="mt-5 text-sm text-muted">
            {note || "Ждём вашего первого визита — тогда здесь появится история."}
          </p>
        )}
      </div>
    </div>
  );
}
