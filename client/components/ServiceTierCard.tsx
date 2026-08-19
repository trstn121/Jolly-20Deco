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
    <Card className="h-full border border-primary/10 bg-background shadow-sm transition-shadow hover:shadow-lg">
      <CardContent className="flex h-full flex-col p-7 sm:p-8">
        <h3 className="font-heading text-2xl font-bold text-primary">{title}</h3>
        <p className="mt-2 text-sm font-semibold text-holiday-green">{price}</p>
        <p className="mt-3 text-base leading-relaxed text-foreground">
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
        <ul className="mt-7 space-y-3 border-t border-primary/10 pt-6">
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
