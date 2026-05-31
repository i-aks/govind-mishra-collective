import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Insights", href: "#insights" },
  { label: "Speaking", href: "#speaking" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/70"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-luxe flex items-center justify-between gap-6 h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <span className="font-display text-lg md:text-xl tracking-tight text-primary whitespace-nowrap">
            Govind <span className="text-gold">Mishra</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-9">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="link-underline text-sm text-secondary hover:text-primary transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block shrink-0">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-secondary transition-colors"
          >
            Book a Consultation
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-primary"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-px bg-current transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`h-px bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-px bg-current transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-luxe py-6 flex flex-col gap-5">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-base text-secondary"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
