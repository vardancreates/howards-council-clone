import { createFileRoute, Link } from "@tanstack/react-router";
import { courses } from "@/lib/site-data";
import { SiteLayout, SectionIntro, Photo, makeHead } from "@/components/site";
export const Route = createFileRoute("/courses/")({
  head: () =>
    makeHead(
      "English & Language Courses in Meerut",
      "Explore IELTS, PTE, TOEFL, CELPIP, Spoken English, Business English, German, Spanish, French and Personality Development courses in Meerut.",
    ),
  component: CoursesPage,
});
function CoursesPage() {
  return (
    <SiteLayout>
      <SectionIntro
        eyebrow="Courses"
        title="Courses built around your goals."
        description="Explore IELTS, PTE, TOEFL, CELPIP, English language and foreign language courses designed for practical learning and real progress."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-24 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {courses.map((c) => (
          <Link
            key={c.slug}
            to="/courses/$slug"
            params={{ slug: c.slug }}
            className="group flex h-full flex-col overflow-hidden rounded-md border bg-card"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Photo
                src={c.image}
                alt={`${c.name} course at The Howards Council`}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-coral-deep">
                {c.category}
              </p>

              <h2 className="mt-2 font-display text-2xl font-extrabold">{c.name}</h2>

              <p className="mt-2 text-muted-foreground">{c.tagline}</p>

              <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {c.overview}
              </p>

              <span className="mt-auto pt-6 font-bold text-coral-deep">Explore course →</span>
            </div>
          </Link>
        ))}
      </section>
    </SiteLayout>
  );
}
