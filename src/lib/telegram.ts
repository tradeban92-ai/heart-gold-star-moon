export type TelegramUser = {
  id: number;
  username?: string;
  first_name?: string;
};

type TelegramWebApp = {
  ready: () => void;
  expand: () => void;
  initDataUnsafe?: { user?: TelegramUser };
};

declare global {
  interface Window {
    Telegram?: { WebApp?: TelegramWebApp };
  }
}

export function getTelegramWebApp(): TelegramWebApp | undefined {
  if (typeof window === "undefined") return undefined;
  return window.Telegram?.WebApp;
}

export function getTelegramUser(): TelegramUser | undefined {
  return getTelegramWebApp()?.initDataUnsafe?.user;
}

export function bootTelegram(): void {
  const tg = getTelegramWebApp();
  if (!tg) return;
  tg.ready();
  tg.expand();
}
