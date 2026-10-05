import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { courses, whatsapp } from "@/lib/site-data";
import { SiteLayout, Photo, Eyebrow, Action, makeHead } from "@/components/site";
export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = courses.find((c) => c.slug === params.slug);
    if (!course) throw notFound();
    return course;
  },
  head: ({ loaderData }) =>
    makeHead(
      loaderData?.name ?? "Course",
      loaderData
        ? `${loaderData.name} classes in Meerut. ${loaderData.overview}`
        : "Explore courses at The Howard’s Council.",
    ),
  component: CoursePage,
});
function CoursePage() {
  const c = Route.useLoaderData();
  return (
    <SiteLayout>
      <section className="bg-muted">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <Link to="/courses" className="text-sm font-bold text-coral-deep">
              ← All courses
            </Link>
            <div className="mt-9">
              <Eyebrow>{c.category}</Eyebrow>
              <h1 className="font-display text-5xl font-extrabold md:text-7xl">{c.name}</h1>
              <p className="mt-5 text-2xl font-medium">{c.tagline}</p>
              <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{c.overview}</p>
              <div className="mt-8">
                <Action href={whatsapp(`Hi! I'd like details about ${c.name} coaching.`)}>
                  Enquire on WhatsApp →
                </Action>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -bottom-3 -left-3 h-28 w-28 bg-secondary" />
            <div className="relative aspect-[16/9] overflow-hidden rounded-br-[5rem] rounded-tl-md">
              <Photo src={c.image} alt={`${c.name} course at The Howards Council`} />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <Eyebrow>About this course</Eyebrow>
          <h2 className="font-display text-4xl font-extrabold">Learn with a clear purpose.</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">{c.overview}</p>
          <Eyebrow>Who it's for</Eyebrow>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{c.audience}</p>
        </div>
        <div className="bg-muted p-8">
          <Eyebrow>What’s covered</Eyebrow>
          <ul className="space-y-5">
            {c.covered.map((x) => (
              <li key={x} className="border-b pb-4 font-medium">
                ✓ &nbsp;{x}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-ink px-5 py-16 text-ink-foreground">
        <div className="mx-auto max-w-7xl lg:px-8">
          <Eyebrow>Join a class</Eyebrow>
          <h2 className="font-display text-4xl font-extrabold">Batch timings</h2>
          <p className="mt-4 text-ink-foreground/70">
            Contact us for current batch timings and availability.
          </p>
          <div className="mt-7">
            <Action href={whatsapp(`Hi! What are the current ${c.name} batch timings?`)}>
              Ask about timings →
            </Action>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 py-20">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="font-display text-4xl font-extrabold">Good to know.</h2>
        <div className="mt-8 divide-y border-y">
          <details className="py-5">
            <summary className="cursor-pointer font-bold">Can I attend a free demo class?</summary>
            <p className="mt-3 text-muted-foreground">
              Yes. Contact us to book your free demo class.
            </p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer font-bold">How do I find the right batch?</summary>
            <p className="mt-3 text-muted-foreground">
              Message us with your preferred schedule and we'll share the latest options.
            </p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer font-bold">How do I find out the fees?</summary>
            <p className="mt-3 text-muted-foreground">
              Contact us for the current fee information for {c.name}.
            </p>
          </details>
        </div>
        <div className="mt-9">
          <Action href={whatsapp(`Hi! I'd like details about ${c.name} coaching.`)}>
            Enquire on WhatsApp →
          </Action>
        </div>
      </section>
    </SiteLayout>
  );
}
