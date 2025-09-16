import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => {
  return (
    <div className="min-h-screen bg-holiday-cream/30 flex items-center justify-center py-20">
      <Card className="max-w-2xl mx-auto border-0 shadow-lg">
        <CardContent className="p-12 text-center">
          <div className="w-20 h-20 bg-holiday-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Construction className="w-10 h-10 text-holiday-green" />
          </div>
          <h1 className="text-3xl font-bold text-holiday-green mb-4">{title}</h1>
          <p className="text-lg text-gray-700 mb-8">{description}</p>
          <p className="text-gray-600 mb-8">
            This page is currently under construction. We're working hard to
            bring you more detailed information about our services.
          </p>
          <div className="space-y-4">
            <Button
              className="bg-holiday-red hover:bg-holiday-red-dark text-white"
              size="lg"
            >
              Request Free Consultation
            </Button>
            <p className="text-sm text-gray-500">
              Continue prompting to help us fill in this page's content!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlaceholderPage;
