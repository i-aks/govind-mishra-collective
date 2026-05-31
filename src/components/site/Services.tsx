import { Section } from "./Section";
import { motion } from "framer-motion";

const services = [
  {
    n: "01",
    title: "Executive Communication Coaching",
    desc: "One-on-one coaching for senior leaders to communicate with clarity, conviction, and quiet authority.",
  },
  {
    n: "02",
    title: "Public Speaking Coaching",
    desc: "Develop a calm, magnetic stage presence rooted in thought, breath, and authentic message.",
  },
  {
    n: "03",
    title: "Leadership Development",
    desc: "Long-form programs that build self-awareness, emotional range, and considered decision-making.",
  },
  {
    n: "04",
    title: "Corporate Training",
    desc: "Bespoke programs for organizations on communication, presence, leadership, and culture.",
  },
  {
    n: "05",
    title: "Team Building Workshops",
    desc: "Experiential workshops that build trust, candor, and shared language inside teams.",
  },
  {
    n: "06",
    title: "Career Development Coaching",
    desc: "Personalized guidance for professionals navigating transitions and stepping into larger roles.",
  },
  {
    n: "07",
    title: "Interview Preparation",
    desc: "Frame your story, sharpen your thinking, and present with composure under pressure.",
  },
  {
    n: "08",
    title: "Emotional Intelligence Training",
    desc: "Practical training in self-regulation, empathy, and the inner skills of mature leadership.",
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Programs & Coaching"
      title="Work designed for serious professionals."
      intro={
        <p>
          Every engagement is shaped around the individual or institution.
          Below are the primary practices through which we work together.
        </p>
      }
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
            className="group bg-background p-8 md:p-9 flex flex-col min-h-[260px] hover:bg-surface transition-colors"
          >
            <div className="flex items-start justify-between">
              <span className="font-display text-sm text-gold">{s.n}</span>
              <span className="h-px w-8 bg-border group-hover:bg-gold transition-colors" />
            </div>
            <h3 className="mt-8 font-display text-xl text-primary leading-snug">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
              {s.desc}
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary hover:text-gold transition-colors"
            >
              Learn more <span aria-hidden>→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
