import { Link } from "react-router-dom";

const sections = [
  {
    title: "Information we collect",
    content: (
      <>
        <p>
          When you contact us, we may collect your name, phone number, email
          address, service address, and project details. This information may
          come through our website forms or Facebook and Instagram lead forms.
        </p>
        <p className="mt-4">
          We may also receive basic website analytics, such as device type and
          the pages visited, to help us understand how people use our site.
        </p>
      </>
    ),
  },
  {
    title: "How we use it",
    content: (
      <p>
        We use this information to respond to quote requests, provide design
        consultations and mockups, schedule installations, and follow up by
        phone, text, or email about your request.
      </p>
    ),
  },
  {
    title: "Sharing",
    content: (
      <p>
        We do not sell or rent personal information. We share it only with
        service providers needed to run the business, such as website hosting
        and form handling providers, Meta for ad lead forms, and our phone and
        messaging provider. We may also share information when required by law.
      </p>
    ),
  },
  {
    title: "Ads and cookies",
    content: (
      <p>
        We advertise on Facebook and Instagram. Those platforms and our site
        may use cookies or similar technology. You can control these settings
        through your browser and Meta ad settings.
      </p>
    ),
  },
  {
    title: "Retention and security",
    content: (
      <p>
        We keep information only as long as needed to serve inquiries and
        customers. We also take reasonable steps to protect the information we
        keep.
      </p>
    ),
  },
  {
    title: "Your choices",
    content: (
      <p>
        Email{" "}
        <a
          href="mailto:info@jollydecoco.com"
          className="font-medium text-holiday-green underline underline-offset-4"
        >
          info@jollydecoco.com
        </a>{" "}
        to ask to view, correct, or delete your information or to stop being
        contacted. Reply STOP to any text message to opt out.
      </p>
    ),
  },
  {
    title: "Children",
    content: <p>Our services are not directed to children under 13.</p>,
  },
  {
    title: "Changes",
    content: (
      <p>
        We may update this policy from time to time. The effective date of this
        policy is September 18, 2026.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <section className="bg-primary py-16 text-background sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">
            The Jolly Deco Co LLC
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-background/80">
            Effective date: September 18, 2026
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-lg leading-relaxed text-foreground">
            <section>
              <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                Who we are
              </h2>
              <p className="mt-4">
                The Jolly Deco Co LLC is a holiday lighting installation
                business serving Cumming, GA and nearby areas. Contact us at{" "}
                <a
                  href="mailto:info@jollydecoco.com"
                  className="font-medium text-holiday-green underline underline-offset-4"
                >
                  info@jollydecoco.com
                </a>{" "}
                or{" "}
                <a
                  href="tel:7707443965"
                  className="font-medium text-holiday-green underline underline-offset-4"
                >
                  (770) 744-3965
                </a>
                .
              </p>
            </section>

            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-4">{section.content}</div>
              </section>
            ))}

            <p className="border-t border-primary/10 pt-8 text-base text-muted-foreground">
              Questions about this policy? <Link to="/contact" className="font-medium text-holiday-green underline underline-offset-4">Contact us.</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
