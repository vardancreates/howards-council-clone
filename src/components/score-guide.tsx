import { useState } from "react";
import { Link } from "@tanstack/react-router";

const BANDS = [
  {
    band: 1,
    label: "Non-user",
    text: "Essentially has no ability to use English beyond a few isolated words.",
    color: "#B91C1C",
  },
  {
    band: 2,
    label: "Intermittent user",
    text: "Has great difficulty understanding spoken and written English.",
    color: "#DC2626",
  },
  {
    band: 3,
    label: "Extremely limited user",
    text: "Conveys and understands only general meaning in very familiar situations.",
    color: "#EA580C",
  },
  {
    band: 4,
    label: "Limited user",
    text: "Has frequent problems understanding and expressing meaning in English.",
    color: "#D97706",
  },
  {
    band: 5,
    label: "Modest user",
    text: "Has partial command of English and copes with overall meaning in most situations, though mistakes are frequent.",
    color: "#CA8A04",
  },
  {
    band: 6,
    label: "Competent user",
    text: "Generally effective command of English despite some inaccuracies and misunderstandings.",
    color: "#65A30D",
  },
  {
    band: 7,
    label: "Good user",
    text: "Has operational command of English, with occasional inaccuracies or misunderstandings. Generally handles complex language well.",
    color: "#0D9488",
  },
  {
    band: 8,
    label: "Very good user",
    text: "Has fully operational command of English, with only occasional unsystematic inaccuracies.",
    color: "#0284C7",
  },
  {
    band: 9,
    label: "Expert user",
    text: "Has fully operational command of English, with complete understanding and fluent, accurate use.",
    color: "#1D4ED8",
  },
] as const;

const BAND_ZERO = {
  label: "Did not attempt the test",
  text: "Band 0 is used when a candidate did not answer the test questions.",
};

export function ScoreGuide({ compact = false }: { compact?: boolean }) {
  const [band, setBand] = useState(7);
  const [showZero, setShowZero] = useState(false);

  const current = BANDS[band - 1]!;
  const fill = ((band - 1) / 8) * 100;

  return (
    <section
      id={compact ? undefined : "score-guide"}
      className={`scroll-mt-24 px-5 ${compact ? "py-16" : "bg-muted py-20"}`}
    >
      <div className="mx-auto max-w-3xl lg:px-8">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-coral-deep">
          Understand your score
        </p>

        <h2 className="font-display text-4xl font-extrabold md:text-5xl">
          {compact ? "What does your IELTS band mean?" : "How IELTS scoring works"}
        </h2>

        {!compact && (
          <p className="mt-4 text-muted-foreground">
            IELTS reports a band score for Listening, Reading, Writing and Speaking. Your overall
            band is calculated from the average of these four scores and reported in whole or half
            bands. Select a band to explore its meaning.
          </p>
        )}

        <div className="mt-10 border bg-card p-6 sm:p-10">
          <div className="flex items-end justify-between gap-4">
            <p
              className="font-display text-7xl font-extrabold leading-none"
              style={{ color: showZero ? "#64748B" : current.color }}
              aria-hidden="true"
            >
              {showZero ? "0" : band}
            </p>

            <p className="text-right font-display text-2xl font-extrabold">
              {showZero ? BAND_ZERO.label : current.label}
            </p>
          </div>

          <div
            className="mt-6 h-2 bg-muted"
            role="progressbar"
            aria-label="IELTS band scale"
            aria-valuemin={1}
            aria-valuemax={9}
            aria-valuenow={showZero ? 0 : band}
          >
            <div
              className="h-2 transition-[width,background-color] duration-300"
              style={{
                width: showZero ? "0%" : `${fill}%`,
                backgroundColor: showZero ? "#64748B" : current.color,
              }}
            />
          </div>

          <input
            type="range"
            min={1}
            max={9}
            step={1}
            value={band}
            onChange={(e) => {
              setBand(Number(e.target.value));
              setShowZero(false);
            }}
            aria-label="IELTS band score"
            aria-valuetext={`Band ${band}, ${current.label}`}
            className="mt-4 h-10 w-full cursor-pointer"
            style={{ accentColor: current.color }}
          />

          <div
            className="flex justify-between px-1 text-xs font-bold text-muted-foreground"
            aria-hidden="true"
          >
            {BANDS.map((b) => (
              <button
                key={b.band}
                type="button"
                onClick={() => {
                  setBand(b.band);
                  setShowZero(false);
                }}
                className="rounded px-1 py-1 transition-colors hover:bg-muted"
                style={{
                  color: !showZero && band === b.band ? b.color : undefined,
                }}
                aria-label={`Select band ${b.band}: ${b.label}`}
                aria-pressed={!showZero && band === b.band}
              >
                {b.band}
              </button>
            ))}
          </div>

          <p className="mt-8 min-h-[3.5rem] text-lg" aria-live="polite">
            {showZero ? BAND_ZERO.text : current.text}
          </p>

          <button
            type="button"
            onClick={() => setShowZero((value) => !value)}
            className="mt-5 border px-4 py-2 text-sm font-bold transition-colors hover:bg-muted"
            aria-pressed={showZero}
          >
            {showZero ? "Return to bands 1–9" : "What does Band 0 mean?"}
          </button>

          <p className="mt-5 text-xs text-muted-foreground">
            Colours are illustrative and are not an official IELTS colour standard. Descriptions are
            summaries of IELTS band descriptors.
          </p>
        </div>

        {compact ? (
          <Link
            to="/level-test"
            hash="score-guide"
            className="mt-6 inline-block font-bold text-coral-deep"
          >
            Full score guide →
          </Link>
        ) : (
          <p className="mt-6 text-sm text-muted-foreground">
            Required scores vary by institution, course and other requirements. Always check
            directly with the organisation you are applying to. Read the official scoring
            information at{" "}
            <a
              href="https://ielts.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-coral-deep underline"
            >
              ielts.org
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}
