import { motion } from "framer-motion";
import portrait from "@/assets/govind-portrait.jpg";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "22K+", label: "LinkedIn Followers" },
  { value: "1000+", label: "Training Sessions" },
  { value: "200+", label: "Client Institutions" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="hero-glow" aria-hidden />
      <div className="container-luxe relative grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-3 mb-7">
            <span className="rule-gold" />
            <span className="eyebrow">Thinking &amp; Communication Guide</span>
          </div>

          <h1 className="font-display text-[clamp(2.4rem,5.6vw,4.6rem)] leading-[1.05] text-primary tracking-tight">
            Think clearly.
            <br />
            Communicate calmly.
            <br />
            <span className="italic text-secondary">Lead authentically.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-secondary">
            Govind Mishra helps professionals, leaders, educators, and organizations
            build clarity, confidence, communication, and presence — through coaching,
            keynotes, and corporate programs.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:bg-secondary transition-colors"
            >
              Book a Consultation
              <span aria-hidden>→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-transparent px-7 py-3.5 text-sm font-medium text-primary hover:border-primary transition-colors"
            >
              Explore Programs
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 max-w-2xl border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl md:text-3xl text-primary">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            <div className="absolute -inset-3 border border-gold/40" aria-hidden />
            <img
              src={portrait}
              alt="Portrait of Govind Mishra, thinking and communication guide"
              width={1024}
              height={1280}
              className="relative h-full w-full object-cover grayscale-[0.15]"
              fetchPriority="high"
            />
            <div className="absolute -bottom-5 -left-5 bg-surface-elevated border border-border px-5 py-4 shadow-card hidden md:block">
              <p className="font-display text-sm text-primary leading-tight">
                "Clarity comes
                <br />
                before confidence."
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-gold">
                — Govind Mishra
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
