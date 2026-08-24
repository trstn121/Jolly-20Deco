import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServiceTierCard, { type ServiceTier } from "@/components/ServiceTierCard";

interface MobileTierCarouselProps {
  tiers: ServiceTier[];
}

export default function MobileTierCarousel({ tiers }: MobileTierCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((index) => (index === 0 ? tiers.length - 1 : index - 1));
  };

  const showNext = () => {
    setActiveIndex((index) => (index === tiers.length - 1 ? 0 : index + 1));
  };

  return (
    <div aria-label="Holiday lighting package options">
      <div className="relative mx-auto max-w-[390px]">
        <div className="mx-auto w-[88vw] max-w-[360px]">
          <ServiceTierCard {...tiers[activeIndex]} selected />
        </div>
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Show previous package"
          className="absolute inset-y-0 left-0 z-10 flex w-14 items-center justify-start text-primary/70 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span className="rounded-full bg-background/85 p-1 shadow-sm">
            <ChevronLeft className="h-5 w-5" />
          </span>
        </button>
        <button
          type="button"
          onClick={showNext}
          aria-label="Show next package"
          className="absolute inset-y-0 right-0 z-10 flex w-14 items-center justify-end text-primary/70 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span className="rounded-full bg-background/85 p-1 shadow-sm">
            <ChevronRight className="h-5 w-5" />
          </span>
        </button>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {tiers.map((tier, index) => (
          <button
            key={tier.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${tier.title} package`}
            aria-current={index === activeIndex ? "true" : undefined}
            className={`h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              index === activeIndex
                ? "w-6 bg-primary"
                : "w-2 bg-primary/25 hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
