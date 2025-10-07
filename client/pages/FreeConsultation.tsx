import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckCircle, Star } from "lucide-react";

export default function FreeConsultation() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formDataToSend = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      // Track form submission with Meta Pixel
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }

      navigate("/thank-you");
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
    }
  };

  const expectedItems = [
    "Property Walkthrough: We assess your home's architecture and discuss your vision",
    "Custom Design Ideas: Get professional suggestions tailored to your style and budget",
    "Transparent Proposal: Receive a detailed quote within 24 hours—zero obligation",
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Alpharetta",
      quote: "The Jolly Deco Co. transformed our home for Christmas. Professional, creative, and completely stress-free!",
    },
    {
      name: "Michael R.",
      location: "Roswell",
      quote: "Exceptional service from start to finish. Our neighbors can't stop complimenting our holiday display!",
    },
    {
      name: "The Goldings",
      location: "Crabapple",
      quote: "I had Triston help with our decorating outside and couldn't be happier with the result. From start to finish, he worked to complete the look we decided on in the beginning. Very neat and respectful.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-secondary py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-heading">
            Schedule Your Free Design Consultation
          </h1>
          <p className="text-lg lg:text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
            Let's bring your holiday vision to life. Get a personalized quote and design plan—no obligation, no pressure. Just expert guidance tailored to your home.
          </p>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - What to Expect */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6 font-heading">
                  What to Expect in Your Consultation
                </h2>
                <div className="space-y-6 mt-8">
                  {expectedItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="w-6 h-6 text-accent" />
                      </div>
                      <p className="text-foreground text-lg leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Indicator */}
              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                <p className="text-foreground leading-relaxed">
                  <span className="font-semibold">Professional holiday lighting installations starting at $800.</span> Most homes range from $1,200-$3,500 depending on size and design complexity.
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-3 font-heading">
                      Ready to Get Started?
                    </h2>
                    <p className="text-foreground">
                      Fill out the form below or give us a call. We'll schedule a convenient time for your free, no-pressure consultation.
                    </p>
                  </div>

                  <form
                    name="consultation-request"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value="consultation-request"
                    />
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="text-base"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-primary hover:shadow-lg transition-all duration-200 text-base sm:text-lg py-6 whitespace-normal text-center"
                      size="lg"
                    >
                      Get My Free Consultation
                    </Button>

                    <p className="text-sm text-muted-foreground text-center mt-3">
                      No obligation. Response within 1 business day.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12 font-heading">
            Trusted by Families Across North Atlanta
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <p className="text-sm font-semibold text-primary">
                    {testimonial.name}, {testimonial.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Contact Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4 font-heading">
            Concierge Service via Phone
          </h2>
          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
            We are happy to answer any preliminary questions and schedule your
            review immediately. We invite you to contact your dedicated
            specialist today.
          </p>
          <div className="inline-flex items-center space-x-4 bg-background rounded-lg px-8 py-6 shadow-lg">
            <Phone className="w-8 h-8 text-accent" />
            <a
              href="tel:4044169505"
              className="text-3xl lg:text-4xl font-bold text-accent hover:text-accent/80 transition-colors"
            >
              (404) 416-9505
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            The Jolly Deco Co. is a fully insured business proudly serving the
            Greater Atlanta Area.
          </p>
        </div>
      </footer>
    </div>
  );
}
