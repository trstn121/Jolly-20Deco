import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-20">
      <Card className="max-w-2xl mx-auto border-0 shadow-lg">
        <CardContent className="p-12 text-center">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-accent" />
          </div>
          <h1 className="text-3xl font-bold text-primary mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-muted-foreground mb-8">
            Let's get you back to creating holiday magic for your home.
          </p>
          <div className="space-y-4">
            <Link to="/">
              <Button
                className="bg-primary hover:bg-primary/90 text-background"
                size="lg"
              >
                <Home className="w-4 h-4 mr-2" />
                Return Home
              </Button>
            </Link>
            <div className="mt-4">
              <Link to="/free-consultation" className="inline-block w-full sm:w-auto px-4 sm:px-0">
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-primary w-full sm:w-auto whitespace-normal sm:whitespace-nowrap text-center"
                  size="lg"
                >
                  Request Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
