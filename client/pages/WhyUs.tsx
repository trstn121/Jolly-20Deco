import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Home,
  Shield,
  Award,
  Users,
  Clock,
  Star,
} from "lucide-react";

export default function WhyUs() {
  const promiseItems = [
    "Architectural Design",
    "Commercial-Grade Materials",
    "Fully Insured & Certified Team",
    "Seamless Seasonal Retirement",
  ];

  const testimonials = [
    {
      quote:
        "The Jolly Deco Co. completely transformed our home for the holidays! The process was so easy, and Triston's design eye is incredible. The final result was beyond our wildest dreams. We got so many compliments from our neighbors!",
      author: "The Johnson Family",
      location: "Alpharetta",
    },
    {
      quote:
        "I had Triston help with our decorating outside and couldn't be happier with the result. From start to finish, he worked to complete the look we decided on in the beginning. Very neat and respectful.",
      author: "The Goldings",
      location: "Crabapple",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-secondary py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 font-heading">
            The Elevated Standard of Holiday Artistry
          </h1>
          <p className="text-lg lg:text-xl text-foreground leading-relaxed">
            Securing The Jolly Deco Co. means choosing a standard of service that is rarely found. Our promise is a refined, hands-off experience that delivers architecturally precise design and unwavering professionalism, ensuring your holiday season is defined by effortless beauty, not effort.
          </p>
        </div>
      </section>

      {/* Section 1: Bespoke Design */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary font-heading">
                Bespoke Artistry: Crafted for Your Architecture
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                We view every property as a canvas. Our designers meticulously craft a vision that accentuates your home's unique architectural elements, ensuring your display is an exclusive, tailor-made masterpiece—never a standard install.
              </p>
            </div>
            <div className="order-first lg:order-last">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-accent/10 to-background rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fc46db2117e2947fb97b0993642d34356%2Fc1db0d24f6414bd4862562f67d58724b?format=webp&width=800"
                    alt="Designer sketching a home exterior with stylus, overlaid with subtle gold architectural lines"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Quality & Service */}
      <section className="py-20 lg:py-24 bg-background/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-accent/10 to-background rounded-lg overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc46db2117e2947fb97b0993642d34356%2F9f652529dc854ebea11fe584ad24b9aa?format=webp&width=800"
                  alt="Macro shot of gloved hand adjusting perfect commercial-grade LED light or luxury wreath section"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary font-heading">
                Uncompromising Quality and Guaranteed Brilliance
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                Our commitment to excellence is non-negotiable. We exclusively utilize commercial-grade, highly durable materials and provide comprehensive liability coverage. This dedication ensures not just a beautiful display, but a brilliant, reliable, and entirely risk-free investment for your estate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Complete Solution */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary font-heading">
                The Ultimate Luxury: Reclaiming Your Time
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                Our service is built on the premise that your time is your most valuable asset. We manage the entire seasonal lifecycle—from private design review to seamless retirement and storage—allowing you to fully disconnect from the logistics and focus entirely on creating cherished memories.
              </p>
            </div>
            <div className="order-first lg:order-last">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-accent/10 to-background rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4 p-6">
                      <Clock className="w-16 h-16 text-accent mx-auto" />
                      <p className="text-primary font-semibold text-sm">
                        Image: Warm photo of family relaxing (by fireplace or with hot cocoa) looking at their illuminated home. Focus on free time experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-20 lg:py-24 bg-primary text-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-accent font-heading">
              Our Guarantee of Effortless Excellence
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {promiseItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-3">
                <CheckCircle className="w-8 h-8 text-accent flex-shrink-0" />
                <span className="text-lg font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-24 bg-background/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 font-heading">
              Endorsements of Excellence
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-accent fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-foreground text-lg mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">
                        {testimonial.author}
                      </p>
                      <p className="text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 font-heading">
            Are You Ready to Elevate Your Estate?
          </h2>
          <p className="text-lg lg:text-xl text-foreground mb-8 max-w-3xl mx-auto">
            Let us show you the difference a professional, creative partner can make. Contact us today to begin designing your perfect holiday display.
          </p>
          <Link to="/free-consultation">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary hover:shadow-lg transition-all duration-200 text-lg px-8 py-6"
            >
              Schedule Private Design Review
            </Button>
          </Link>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Shield className="w-8 h-8 text-primary" />
              <p className="font-semibold text-primary">Fully Insured</p>
              <p className="text-sm text-gray-600">
                Complete protection for your property
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Home className="w-8 h-8 text-primary" />
              <p className="font-semibold text-primary">Local Business</p>
              <p className="text-sm text-gray-600">
                Proudly serving Greater Atlanta
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Award className="w-8 h-8 text-primary" />
              <p className="font-semibold text-primary">
                Premium Quality
              </p>
              <p className="text-sm text-gray-600">
                Commercial-grade materials only
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
