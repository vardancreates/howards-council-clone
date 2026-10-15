import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, SectionIntro, makeHead } from "@/components/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    makeHead(
      "Privacy Policy",
      "Privacy Policy for The Howards Council, a language training institute in Meerut.",
    ),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <SectionIntro
        eyebrow="Privacy Policy"
        title="Your privacy matters."
        description="This policy explains how The Howards Council handles information shared through this website."
      />

      <section className="mx-auto max-w-4xl px-5 pb-24 lg:px-8">
        <div className="space-y-12">
          <section>
            <h2 className="font-display text-3xl font-extrabold">Information you provide</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              When you contact The Howards Council through this website, you may provide information
              such as your name, phone number, email address, course interest and other details you
              choose to share.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-extrabold">How we use your information</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Information you provide may be used to respond to your enquiry, provide information
              about courses and help you understand available learning options.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-extrabold">WhatsApp and external services</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              This website may provide links to WhatsApp, Google Maps and other external services.
              When you use those services, your information is handled according to the privacy
              policies and terms of the respective service providers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-extrabold">Website information</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We do not use this page to collect sensitive personal information. Please avoid
              submitting passwords, financial information or other sensitive information through
              general website enquiries.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-extrabold">
              Student results and photographs
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              This website may display student achievements, examination results, photographs and
              testimonials to present the educational activities and achievements of The Howards
              Council. Where such material identifies an individual, it should be published only
              where the institute has an appropriate lawful basis and any required permission or
              consent.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              If you believe that your personal information or an identifiable image has been
              published incorrectly or without appropriate permission, please contact The Howards
              Council using the contact details provided on this website. Requests will be reviewed
              in accordance with applicable law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-extrabold">
              Copyright and use of website images
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Website text, branding, photographs, student result images and other materials may be
              protected by copyright or other applicable rights. Content owned by or licensed to The
              Howards Council must not be reproduced, republished, distributed or used commercially
              without the appropriate permission, except as permitted by applicable law.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Third-party images and materials remain the property of their respective rights
              holders. If you wish to reuse any material, please obtain permission from the relevant
              rights holder before doing so.
            </p>
          </section>

          <section>
            <h2 className="font-display text-3xl font-extrabold">Contact</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              If you have questions about this Privacy Policy or how your information is handled,
              please contact The Howards Council using the contact details provided on this website.
            </p>
          </section>
        </div>
      </section>
    </SiteLayout>
  );
}
