import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { essays, getEssay } from "@/data/essays";

export const Route = createFileRoute("/essays/$slug")({
  loader: ({ params }) => {
    const essay = getEssay(params.slug);
    if (!essay) throw notFound();
    return { essay };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.essay.title} — Govind Mishra` },
          { name: "description", content: loaderData.essay.excerpt },
          { property: "og:title", content: loaderData.essay.title },
          { property: "og:description", content: loaderData.essay.excerpt },
        ]
      : [],
  }),
  component: EssayPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Essay not found.</p>
    </div>
  ),
  errorComponent: ({ reset }) => {
    const router = useRouter();
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="text-sm text-primary underline"
        >
          Try again
        </button>
      </div>
    );
  },
});

function EssayPage() {
  const { essay } = Route.useLoaderData();
  const idx = essays.findIndex((e) => e.slug === essay.slug);
  const next = essays[(idx + 1) % essays.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="container-luxe pt-32 md:pt-40 pb-24 max-w-3xl">
        <Link
          to="/"
          hash="insights"
          className="text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-primary transition-colors"
        >
          ← Back to essays
        </Link>

        <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-gold">{essay.cat}</span>
          <span className="h-px w-6 bg-border" />
          <span>{essay.read}</span>
        </div>

        <h1 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] text-primary tracking-tight">
          {essay.title}
        </h1>

        <p className="mt-6 font-display italic text-xl md:text-2xl text-secondary leading-snug">
          {essay.excerpt}
        </p>

        <div className="mt-12 space-y-7 text-base md:text-lg leading-relaxed text-secondary">
          {essay.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-10">
          <p className="eyebrow">Next essay</p>
          <Link
            to="/essays/$slug"
            params={{ slug: next.slug }}
            className="mt-3 inline-flex items-baseline gap-3 font-display text-2xl md:text-3xl text-primary hover:text-secondary transition-colors"
          >
            {next.title}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
