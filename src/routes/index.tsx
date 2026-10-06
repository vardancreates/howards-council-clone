import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout, Photo, MentorPhoto, Eyebrow, Action, makeHead } from "@/components/site";
import { classroomPhotos, courses, whatsapp } from "@/lib/site-data";
import result1 from "@/assets/results/result-1.jpg";
import result2 from "@/assets/results/result-2.jpg";
import result3 from "@/assets/results/result-3.jpg";
import learnWithPurpose from "@/assets/photos/learn-with-purpose.webp";
import heroBackground from "@/assets/photos/howards-hero-bg.webp";

export const Route = createFileRoute("/")({
  head: () =>
    makeHead(
      "IELTS, PTE & English Language Training in Meerut",
      "IELTS, PTE, TOEFL, CELPIP, spoken English and foreign language training in Meerut.",
    ),
  component: Home,
});

const WORDS = ["Hello", "Hallo", "Hola", "Bonjour", "नमस्ते"];
const STATS = [
  ["23", "Years of language training"],
  ["10", "Language & test programs"],
  ["4", "Core language skills"],
];
const WHY = [
  [
    "Experienced training",
    "Learn with a practical approach built around language skills and confidence.",
  ],
  ["23 years in Meerut", "More than two decades of language training and student guidance."],
  [
    "Goal-focused learning",
    "Focused preparation designed around your language and communication goals.",
  ],
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
      <section className="relative overflow-hidden">
        {/* Subtle hero background image */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.45] sm:opacity-[0.5]"
          style={{ backgroundImage: `url(${heroBackground})` }}
          aria-hidden
        />

        {/* Protect the text area and softly fade the image */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/55 via-background/20 to-transparent"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-[1.1fr_1fr] lg:px-8 lg:py-24">
          <div>
            <Eyebrow>LANGUAGE TRAINING · MEERUT</Eyebrow>

            <h1 className="font-display text-6xl font-extrabold leading-[0.95] sm:text-7xl lg:text-8xl">
              Let you <span className="text-primary">speak</span> better.
            </h1>

            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              IELTS, PTE, TOEFL and CELPIP coaching, spoken English and foreign languages — built
              around practical learning, confidence and real results.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Action href={whatsapp("Hi! I'd like to book a free demo class.")}>
                Book a free demo class
              </Action>

              <Link
                to="/courses"
                className="inline-flex h-12 items-center justify-center rounded-sm border-2 border-ink px-6 font-bold hover:bg-ink hover:text-ink-foreground"
              >
                See all courses
              </Link>
            </div>
          </div>

          {/* Existing animated language bubbles */}
          <div className="relative mx-auto h-72 w-full max-w-sm sm:h-[26rem]" aria-hidden>
            <div className="animate-floaty absolute left-0 top-4 flex h-44 w-64 items-center justify-center bubble-h bg-primary sm:h-60 sm:w-80">
              <span
                key={i}
                className="animate-word font-display text-5xl font-extrabold text-primary-foreground sm:text-6xl"
              >
                {WORDS[i]}
              </span>
            </div>

            <div className="animate-floaty absolute bottom-2 right-0 flex h-32 w-48 items-center justify-center bubble-h-r bg-secondary [animation-delay:-3s] sm:h-44 sm:w-60">
              <span
                key={next}
                className="animate-word font-display text-4xl font-extrabold text-secondary-foreground"
              >
                {WORDS[next]}
              </span>
            </div>
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

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <Eyebrow>Welcome to The Howards Council</Eyebrow>

            <h2 className="font-display text-4xl font-extrabold md:text-5xl">
              Language learning that moves with you.
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Whether you are preparing for an English language test, improving your communication or
            learning a foreign language, our courses are designed to help you learn with clarity,
            practise with purpose and grow in confidence.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <Eyebrow>Courses</Eyebrow>
        <h2 className="max-w-2xl font-display text-4xl font-extrabold md:text-5xl">
          Find the right course for your goals.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Focused language training designed to build your skills, confidence and communication.
        </p>
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
              <Photo
                src={learnWithPurpose}
                alt="Students learning and communicating in an English language class"
              />
            </div>
          </div>
          <div>
            <Eyebrow>Why The Howards</Eyebrow>
            <h2 className="font-display text-4xl font-extrabold md:text-5xl">
              Learn with purpose. Grow with confidence.
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
      {/* Learning approach */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Our approach</Eyebrow>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <h2 className="font-display text-4xl font-extrabold md:text-5xl">
                Learn with a clear path.
              </h2>

              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                Practical language training focused on building skills, confidence and measurable
                progress.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                ["01", "Understand", "Build a strong foundation in the language."],
                ["02", "Practise", "Apply what you learn through guided practice."],
                ["03", "Progress", "Keep improving with focused preparation."],
              ].map(([number, title, description]) => (
                <div key={number} className="border-t-4 border-primary pt-4">
                  <p className="text-xs font-bold tracking-widest text-coral-deep">{number}</p>

                  <h3 className="mt-2 font-display text-xl font-bold">{title}</h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mentor */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -bottom-3 -left-3 h-28 w-28 bg-primary" />
            <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-br-[5rem] rounded-tl-md">
              <MentorPhoto />
            </div>
          </div>

          <div>
            <Eyebrow>Meet your mentor</Eyebrow>

            <h2 className="font-display text-4xl font-extrabold md:text-5xl">Saurabh Sharma</h2>

            <p className="mt-3 font-display text-xl font-bold text-coral-deep">
              IELTS IDP Certified Trainer · Language Trainer · 23 Years of Experience
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              With 23 years of experience in language training, Saurabh Sharma brings a structured
              and practical approach to English language learning and IELTS preparation. As an IELTS
              IDP Certified Trainer, he focuses on helping learners strengthen their language
              skills, build confidence and prepare with greater clarity.
            </p>

            <Link to="/about" className="mt-7 inline-flex font-bold text-coral-deep">
              Meet the team →
            </Link>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <Eyebrow>Google reviews</Eyebrow>

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-4xl font-extrabold md:text-5xl">
              What our students say.
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Real experiences from learners who have trained with The Howards Council.
            </p>
          </div>

          <a
            href="https://www.google.com/search?q=The+Howards+Council+Meerut"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 font-bold text-coral-deep"
          >
            View on Google →
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Mukul Goswami",
              review:
                "I enrolled for IELTS Coaching at Howard's Council and got an 8 Bands score. The learning was very detailed and Saurabh sir guided me through every single step of the process, which led me to this amazing score. Definitely recommended, amazing teaching not only for english but many other languages too.",
            },
            {
              name: "Anubhav Sonkar",
              review:
                "THE HOWARD'S COUNCIL provides exceptional guidance for IELTS and a wide range of other courses in a highly supportive and motivating environment. With their expert faculty, personalized attention, and result-oriented approach, I was able to achieve an overall band score of 7. I am truly grateful for their continuous support and dedication throughout my preparation journey.",
            },
            {
              name: "Fardeen Khan",
              review:
                "Your English speaking course has been an incredible journey for me, and I cannot thank you enough for your support and guidance. With your help, I have seen tremendous improvement in my language proficiency and interview skills. The practical techniques and interactive sessions gave me the confidence to excel in interviews and secure a position in a reputable company.",
            },
            {
              name: "Saloni Rani",
              review:
                "Learning under Saurabh Sir at The Howard's Council has been truly transformational. He is extremely dedicated, knowledgeable, and supportive. His way of teaching builds confidence and makes even difficult topics easy to understand. The institute also offers foreign language courses like Spanish, German, and French.",
            },
            {
              name: "Manish Sharma",
              review:
                "I am highly satisfied with The Howards Council. The institute provides excellent training in English, French, German, and Spanish languages. Teachers are knowledgeable, supportive, and interactive. The learning environment is friendly and motivating. Classes are well-structured, helping students improve communication skills and confidence effectively.",
            },
            {
              name: "Vaishali Tomar",
              review:
                "The teachers at THE HOWARD'S COUNCIL are incredibly patient, friendly, and make learning truly enjoyable. Their innovative teaching methods kept me engaged throughout the course. I've learned a wide range of English skills here, and I can confidently say that my fluency, personality, and confidence have improved significantly.",
            },
          ].map((review) => (
            <article
              key={review.name}
              className="flex h-full flex-col rounded-2xl border border-border bg-background p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-bold">{review.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Google Review</p>
                </div>

                <div
                  className="text-sm tracking-[0.15em] text-coral-deep"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </div>
              </div>

              <p className="mt-5 flex-1 text-sm leading-7 text-muted-foreground">
                “{review.review}”
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <div className="max-w-2xl">
          <Eyebrow>FAQ</Eyebrow>

          <h2 className="font-display text-4xl font-extrabold md:text-5xl">Questions, answered.</h2>

          <p className="mt-4 text-lg text-muted-foreground">
            A few things learners often want to know before getting started.
          </p>
        </div>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {[
            [
              "Which courses does The Howards Council offer?",
              "We offer language training and preparation for IELTS, PTE, TOEFL and CELPIP, along with spoken English and foreign language learning.",
            ],
            [
              "Do I need prior English knowledge to join?",
              "Course suitability depends on your current level and learning goal. Speak with our team to find the right starting point.",
            ],
            [
              "Can I get guidance before choosing a course?",
              "Yes. You can contact our team to discuss your goals and understand which course or preparation path is suitable for you.",
            ],
            [
              "Where is The Howards Council located?",
              "The Howards Council is based in Meerut. Contact us for the latest centre and course information.",
            ],
          ].map(([question, answer]) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-bold">
                {question}
                <span className="text-2xl font-normal transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Classroom strip */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <Eyebrow>Inside the classroom</Eyebrow>

        <h2 className="font-display text-4xl font-extrabold md:text-5xl">Where it happens.</h2>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {classroomPhotos.slice(0, 4).map((photo) => (
            <Link
              key={photo.src}
              to="/gallery"
              className="group block aspect-[4/5] overflow-hidden"
            >
              <Photo
                src={photo.src}
                alt={photo.alt}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          ))}
        </div>

        <Link to="/gallery" className="mt-6 inline-block font-bold text-coral-deep">
          See the gallery →
        </Link>
      </section>

      {/* Enquiry */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 bg-muted p-8 md:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Get started</Eyebrow>

            <h2 className="font-display text-4xl font-extrabold md:text-5xl">
              Not sure where to begin?
            </h2>

            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Tell us about your goal and our team can help you understand the right course or
              preparation path.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-7 font-bold text-primary-foreground"
            >
              Contact us →
            </Link>

            <a
              href={whatsapp("Hi! I'd like guidance about your courses.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-sm border-2 border-ink px-7 font-bold"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-5 py-16 text-center text-primary-foreground">
        <h2 className="font-display text-4xl font-extrabold md:text-5xl">
          Ready to take the next step?
        </h2>
        <p className="mt-3">Start your language learning journey with The Howards Council.</p>
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
