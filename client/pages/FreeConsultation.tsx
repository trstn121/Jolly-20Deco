import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, CheckCircle } from "lucide-react";

export default function FreeConsultation() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    source: "",
    projectDetails: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      source: value,
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
    "Architectural Review. We walk your property with a discerning eye, listening to your goals and assessing the technical possibilities for brand-new concepts.",
    "Bespoke Visioning. We offer professional design suggestions tailored precisely to your home's architecture, landscaping, and your personal style.",
    "Material Selection. We present exclusive samples of our premium, commercial-grade lights and décor so you can see and feel the guaranteed quality for yourself.",
    "Impeccable Proposal Delivery. Within 24 hours of our private meeting, you will receive a generated, fully detailed mock-up and proposal—a firm price for your project, with zero obligation.",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-secondary py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-heading">
            Schedule Your Private Design Review
          </h1>
          <p className="text-lg lg:text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
            This is the first step toward securing your bespoke holiday display.
            We offer a discreet, on-site design review—a no-obligation
            conversation focused purely on architecting the possibilities for
            your estate. Our process is designed to be completely respectful of
            your time, providing professional expertise without any
            high-pressure sales tactics.
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
                  Your Review: A Refined 15-Minute Curation
                </h2>
                <p className="text-lg text-foreground mb-8">
                  Our goal is to provide you with immense value in a short
                  amount of time. During our discreet on-site visit, we will:
                </p>
              </div>

              <div className="space-y-6">
                {expectedItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-3 font-heading">
                      Begin Your Bespoke Journey
                    </h2>
                    <p className="text-foreground">
                      Fill out the form below, and we will contact you within
                      one business day to schedule a convenient time for your
                      private design review.
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
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className=""
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className=""
                        />
                      </div>
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
                        className=""
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
                        className=""
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Service Address *
                      </label>
                      <Input
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className=""
                        placeholder="Street address, city, ZIP"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        How did you hear about us?
                      </label>
                      <Select name="source" onValueChange={handleSelectChange}>
                        <SelectTrigger className="">
                          <SelectValue placeholder="Please select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="google">Google Search</SelectItem>
                          <SelectItem value="referral">
                            Friend/Family Referral
                          </SelectItem>
                          <SelectItem value="social">Social Media</SelectItem>
                          <SelectItem value="neighbor">
                            Saw Your Work in Neighborhood
                          </SelectItem>
                          <SelectItem value="sign">Saw a Sign</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {/* Hidden input to ensure Netlify captures the select value */}
                      <input
                        type="hidden"
                        name="source"
                        value={formData.source}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tell us a little about your project...
                      </label>
                      <Textarea
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        rows={4}
                        className=""
                        placeholder="Share your vision, special requirements, or any questions you have..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-primary hover:shadow-lg transition-all duration-200 text-base sm:text-lg py-4 sm:py-6 whitespace-normal text-center"
                      size="lg"
                    >
                      Reserve Private Design Review
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
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
              href="tel:(404)416-9505"
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
