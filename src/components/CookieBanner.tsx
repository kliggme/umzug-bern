"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  COOKIE_CONSENT_KEY,
  setCookieConsent,
} from "@/lib/cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) setVisible(true);
  }, []);

  function accept() {
    setCookieConsent("accepted");
    setVisible(false);
  }

  function acceptEssentialOnly() {
    setCookieConsent("essential");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
    >
      <div className="max-w-4xl mx-auto bg-primary-dark border border-white/10 rounded-lg shadow-2xl p-5 sm:p-6">
        <h2 id="cookie-banner-title" className="text-base font-bold text-white mb-2">
          Cookie-Einstellungen
        </h2>
        <p id="cookie-banner-description" className="text-sm text-white/75 leading-relaxed">
          Wir verwenden Cookies, um die Website nutzerfreundlich zu gestalten und – mit Ihrer Einwilligung –
          anonyme Nutzungsstatistiken zu erfassen. Notwendige Cookies sind für den Betrieb der Website
          erforderlich. Weitere Informationen finden Sie in unserer{" "}
          <Link href="/datenschutz" className="text-accent hover:text-accent-hover underline cursor-pointer">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:justify-end">
          <button
            type="button"
            onClick={acceptEssentialOnly}
            className="order-2 sm:order-1 px-5 py-2.5 rounded text-sm font-semibold text-white/80 border border-white/20 hover:border-white/40 hover:text-white transition-colors cursor-pointer"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={accept}
            className="order-1 sm:order-2 px-5 py-2.5 rounded text-sm font-bold uppercase tracking-wide bg-accent hover:bg-accent-hover text-primary-dark transition-colors cursor-pointer"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
