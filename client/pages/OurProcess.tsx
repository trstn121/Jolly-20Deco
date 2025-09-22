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
      icon: <FileText className="w-8 h-8 text-holiday-gold" />,
      title: "The Creative Consultation",
      subtitle: "Where Your Vision Comes to Life",
      description:
        "Our journey together begins with a complimentary, on-site design consultation. We'll walk your property with you, listening to your ideas, understanding your style, and suggesting creative concepts that complement your home's unique architecture. This collaborative session, typically lasting 30-45 minutes, ensures we capture the exact look and feel you want to achieve.",
    },
    {
      number: "02",
      icon: <Calendar className="w-8 h-8 text-holiday-gold" />,
      title: "The Custom Proposal & Booking",
      subtitle: "A Clear, Tailored Plan for Your Home",
      description:
        "Following our meeting, we will craft a detailed, itemized proposal and email it to you within 24-48 hours. This proposal outlines the full scope of the project, the specific decorations and lighting to be used, and a firm price—with no hidden fees. Once you approve the vision, we'll send a simple digital agreement and require a 50% deposit to officially reserve your spot on our installation schedule.",
    },
    {
      number: "03",
      icon: <Sparkles className="w-8 h-8 text-holiday-gold" />,
      title: "The Professional Installation",
      subtitle: "Meticulous, Safe, and Seamless Execution",
      description:
        "This is where the magic happens. You don't even need to be home. Our professional team will arrive on the scheduled day and bring your design to life with the utmost care for your property. We use only premium, commercial-grade materials, property-safe clips and fasteners, and artfully hidden wiring. We conclude every installation by setting all lights on an automatic timer and conducting a final quality check to ensure every bulb is shining brightly.",
    },
    {
      number: "04",
      icon: <Settings className="w-8 h-8 text-holiday-gold" />,
      title: "In-Season Support & Maintenance",
      subtitle: "We Keep Your Display Perfect, All Season Long",
      description:
        "Your peace of mind is our priority. In the unlikely event a bulb burns out or a winter storm shifts a decoration, our service guarantee has you covered. Simply give us a call, and we will dispatch our team—typically within 48 hours—to resolve any issue and ensure your home remains picture-perfect throughout the holidays.",
    },
    {
      number: "05",
      icon: <Package className="w-8 h-8 text-holiday-gold" />,
      title: "Post-Season Takedown & Optional Storage",
      subtitle: "An Effortless Ending to a Beautiful Season",
      description:
        "When the holidays conclude, we handle the final chapter. During the first two weeks of January, we will schedule a time to return and carefully take down, label, and pack all of your decorations. For the ultimate hassle-free experience, ask about our premium storage service. We'll transport your decor to our secure, climate-controlled facility, keeping it safe and organized, and freeing up valuable space in your garage or attic.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-holiday-cream via-white to-holiday-cream py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-holiday-green mb-6">
            Your Effortless Path to a Magical Holiday Display
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
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
                    <div className="w-24 h-24 bg-holiday-green rounded-full flex items-center justify-center mb-4 mx-auto lg:mx-0">
                      <span className="text-white font-bold text-2xl">
                        {step.number}
                      </span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-holiday-cream">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-2xl lg:text-3xl font-bold text-holiday-green mb-3">
                    {step.title}
                  </h2>
                  <h3 className="text-lg lg:text-xl font-semibold text-holiday-red mb-4">
                    {step.subtitle}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-holiday-green text-white">
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
              className="bg-holiday-red hover:bg-holiday-red-dark text-white text-lg px-8 py-6"
            >
              Request Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-holiday-cream/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-holiday-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-holiday-green" />
              </div>
              <h3 className="font-semibold text-holiday-green mb-2">
                Transparent Pricing
              </h3>
              <p className="text-gray-700 text-sm">
                Detailed proposals with no hidden fees or surprises
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-holiday-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-holiday-green" />
              </div>
              <h3 className="font-semibold text-holiday-green mb-2">
                Premium Materials
              </h3>
              <p className="text-gray-700 text-sm">
                Commercial-grade decorations and professional installation
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-holiday-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-holiday-green" />
              </div>
              <h3 className="font-semibold text-holiday-green mb-2">
                Service Guarantee
              </h3>
              <p className="text-gray-700 text-sm">
                We maintain your display perfectly throughout the season
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
