import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, SectionIntro, Action, makeHead } from "@/components/site";
import { courses, whatsapp } from "@/lib/site-data";
import { GOALS, QUESTIONS, levelFor } from "@/lib/level-test";
import { ScoreGuide } from "@/components/score-guide";

export const Route = createFileRoute("/level-test")({
  head: () =>
    makeHead(
      "Free Language Assessment",
      "Take a quick English level check online, then book your free language assessment at The Howards Council in Meerut.",
    ),
  component: LevelTestPage,
});

type Goal = (typeof GOALS)[number];

function LevelTestPage() {
  const [goal, setGoal] = useState<Goal | null>(null);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");

  const englishQuiz = goal !== null && goal.course !== "";
  const finished = englishQuiz && step >= QUESTIONS.length;
  const level = levelFor(score);
  const recommended = goal ? courses.find((c) => c.slug === goal.course) : undefined;

  const restart = () => {
    setGoal(null);
    setStep(0);
    setScore(0);
  };

  const message = `Hi! I'm ${name.trim() || "a student"}. I took the online level check (${level.name}, ${score}/${QUESTIONS.length}). My goal: ${goal?.label}. I'd like to book my free language assessment at the centre.`;

  return (
    <SiteLayout>
      <SectionIntro
        eyebrow="Free language assessment"
        title="Find your level in 3 minutes."
        description="Answer a few questions for an indicative level. Then book your free assessment at our centre, where our trainers check your speaking, listening, reading and writing in person."
      />
      <section className="mx-auto max-w-3xl px-5 pb-24 lg:px-8">
        <div className="border bg-card p-6 sm:p-10">
          {/* 1. Goal */}
          {goal === null && (
            <div>
              <h2 className="font-display text-3xl font-extrabold">What do you want to achieve?</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {GOALS.map((g) => (
                  <button
                    key={g.label}
                    type="button"
                    onClick={() => setGoal(g)}
                    className="min-h-14 border-2 px-5 py-3 text-left font-medium transition-colors hover:border-primary hover:bg-muted"
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 2. Foreign languages: assessed at the centre */}
          {goal !== null && !englishQuiz && (
            <div>
              <h2 className="font-display text-3xl font-extrabold">{goal.label}</h2>
              <p className="mt-4 text-muted-foreground">
                German, Spanish and French levels are best checked in person. Book your free
                assessment and our trainers will place you in the right class.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Action
                  href={whatsapp(
                    `Hi! I'd like to book my free language assessment. I'm interested in: ${goal.label}.`,
                  )}
                >
                  Book my free assessment
                </Action>
                <button type="button" onClick={restart} className="text-sm font-bold underline">
                  Start again
                </button>
              </div>
            </div>
          )}

          {/* 3. Questions */}
          {englishQuiz && !finished && (
            <div key={step}>
              <div className="mb-8 flex gap-1.5" aria-hidden>
                {QUESTIONS.map((_, i) => (
                  <span key={i} className={`h-2 flex-1 ${i < step ? "bg-primary" : "bg-muted"}`} />
                ))}
              </div>
              <p className="text-sm font-bold text-muted-foreground">
                Question {step + 1} of {QUESTIONS.length}
              </p>
              <h2 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
                {QUESTIONS[step]!.q}
              </h2>
              <div className="mt-6 grid gap-3">
                {QUESTIONS[step]!.options.map((o, i) => (
                  <button
                    key={o}
                    type="button"
                    onClick={() => {
                      if (i === QUESTIONS[step]!.answer) setScore((s) => s + 1);
                      setStep((s) => s + 1);
                    }}
                    className="min-h-12 border-2 px-5 py-3 text-left font-medium transition-colors hover:border-primary hover:bg-muted"
                  >
                    {o}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={restart}
                className="mt-6 text-sm text-muted-foreground underline"
              >
                Change my goal
              </button>
            </div>
          )}

          {/* 4. Result */}
          {finished && (
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-coral-deep">
                Your indicative level
              </p>
              <h2 className="mt-2 font-display text-5xl font-extrabold">{level.name}</h2>
              <p className="mt-3 text-muted-foreground">
                {score} of {QUESTIONS.length} correct. {level.note}
              </p>
              {recommended && (
                <div className="mt-6 border-l-4 border-primary bg-muted p-5">
                  <p className="text-sm font-bold">Recommended for your goal</p>
                  <Link
                    to="/courses/$slug"
                    params={{ slug: recommended.slug }}
                    className="font-display text-2xl font-extrabold hover:text-coral-deep"
                  >
                    {recommended.name} →
                  </Link>
                </div>
              )}
              <p className="mt-6 text-sm text-muted-foreground">
                This online check is only an indicator. Your free assessment at our centre gives you
                an accurate level across all four skills.
              </p>
              <label className="mt-6 block text-sm font-bold" htmlFor="lt-name">
                Your name (optional)
              </label>
              <input
                id="lt-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                className="mt-2 min-h-12 w-full border-2 bg-background px-4 outline-none focus:border-primary"
              />
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Action href={whatsapp(message)}>Book my free assessment</Action>
                <button type="button" onClick={restart} className="text-sm font-bold underline">
                  Retake the test
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      <ScoreGuide />
    </SiteLayout>
  );
}
