import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceTierCardProps {
  title: string;
  price: string;
  description: string;
  included: string[];
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
}

export default function ServiceTierCard({
  title,
  price,
  description,
  included,
  imageUrl,
  imageAlt,
  imageCaption,
}: ServiceTierCardProps) {
  return (
    <Card className="relative isolate h-full overflow-visible border border-primary/10 bg-background shadow-sm transition-all duration-300 hover:z-10 hover:scale-[1.03] hover:shadow-2xl before:pointer-events-none before:absolute before:-inset-2 before:rounded-xl before:border-2 before:border-dashed before:border-accent before:opacity-0 before:shadow-[0_0_14px_hsl(var(--accent)/0.85)] before:transition-opacity before:duration-300 before:content-[''] hover:before:opacity-100">
      <CardContent className="flex h-full flex-col p-7 sm:p-8">
        <h3 className="min-h-9 font-heading text-2xl font-bold text-primary">{title}</h3>
        <p className="mt-2 min-h-5 text-sm font-semibold text-holiday-green">{price}</p>
        <p className="mt-3 min-h-[4.5rem] text-base leading-relaxed text-foreground">
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
        <ul className="mt-7 min-h-[11rem] space-y-3 border-t border-primary/10 pt-6">
          {included.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
              <Check className="mt-0.5 h-4 w-4 flex-none text-holiday-green" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-auto pt-7 text-xs leading-relaxed text-muted-foreground">
          All quotes are customer tailored, please contact for further pricing inquiry, more available upon request
        </p>
      </CardContent>
    </Card>
  );
}
