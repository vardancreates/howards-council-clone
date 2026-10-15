import { Link } from "@tanstack/react-router";
import { Eyebrow } from "@/components/site";
import type { CourseDetail } from "@/lib/course-details";

export function CourseFacts({ d }: { d: CourseDetail }) {
  return (
    <section className="border-b bg-card">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 lg:px-8">
        {d.facts.map((f) => (
          <div key={f.label}>
            <dt className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {f.label}
            </dt>
            <dd className="mt-1 font-display text-2xl font-extrabold">{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function CourseDetailSections({ d }: { d: CourseDetail }) {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <Eyebrow>How the test works</Eyebrow>
        <h2 className="font-display text-4xl font-extrabold">{d.partsTitle}</h2>
        <div className="mt-8 grid gap-px overflow-hidden border bg-border md:grid-cols-2">
          {d.parts.map((p, i) => (
            <div key={p.name} className="bg-card p-7">
              <p className="text-sm font-bold text-coral-deep">0{i + 1}</p>
              <h3 className="mt-2 font-display text-2xl font-extrabold">{p.name}</h3>
              <p className="mt-1 text-sm font-bold">{p.time}</p>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.what}</p>
            </div>
          ))}
        </div>
      </section>

      {d.versions && (
        <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
          <Eyebrow>Versions</Eyebrow>
          <h2 className="font-display text-4xl font-extrabold">Choose the right version.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {d.versions.map((v) => (
              <div key={v.name} className="border-t-4 border-primary bg-muted p-7">
                <h3 className="font-display text-2xl font-extrabold">{v.name}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="bg-muted px-5 py-16">
        <div className="mx-auto max-w-7xl lg:px-8">
          <Eyebrow>Marking scheme</Eyebrow>
          <h2 className="font-display text-4xl font-extrabold">How you are marked.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {d.marking.map((m) => (
              <div key={m.title} className="bg-card p-7">
                <h3 className="font-display text-xl font-extrabold">{m.title}</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {m.criteria.map((c) => (
                    <li key={c}>✓ &nbsp;{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {d.scoreNote && <p className="mt-6 max-w-2xl font-medium">{d.scoreNote}</p>}
          {d.showBandGuide && (
            <Link
              to="/level-test"
              hash="score-guide"
              className="mt-4 inline-block font-bold text-coral-deep"
            >
              See what each band means →
            </Link>
          )}
        </div>
      </section>
    </>
  );
}

export function CourseSteps({ steps }: { steps: CourseDetail["steps"] }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <Eyebrow>How we prepare you</Eyebrow>
      <h2 className="font-display text-4xl font-extrabold">Your path to progress.</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.title} className="border-t-2 border-primary pt-5">
            <p className="text-sm font-bold text-coral-deep">STEP {i + 1}</p>
            <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function DetailFaq({ items }: { items: CourseDetail["faq"] }) {
  return (
    <>
      {items.map((it) => (
        <details key={it.q} className="py-5">
          <summary className="cursor-pointer font-bold">{it.q}</summary>
          <p className="mt-3 text-muted-foreground">{it.a}</p>
        </details>
      ))}
    </>
  );
}
