import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, SectionIntro, MentorPhoto, Eyebrow, makeHead } from "@/components/site";
import { photos } from "@/lib/site-data";
export const Route = createFileRoute("/about")({
  head: () =>
    makeHead(
      "About Us",
      "Learn about The Howard's Council, language training in Meerut since 2003.",
    ),
  component: Page,
});
function Page() {
  return (
    <SiteLayout>
      <SectionIntro
        eyebrow="About The Howard's Council"
        title="A trusted name in language training since 2003."
        description="For more than two decades, The Howard's Council has helped learners in Meerut build stronger language skills, prepare with confidence and communicate better."
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="absolute -bottom-3 -left-3 h-28 w-28 bg-primary" />
          <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-br-[5rem] rounded-tl-md">
            <MentorPhoto />
          </div>
        </div>

        <div>
          <Eyebrow>Founder & Mentor</Eyebrow>

          <h2 className="font-display text-4xl font-extrabold md:text-5xl">Saurabh Sharma</h2>

          <p className="mt-3 font-display text-xl font-bold text-coral-deep">
            IELTS IDP Certified Trainer · 23 Years of Experience
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            With more than two decades of experience in language training, Saurabh Sharma has built
            The Howard's Council around a practical and learner-focused approach to language
            education. His experience in IELTS preparation and English language training reflects a
            commitment to helping students build stronger skills, greater confidence and a clear
            path towards their goals.
          </p>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            As a mentor, he continues to focus on meaningful learning, individual guidance and
            preparation that goes beyond simply completing a course.
          </p>
        </div>
      </div>
      <section className="bg-muted px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <Eyebrow>Our vision</Eyebrow>
              <h2 className="font-display text-4xl font-extrabold md:text-5xl">
                Helping people find their voice.
              </h2>
            </div>

            <div>
              <p className="text-xl leading-relaxed text-foreground">
                Our vision is to make language learning more practical, personal and purposeful —
                helping learners communicate with confidence in classrooms, workplaces and the wider
                world.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                We believe strong language skills are not only about examinations or certificates.
                They are about being able to express yourself clearly, connect with others and move
                towards your goals with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
