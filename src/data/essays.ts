export type Essay = {
  slug: string;
  cat: string;
  title: string;
  excerpt: string;
  read: string;
  body: string[];
};

export const essays: Essay[] = [
  {
    slug: "confidence-is-prepared-clarity",
    cat: "Essay",
    title: "Confidence is Prepared Clarity",
    excerpt:
      "We mistake confidence for personality. In truth, it is the residue of having thought a thing through.",
    read: "6 min read",
    body: [
      "We have been taught to read confidence on the surface — the firm handshake, the steady gaze, the easy voice. But surfaces lie. The person who stammers through a first sentence and then speaks with quiet authority is not less confident than the polished performer. They are differently prepared.",
      "Confidence is not a personality trait. It is the residue of having thought a thing through. When you have sat with a question long enough to see its edges, the room cannot rattle you, because the room is not where the work happened.",
      "This is why preparation is not the enemy of presence — it is the only honest path to it. The leaders I admire have all done their thinking before they entered the room. What looks like ease is, in fact, the lightness of carrying something you already understand.",
      "Begin there. Not with technique. With clarity. The voice will follow.",
    ],
  },
  {
    slug: "communication-begins-with-thinking",
    cat: "Philosophy",
    title: "Communication Begins With Thinking",
    excerpt:
      "Before we shape sentences, we shape attention. The quality of our words tracks the quality of our noticing.",
    read: "8 min read",
    body: [
      "Most communication training begins at the wrong end. It teaches the mouth before the mind. It polishes phrases that were never thought.",
      "Before we shape sentences, we shape attention. What we attend to becomes what we can say. The quality of our words tracks the quality of our noticing — nothing more.",
      "To speak well, then, is first to see well. To listen long enough that the other person becomes more than a projection. To sit with a problem long enough that it stops shouting and starts speaking.",
      "When thinking comes first, communication stops being performance. It becomes contact.",
    ],
  },
  {
    slug: "discipline-builds-freedom",
    cat: "Discipline",
    title: "Discipline Builds Freedom",
    excerpt:
      "The disciplined life is not narrow — it is the only kind of life wide enough to hold our deepest commitments.",
    read: "5 min read",
    body: [
      "We picture discipline as a kind of cage — small, gray, joyless. But the people who live disciplined lives describe the opposite. They describe space. They describe the room to do work that matters.",
      "Discipline is what protects a serious commitment from the noise of a casual day. Without it, every interruption wins. With it, the important things have a place to live.",
      "Freedom is not the absence of structure. It is the presence of the right one. Build the structure that lets your deepest commitments survive your most ordinary mornings.",
    ],
  },
  {
    slug: "the-power-of-attention",
    cat: "Presence",
    title: "The Power of Attention",
    excerpt:
      "Attention is the currency of leadership. Spend it carelessly and nothing else you do will compound.",
    read: "7 min read",
    body: [
      "Attention is the most under-priced thing a leader gives. It costs almost nothing to deliver and almost everything to withhold.",
      "People can feel where your attention lives. They can feel it in a meeting, in a hallway, in a five-minute conversation that you treated as five real minutes rather than a thing to get through.",
      "Spend attention carefully. It is the only investment that compounds in two directions — in the people you give it to, and in the clarity it returns to you.",
    ],
  },
  {
    slug: "motivation-vs-systems",
    cat: "Systems",
    title: "Motivation vs Systems",
    excerpt:
      "Motivation is a mood. Systems are the architecture that protect your work from the weather of your mood.",
    read: "6 min read",
    body: [
      "Motivation is a mood. It arrives, it leaves, it sometimes betrays you on the morning you need it most. To build a life on motivation is to build a house on weather.",
      "Systems are different. A system is the small, repeatable architecture that does the work even when you do not feel like working. It is what carries you across the days you cannot carry yourself.",
      "Stop asking how to feel more motivated. Start asking what system would make the question irrelevant.",
    ],
  },
  {
    slug: "leadership-through-presence",
    cat: "Leadership",
    title: "Leadership Through Presence",
    excerpt:
      "People do not follow titles. They follow a quality of attention they can feel in the room.",
    read: "9 min read",
    body: [
      "Authority is given by an organization. Leadership is given by a room. The two are not the same and pretending otherwise is the source of a great deal of avoidable confusion.",
      "People do not follow titles. They follow a quality of attention they can feel — a steadiness that says, I have thought about this, I see you, I will not leave halfway through.",
      "Cultivate that quality first. The title, when it comes, will sit more naturally on shoulders that have already learned to carry the weight.",
    ],
  },
];

export const getEssay = (slug: string) => essays.find((e) => e.slug === slug);
