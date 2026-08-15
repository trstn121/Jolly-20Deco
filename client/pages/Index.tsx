import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ServiceTierCard from "@/components/ServiceTierCard";
import {
  ChevronDown,
  ChevronUp,
  Mail,
  MapPin,
  Phone,
  Quote,
} from "lucide-react";

const completedWorkImage =
  "https://cdn.builder.io/api/v1/image/assets%2Fc46db2117e2947fb97b0993642d34356%2F4a0fd848ed144b91b2bede8b8448289a?format=webp&width=1600";

const serviceTiers = [
  {
    title: "Elegance",
    description: "A clean, classic roofline that makes your home feel ready for the season.",
    included: ["Roofline and eaves C9 lighting", "Warm-white lights"],
  },
  {
    title: "Elegance Plus",
    description: "Everything in Elegance, with the extra touches that bring the whole front yard together.",
    included: [
      "Everything in Elegance",
      "Tree and bush decorating",
      "Garland, wreaths, and bows",
      "Three reindeer",
    ],
  },
  {
    title: "Winter Wonderland",
    description: "A full-property display for homes ready to go all out for the holidays.",
    included: [
      "Glittery snowflake-style house wrap",
      "Fully decorated yard and walkway",
      "Custom multi-color options",
    ],
  },
];

const faqItems = [
  {
    question: "How does pricing work?",
    answer:
      "Every home is different, so Triston will look at the roofline, the scope of the display, and the tier that fits before providing a clear quote.",
  },
  {
    question: "What is included in the service?",
    answer:
      "The details are set out in your quote before work begins. We will walk through what you want, what is included, and the plan for your home.",
  },
  {
    question: "Can I request a custom look?",
    answer:
      "Yes. Winter Wonderland includes custom multi-color options, and we are happy to talk through a look that fits your home and budget.",
  },
];

