import { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import {
  FACE_IMAGE,
  FACE_ZONES,
  FRONT_SHAPES,
  type FaceZone,
  type ZoneItem,
  type ZoneKey,
} from "@/data/zones";
import { formatPrice, cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const VIEWBOX = "0 0 100 133.11";

type Detail = { zone: FaceZone; item: ZoneItem };

export function FaceModel() {
  const [active, setActive] = useState<ZoneKey | null>(null);
  const [detail, setDetail] = useState<Detail | null>(null);

  const zone = useMemo(
    () => FACE_ZONES.find((z) => z.key === active) ?? null,
    [active],
  );

  function select(key: ZoneKey) {
    setDetail(null);
    setActive(key);
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="px-1 text-xs leading-snug text-muted">
          {zone ? `${zone.n} · ${zone.title} — ${zone.hint}` : "Нажмите зону или номер."}
        </p>
        <div className="mt-2.5 flex gap-1.5 overflow-x-auto pb-1">
          {FACE_ZONES.map((z) => {
            const on = active === z.key;
            return (
              <button
                key={z.key}
                type="button"
                onClick={() => select(z.key)}
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-bold tabular-nums transition-colors duration-150",
                  on
                    ? "bg-steel-dk text-surface"
                    : "bg-surface text-steel-dk ring-1 ring-line",
                )}
                aria-pressed={on}
                aria-label={z.title}
              >
                {z.n}
              </button>
            );
          })}
        </div>
      </div>

      <div className="face-stage relative mx-auto w-full max-w-md overflow-hidden rounded-xl bg-bg-2 shadow-[var(--shadow-hair)]">
        <div className="relative">
          <img
            src={FACE_IMAGE}
            alt="3D-модель лица"
            className="block w-full select-none"
            draggable={false}
          />
          <svg
            viewBox={VIEWBOX}
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0 h-full w-full"
            role="img"
            aria-label="Карта зон лица"
          >
            {FRONT_SHAPES.map((shape) => {
              const meta = FACE_ZONES.find((z) => z.key === shape.key);
              if (!meta) return null;
              const on = active === shape.key;
              return (
                <g
                  key={shape.key}
                  className={cn("zone-g cursor-pointer", on && "is-on")}
                  onClick={() => select(shape.key)}
                >
                  {shape.paths.map((d) => (
                    <path key={`hit-${d}`} d={d} className="zone-hit" />
                  ))}
                  {shape.badges.map((badge, i) => {
                    const r = badge.r ?? 2.9;
                    return (
                      <g key={`badge-${shape.key}-${i}`} className="badge-g">
                        <circle
                          className="badge-circle"
                          cx={badge.x}
                          cy={badge.y}
                          r={r}
                        />
                        <text
                          className="badge-num"
                          x={badge.x}
                          y={badge.y + r * 0.35}
                          textAnchor="middle"
                          fontSize={r * 1.05}
                          fontWeight="600"
                          fontFamily="Manrope, sans-serif"
                        >
                          {meta.n}
                        </text>
                      </g>
                    );
                  })}
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {detail ? (
        <ProcedureDetail
          zoneTitle={detail.zone.title}
          item={detail.item}
          onBack={() => setDetail(null)}
        />
      ) : zone ? (
        <ZonePanel zone={zone} onPick={(item) => setDetail({ zone, item })} />
      ) : (
        <div className="rounded-lg border border-line bg-surface px-4 py-5">
          <p className="font-display text-xl font-semibold text-steel-dk">Выберите зону</p>
          <p className="mt-1 text-sm leading-snug text-muted">
            Зоны как на схеме: пунктир на лице. Нажмите линию или номер.
          </p>
        </div>
      )}
    </div>
  );
}

function ZonePanel({
  zone,
  onPick,
}: {
  zone: FaceZone;
  onPick: (item: ZoneItem) => void;
}) {
  return (
    <section className="rounded-lg border border-line bg-surface p-4 shadow-[var(--shadow-card)]">
      <p className="text-2xs font-bold uppercase tracking-[0.14em] text-steel">{`Зона ${zone.n}`}</p>
      <h2 className="mt-1 font-display text-2xl font-semibold text-steel-dk">{zone.title}</h2>
      <p className="mt-0.5 text-sm text-muted">{zone.hint}</p>
      <ul className="mt-4 flex flex-col gap-2">
        {zone.items.map((item) => (
          <li
            key={`${item.name}-${item.drug}`}
            className="flex items-center justify-between gap-3 rounded-md border border-line bg-bg-2 px-3.5 py-3"
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold text-ink">{item.name}</p>
              <p className="text-xs font-semibold text-steel">
                {item.drug} · {formatPrice(item.price)}
              </p>
            </div>
            <Button size="sm" onClick={() => onPick(item)}>
              Подробнее
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProcedureDetail({
  zoneTitle,
  item,
  onBack,
}: {
  zoneTitle: string;
  item: ZoneItem;
  onBack: () => void;
}) {
  return (
    <section className="rounded-lg border border-line bg-surface p-5 shadow-[var(--shadow-card)]">
      <button
        type="button"
        onClick={onBack}
        className="mb-3 inline-flex items-center gap-1 text-sm font-semibold text-steel"
      >
        <ArrowLeft className="size-4" />
        Назад к вариантам
      </button>
      <p className="text-2xs font-bold uppercase tracking-[0.14em] text-steel">{zoneTitle}</p>
      <h2 className="mt-1 font-display text-2xl font-semibold text-steel-dk">{item.name}</h2>
      <p className="text-sm font-semibold text-steel">{item.drug}</p>
      <p className="mt-3 font-display text-3xl font-semibold tabular-nums text-ink">
        {formatPrice(item.price)}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{item.desc}</p>
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="mt-5 flex h-12 items-center justify-center rounded-md bg-steel-dk text-sm font-bold text-surface transition-transform duration-150 active:scale-[0.98]"
      >
        Записаться
      </a>
    </section>
  );
}
