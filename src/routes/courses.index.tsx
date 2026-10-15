import { createFileRoute, Link } from "@tanstack/react-router";
import { courses } from "@/lib/site-data";
import { SiteLayout, SectionIntro, Photo, AssessmentBanner, makeHead } from "@/components/site";

export const Route = createFileRoute("/courses/")({
  head: () =>
    makeHead(
      "English & Language Courses in Meerut",
      "Explore IELTS, PTE, TOEFL, CELPIP, Spoken English, Business English, German, Spanish, French and Personality Development courses in Meerut.",
    ),
  component: CoursesPage,
});

const GROUPS = [
  {
    id: "test-prep",
    title: "Test preparation",
    text: "Focused preparation for the English tests you need for your next step.",
    slugs: ["ielts", "pte", "toefl", "celpip"],
  },
  {
    id: "english",
    title: "English & communication",
    text: "Speak clearly, write professionally and present yourself with confidence.",
    slugs: [
      "spoken-english",
      "business-english",
      "interview-preparation",
      "personality-development",
    ],
  },
  {
    id: "languages",
    title: "Foreign languages",
    text: "Learn a new language from the first word, with speaking practice from day one.",
    slugs: ["german", "spanish", "french"],
  },
] as const;

type Course = (typeof courses)[number];

function pick(slugs: readonly string[]): Course[] {
  return slugs.map((s) => courses.find((c) => c.slug === s)).filter((c): c is Course => Boolean(c));
}

function CourseCard({ c }: { c: Course }) {
  return (
    <Link
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
        <h3 className="font-display text-2xl font-extrabold">{c.name}</h3>
        <p className="mt-2 text-muted-foreground">{c.tagline}</p>
        <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {c.overview}
        </p>
        <span className="mt-auto pt-6 font-bold text-coral-deep">Explore course →</span>
      </div>
    </Link>
  );
}

function CoursesPage() {
  return (
    <SiteLayout>
      <SectionIntro
        eyebrow="Courses"
        title="Courses built around your goals."
        description="Explore IELTS, PTE, TOEFL, CELPIP, English language and foreign language courses designed for practical learning and real progress."
      />
      <nav
        aria-label="Course groups"
        className="mx-auto flex max-w-7xl flex-wrap gap-3 px-5 pb-4 lg:px-8"
      >
        {GROUPS.map((g) => (
          <a
            key={g.id}
            href={`#${g.id}`}
            className="border-2 px-5 py-2 text-sm font-bold transition-colors hover:border-primary hover:bg-muted"
          >
            {g.title}
          </a>
        ))}
      </nav>

      {GROUPS.map((g) => (
        <section key={g.id} id={g.id} className="mx-auto max-w-7xl scroll-mt-24 px-5 py-12 lg:px-8">
          <h2 className="font-display text-4xl font-extrabold md:text-6xl">{g.title}</h2>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{g.text}</p>
          <div
            className={`mt-8 grid gap-6 sm:grid-cols-2 ${g.slugs.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
          >
            {pick(g.slugs).map((c) => (
              <CourseCard key={c.slug} c={c} />
            ))}
          </div>
        </section>
      ))}

      <AssessmentBanner />
    </SiteLayout>
  );
}