export default function Index() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const submission = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(submission as any).toString(),
      });

      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }

      navigate("/thank-you");
    } catch {
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="relative isolate min-h-[620px] overflow-hidden bg-primary py-20 sm:py-28 lg:flex lg:min-h-[680px] lg:items-center">
        <img
          src={completedWorkImage}
          alt="Completed warm-white roofline C9 lighting on a two-story home"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/85 to-primary/35" />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-background">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-accent sm:text-base">
              The Jolly Deco Co. · Cumming, GA
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Holiday lighting for Cumming, Alpharetta, and Johns Creek.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/95 sm:text-xl">
              Simple, well-done holiday decorating from a local owner who cares
              about the details at your home.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link to="/free-consultation" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-accent px-7 text-base font-semibold text-primary hover:bg-accent/90 sm:w-auto"
                >
                  Get a Free Quote
                </Button>
              </Link>
              <a
                href="tel:4044169505"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-background transition-colors hover:text-accent sm:justify-start"
              >
                <Phone className="h-4 w-4" />
                (404) 416-9505
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-holiday-green">
              Holiday lighting packages
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-primary sm:text-4xl">
              Home Décor. Your way.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              After a 15 minute design consultation and idea understanding, we
              present you a custom tailored design based off one of our 3 packages
            </p>
          </div>
          <div className="mt-11 grid gap-6 lg:grid-cols-3 lg:gap-8">
            {serviceTiers.map((tier) => (
              <ServiceTierCard key={tier.title} {...tier} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 bg-secondary/45 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16 lg:px-8">
          <div className="rounded-2xl bg-primary p-8 text-background sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">
              Meet the owner
            </p>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-tight">
              What&apos;s up, I&apos;m Triston.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-background/90">
              I&apos;m building Jolly Deco Co. one house, one season, and one happy
              customer at a time.
            </p>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground">
            <p>
              Before this, I did door-to-door roofing sales and spent close to a
              year as an industrial electrical apprentice — refineries, chemical
              plants, warehouses. I learned more than I expected about how
              things actually work, and figured out along the way that I liked
              being outside making things look good a lot more than being inside
              a plant.
            </p>
            <p>
              Both jobs taught me the same thing: people need help, and doing
              that well is worth building a living around. That&apos;s why we
              started Jolly Deco Co. We&apos;re not trying to be the biggest
              lighting company in North Georgia — just the one that shows up,
              does it right, and treats your house like it matters. Satisfied
              customers is the whole goal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-background sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <MapPin className="mx-auto h-8 w-8 text-accent" />
          <h2 className="mt-5 font-heading text-3xl font-bold sm:text-4xl">
            Your local holiday lighting crew.
          </h2>
          <p className="mt-4 text-xl font-semibold leading-relaxed text-background/95">
            Proudly serving Cumming, Alpharetta, and Johns Creek, GA.
          </p>
        </div>
      </section>

      <section id="reviews" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-holiday-green">
              From a customer
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-primary sm:text-4xl">
              Real feedback, not filler.
            </h2>
          </div>
          <Card className="mt-10 border border-primary/10 shadow-md">
            <CardContent className="p-7 sm:p-10">
              <Quote className="h-10 w-10 text-accent" aria-hidden="true" />
              <blockquote className="mt-4 font-heading text-2xl leading-relaxed text-primary sm:text-3xl">
                “I had Triston help with our decorating outside and couldn&apos;t be
                happier with the result. From start to finish, he worked to
                complete the look we decided on in the beginning. Very neat and
                respectful.”
              </blockquote>
              <p className="mt-6 font-semibold text-foreground">
                — The Goldings, Crabapple
              </p>
            </CardContent>
          </Card>
          <p className="mx-auto mt-7 max-w-2xl text-center leading-relaxed text-muted-foreground">
            This is Jolly Deco Co&apos;s first season taking on residential clients
            at scale — check back soon for more reviews.
          </p>
        </div>
      </section>

      <section className="bg-secondary/45 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-bold text-primary sm:text-4xl">
            A few good questions to ask.
          </h2>
          <div className="mt-10 space-y-3">
            {faqItems.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <Card key={faq.question} className="border border-primary/10 shadow-none">
                  <CardContent className="p-0">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-primary transition-colors hover:bg-background/70 sm:p-6"
                    >
                      <span className="font-semibold">{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 flex-none text-holiday-green" />
                      ) : (
                        <ChevronDown className="h-5 w-5 flex-none text-holiday-green" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="px-5 pb-5 leading-relaxed text-foreground sm:px-6 sm:pb-6">
                        {faq.answer}
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-primary py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center text-background">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">
              Let&apos;s talk about your home
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
              Ready to plan your holiday lights?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-background/90">
              Tell us a little about your home and what you&apos;re considering.
              Triston will follow up with you directly.
            </p>
          </div>

          <div className="mx-auto mt-11 grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-6 rounded-2xl border border-background/15 bg-background/5 p-7 text-background sm:p-8">
              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 flex-none text-accent" />
                <div>
                  <p className="font-semibold text-accent">Call or text</p>
                  <a
                    href="tel:4044169505"
                    className="mt-1 inline-block text-lg hover:text-accent"
                  >
                    (404) 416-9505
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 flex-none text-accent" />
                <div>
                  <p className="font-semibold text-accent">Email</p>
                  <a
                    href="mailto:info@jollydecoco.com"
                    className="mt-1 inline-block break-all text-lg hover:text-accent"
                  >
                    info@jollydecoco.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 flex-none text-accent" />
                <div>
                  <p className="font-semibold text-accent">Service area</p>
                  <p className="mt-1 leading-relaxed text-background/90">
                    Cumming, Alpharetta, and Johns Creek, GA
                  </p>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <form
                  name="contact-form"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact-form" />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block text-sm font-medium text-foreground">
                      Name *
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </label>
                    <label className="block text-sm font-medium text-foreground">
                      Phone *
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </label>
                  </div>
                  <label className="block text-sm font-medium text-foreground">
                    Email *
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </label>
                  <label className="block text-sm font-medium text-foreground">
                    Service address *
                    <Input
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                    />
                  </label>
                  <label className="block text-sm font-medium text-foreground">
                    Tell us what you have in mind
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="mt-2"
                      placeholder="Roofline lighting, yard décor, or a full display..."
                    />
                  </label>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent font-semibold text-primary hover:bg-accent/90"
                  >
                    Request a Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
