export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-luxe py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="font-display text-2xl text-primary">
            Govind <span className="text-gold">Mishra</span>
          </p>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Thinking &amp; Communication Guide. Helping leaders and institutions
            think clearly, communicate calmly, and lead authentically.
          </p>
        </div>

        <nav className="md:col-span-4 grid grid-cols-2 gap-8 text-sm">
          <div className="space-y-3">
            <p className="eyebrow">Site</p>
            <a href="#about" className="block text-secondary hover:text-primary">About</a>
            <a href="#services" className="block text-secondary hover:text-primary">Services</a>
            <a href="#insights" className="block text-secondary hover:text-primary">Insights</a>
            <a href="#contact" className="block text-secondary hover:text-primary">Contact</a>
          </div>
          <div className="space-y-3">
            <p className="eyebrow">Connect</p>
            <a href="#" className="block text-secondary hover:text-primary">LinkedIn</a>
            <a href="mailto:hello@govindmishra.com" className="block text-secondary hover:text-primary">Email</a>
            <a href="#" className="block text-secondary hover:text-primary">WhatsApp</a>
          </div>
        </nav>

        <div className="md:col-span-3 md:text-right">
          <p className="eyebrow">Based in</p>
          <p className="mt-3 font-display text-lg text-primary">India · Worldwide</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-luxe py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {year} Govind Mishra. All rights reserved.</p>
          <p className="uppercase tracking-[0.22em]">Clarity · Calm · Character</p>
        </div>
      </div>
    </footer>
  );
}
