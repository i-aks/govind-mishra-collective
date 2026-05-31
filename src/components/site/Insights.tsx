import { Section } from "./Section";
import { motion } from "framer-motion";

const articles = [
  {
    cat: "Essay",
    title: "Confidence is Prepared Clarity",
    excerpt:
      "We mistake confidence for personality. In truth, it is the residue of having thought a thing through.",
    read: "6 min read",
  },
  {
    cat: "Philosophy",
    title: "Communication Begins With Thinking",
    excerpt:
      "Before we shape sentences, we shape attention. The quality of our words tracks the quality of our noticing.",
    read: "8 min read",
  },
  {
    cat: "Discipline",
    title: "Discipline Builds Freedom",
    excerpt:
      "The disciplined life is not narrow — it is the only kind of life wide enough to hold our deepest commitments.",
    read: "5 min read",
  },
  {
    cat: "Presence",
    title: "The Power of Attention",
    excerpt:
      "Attention is the currency of leadership. Spend it carelessly and nothing else you do will compound.",
    read: "7 min read",
  },
  {
    cat: "Systems",
    title: "Motivation vs Systems",
    excerpt:
      "Motivation is a mood. Systems are the architecture that protect your work from the weather of your mood.",
    read: "6 min read",
  },
  {
    cat: "Leadership",
    title: "Leadership Through Presence",
    excerpt:
      "People do not follow titles. They follow a quality of attention they can feel in the room.",
    read: "9 min read",
  },
];

export function Insights() {
  return (
    <Section
      id="insights"
      eyebrow="Featured Insights"
      title="Essays on thinking, communication & leadership."
      intro={
        <p>
          Short essays and longer reflections from a fifteen-year practice in
          coaching and teaching.
        </p>
      }
      className="bg-surface"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
        {articles.map((a, i) => (
          <motion.article
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.06 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/3] mb-6 overflow-hidden bg-primary/[0.04] border border-border relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-[5rem] text-primary/8 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="text-gold">{a.cat}</span>
              <span className="h-px w-6 bg-border" />
              <span>{a.read}</span>
            </div>
            <h3 className="mt-4 font-display text-2xl text-primary leading-snug group-hover:text-secondary transition-colors">
              {a.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {a.excerpt}
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
              Read essay <span aria-hidden className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
