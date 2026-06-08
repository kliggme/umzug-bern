import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

function IconMail() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

const navLinks = [
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/dienstleistungen", label: "Dienstleistungen" },
  { href: "/regionen", label: "Regionen" },
  { href: "/ratgeber", label: "Ratgeber" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10 text-sm">
          <div className="flex items-center gap-4">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 text-accent hover:text-accent-hover transition-colors cursor-pointer">
              <IconMail />
              <span className="hidden sm:inline">{siteConfig.email}</span>
            </a>
            <span className="text-border">|</span>
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 text-accent hover:text-accent-hover transition-colors cursor-pointer">
              <IconPhone />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <span className="text-border hidden sm:inline">|</span>
            <a href={`tel:${siteConfig.phoneMobile}`} className="hidden sm:flex items-center gap-1.5 text-accent hover:text-accent-hover transition-colors cursor-pointer">
              <IconPhone />
              <span>{siteConfig.phoneMobileDisplay}</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-text">
            <Link href="/dienstleistungen/privatumzug" className="hover:text-primary transition-colors cursor-pointer">Umzüge</Link>
            <Link href="/dienstleistungen/transport" className="hover:text-primary transition-colors cursor-pointer">Transporte</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl font-bold italic text-accent font-[family-name:var(--font-heading)]">
              umzug bern
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-accent text-sm font-medium uppercase tracking-wide transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/angebot"
              className="hidden sm:inline-flex bg-accent hover:bg-accent-hover text-primary-dark font-semibold px-5 py-2.5 rounded text-sm uppercase tracking-wide transition-colors cursor-pointer"
            >
              Angebot anfordern
            </Link>
            <details className="lg:hidden relative group">
              <summary className="text-white cursor-pointer list-none">
                <IconMenu />
              </summary>
              <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-border py-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-text hover:bg-surface hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/angebot"
                  className="block mx-4 mt-2 mb-1 text-center bg-accent hover:bg-accent-hover text-primary-dark font-semibold px-4 py-2.5 rounded text-sm transition-colors cursor-pointer"
                >
                  Angebot anfordern
                </Link>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}
