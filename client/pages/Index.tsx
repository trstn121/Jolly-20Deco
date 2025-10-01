import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  Eye,
  Shield,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const faqItems = [
    {
      question: "Do I own the decorations?",
      answer:
        "Yes. We work with you to source and purchase premium, commercial-grade decorations that are yours to keep. This ensures a custom look for your home year after year.",
    },
    {
      question: "What happens if a light goes out during the season?",
      answer:
        "We guarantee our work. If any part of your display has an issue, simply call us, and we will come out to fix it promptly at no charge.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Every home is unique, so we provide a custom quote after our free on-site consultation. This ensures accurate, fair pricing tailored to your specific vision and property.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We'll walk your property with you, listening to your vision and sharing our creative ideas to design a unique, personalized plan for your home.",
    },
    {
      number: "02",
      title: "Professional Installation",
      description:
        "Our team handles everything with meticulous care, from installing every light with precision to ensuring a clean and safe setup. You don't have to lift a finger.",
    },
    {
      number: "03",
      title: "Timely Takedown & Storage",
      description:
        "Once the season is over, we'll carefully take down and pack all decorations. We also offer an optional storage service in our secure, climate-controlled facility.",
    },
  ];

  const features = [
    {
      icon: <Eye className="w-8 h-8 text-accent" />,
      title: "Creative Eye",
      description:
        "Bespoke designs tailored to your home's unique architecture and your personal style.",
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Professional Service",
      description:
        "Unmatched work ethic and customer service. We are reliable, communicative, and treat your home like our own.",
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Peace of Mind",
      description:
        "Fully insured, using only premium, commercial-grade materials for a durable and brilliant display.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-secondary py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
              Atlanta's Premier
              <span className="block text-accent">
                Holiday Design & Installation
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-foreground mb-8 max-w-3xl mx-auto">
              Elegant, creative, and completely hassle-free holiday decorating
              for your home. Let us bring the magic, so you can make the
              memories.
            </p>
            <Link to="/free-consultation">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary hover:shadow-lg transition-all duration-200 text-lg px-8 py-6"
              >
                Request Your Free Design Consultation
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              From a Vision, to Your Home
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              At The Jolly Deco Co., we believe the holidays are about a
              feeling—the joy, the connection, and the magic that brings
              communities together. My passion for design began at age 8 with
              graphic design and has grown into a lifelong love for bringing
              creative ideas to life. As an electrician with a craftsman's
              spirit, I saw an opportunity to blend my technical skill with my
              creative vision. I always admired the beautifully decorated homes
              that lit up the holidays, and I started The Jolly Deco Co. to
              bring that same elegance and wonder to families like yours. Our
              mission is simple: to provide a professional, hassle-free design
              experience that not only saves you time but elevates your home and
              lets you focus on what truly matters.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Your Hassle-Free Holiday, in Three Simple Steps
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-primary font-bold text-xl">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {step.title}
                  </h3>
                  <p className="text-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              What Makes Us Jolly
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-primary text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Proudly Serving the Greater Atlanta Area
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            We are based in the Alpharetta/Roswell area and provide services to
            Milton, Johns Creek, Sandy Springs, and Buckhead.
          </p>
          <div className="flex justify-center">
            <MapPin className="w-6 h-6 mr-2" />
            <span className="text-lg">Greater Atlanta Area</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-0">
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-muted transition-colors"
                  >
                    <h3 className="font-semibold text-primary">
                      {faq.question}
                    </h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-accent" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-accent" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-foreground">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Ready to Create Your Holiday Masterpiece?
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Let's discuss your vision. Call us today or fill out the form
              below to schedule your complimentary consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Phone</h3>
                  <a
                    href="tel:(404)416-9505"
                    className="text-lg text-foreground hover:text-accent transition-colors"
                  >
                    (404) 416-9505
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">Email</h3>
                  <a
                    href="mailto:info@thejollydeco.com"
                    className="text-lg text-foreground hover:text-accent transition-colors"
                  >
                    info@thejollydeco.com
                  </a>
                </div>
              </div>

              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">
                  Service Areas
                </h3>
                <p className="text-foreground">
                  Alpharetta, Roswell, Milton, Johns Creek, Sandy Springs, and
                  Buckhead
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
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
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Brief Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your vision..."
                    />
                  </div>

                  <Link to="/free-consultation" className="block">
                    <Button
                      className="w-full bg-accent hover:bg-accent/90 text-primary hover:shadow-lg transition-all duration-200"
                      size="lg"
                    >
                      Request Free Consultation
                    </Button>
                  </Link>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
