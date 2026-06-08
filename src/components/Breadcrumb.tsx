import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors cursor-pointer">
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span>/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-primary transition-colors cursor-pointer">
                  {item.label}
                </Link>
              ) : (
                <span className="text-primary font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
