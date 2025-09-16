import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-holiday-cream/30 flex items-center justify-center py-20">
      <Card className="max-w-2xl mx-auto border-0 shadow-lg">
        <CardContent className="p-12 text-center">
          <div className="w-20 h-20 bg-holiday-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-holiday-red" />
          </div>
          <h1 className="text-3xl font-bold text-holiday-green mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-gray-600 mb-8">
            Let's get you back to creating holiday magic for your home.
          </p>
          <div className="space-y-4">
            <Link to="/">
              <Button
                className="bg-holiday-green hover:bg-holiday-green-light text-white"
                size="lg"
              >
                <Home className="w-4 h-4 mr-2" />
                Return Home
              </Button>
            </Link>
            <div className="mt-4">
              <Button
                variant="outline"
                className="border-holiday-red text-holiday-red hover:bg-holiday-red hover:text-white"
                size="lg"
              >
                Request Free Consultation
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
