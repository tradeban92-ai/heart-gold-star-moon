import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, CreditCard, Droplets } from "lucide-react";
import { PageHero, PrivacyNote } from "@/components/app-shell";

export const Route = createFileRoute("/more")({ component: MorePage });

const ITEMS = [
  {
    to: "/loyalty" as const,
    title: "Карта лояльности",
    sub: "Уровень, скидка и история визитов",
    icon: CreditCard,
  },
  {
    to: "/care" as const,
    title: "Уход после процедуры",
    sub: "Памятка: что можно и чего избегать",
    icon: Droplets,
  },
];

function MorePage() {
  return (
    <div>
      <PageHero
        eyebrow="Ещё"
        title="Кабинет"
        subtitle="Лояльность и уход — всё, что нужно между визитами."
      />
      <div className="flex flex-col gap-2.5 px-5 py-6">
        {ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className="flex min-h-16 items-center gap-3.5 rounded-lg border border-line bg-surface px-4 py-3.5 transition-transform duration-150 active:scale-[0.98]"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-2 text-steel-dk">
                <Icon className="size-5" strokeWidth={1.75} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-lg font-semibold text-steel-dk">
                  {item.title}
                </span>
                <span className="text-xs text-muted">{item.sub}</span>
              </span>
              <ChevronRight className="size-4 shrink-0 text-steel" />
            </Link>
          );
        })}
      </div>
      <PrivacyNote />
    </div>
  );
}
