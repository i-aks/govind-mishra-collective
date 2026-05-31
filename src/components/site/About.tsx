import { Section } from "./Section";
import { motion } from "framer-motion";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Philosophy"
      title="Communication begins with thinking."
      intro={
        <p>
          Communication is not a performance skill. It is a thinking skill. The clearest
          speakers are not the loudest — they are the ones who have done the quiet work
          of understanding what they actually mean.
        </p>
      }
    >
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7 space-y-6 text-base md:text-lg leading-relaxed text-secondary"
        >
          <p>
            For over fifteen years, Govind Mishra has worked with professionals,
            leaders, educators, and institutions to help them develop clarity of
            thought, authentic confidence, emotional intelligence, and meaningful
            communication.
          </p>
          <p>
            His approach blends contemplative practice with practical craft —
            training the inner observer alongside the outer voice. The result is a
            calm, considered presence that holds attention without demanding it.
          </p>
          <p>
            From boardrooms and government institutions to classrooms and
            community halls, his work consistently returns to one principle:
            <span className="text-primary font-medium">
              {" "}clarity is the foundation of everything.
            </span>
          </p>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="border-l border-gold pl-6 py-2 space-y-6">
            {[
              ["Clarity", "of thought before clarity of expression"],
              ["Calm", "presence over performance"],
              ["Craft", "communication as a lifelong discipline"],
              ["Character", "leadership rooted in inner authority"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="font-display text-xl text-primary">{k}</p>
                <p className="text-sm text-muted-foreground mt-1">{v}</p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </Section>
  );
}
