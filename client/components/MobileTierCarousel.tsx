import { useEffect, useRef, useState } from "react";
import ServiceTierCard, { type ServiceTier } from "@/components/ServiceTierCard";

interface MobileTierCarouselProps {
  tiers: ServiceTier[];
}

export default function MobileTierCarousel({ tiers }: MobileTierCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateActiveIndex = () => {
      const center = container.scrollLeft + container.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      Array.from(container.children).forEach((child, index) => {
        const element = child as HTMLElement;
        const childCenter = element.offsetLeft + element.offsetWidth / 2;
        const distance = Math.abs(center - childCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    updateActiveIndex();
    container.addEventListener("scroll", updateActiveIndex, { passive: true });

    return () => container.removeEventListener("scroll", updateActiveIndex);
  }, [tiers.length]);

  return (
    <div
      ref={containerRef}
      aria-label="Holiday lighting package options"
      className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {tiers.map((tier, index) => (
        <div
          key={tier.title}
          className="w-[88vw] max-w-[360px] flex-none snap-center"
        >
          <ServiceTierCard {...tier} selected={index === activeIndex} />
        </div>
      ))}
    </div>
  );
}
