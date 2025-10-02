import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-20">
      <Card className="max-w-2xl mx-auto border-0 shadow-lg">
        <CardContent className="p-12 text-center">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Construction className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-3xl font-bold text-primary mb-4">{title}</h1>
          <p className="text-lg text-foreground mb-8">{description}</p>
          <p className="text-muted-foreground mb-8">
            This page is currently under construction. We're working hard to
            bring you more detailed information about our services.
          </p>
          <div className="space-y-4">
            <Link to="/free-consultation" className="inline-block w-full sm:w-auto px-4 sm:px-0">
              <Button
                className="bg-accent hover:bg-accent/90 text-primary hover:shadow-lg transition-all duration-200 w-full sm:w-auto whitespace-normal sm:whitespace-nowrap text-center"
                size="lg"
              >
                Request Free Consultation
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Continue prompting to help us fill in this page's content!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlaceholderPage;
