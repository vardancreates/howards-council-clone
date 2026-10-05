import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout, SectionIntro, Action, makeHead } from "@/components/site";
import { courses, phone, phoneLabel, whatsapp } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/contact")({
  head: () =>
    makeHead(
      "Contact",
      "Visit The Howard’s Council in Begum Bagh, Meerut or enquire about courses and free demo classes.",
    ),
  component: Page,
});
function Page() {
  const [f, setF] = useState({ name: "", phone: "", course: "IELTS", message: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    window.open(
      whatsapp(`Hi! I'm ${f.name} (${f.phone}). I'm interested in ${f.course}. ${f.message}`),
      "_blank",
    );
  };
  const input = "min-h-12 w-full rounded-sm border bg-background px-4";
  return (
    <SiteLayout>
      <SectionIntro
        eyebrow="Contact The Howards Council"
        title="Let’s talk about your next step."
        description="Visit The Howards Council in Begum Bagh, Meerut, call us, or send an enquiry to find the right course for your goals."
      />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-24 lg:grid-cols-2 lg:px-8">
        <div>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=The+Howard%27s+Council%2C+618%2C+Shiv+Mandir+Lane%2C+Begum+Bagh%2C+Meerut%2C+Uttar+Pradesh+250001"
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden rounded-md"
            aria-label="Get directions to The Howards Council"
          >
            <iframe
              title="The Howards Council on Google Maps"
              src="https://www.google.com/maps?q=The+Howard%27s+Council%2C+618%2C+Shiv+Mandir+Lane%2C+Begum+Bagh%2C+Meerut%2C+Uttar+Pradesh+250001&output=embed"
              className="pointer-events-none h-80 w-full border-0 transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </a>
          <div className="mt-6">
            <p className="text-lg font-bold">
              618, Shiv Mandir Lane, Begum Bagh,
              <br />
              Meerut, Uttar Pradesh 250001
            </p>

            <a
              href={`tel:${phone}`}
              className="mt-4 inline-block text-lg font-bold text-coral-deep"
            >
              {phoneLabel}
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=The+Howard%27s+Council%2C+618%2C+Shiv+Mandir+Lane%2C+Begum+Bagh%2C+Meerut%2C+Uttar+Pradesh+250001"
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-sm font-bold text-secondary"
            >
              Get directions →
            </a>
          </div>
          <div className="mt-6">
            <Action href={whatsapp("Hi! I'd like to know more about your courses.")}>
              Message on WhatsApp →
            </Action>
          </div>
        </div>
        <form onSubmit={submit} className="grid content-start gap-4 bg-muted p-6">
          <h2 className="font-display text-3xl font-extrabold">Tell us what you need.</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Share your details and learning goal. We'll help you understand the right course or
            preparation path.
          </p>
          <input
            required
            aria-label="Your name"
            placeholder="Your name"
            className={input}
            value={f.name}
            onChange={(e) => setF({ ...f, name: e.target.value })}
          />
          <input
            required
            type="tel"
            aria-label="Phone number"
            placeholder="Phone number"
            className={input}
            value={f.phone}
            onChange={(e) => setF({ ...f, phone: e.target.value })}
          />
          <select
            aria-label="Course"
            className={input}
            value={f.course}
            onChange={(e) => setF({ ...f, course: e.target.value })}
          >
            {courses.map((c) => (
              <option key={c.slug}>{c.name}</option>
            ))}
          </select>
          <textarea
            aria-label="Message"
            placeholder="Message (optional)"
            className={`${input} min-h-28 py-3`}
            value={f.message}
            onChange={(e) => setF({ ...f, message: e.target.value })}
          />
          <Button className="h-12 rounded-sm">Send on WhatsApp →</Button>
        </form>
      </div>
    </SiteLayout>
  );
}
