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
    "Owner-Operated & Local to Alpharetta",
    "Fully Insured for Your Peace of Mind",
    "Premium, Commercial-Grade Materials",
    "Custom Designs Tailored to Your Home",
    "In-Season Maintenance Guarantee",
    "Professional Takedown & Storage Services",
    "Clear, Transparent Pricing with No Hidden Fees",
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
        "Professional, reliable, and worth every penny. For the first time, I actually got to relax and enjoy the season without the stress of decorating. The quality of the lights and the installation was top-notch. Highly recommend!",
      author: "M. Davis",
      location: "Buckhead",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-holiday-cream via-white to-holiday-cream py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-holiday-green mb-6">
            Experience The Jolly Difference
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            We know what the holiday season can be like for busy families. You
            want a home that shines with festive magic, but the thought of
            untangling lights, climbing ladders, and spending entire weekends on
            setup can be overwhelming. The Jolly Deco Co. was founded on a
            simple principle: you should enjoy the magic, not manage the chaos.
            We offer more than just lights—we deliver a professional, end-to-end
            design experience built on a foundation of creativity, quality, and
            trust.
          </p>
        </div>
      </section>

      {/* Section 1: Bespoke Design */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-holiday-green">
                Bespoke Design, Not Just Decoration
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Your home is unique, and your holiday display should be too. As
                a designer with a background in electrical work, I blend
                artistic creativity with technical precision. We don't offer
                cookie-cutter packages. Instead, we collaborate with you to
                create a custom, cohesive design that enhances your home's
                architecture and reflects your personal style. Every element is
                thoughtfully considered to create a breathtaking and elegant
                final product.
              </p>
            </div>
            <div className="order-first lg:order-last">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-holiday-green/10 to-holiday-cream rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Home className="w-16 h-16 text-holiday-green mx-auto" />
                      <p className="text-holiday-green font-semibold">
                        Custom Design Preview
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Quality & Service */}
      <section className="py-20 lg:py-24 bg-holiday-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-holiday-gold/10 to-white rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Award className="w-16 h-16 text-holiday-gold mx-auto" />
                    <p className="text-holiday-green font-semibold">
                      Premium Quality Materials
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-holiday-green">
                Quality You Can See, Service You Can Trust
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to professionalism is unwavering. We exclusively
                use premium, commercial-grade lighting and decor—the same
                materials used in professional city displays. This ensures
                vibrant colors, superior durability, and reliable performance
                all season long. Our installation techniques are meticulous and
                property-safe, and we stand by our work with an in-season
                maintenance guarantee. We are a fully insured, owner-operated
                local business that treats your home with the respect it
                deserves.
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
              <h2 className="text-3xl lg:text-4xl font-bold text-holiday-green">
                Your Complete, Done-For-You Holiday Solution
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are built for your busy lifestyle. Our process is designed to
                be the ultimate hassle-free experience. From the initial on-site
                consultation to the meticulous installation, in-season support,
                and timely post-season takedown, we manage every single detail.
                With our optional storage service, your holiday display simply
                appears and disappears like magic, leaving you with nothing but
                fond memories and a beautiful home.
              </p>
            </div>
            <div className="order-first lg:order-last">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-holiday-red/10 to-holiday-cream rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Clock className="w-16 h-16 text-holiday-red mx-auto" />
                      <p className="text-holiday-green font-semibold">
                        Hassle-Free Experience
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
      <section className="py-20 lg:py-24 bg-holiday-green text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Promise to You, At a Glance
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {promiseItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-holiday-gold flex-shrink-0" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-24 bg-holiday-cream/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-holiday-green mb-6">
              Hear From Our Happy Clients
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
                        className="w-5 h-5 text-holiday-gold fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-lg mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-holiday-green/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-holiday-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-holiday-green">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-holiday-green mb-6">
            Ready for a Stress-Free & Beautiful Holiday?
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Let us show you the difference a professional, creative partner can
            make. Contact us today to begin designing your perfect holiday
            display.
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

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Shield className="w-8 h-8 text-holiday-green" />
              <p className="font-semibold text-holiday-green">Fully Insured</p>
              <p className="text-sm text-gray-600">
                Complete protection for your property
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Home className="w-8 h-8 text-holiday-green" />
              <p className="font-semibold text-holiday-green">Local Business</p>
              <p className="text-sm text-gray-600">
                Proudly serving Greater Atlanta
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Award className="w-8 h-8 text-holiday-green" />
              <p className="font-semibold text-holiday-green">
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
