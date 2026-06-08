import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold italic text-accent cursor-pointer">
              umzug bern
            </Link>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              Ihr zuverlässiger Partner für Umzüge, Räumungen und Reinigungen in Bern und der ganzen Schweiz.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-accent font-semibold uppercase tracking-wider text-sm mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { href: "/ueber-uns", label: "Über uns" },
                { href: "/dienstleistungen", label: "Dienstleistungen" },
                { href: "/regionen", label: "Regionen" },
                { href: "/ratgeber", label: "Ratgeber" },
                { href: "/blog", label: "Blog" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-accent text-sm transition-colors cursor-pointer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-accent font-semibold uppercase tracking-wider text-sm mb-4">Dienstleistungen</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/dienstleistungen/${service.slug}`}
                    className="text-white/70 hover:text-accent text-sm transition-colors cursor-pointer"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-accent font-semibold uppercase tracking-wider text-sm mb-4">Kontakt</h3>
            <address className="not-italic text-white/70 text-sm space-y-2">
              <p>{siteConfig.address.street}</p>
              <p>{siteConfig.address.zip} {siteConfig.address.city}</p>
              <p className="pt-2">
                <a href={`tel:${siteConfig.phoneMobile}`} className="hover:text-accent transition-colors cursor-pointer">
                  {siteConfig.phoneMobileDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-accent transition-colors cursor-pointer">
                  {siteConfig.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-accent transition-colors cursor-pointer">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-accent transition-colors cursor-pointer">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
