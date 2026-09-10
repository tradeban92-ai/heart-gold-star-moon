import { useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { CalendarDays, Ellipsis, ScanFace, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { bootTelegram } from "@/lib/telegram";
import { PRIVACY_URL } from "@/data/services";

const TABS = [
  { to: "/", label: "Услуги", icon: Sparkles },
  { to: "/map", label: "Лицо", icon: ScanFace },
  { to: "/booking", label: "Запись", icon: CalendarDays },
  { to: "/more", label: "Ещё", icon: Ellipsis },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    bootTelegram();
  }, []);

  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="mx-auto min-h-dvh max-w-lg bg-bg">
      <div className="pb-24">{children}</div>
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg-2/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_12px_rgb(90_110_130/0.08)] backdrop-blur-md">
        <div className="mx-auto flex max-w-lg px-1">
          {TABS.map((tab) => {
            const active =
              tab.to === "/"
                ? pathname === "/"
                : pathname === tab.to || pathname.startsWith(`${tab.to}/`);
            const moreActive =
              tab.to === "/more" && (pathname === "/loyalty" || pathname === "/care");
            const on = active || moreActive;
            const Icon = tab.icon;
            return (
              <Link
                key={tab.to}
                to={tab.to}
                className={cn(
                  "flex flex-1 flex-col items-center gap-1 py-2.5 text-2xs font-semibold tracking-wide transition-colors duration-150",
                  on ? "text-steel-dk" : "text-muted",
                )}
              >
                <span
                  className={cn(
                    "flex size-8 items-center justify-center rounded-full transition-colors duration-150",
                    on ? "bg-steel-dk text-surface" : "bg-transparent",
                  )}
                >
                  <Icon className="size-[18px]" strokeWidth={1.75} />
                </span>
                {tab.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line bg-linear-to-b from-bg-2 to-bg px-5 pb-7 pt-10">
      <p className="mb-2 text-2xs font-semibold uppercase tracking-[0.18em] text-muted">
        {eyebrow}
      </p>
      <h1 className="font-display text-3xl font-semibold leading-tight text-steel-dk">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-2 max-w-[34ch] text-sm leading-relaxed text-muted">{subtitle}</p>
      ) : null}
    </header>
  );
}

export function PrivacyNote() {
  return (
    <p className="px-5 pb-2 pt-6 text-center">
      <a
        href={PRIVACY_URL}
        target="_blank"
        rel="noreferrer"
        className="text-2xs text-muted/50 no-underline"
      >
        Политика обработки данных
      </a>
    </p>
  );
}
