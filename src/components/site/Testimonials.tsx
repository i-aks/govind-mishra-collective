import { Section } from "./Section";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Govind has a rare ability to make you slow down and think before you speak. The change in my boardroom presence has been immediate and lasting.",
    name: "Anjali Verma",
    role: "Managing Director, Financial Services",
  },
  {
    quote:
      "His coaching shifted something fundamental for me. I no longer perform leadership — I inhabit it. Our entire executive team has felt the difference.",
    name: "Rajeev Khanna",
    role: "Chief Executive Officer",
  },
  {
    quote:
      "Calm, precise, and deeply humane. Govind's workshops are among the most thoughtful corporate programs we have ever run for our partners.",
    name: "Dr. Meera Iyer",
    role: "Partner, Professional Services Firm",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setI((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  const go = (dir: number) =>
    setI((prev) => (prev + dir + testimonials.length) % testimonials.length);

  const t = testimonials[i];

  return (
    <Section
      eyebrow="Words from clients"
      title="Quiet transformations."
      align="center"
      className="bg-primary text-primary-foreground"
    >
      <div
        className="relative max-w-3xl mx-auto text-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative min-h-[280px] md:min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-display text-2xl md:text-3xl leading-relaxed text-primary-foreground/95 italic">
                "{t.quote}"
              </p>
              <footer className="mt-10">
                <p className="font-display text-lg text-gold">{t.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-primary-foreground/60">
                  {t.role}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="h-10 w-10 inline-flex items-center justify-center border border-primary-foreground/20 hover:border-gold hover:text-gold transition-colors"
          >
            ←
          </button>

          <div className="flex items-center gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                className="group py-3"
              >
                <span
                  className={`block h-[2px] transition-all ${
                    idx === i ? "w-10 bg-gold" : "w-6 bg-primary-foreground/30 group-hover:bg-primary-foreground/60"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="h-10 w-10 inline-flex items-center justify-center border border-primary-foreground/20 hover:border-gold hover:text-gold transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </Section>
  );
}
