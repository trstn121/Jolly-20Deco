import { Cable, CircleDot, Sparkles } from "lucide-react";

const comparisons = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Fc46db2117e2947fb97b0993642d34356%2Fd3515df3f30b4247b094075fee843cfa?format=webp&width=800&height=1200",
    alt: "Illustrative DIY attempt with mini-lights on a home's roofline",
    caption: "DIY",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Fc46db2117e2947fb97b0993642d34356%2F66d265b55dcc4b0e896c9f234dc42f0e?format=webp&width=800&height=1200",
    alt: "Illustrative Jolly Deco Co install with even C9 roofline lighting",
    caption: "Professional install",
  },
];

const differences = [
  {
    icon: Sparkles,
    text: "Commercial C9 bulbs built with several small LEDs inside each one, not just a single one, so they run brighter and more even without dead spots.",
  },
  {
    icon: Cable,
    text: "Cord cut to the exact length of your roofline, not a pre-made length that's stretched or bunched at the corners.",
  },
  {
    icon: CircleDot,
    text: "Every bulb screws in individually, so one going out doesn't take the whole line with it.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-background py-12 sm:py-20" aria-labelledby="why-choose-us-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">
            Why choose us
          </p>
          <h2
            id="why-choose-us-heading"
            className="mt-3 font-heading text-3xl font-bold leading-tight text-primary sm:text-4xl"
          >
            The difference shows before we even flip the switch
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A lot of homeowners try it themselves first. Here&apos;s the honest difference between a DIY attempt and a professional install.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
          {comparisons.map((comparison) => (
            <figure key={comparison.caption}>
              <div className="overflow-hidden rounded-lg border border-primary/10 bg-secondary/30">
                <img
                  src={comparison.imageUrl}
                  alt={comparison.alt}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <figcaption className="mt-2 text-center text-sm font-medium text-muted-foreground">
                {comparison.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <ul className="mx-auto mt-10 max-w-4xl space-y-4">
          {differences.map((difference) => {
            const Icon = difference.icon;
            return (
              <li key={difference.text} className="flex items-start gap-3">
                <Icon className="mt-1 h-5 w-5 flex-none text-holiday-green" aria-hidden="true" />
                <p className="text-base leading-relaxed text-foreground">
                  {difference.text}
                </p>
              </li>
            );
          })}
        </ul>

        <p className="mx-auto mt-9 max-w-3xl text-center text-base italic leading-relaxed text-muted-foreground">
          That&apos;s the gap between a weekend project and a finished look that holds up all season. We handle the roofline so you don&apos;t have to learn it the hard way.
        </p>
      </div>
    </section>
  );
}
