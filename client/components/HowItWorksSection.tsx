import {
  CalendarDays,
  Home,
  Lightbulb,
  Ruler,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Ruler,
    title: "Free design consultation",
    description:
      "We walk the property, talk through what you're picturing, and take real measurements.",
  },
  {
    icon: Sparkles,
    title: "Custom mockup and quote",
    description:
      "You see what your home will actually look like lit up, priced for your house, not a flat rate.",
  },
  {
    icon: Wrench,
    title: "Professional installation",
    description:
      "Our crew installs everything safely and precisely, timed around your holiday plans.",
  },
  {
    icon: Lightbulb,
    title: "We maintain it all season",
    description:
      "If a strand goes dark in December, we come fix it. Not you on a ladder in your yard.",
  },
  {
    icon: CalendarDays,
    title: "January takedown",
    description:
      "We come back, take it all down, and store it ourselves until next season.",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Holiday Display",
    description: "Commercial Grade lighting and decoration, owned and maintained by us, displayed magnificently by you",
  },
  {
    icon: Wrench,
    title: "Repairs included",
    description: "Anything that stops working mid-season gets fixed pronto at no extra charge.",
  },
  {
    icon: Home,
    title: "Your property protected",
    description: "Anything damaged during install or takedown gets repaired, on us.",
  },
  {
    icon: Users,
    title: "A real, consistent crew",
    description:
      "You're working with Triston and the same small team, not a rotating subcontractor pool.",
  },
];

interface HowItWorksSectionProps {
  dark?: boolean;
}

export default function HowItWorksSection({ dark = false }: HowItWorksSectionProps) {
  return (
    <section className={cn("py-12 sm:py-20", dark ? "bg-primary text-background" : "bg-background")}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">
            How it works
          </p>
          <h2
            className={cn(
              "mt-3 font-heading text-3xl font-bold leading-tight sm:text-4xl",
              dark ? "text-background" : "text-primary",
            )}
          >
            From first call to January cleanup, we handle it all
          </h2>
          <p
            className={cn(
              "mt-4 text-lg leading-relaxed",
              dark ? "text-background/80" : "text-muted-foreground",
            )}
          >
            Here&apos;s exactly what happens once you reach out, and what&apos;s included in every package.
          </p>
        </div>

        <ol className="mx-auto mt-10 max-w-3xl space-y-6 sm:mt-12 sm:space-y-7">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="flex items-start gap-4 sm:gap-5">
                <div
                  className={cn(
                    "flex h-9 w-9 flex-none items-center justify-center rounded-full text-sm font-bold sm:h-10 sm:w-10",
                    dark ? "bg-background/15 text-accent" : "bg-primary text-accent",
                  )}
                >
                  {index + 1}
                </div>
                <div
                  className={cn(
                    "flex-1 border-b pb-6 sm:pb-7",
                    dark ? "border-background/20" : "border-primary/10",
                  )}
                >
                  <div className="flex items-center gap-2">
                    <Icon
                      className={cn(
                        "h-4 w-4",
                        dark ? "text-accent" : "text-holiday-green",
                      )}
                      aria-hidden="true"
                    />
                    <h3
                      className={cn(
                        "font-heading text-xl font-bold",
                        dark ? "text-background" : "text-primary",
                      )}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className={cn(
                      "mt-2 text-base leading-relaxed",
                      dark ? "text-background/85" : "text-foreground",
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mx-auto mt-12 max-w-5xl sm:mt-16">
          <h3
            className={cn(
              "text-center font-heading text-2xl font-bold sm:text-3xl",
              dark ? "text-background" : "text-primary",
            )}
          >
            What you&apos;re actually paying for
          </h3>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="border border-primary/10 bg-white shadow-none">
                  <CardContent className="flex gap-4 p-5 sm:p-6">
                    <Icon className="mt-0.5 h-5 w-5 flex-none text-holiday-green" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-primary">{value.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
