import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout, Photo, Eyebrow, Action, makeHead } from "@/components/site";
import { courses, whatsapp } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () =>
    makeHead(
      "IELTS, PTE & Study Abroad in Meerut",
      "Let you speak better. 23 years of IELTS, PTE, TOEFL, CELPIP, spoken English and study abroad guidance in Meerut. IDP Certified Training Partner.",
    ),
  component: Home,
});

const WORDS = ["Hello", "Hallo", "Hola", "Bonjour", "नमस्ते"];
const STATS = [
  ["23", "Years"],
  ["4.6★", "Google rating"],
  ["388", "Google reviews"],
];
const WHY = [
  ["IDP certified", "Official IDP Certified Training Partner for IELTS."],
  ["23 years in Meerut", "Two decades of language training and student guidance."],
  ["Start to visa", "Coaching, counselling, applications and visa support in one team."],
];

function Home() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, []);
  const next = (i + 2) % WORDS.length;
  const heroImg = courses[0]!.image;
  return (
    <SiteLayout>
      {/* Hero */}
<section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-[1.1fr_1fr] lg:px-8 lg:py-24">
  <div>
    <Eyebrow>Language training · Study abroad · Meerut</Eyebrow>
    <h1 className="font-display text-6xl font-extrabold leading-[0.95] sm:text-7xl lg:text-8xl">
      Let you <span className="text-primary">speak</span> better.
    </h1>
    <p className="mt-6 max-w-lg text-lg text-muted-foreground">IELTS, PTE, TOEFL and CELPIP coaching, spoken English and foreign languages, plus one team from counselling to visa.</p>
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Action href={whatsapp("Hi! I'd like to book a free demo class.")}>Book a free demo class</Action>
      <Link to="/courses" className="inline-flex h-12 items-center justify-center rounded-sm border-2 border-ink px-6 font-bold hover:bg-ink hover:text-ink-foreground">See all courses</Link>
    </div>
  </div>
  <div className="relative mx-auto h-72 w-full max-w-sm sm:h-[26rem]" aria-hidden>
    <div className="animate-floaty absolute left-0 top-4 flex h-44 w-64 items-center justify-center bubble-h bg-primary sm:h-60 sm:w-80">
      <span key={i} className="animate-word font-display text-5xl font-extrabold text-primary-foreground sm:text-6xl">{WORDS[i]}</span>
    </div>
    <div className="animate-floaty absolute bottom-2 right-0 flex h-32 w-48 items-center justify-center bubble-h-r bg-secondary [animation-delay:-3s] sm:h-44 sm:w-60">
      <span key={next} className="animate-word font-display text-4xl font-extrabold text-secondary-foreground">{WORDS[next]}</span>
    </div>
  </div>
</section>

      {/* Trust bar */}
      <section className="bg-ink px-5 py-8 text-ink-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-4 text-center lg:px-8">
          {STATS.map(([v, l]) => (
            <div key={l}>
              <p className="font-display text-3xl font-extrabold text-secondary md:text-5xl">{v}</p>
              <p className="text-xs text-ink-foreground/70 md:text-sm">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <Eyebrow>Courses</Eyebrow>
        <h2 className="max-w-2xl font-display text-4xl font-extrabold md:text-5xl">
          Pick your path.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 6).map((c) => (
            <Link
              key={c.slug}
              to="/courses/$slug"
              params={{ slug: c.slug }}
              className="group block bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-tl-[3rem]">
                <Photo
                  src={c.image}
                  alt={c.name}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border-b-4 border-primary p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-coral-deep">
                  {c.category}
                </p>
                <h3 className="mt-1 font-display text-2xl font-extrabold">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/courses" className="mt-8 inline-block font-bold text-coral-deep">
          View all courses →
        </Link>
      </section>

      {/* Why us */}
      <section className="bg-muted px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <div className="absolute -bottom-3 -left-3 h-28 w-28 bg-primary" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-br-[5rem] rounded-tl-md">
              <Photo src={courses[1]?.image ?? heroImg} alt="Classroom training" />
            </div>
          </div>
          <div>
            <Eyebrow>Why The Howard's</Eyebrow>
            <h2 className="font-display text-4xl font-extrabold md:text-5xl">
              23 years of making Meerut speak better.
            </h2>
            <ul className="mt-8 space-y-6">
              {WHY.map(([t, d], n) => (
                <li key={t} className="flex gap-4">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center font-display font-extrabold ${n % 2 ? "bubble-h-r bg-secondary" : "bubble-h bg-primary text-primary-foreground"}`}
                  >
                    {n + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold">{t}</h3>
                    <p className="text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Study abroad */}
      <section className="bg-ink px-5 py-20 text-ink-foreground">
        <div className="mx-auto max-w-7xl lg:px-8">
          <Eyebrow>Study abroad</Eyebrow>
          <h2 className="max-w-3xl font-display text-4xl font-extrabold md:text-5xl">
            UK, Canada, Australia, USA, Singapore, France. One team from start to visa.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Action
              href={whatsapp("Hi! I'd like to book a free study abroad counselling session.")}
            >
              Free counselling
            </Action>
            <Link
              to="/study-abroad"
              className="inline-flex h-12 items-center rounded-sm border-2 border-ink-foreground/30 px-6 font-bold hover:bg-ink-foreground hover:text-ink"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      {/* Classroom strip */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <Eyebrow>Inside the classroom</Eyebrow>
        <h2 className="font-display text-4xl font-extrabold md:text-5xl">Where it happens.</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {courses.slice(0, 4).map((c) => (
            <div key={c.slug} className="aspect-[4/5] overflow-hidden">
              <Photo src={c.image} alt={`${c.name} class`} />
            </div>
          ))}
        </div>
        <Link to="/gallery" className="mt-6 inline-block font-bold text-coral-deep">
          See the gallery →
        </Link>
      </section>

      {/* CTA */}
      <section className="bg-primary px-5 py-16 text-center text-primary-foreground">
        <h2 className="font-display text-4xl font-extrabold md:text-5xl">Ready to speak better?</h2>
        <p className="mt-3">Book a free demo class. No obligation.</p>
        <a
          href={whatsapp("Hi! I'd like to book a free demo class.")}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex h-12 items-center rounded-sm bg-ink px-7 font-bold text-ink-foreground"
        >
          Book on WhatsApp
        </a>
      </section>
    </SiteLayout>
  );
}
