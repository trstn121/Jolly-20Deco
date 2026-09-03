import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface ServiceTier {
  title: string;
  subheader: string;
  price: string;
  description: string;
  included: string[];
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
  note: string;
}

interface ServiceTierCardProps extends ServiceTier {
  selected?: boolean;
}

export default function ServiceTierCard({
  title,
  subheader,
  price,
  description,
  included,
  imageUrl,
  imageAlt,
  imageCaption,
  note,
  selected = false,
}: ServiceTierCardProps) {
  return (
    <Card className={`relative isolate h-full overflow-visible border border-primary/10 bg-background shadow-sm transition-all duration-300 hover:z-10 hover:scale-[1.03] hover:shadow-2xl before:pointer-events-none before:absolute before:-inset-2 before:rounded-xl before:border-2 before:border-dashed before:border-accent before:shadow-[0_0_14px_hsl(var(--accent)/0.85)] before:transition-opacity before:duration-300 before:content-[''] ${selected ? "z-10 scale-[1.02] shadow-2xl before:opacity-100" : "before:opacity-0 hover:before:opacity-100"}`}>
      <CardContent className="flex h-full flex-col p-5 sm:p-8">
        <h3 className="min-h-9 font-heading text-2xl font-bold text-primary">{title}</h3>
        <p className="mt-2 min-h-5 text-base leading-snug text-foreground">{subheader}</p>
        <p className="mt-1 min-h-5 text-sm font-semibold text-holiday-green">{price}</p>
        <p className="mt-3 min-h-[4rem] text-base leading-relaxed text-foreground sm:min-h-[4.5rem]">
          {description}
        </p>
        <figure className="mt-6 overflow-hidden rounded-lg border border-primary/10 bg-secondary/30">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="px-3 py-2 text-xs font-medium text-muted-foreground">
            {imageCaption}
          </figcaption>
        </figure>
        <ul className="mt-6 min-h-[9.5rem] space-y-3 border-t border-primary/10 pt-5 sm:mt-7 sm:min-h-[11rem] sm:pt-6">
          {included.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
              <Check className="mt-0.5 h-4 w-4 flex-none text-holiday-green" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-auto pt-5 text-xs leading-relaxed text-muted-foreground sm:pt-7">
          {note}
        </p>
      </CardContent>
    </Card>
  );
}
