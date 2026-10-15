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
import result12 from "@/assets/results/result-12.jpg";
import result13 from "@/assets/results/result-13.jpg";
import result14 from "@/assets/results/result-14.jpg";

export const Route = createFileRoute("/results")({
  head: () =>
    makeHead(
      "Student Results from The Howards Council",
      "View student result highlights from The Howards Council, a language training institute in Meerut.",
    ),
  component: ResultsPage,
});

const RESULTS = [
  {
    image: result1,
    name: "Kashish",
    course: "IELTS",
    score: "Overall Bands 7.5",
    detail: "",
  },
  {
    image: result2,
    name: "Sameer Rizvi",
    course: "IELTS",
    score: "7.0 Bands",
    detail: "",
  },
  {
    image: result3,
    name: "Raman",
    course: "IELTS",
    score: "Overall Bands 7.0",
    detail: "",
  },
  {
    image: result4,
    name: "Mukul",
    course: "IELTS",
    score: "Overall Bands 8.0",
    detail: "",
  },
  {
    image: result5,
    name: "Anmol Lamba",
    course: "IELTS",
    score: "Overall Bands 7.5",
    detail: "",
  },
  {
    image: result6,
    name: "",
    course: "",
    score: "",
    detail: "",
  },
  {
    image: result7,
    name: "Surabhi",
    course: "IELTS",
    score: "Overall Bands 7.0",
    detail: "",
  },
  {
    image: result8,
    name: "Sushil Banjade",
    course: "IELTS",
    score: "Overall Bands 7.5",
    detail: "",
  },
  {
    image: result9,
    name: "",
    course: "",
    score: "",
    detail: "",
  },
  {
    image: result10,
    name: "Harjot Singh",
    course: "IELTS",
    score: "Overall Bands 7.0",
    detail: "",
  },
  {
    image: result12,
    name: "Arjun Punia",
    course: "IELTS",
    score: "Overall Bands 8.0",
    detail: "",
  },
  {
    image: result13,
    name: "Kashish",
    course: "PTE",
    score: "Overall Score 74",
    detail: "",
  },
  {
    image: result14,
    name: "Vaishali",
    course: "IELTS",
    score: "Overall Bands 8.0",
    detail: "",
  },

  // Add the verified 11th image here.
];

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
      ```tsx
      {/* Results gallery */}
      <section className="bg-muted px-5 py-20">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-coral-deep">
              Student achievements
            </p>

            <h2 className="mt-2 font-display text-4xl font-extrabold md:text-5xl">
              Every result has a story.
            </h2>

            <p className="mt-4 text-lg text-muted-foreground">
              Explore student achievements and the milestones behind their language-learning
              journeys.
            </p>
          </div>

          <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {RESULTS.map((result, index) => (
              <article key={result.image} className="group min-w-0">
                {/* Result image */}
                <div className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-card">
                  <Photo
                    src={result.image}
                    alt={
                      result.name
                        ? `${result.name} ${result.course} result`
                        : `Student result ${index + 1}`
                    }
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Result information */}
                <div className="flex min-h-[145px] flex-col border-b-2 border-primary py-5">
                  {result.name ? (
                    <>
                      <h3 className="font-display text-xl font-bold">{result.name}</h3>

                      <p className="mt-1 text-sm text-muted-foreground">{result.course}</p>

                      <p className="mt-3 font-display text-2xl font-bold">{result.score}</p>
                    </>
                  ) : (
                    <>
                      <p className="text-xs font-bold uppercase tracking-widest text-coral-deep">
                        Student achievement
                      </p>

                      <h3 className="mt-2 font-display text-xl font-bold">Student Result</h3>

                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        A milestone in their language-learning journey.
                      </p>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      ```
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
