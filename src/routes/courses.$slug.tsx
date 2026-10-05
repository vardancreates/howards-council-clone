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
        : "Explore courses at The Howards Council.",
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
                <Action href={whatsapp(`Hi! I'd like to know more about ${c.name}.`)}>
                  Enquire on WhatsApp →
                </Action>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -bottom-3 -left-3 h-28 w-28 bg-secondary" />
            <div className="relative aspect-[16/9] overflow-hidden rounded-br-[5rem] rounded-tl-md">
              <Photo src={c.image} alt={`${c.name} language training at The Howards Council`} />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <Eyebrow>About this course</Eyebrow>
          <h2 className="font-display text-4xl font-extrabold">Learn with a clear purpose.</h2>
          <div className="mt-10">
            <Eyebrow>Who it's for</Eyebrow>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{c.audience}</p>
          </div>
        </div>
        <div className="bg-muted p-8">
          <Eyebrow>What you’ll work on</Eyebrow>
          <ul className="mt-2 space-y-5">
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
          <Eyebrow>Start learning</Eyebrow>
          <h2 className="font-display text-4xl font-extrabold">Find your right batch.</h2>
          <p className="mt-4 text-ink-foreground/70">
            Contact us for current batch timings, availability and course details.
          </p>
          <div className="mt-7">
            <Action
              href={whatsapp(
                `Hi! I'd like to know about the current ${c.name} batches, timings and availability.`,
              )}
            >
              Ask about batches →
            </Action>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 py-20">
        <Eyebrow>Questions</Eyebrow>
        <h2 className="font-display text-4xl font-extrabold">Good to know before you start.</h2>
        <div className="mt-8 divide-y border-y">
          <details className="py-5">
            <summary className="cursor-pointer font-bold">Is a demo class available?</summary>
            <p className="mt-3 text-muted-foreground">
              Contact us to check current demo class availability and book a session.
            </p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer font-bold">
              How do I find the right class for me?
            </summary>
            <p className="mt-3 text-muted-foreground">
              Contact us with your learning goal and preferred schedule, and we'll help you
              understand the available options for {c.name}.
            </p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer font-bold">
              How can I get course fees and details?
            </summary>
            <p className="mt-3 text-muted-foreground">
              Contact us for the latest fee information, course details and available options for{" "}
              {c.name}.
            </p>
          </details>
        </div>
        <div className="mt-9">
          <Action href={whatsapp(`Hi! I'd like to know more about ${c.name}.`)}>
            Talk to us on WhatsApp →
          </Action>
        </div>
      </section>
    </SiteLayout>
  );
}
