import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section className="py-32 md:py-44 bg-surface">
      <div className="container-luxe">
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="font-display text-7xl md:text-8xl text-gold leading-none">"</span>
          <blockquote className="-mt-4 font-display text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.25] text-primary italic tracking-tight">
            Clarity comes before confidence.
            <br />
            When people learn to think clearly,
            <br />
            communication becomes natural.
          </blockquote>
          <figcaption className="mt-10 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
            <span className="rule-gold" />
            Govind Mishra
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
