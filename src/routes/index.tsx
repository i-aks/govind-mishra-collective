import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { SiteFooter } from "@/components/site/SiteFooter";

// Code-split below-the-fold sections to shrink initial JS payload
const Services = lazy(() => import("@/components/site/Services").then(m => ({ default: m.Services })));
const Insights = lazy(() => import("@/components/site/Insights").then(m => ({ default: m.Insights })));
const Speaking = lazy(() => import("@/components/site/Speaking").then(m => ({ default: m.Speaking })));
const Testimonials = lazy(() => import("@/components/site/Testimonials").then(m => ({ default: m.Testimonials })));
const Gallery = lazy(() => import("@/components/site/Gallery").then(m => ({ default: m.Gallery })));
const Philosophy = lazy(() => import("@/components/site/Philosophy").then(m => ({ default: m.Philosophy })));
const Contact = lazy(() => import("@/components/site/Contact").then(m => ({ default: m.Contact })));

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

function SectionFallback() {
  return <div className="min-h-[400px]" aria-hidden />;
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<SectionFallback />}>
          <Services />
          <Insights />
          <Speaking />
          <Testimonials />
          <Gallery />
          <Philosophy />
          <Contact />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}
