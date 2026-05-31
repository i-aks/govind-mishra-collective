import { Section } from "./Section";

// Replace this with your real Calendly link, e.g. "https://calendly.com/govindmishra/30min"
const CALENDLY_URL = "https://calendly.com/govindmishra/30min";

const channels = [
  {
    label: "Book a Consultation",
    value: "Schedule a 30-minute discovery call",
    href: CALENDLY_URL,
    primary: true,
  },
  { label: "Email", value: "hello@govindmishra.com", href: "mailto:hello@govindmishra.com" },
  { label: "LinkedIn", value: "linkedin.com/in/govindmishraa", href: "https://www.linkedin.com/in/govindmishraa/" },
  { label: "WhatsApp", value: "+91 00000 00000", href: "#" },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Let us begin a conversation"
      title="Reach out."
      intro={
        <p>
          Whether for one-on-one coaching, a keynote, or a corporate program,
          start with a short conversation. We will explore fit and what good work
          together might look like.
        </p>
      }
    >
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-7 space-y-4">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className={`group flex items-center justify-between border-t border-border py-6 transition-colors ${
                c.primary ? "border-gold" : "hover:border-primary"
              }`}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {c.label}
                </p>
                <p
                  className={`mt-2 font-display text-2xl md:text-3xl tracking-tight ${
                    c.primary ? "text-gold" : "text-primary"
                  }`}
                >
                  {c.value}
                </p>
              </div>
              <span
                aria-hidden
                className="text-primary text-xl group-hover:translate-x-1 transition-transform"
              >
                →
              </span>
            </a>
          ))}
          <div className="border-t border-border" />
        </div>

        <aside className="lg:col-span-5">
          <div className="border border-border bg-surface-elevated p-8 md:p-10">
            <p className="eyebrow">Calendly</p>
            <h3 className="mt-3 font-display text-2xl text-primary leading-snug">
              Direct booking for discovery calls
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Embed your Calendly link here to let visitors self-schedule a
              30-minute introductory conversation.
            </p>
            <div className="mt-8 aspect-[4/5] border border-dashed border-border bg-surface flex items-center justify-center text-center px-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Calendly widget
                <br />
                placeholder
              </p>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
}
