import { Section } from "./Section";
import { motion } from "framer-motion";
import keynote from "@/assets/gallery-keynote.webp";
import workshop from "@/assets/gallery-workshop.webp";
import hands from "@/assets/gallery-hands.webp";
import audience from "@/assets/gallery-audience.webp";
import coaching from "@/assets/gallery-coaching.webp";

const items = [
  { src: keynote, alt: "Govind Mishra delivering a keynote", span: "row-span-2" },
  { src: workshop, alt: "Corporate training workshop", span: "" },
  { src: audience, alt: "Leadership conference audience", span: "" },
  { src: coaching, alt: "One-on-one executive coaching", span: "row-span-2" },
  { src: hands, alt: "Speaker mid-gesture on stage", span: "" },
];

export function Gallery() {
  return (
    <Section
      eyebrow="In the room"
      title="Moments from the work."
      intro={<p>Keynotes, workshops, coaching, and corporate leadership programs.</p>}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px] gap-4">
        {items.map((it, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
            className={`relative overflow-hidden group ${it.span}`}
          >
            <img
              src={it.src}
              alt={it.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
