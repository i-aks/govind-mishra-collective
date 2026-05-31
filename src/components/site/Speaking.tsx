import { Section } from "./Section";
import { motion } from "framer-motion";

const orgs = [
  "ICAI",
  "ICSI",
  "Rotary International",
  "BAPS",
  "Government Institutions",
  "Corporate Leadership",
  "Public Sector",
  "Universities",
];

export function Speaking() {
  return (
    <Section
      id="speaking"
      eyebrow="Speaking & Workshops"
      title="Trusted by institutions across India."
      intro={
        <p>
          Keynotes, masterclasses, and multi-day programs delivered to professional
          bodies, government leadership cohorts, and corporate teams.
        </p>
      }
    >
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-border">
        {orgs.map((o, i) => (
          <motion.div
            key={o}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="border-r border-b border-border h-28 md:h-32 flex items-center justify-center px-4 text-center"
          >
            <span className="font-display text-lg md:text-xl text-primary tracking-tight">
              {o}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 border-t border-border pt-12 grid md:grid-cols-3 gap-10">
        {[
          ["1000+", "Training sessions delivered"],
          ["150+", "Keynote engagements"],
          ["50+", "Corporate clients served"],
        ].map(([v, l]) => (
          <div key={l}>
            <p className="font-display text-5xl text-primary">{v}</p>
            <p className="mt-2 text-sm text-muted-foreground uppercase tracking-[0.18em]">
              {l}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
