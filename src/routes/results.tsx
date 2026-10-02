import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, SectionIntro, Action, makeHead } from "@/components/site";
import { whatsapp } from "@/lib/site-data";

export const Route = createFileRoute("/results")({
  head: () =>
    makeHead("Results", "Student results and testimonials from The Howard's Council, Meerut."),
  component: ResultsPage,
});

const STATS = [
  ["23", "Years of experience"],
  ["4.6★", "Google rating"],
  ["388", "Google reviews"],
];

type Item = { quote: string; name: string; detail: string };
// Replace with real testimonials when the owner sends them.
const SAMPLE = (who: string): Item[] =>
  [1, 2, 3].map((i) => ({
    quote: "Sample testimonial. Replace with a real quote.",
    name: `${who} name ${i}`,
    detail: "Course · Result",
  }));
const DATA: Record<string, Item[]> = { Students: SAMPLE("Student"), Parents: SAMPLE("Parent") };

function ResultsPage() {
  const [tab, setTab] = useState<keyof typeof DATA>("Students");
  return (
    <SiteLayout>
      <SectionIntro
        eyebrow="Results"
        title="Real students. Real scores."
        description="What our students and their parents say about learning with us."
      />
      <section className="mx-auto grid max-w-7xl grid-cols-3 gap-6 px-5 pb-16 lg:px-8">
        {STATS.map(([v, l]) => (
          <div key={l} className="border-t-4 border-primary pt-4">
            <p className="font-display text-4xl font-extrabold md:text-6xl">{v}</p>
            <p className="mt-1 text-sm text-muted-foreground">{l}</p>
          </div>
        ))}
      </section>
      <section className="bg-muted px-5 py-16">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="flex gap-2" role="tablist">
            {Object.keys(DATA).map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={`min-h-11 rounded-sm px-5 font-bold ${tab === t ? "bg-ink text-ink-foreground" : "bg-card"}`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {DATA[tab]!.map((x) => (
              <figure key={x.name} className="bg-card p-7">
                <blockquote className="text-lg leading-relaxed">“{x.quote}”</blockquote>
                <figcaption className="mt-5 text-sm">
                  <b>{x.name}</b>
                  <span className="text-muted-foreground"> · {x.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <h2 className="font-display text-3xl font-extrabold md:text-4xl">Score cards</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="grid aspect-[3/4] place-items-center border-2 border-dashed text-sm text-muted-foreground"
            >
              Score card {i}
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Action href={whatsapp("Hi! I'd like to know more about your results.")}>
            Talk to us →
          </Action>
        </div>
      </section>
    </SiteLayout>
  );
}
