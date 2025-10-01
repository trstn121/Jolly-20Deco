import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  Calendar,
  Sparkles,
  Settings,
  Package,
  ArrowRight,
} from "lucide-react";

export default function OurProcess() {
  const processSteps = [
    {
      number: "01",
      icon: <FileText className="w-8 h-8 text-accent" />,
      title: "01: Private Design Review",
      subtitle: "A Confidential Architectural Curation",
      description:
        "Our process begins with an exclusive, on-site discussion where we listen intently to your vision and provide creative insights. We collaborate to capture the precise aesthetic that will elevate your home, ensuring the final design is both uniquely yours and architecturally harmonious.",
    },
    {
      number: "02",
      icon: <Calendar className="w-8 h-8 text-accent" />,
      title: "02: Bespoke Proposal & Reserved Execution",
      subtitle: "Securing Your Vision and Date",
      description:
        "Following our review, we will present a detailed, custom-generated mock-up of your property, allowing you to visualize the final result before we begin. A deposit secures your installation date and guarantees the full resources required for your display, including access to our exclusive, commercial-grade décor inventory.",
    },
    {
      number: "03",
      icon: <Sparkles className="w-8 h-8 text-accent" />,
      title: "03: Masterful Installation",
      subtitle: "Uncompromising Precision. Zero Effort Required.",
      description:
        "This is where technical artistry meets elegance. Our certified team arrives to implement your display using only premium, commercial-grade materials and proprietary methods. We oversee every precise detail—from wiring to timing—to guarantee a brilliant, flawless display that requires no effort from your family.",
    },
    {
      number: "04",
      icon: <Settings className="w-8 h-8 text-accent" />,
      title: "04: Guaranteed Seasonal Brilliance",
      subtitle: "Our Promise of Uninterrupted Elegance",
      description:
        "We stand by the brilliance of our work with our comprehensive service guarantee. Should any element of your display require attention, our team will be dispatched discreetly and promptly to ensure your home maintains its perfect, illuminated status throughout the entire season.",
    },
    {
      number: "05",
      icon: <Package className="w-8 h-8 text-accent" />,
      title: "05: Seamless Seasonal Retirement",
      subtitle: "Protecting Your Investment and Time",
      description:
        "As the season transitions, we provide impeccable, stress-free takedown service during the first two weeks of January. We carefully package your custom décor. We also offer exclusive, optional storage in our secure, climate-controlled facility, ensuring your investment is preserved and ready for the following year.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-secondary py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Your Effortless Path to a Magical Holiday Display
          </h1>
          <p className="text-lg lg:text-xl text-foreground leading-relaxed">
            At The Jolly Deco Co., we believe that creating a stunning holiday
            home should be a joyful experience, not a stressful one. We've
            meticulously designed our process to be transparent, professional,
            and completely hands-off for you. From the initial creative vision
            to the final takedown, we handle every single detail so you can
            focus on making memories.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-20">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Step Number and Icon */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className="relative">
                    <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mb-4 mx-auto lg:mx-0">
                      <span className="text-primary font-bold text-2xl">
                        {step.number}
                      </span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-lg border-2 border-muted">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-3">
                    {step.title}
                  </h2>
                  <h3 className="text-lg lg:text-xl font-semibold text-accent mb-4">
                    {step.subtitle}
                  </h3>
                  <p className="text-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            If our process sounds like the hassle-free holiday solution you've
            been looking for, let's start the conversation.
          </p>
          <Link to="/free-consultation">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary hover:shadow-lg transition-all duration-200 text-lg px-8 py-6"
            >
              Request Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-background/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">
                Transparent Pricing
              </h3>
              <p className="text-foreground text-sm">
                Detailed proposals with no hidden fees or surprises
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">
                Premium Materials
              </h3>
              <p className="text-foreground text-sm">
                Commercial-grade decorations and professional installation
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">
                Service Guarantee
              </h3>
              <p className="text-foreground text-sm">
                We maintain your display perfectly throughout the season
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
