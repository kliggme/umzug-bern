export const COOKIE_CONSENT_KEY = "umzug-bern-cookie-consent";

export type CookieConsent = "accepted" | "essential";

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (value === "accepted" || value === "essential") return value;
  return null;
}

export function setCookieConsent(consent: CookieConsent) {
  localStorage.setItem(COOKIE_CONSENT_KEY, consent);
  window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: consent }));
}

export function hasAnalyticsConsent(): boolean {
  return getCookieConsent() === "accepted";
}
