import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  align = "left",
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container-luxe">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
        >
          {eyebrow && (
            <div
              className={`flex items-center gap-3 mb-5 ${
                align === "center" ? "justify-center" : ""
              }`}
            >
              <span className="rule-gold" />
              <span className="eyebrow">{eyebrow}</span>
            </div>
          )}
          <h2 className="font-display text-[clamp(1.9rem,3.8vw,3rem)] text-primary leading-[1.1] tracking-tight">
            {title}
          </h2>
          {intro && (
            <div className="mt-6 text-base md:text-lg leading-relaxed text-secondary">
              {intro}
            </div>
          )}
        </motion.div>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
