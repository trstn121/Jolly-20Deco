import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceTierCardProps {
  title: string;
  description: string;
  included: string[];
}

export default function ServiceTierCard({
  title,
  description,
  included,
}: ServiceTierCardProps) {
  return (
    <Card className="h-full border border-primary/10 bg-background shadow-sm transition-shadow hover:shadow-lg">
      <CardContent className="flex h-full flex-col p-7 sm:p-8">
        <h3 className="font-heading text-2xl font-bold text-primary">{title}</h3>
        <p className="mt-3 text-base leading-relaxed text-foreground">
          {description}
        </p>
        <ul className="mt-7 space-y-3 border-t border-primary/10 pt-6">
          {included.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
              <Check className="mt-0.5 h-4 w-4 flex-none text-holiday-green" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
