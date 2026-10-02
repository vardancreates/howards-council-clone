import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import logo from "@/assets/logo.png.asset.json";
import worldMap from "@/assets/world-map.jpg";

const TITLE = "The Howard's Council — IELTS, PTE & Study Abroad in Meerut";
const DESC =
  "Let you speak better. 23 years of IELTS, PTE, TOEFL, CELPIP, spoken English and study abroad guidance in Meerut. IDP Certified Training Partner, 4.6 on Google.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "+919997756675";
const PHONE_LABEL = "099977 56675";
const wa = (msg: string) => `https://wa.me/919997756675?text=${encodeURIComponent(msg)}`;

/* ---------- small building blocks ---------- */

function Section({ id, eyebrow, title, children, tone = "light" }: { id: string; eyebrow: string; title: ReactNode; children: ReactNode; tone?: "light" | "muted" | "ink" }) {
  const bg = tone === "ink" ? "bg-ink text-ink-foreground" : tone === "muted" ? "bg-muted" : "bg-background";
  return (
    <section id={id} className={`${bg} scroll-mt-16 px-5 py-20 sm:py-28`}>
      <div className="mx-auto max-w-6xl">
        <p className={`text-sm font-bold uppercase tracking-widest ${tone === "ink" ? "text-secondary" : "text-coral-deep"}`}>{eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl">{title}</h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

function Btn({ href, children, variant = "primary", onClick, type }: { href?: string; children: ReactNode; variant?: "primary" | "outline" | "sky" | "whatsapp" | "light"; onClick?: () => void; type?: "submit" | "button" }) {
  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-coral-deep",
    sky: "bg-secondary text-secondary-foreground hover:brightness-95",
    outline: "border-2 border-ink text-foreground hover:bg-ink hover:text-ink-foreground",
    whatsapp: "bg-whatsapp text-primary-foreground hover:brightness-95",
    light: "border-2 border-ink-foreground/30 text-ink-foreground hover:bg-ink-foreground hover:text-ink",
  }[variant];
  const cls = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold transition-all active:scale-95 ${styles}`;
  if (href) return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={cls}>{children}</a>;
  return <button type={type ?? "button"} onClick={onClick} className={cls}>{children}</button>;
}

const WaIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.6 2.1 1.1 1 2.1 1.3 2.4 1.4.3.2.5.1.6 0l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.6-.1 1.2Z" /></svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" /></svg>
);

/* ---------- header ---------- */

function Header() {
  const links = [["#test-prep", "Test prep"], ["#languages", "Languages"], ["#study-abroad", "Study abroad"], ["#level-test", "Level test"], ["#contact", "Contact"]];
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="shrink-0" aria-label="The Howard's Council home">
          <img src={logo.url} alt="The Howard's Council" className="h-11 w-auto" width={252} height={136} />
        </a>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {links.map(([h, l]) => <a key={h} href={h} className="hover:text-coral-deep">{l}</a>)}
        </nav>
        <a href={`tel:${PHONE}`} className="hidden rounded-full bg-ink px-4 py-2 text-sm font-bold text-ink-foreground sm:inline-flex">{PHONE_LABEL}</a>
      </div>
    </header>
  );
}

/* ---------- hero ---------- */

const WORDS = ["Hello", "Hallo", "Hola", "Bonjour", "नमस्ते"];

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, []);
  const next = (i + 2) % WORDS.length;
  return (
    <section id="top" className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-5 py-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-sky-deep">Language training · Study abroad · Meerut</p>
          <h1 className="mt-4 text-6xl font-extrabold leading-[0.95] sm:text-7xl lg:text-8xl">
            Let you <span className="text-primary">speak</span> better.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">IELTS, PTE, TOEFL and CELPIP coaching, spoken English and foreign languages — plus one team to take you from counselling to visa.</p>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-bold">
            <li>23 years</li><li aria-hidden className="text-primary">•</li>
            <li>IDP Certified Training Partner</li><li aria-hidden className="text-primary">•</li>
            <li>4.6 ★ on Google (388 reviews)</li>
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Btn href={wa("Hi! I'd like to book a free demo class.")}>Book a free demo class</Btn>
            <Btn href="#level-test" variant="outline">Check your level</Btn>
          </div>
        </div>
        <div className="relative mx-auto h-72 w-full max-w-sm sm:h-96" aria-hidden>
          <div className="animate-floaty absolute left-0 top-4 flex h-44 w-64 items-center justify-center bubble-h bg-primary sm:h-56 sm:w-80">
            <span key={i} className="animate-word font-display text-5xl font-extrabold text-primary-foreground sm:text-6xl">{WORDS[i]}</span>
          </div>
          <div className="animate-floaty absolute bottom-2 right-0 flex h-32 w-48 items-center justify-center bubble-h-r bg-secondary [animation-delay:-3s] sm:h-40 sm:w-60">
            <span key={next} className="animate-word font-display text-4xl font-extrabold text-secondary-foreground">{WORDS[next]}</span>
          </div>
        </div>
      </div>
      <p className="sr-only">Hello, Hallo, Hola, Bonjour, Namaste</p>
    </section>
  );
}

/* ---------- 1. test prep ---------- */

const TESTS = [
  { name: "IELTS", sub: "Academic & General", color: "bg-primary text-primary-foreground", who: "Students heading to UK, Australia, Canada universities (Academic) and those migrating or working abroad (General).", covers: "Listening, Reading, Writing Task 1 & 2, Speaking interviews, full timed mocks." },
  { name: "PTE", sub: "Academic", color: "bg-secondary text-secondary-foreground", who: "Students who prefer a computer-based test with fast results, accepted in Australia, UK, NZ and Canada.", covers: "Templates for every task, AI-scored practice, speaking fluency and mock tests." },
  { name: "TOEFL", sub: "iBT", color: "bg-ink text-ink-foreground", who: "Students applying to USA and other universities that prefer TOEFL.", covers: "Integrated tasks, academic reading and lectures, note-taking, mocks." },
  { name: "CELPIP", sub: "General", color: "bg-accent text-accent-foreground", who: "Applicants for Canadian PR and citizenship.", covers: "Everyday Canadian English across all four skills, test strategy and mocks." },
];

function TestPrep() {
  const [open, setOpen] = useState<string | null>("IELTS");
  return (
    <Section id="test-prep" eyebrow="Test prep" title="Score the band your plan needs.">
      <div className="grid gap-4 md:grid-cols-2">
        {TESTS.map((t) => {
          const isOpen = open === t.name;
          return (
            <div key={t.name} className="overflow-hidden rounded-3xl border bg-card">
              <button onClick={() => setOpen(isOpen ? null : t.name)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 p-6 text-left">
                <div className="flex items-center gap-4">
                  <span className={`grid h-14 w-14 shrink-0 place-items-center bubble-h font-display text-sm font-extrabold ${t.color}`}>{t.name.slice(0, 2)}</span>
                  <div><h3 className="text-2xl font-extrabold">{t.name}</h3><p className="text-sm text-muted-foreground">{t.sub}</p></div>
                </div>
                <span className={`text-3xl font-light transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
              </button>
              {isOpen && (
                <div className="animate-fade-in space-y-4 border-t px-6 pb-6 pt-5 text-sm">
                  <div><p className="font-bold">Who it's for</p><p className="text-muted-foreground">{t.who}</p></div>
                  <div><p className="font-bold">What's covered</p><p className="text-muted-foreground">{t.covers}</p></div>
                  <div><p className="font-bold">Batch timings</p><p className="text-muted-foreground">[TIMINGS]</p></div>
                  <Btn variant="whatsapp" href={wa(`Hi! I'd like details about ${t.name} coaching.`)}><WaIcon /> Enquire on WhatsApp</Btn>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------- 2. languages ---------- */

const LANGS = [
  ["Spoken English", "Speak fluently and without hesitation."],
  ["Conversation Classes", "Real talk practice in small groups."],
  ["Business English", "Emails, meetings, interviews, presentations."],
  ["Personality Development", "Confidence, body language, public speaking."],
  ["German", "A1 to B1, for study and work in Germany."],
  ["Spanish", "Beginner to conversational Spanish."],
];

function Languages() {
  return (
    <Section id="languages" eyebrow="Languages & skills" title="Confidence you can hear." tone="muted">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LANGS.map(([n, d], idx) => (
          <div key={n} className="rounded-3xl bg-card p-6">
            <span className={`inline-block h-3 w-8 rounded-full ${idx % 2 ? "bg-secondary" : "bg-primary"}`} />
            <h3 className="mt-4 text-2xl font-extrabold">{n}</h3>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- 3. study abroad ---------- */

const COUNTRIES = [
  { n: "Canada", x: 20, y: 19 }, { n: "USA", x: 20.6, y: 31 }, { n: "UK", x: 48, y: 21 },
  { n: "France", x: 49.4, y: 27 }, { n: "Singapore", x: 78.4, y: 57 }, { n: "Australia", x: 85, y: 75 },
];
const STEPS = ["Counselling", "Course & country selection", "Applications", "Visa support"];

function StudyAbroad() {
  return (
    <Section id="study-abroad" eyebrow="Study abroad" title="Six destinations. One team from start to visa.">
      <div className="relative overflow-hidden rounded-3xl border bg-card">
        <img src={worldMap} alt="World map showing study destinations" loading="lazy" width={1600} height={800} className="w-full" />
        {COUNTRIES.map((c, i) => (
          <div key={c.n} className="absolute -translate-x-1/2 -translate-y-full" style={{ left: `${c.x}%`, top: `${c.y}%` }}>
            <span className={`block whitespace-nowrap px-2 py-1 text-[10px] font-bold sm:px-3 sm:text-sm ${i % 2 ? "bubble-h-r bg-secondary text-secondary-foreground" : "bubble-h bg-primary text-primary-foreground"}`}>{c.n}</span>
          </div>
        ))}
      </div>
      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <li key={s} className="rounded-3xl border p-6">
            <span className="font-display text-5xl font-extrabold text-primary">0{i + 1}</span>
            <p className="mt-2 text-lg font-bold">{s}</p>
          </li>
        ))}
      </ol>
      <div className="mt-8"><Btn href={wa("Hi! I'd like to book a free study abroad counselling session.")}>Book a free counselling session</Btn></div>
    </Section>
  );
}

/* ---------- 4. results ---------- */

function Counter({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => { const p = Math.min(1, (t - start) / 1400); setV(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el); return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{v.toFixed(decimals)}{suffix}</span>;
}

const TESTIMONIALS = Array.from({ length: 3 }, (_, i) => ({ q: "[TESTIMONIALS] — student quote goes here.", n: `Student name ${i + 1}`, r: "[STUDENT RESULTS]" }));

function Results() {
  const [t, setT] = useState(0);
  const stats: [ReactNode, string][] = [
    [<Counter to={23} />, "Years"], [<Counter to={4.6} decimals={1} suffix="★" />, "Google rating"], [<Counter to={388} />, "Reviews"],
    ["[STUDENT RESULTS]", "Students trained"], ["[STUDENT RESULTS]", "Band 7+ scorers"],
  ];
  return (
    <Section id="results" eyebrow="Results" title="Numbers we're proud of." tone="ink">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-5">
        {stats.map(([v, l], i) => (
          <div key={l} className={i === 4 ? "col-span-2 lg:col-span-1" : ""}>
            <p className={`font-display font-extrabold ${typeof v === "string" ? "text-xl text-ink-foreground/60" : "text-5xl text-secondary sm:text-6xl"}`}>{v}</p>
            <p className="mt-1 text-sm text-ink-foreground/70">{l}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 rounded-3xl border border-ink-foreground/15 p-8 sm:p-12">
        <blockquote className="font-display text-2xl font-bold sm:text-3xl">"{TESTIMONIALS[t].q}"</blockquote>
        <p className="mt-6 font-bold">{TESTIMONIALS[t].n} <span className="font-normal text-ink-foreground/60">· {TESTIMONIALS[t].r}</span></p>
        <div className="mt-8 flex items-center gap-3">
          <Btn variant="light" onClick={() => setT((t + TESTIMONIALS.length - 1) % TESTIMONIALS.length)}>←<span className="sr-only">Previous</span></Btn>
          <Btn variant="light" onClick={() => setT((t + 1) % TESTIMONIALS.length)}>→<span className="sr-only">Next</span></Btn>
          <div className="ml-2 flex gap-2">{TESTIMONIALS.map((_, i) => <span key={i} className={`h-2 rounded-full transition-all ${i === t ? "w-8 bg-primary" : "w-2 bg-ink-foreground/30"}`} />)}</div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- 5. level test ---------- */

const QUIZ = [
  { q: "She ___ to college every day.", o: ["go", "goes", "going", "gone"], a: 1 },
  { q: "If I ___ more time, I would learn German.", o: ["have", "had", "will have", "having"], a: 1 },
  { q: "Choose the correct sentence.", o: ["He don't like tea.", "He doesn't likes tea.", "He doesn't like tea.", "He not like tea."], a: 2 },
  { q: "I have lived in Meerut ___ 2015.", o: ["for", "from", "since", "by"], a: 2 },
  { q: "'Reluctant' most nearly means…", o: ["eager", "unwilling", "angry", "careful"], a: 1 },
];

function LevelTest() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const done = step >= QUIZ.length;
  const level = score <= 1 ? "Beginner" : score <= 3 ? "Intermediate" : "Advanced";
  const submit = (e: FormEvent) => {
    e.preventDefault();
    window.open(wa(`Hi! I'm ${name} (${phone}). I took the free level test: ${score}/5 (${level}). I'd like to book a free demo class.`), "_blank");
  };
  return (
    <Section id="level-test" eyebrow="Free level test" title="Where does your English stand? 5 questions." tone="muted">
      <div className="mx-auto max-w-2xl rounded-3xl bg-card p-6 sm:p-10">
        <div className="mb-8 flex gap-2">{QUIZ.map((_, i) => <span key={i} className={`h-2 flex-1 rounded-full ${i < step ? "bg-primary" : "bg-muted"}`} />)}</div>
        {!done ? (
          <div key={step} className="animate-fade-in">
            <p className="text-sm font-bold text-muted-foreground">Question {step + 1} of 5</p>
            <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">{QUIZ[step].q}</h3>
            <div className="mt-6 grid gap-3">
              {QUIZ[step].o.map((o, i) => (
                <button key={o} onClick={() => { if (i === QUIZ[step].a) setScore((s) => s + 1); setStep((s) => s + 1); }} className="min-h-12 rounded-2xl border-2 px-5 py-3 text-left font-medium transition-colors hover:border-secondary hover:bg-accent active:scale-[0.99]">{o}</button>
              ))}
            </div>
          </div>
        ) : (
          <form onSubmit={submit} className="animate-fade-in">
            <p className="text-sm font-bold text-muted-foreground">Your result</p>
            <h3 className="mt-2 text-4xl font-extrabold">{score}/5 · <span className="text-coral-deep">{level}</span></h3>
            <p className="mt-3 text-muted-foreground">Leave your details and we'll book a free demo class matched to your level.</p>
            <div className="mt-6 grid gap-3">
              <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" aria-label="Your name" className="min-h-12 rounded-2xl border-2 bg-background px-5 outline-none focus:border-secondary" />
              <input required type="tel" pattern="[0-9+ ]{10,15}" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" aria-label="Phone number" className="min-h-12 rounded-2xl border-2 bg-background px-5 outline-none focus:border-secondary" />
              <Btn type="submit">Book my free demo class</Btn>
              <button type="button" onClick={() => { setStep(0); setScore(0); }} className="text-sm text-muted-foreground underline">Retake the test</button>
            </div>
          </form>
        )}
      </div>
    </Section>
  );
}

/* ---------- 6. why us ---------- */

const WHY = [
  ["IDP certified", "An official IDP Certified Training Partner for IELTS."],
  ["Small batches", "Personal attention, every class."],
  ["Real exam-format mocks", "Practice in the exact format and timing of test day."],
  ["One team, start to visa", "Coaching, applications and visa support under one roof."],
];

function WhyUs() {
  return (
    <Section id="why" eyebrow="Why us" title="23 years of making Meerut speak better.">
      <div className="grid gap-px overflow-hidden rounded-3xl border bg-border sm:grid-cols-2">
        {WHY.map(([t, d], i) => (
          <div key={t} className="bg-card p-8">
            <span className={`grid h-10 w-10 place-items-center font-display font-extrabold ${i % 2 ? "bubble-h-r bg-secondary text-secondary-foreground" : "bubble-h bg-primary text-primary-foreground"}`}>{i + 1}</span>
            <h3 className="mt-5 text-2xl font-extrabold">{t}</h3>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- 7. FAQ ---------- */

const FAQS = [
  ["What are the fees?", "[FEES] — fees depend on the course and batch. Message us on WhatsApp for the current fee list."],
  ["How big are the batches?", "We keep batches small so every student gets speaking time and personal feedback."],
  ["Can I attend a demo class?", "Yes — your first demo class is free. Book it on WhatsApp or call us."],
  ["Do you help with test booking?", "Yes, as an IDP Certified Training Partner we guide you through booking your IELTS test date."],
  ["Do you provide visa support?", "Yes. Our team handles counselling, course and country selection, applications and visa support."],
];

function FAQ() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Questions, answered." tone="muted">
      <div className="mx-auto max-w-3xl divide-y rounded-3xl bg-card">
        {FAQS.map(([q, a]) => (
          <details key={q} className="group p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
              {q}<span className="text-2xl font-light transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-muted-foreground">{a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

/* ---------- 8. contact ---------- */

function Contact() {
  const [f, setF] = useState({ name: "", phone: "", course: "IELTS", msg: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    window.open(wa(`Hi! I'm ${f.name} (${f.phone}). I'm interested in ${f.course}. ${f.msg}`.trim()), "_blank");
  };
  const input = "min-h-12 w-full rounded-2xl border-2 bg-background px-5 outline-none focus:border-secondary";
  return (
    <Section id="contact" eyebrow="Contact" title="Visit us in Begum Bagh.">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-3xl border">
            <iframe title="The Howard's Council on Google Maps" src="https://www.google.com/maps?q=618+Shiv+Mandir+Lane+Begum+Bagh+Meerut+Uttar+Pradesh+250001&output=embed" className="h-80 w-full" loading="lazy" />
          </div>
          <p className="mt-6 text-lg">618, Shiv Mandir Lane, Begum Bagh,<br />Meerut, Uttar Pradesh 250001</p>
          <a href={`tel:${PHONE}`} className="mt-2 inline-block font-display text-3xl font-extrabold text-coral-deep">{PHONE_LABEL}</a>
        </div>
        <form onSubmit={submit} className="grid gap-3 rounded-3xl bg-muted p-6 sm:p-8">
          <h3 className="text-2xl font-extrabold">Send an enquiry</h3>
          <input required className={input} placeholder="Your name" aria-label="Your name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
          <input required type="tel" className={input} placeholder="Phone number" aria-label="Phone number" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} />
          <select className={input} aria-label="Course" value={f.course} onChange={(e) => setF({ ...f, course: e.target.value })}>
            {["IELTS", "PTE", "TOEFL", "CELPIP", "Spoken English", "Business English", "German", "Spanish", "Study abroad counselling"].map((c) => <option key={c}>{c}</option>)}
          </select>
          <textarea className={`${input} min-h-28 py-3`} placeholder="Message (optional)" aria-label="Message" value={f.msg} onChange={(e) => setF({ ...f, msg: e.target.value })} />
          <Btn type="submit" variant="whatsapp"><WaIcon /> Send on WhatsApp</Btn>
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink px-5 pb-28 pt-12 text-ink-foreground md:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm sm:flex-row">
        <p>© {new Date().getFullYear()} The Howard's Council · Let you speak better</p>
        <p className="text-ink-foreground/70">Website by Veb Studio</p>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t bg-background/95 p-3 backdrop-blur md:hidden">
      <a href={`tel:${PHONE}`} className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink font-bold text-ink-foreground"><PhoneIcon /> Call</a>
      <a href={wa("Hi! I'd like to know more about your courses.")} target="_blank" rel="noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp font-bold text-primary-foreground"><WaIcon /> WhatsApp</a>
    </div>
  );
}

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero /><TestPrep /><Languages /><StudyAbroad /><Results /><LevelTest /><WhyUs /><FAQ /><Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
