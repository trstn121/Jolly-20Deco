import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-20">
      <Card className="max-w-2xl mx-auto border-0 shadow-lg">
        <CardContent className="p-12 text-center">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-3xl font-bold text-primary mb-4 font-heading">
            Thank You!
          </h1>
          <p className="text-lg text-foreground mb-4">
            Your message has been successfully submitted. We will contact you within one business day to discuss your holiday design consultation.
          </p>
          <p className="text-muted-foreground mb-8">
            We look forward to creating something magical for your home this holiday season.
          </p>
          <Link to="/">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary hover:shadow-lg transition-all duration-200"
            >
              Return to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
