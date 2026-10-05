import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout, SectionIntro, Photo, Action, makeHead } from "@/components/site";

import { whatsapp } from "@/lib/site-data";

import result1 from "@/assets/results/result-1.jpg";
import result2 from "@/assets/results/result-2.jpg";
import result3 from "@/assets/results/result-3.jpg";
import result4 from "@/assets/results/result-4.jpg";
import result5 from "@/assets/results/result-5.jpg";
import result6 from "@/assets/results/result-6.jpg";
import result7 from "@/assets/results/result-7.jpg";
import result8 from "@/assets/results/result-8.jpg";
import result9 from "@/assets/results/result-9.jpg";
import result10 from "@/assets/results/result-10.jpg";

export const Route = createFileRoute("/results")({
  head: () =>
    makeHead(
      "Results",
      "Explore student results and achievements from The Howards Council, Meerut.",
    ),
  component: ResultsPage,
});

const RESULTS = [
  [result1, "Student result"],
  [result2, "Student result"],
  [result3, "IELTS score card"],
  [result4, "Student achievement"],
  [result5, "Course result"],
  [result6, "IELTS score card"],
  [result7, "Student result"],
  [result8, "Student achievement"],
  [result9, "Course result"],
  [result10, "IELTS score card"],
] as const;

function ResultsPage() {
  return (
    <SiteLayout>
      <SectionIntro
        eyebrow="Results"
        title="Real students. Real scores."
        description="A look at the results and achievements of learners who have trained with The Howards Council."
      />

      {/* Key stats */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 pb-16 sm:grid-cols-3 lg:px-8">
        {[
          ["23", "Years of experience"],
          ["4.6★", "Google rating"],
          ["388", "Google reviews"],
        ].map(([value, label]) => (
          <div key={label} className="border-t-4 border-primary pt-4">
            <p className="font-display text-4xl font-extrabold md:text-6xl">{value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{label}</p>
          </div>
        ))}
      </section>

      {/* Results gallery */}
      <section className="bg-muted px-5 py-20">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-coral-deep">
              Student results
            </p>

            <h2 className="mt-2 font-display text-4xl font-extrabold md:text-5xl">
              See the results for yourself.
            </h2>

            <p className="mt-4 text-lg text-muted-foreground">
              Browse real result and score-card images from our learners.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RESULTS.map(([src, label]) => (
              <div key={label} className="group overflow-hidden bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <Photo
                    src={src}
                    alt={label}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="border-b-4 border-primary p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-coral-deep">
                    Result
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold">{label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 text-center">
        <h2 className="font-display text-4xl font-extrabold md:text-5xl">
          Want to know what you can achieve?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Talk to our team about your goals, course options and preparation.
        </p>

        <div className="mt-7">
          <Action href={whatsapp("Hi! I'd like to know more about your results.")}>
            Talk to us →
          </Action>
        </div>
      </section>
    </SiteLayout>
  );
}
