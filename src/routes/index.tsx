import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Insights } from "@/components/site/Insights";
import { Speaking } from "@/components/site/Speaking";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Philosophy } from "@/components/site/Philosophy";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Govind Mishra — Thinking & Communication Guide" },
      {
        name: "description",
        content:
          "Govind Mishra helps professionals, leaders, and institutions think clearly, communicate calmly, and lead authentically. Executive coaching, keynotes, and corporate training.",
      },
      {
        property: "og:title",
        content: "Govind Mishra — Thinking & Communication Guide",
      },
      {
        property: "og:description",
        content:
          "Clarity of thought. Authentic confidence. Meaningful communication. Coaching and keynotes for leaders and institutions.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Govind Mishra",
          alternateName: "Govind Kumar Mishra",
          jobTitle: "Thinking & Communication Guide",
          description:
            "Executive communication coach, keynote speaker, and corporate trainer helping professionals think clearly, communicate calmly, and lead authentically.",
          knowsAbout: [
            "Executive Communication",
            "Public Speaking",
            "Leadership Development",
            "Emotional Intelligence",
            "Corporate Training",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Insights />
        <Speaking />
        <Testimonials />
        <Gallery />
        <Philosophy />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
