import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Menu, X, Phone, MessageCircle } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo.png";
const logo = { url: logoImg };
import { courses, mentor, phone, whatsapp } from "@/lib/site-data";

const nav = [
  { to: "/", label: "Home" },
  { to: "/results", label: "Results" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
export function Action({
  children,
  href,
  subtle = false,
  className = "",
}: {
  children: ReactNode;
  href: string;
  subtle?: boolean;
  className?: string;
}) {
  return (
    <Button
      asChild
      variant={subtle ? "outline" : "default"}
      className={`h-12 rounded-sm px-6 font-bold shadow-none ${className}`}
    >
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    </Button>
  );
}

export const makeHead = (title: string, description: string) => ({
  meta: [
    { title: `${title} | The Howards Council` },
    { name: "description", content: description },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: `${title} | The Howards Council` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 lg:px-8">
        <Link
          to="/"
          aria-label="The Howards Council home"
          onClick={() => setOpen(false)}
          className="shrink-0"
        >
          <img src={logo.url} alt="The Howards Council" className="h-14 w-auto" />
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 text-sm font-bold lg:flex xl:gap-7"
        >
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="hover:text-coral-deep data-[status=active]:text-coral-deep"
          >
            Home
          </Link>
          <div className="group relative">
            <Link
              to="/courses"
              className="flex items-center gap-1 hover:text-coral-deep data-[status=active]:text-coral-deep"
            >
              Courses <ChevronDown size={14} />
            </Link>
            <div className="invisible absolute left-0 top-full w-64 pt-5 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="border border-border bg-card p-2 shadow-xl">
                <Link to="/courses" className="block px-3 py-2 font-bold hover:bg-muted">
                  All courses
                </Link>
                {courses.map((c) => (
                  <Link
                    key={c.slug}
                    to="/courses/$slug"
                    params={{ slug: c.slug }}
                    className="block px-3 py-2 font-medium hover:bg-muted"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {nav.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-coral-deep data-[status=active]:text-coral-deep"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Action href={whatsapp("Hi! I'd like to book a free demo class.")}>
            Book Free Demo <ArrowRight size={16} />
          </Action>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav
          aria-label="Mobile navigation"
          className="max-h-[70vh] overflow-auto border-t bg-background px-5 py-3 lg:hidden"
        >
          <Link
            onClick={() => setOpen(false)}
            to="/courses"
            className="block border-b py-3 font-bold"
          >
            Courses
          </Link>
          {courses.map((c) => (
            <Link
              onClick={() => setOpen(false)}
              key={c.slug}
              to="/courses/$slug"
              params={{ slug: c.slug }}
              className="block py-2 pl-4 text-sm"
            >
              {c.name}
            </Link>
          ))}
          {nav.map((item) => (
            <Link
              onClick={() => setOpen(false)}
              key={item.to}
              to={item.to}
              className="block border-t py-3 font-bold"
            >
              {item.label}
            </Link>
          ))}
          <div className="py-3">
            <Action href={whatsapp("Hi! I'd like to book a free demo class.")}>
              Book Free Demo
            </Action>
          </div>
        </nav>
      )}
    </header>
  );
}
export function SiteFooter() {
  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=The+Howards+Council%2C+618%2C+Shiv+Mandir+Lane%2C+Begum+Bagh%2C+Meerut%2C+Uttar+Pradesh+250001";

  return (
    <>
      <footer className="bg-ink px-5 py-14 text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <img
              src={logo.url}
              alt="The Howards Council"
              className="h-16 w-auto bg-background p-1"
            />
            <p className="mt-5 max-w-xs text-sm text-ink-foreground/70">
              Language training in Meerut since 2003.
            </p>

            <h3 className="mt-7 font-display text-lg font-bold">Contact</h3>

            <a href={`tel:${phone}`} className="mt-3 inline-block text-lg font-bold text-secondary">
              099977 56675
            </a>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold">Explore</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {nav.map((item) => (
                <Link key={item.to} to={item.to} className="hover:text-secondary">
                  {item.label}
                </Link>
              ))}
              <Link to="/courses">Courses</Link>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold">Find us</h3>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-4 block overflow-hidden rounded-sm"
              aria-label="Get directions to The Howards Council"
            >
              <iframe
                title="The Howards Council location"
                src="https://www.google.com/maps?q=The+Howard%27s+Council%2C+618%2C+Shiv+Mandir+Lane%2C+Begum+Bagh%2C+Meerut%2C+Uttar+Pradesh+250001&output=embed"
                className="pointer-events-none h-44 w-full border-0 grayscale transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </a>

            <p className="mt-4 text-sm text-ink-foreground/70">
              618, Shiv Mandir Lane, Begum Bagh,
              <br />
              Meerut, Uttar Pradesh 250001
            </p>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-sm font-bold text-secondary"
            >
              Get directions →
            </a>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-wrap justify-between gap-2 border-t border-ink-foreground/20 pt-6 text-xs text-ink-foreground/60">
          <span>© {new Date().getFullYear()} The Howards Council</span>
          <a
            href="https://vebstudio.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-ink-foreground/80 transition-colors hover:text-secondary"
          >
            Website by Veb Studio
          </a>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-background p-2 shadow-lg md:hidden">
        <Button asChild variant="outline" className="h-12 rounded-sm">
          <a href={`tel:${phone}`}>
            <Phone size={17} /> Call
          </a>
        </Button>

        <Button
          asChild
          className="h-12 rounded-sm bg-whatsapp text-primary-foreground hover:bg-whatsapp/90"
        >
          <a
            href={whatsapp("Hi! I'd like to know more about your courses.")}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} /> WhatsApp
          </a>
        </Button>
      </div>
    </>
  );
}
export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-coral-deep">{children}</p>
  );
}
export function Photo({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${className}`} />
  );
}
export function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 lg:px-8 lg:pt-24">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[1.04] md:text-7xl">
        {title}
      </h1>
      {description && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

export function MentorPhoto() {
  if (mentor.photo) {
    return <Photo src={mentor.photo} alt={`${mentor.name}, mentor at The Howards Council`} />;
  }
  return (
    <div className="grid h-full w-full place-items-center bg-muted font-display text-8xl font-extrabold text-coral-deep">
      SS
    </div>
  );
}
