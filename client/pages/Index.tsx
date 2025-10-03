import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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

      navigate("/thank-you");
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
    }
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
      title: "Private Design Review",
      description:
        "Our first engagement is a discerning walk-through where we interpret your aesthetic and architect an entirely unique, illuminated vision for your estate.",
    },
    {
      number: "02",
      title: "Masterful Execution",
      description:
        "Your vision is brought to life by our certified installation team with unmatched precision. Every element is secured and detailed to commercial-grade standards, demanding zero effort from you.",
    },
    {
      number: "03",
      title: "Seamless Transition",
      description:
        "At the season's close, our team conducts a swift, impeccable removal. We offer an exclusive optional service for the secure, climate-controlled retirement of your décor to protect your investment.",
    },
  ];

  const features = [
    {
      icon: <Eye className="w-8 h-8 text-accent" />,
      title: "Bespoke Vision",
      description:
        "Architectural lighting and décor customized exclusively to enhance your home's distinct form and profile.",
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Discreet Professionalism",
      description:
        "Unwavering attention to detail and reliable communication. We manage the process with the highest respect for your property and privacy.",
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Guaranteed Investment",
      description:
        "Full liability insurance coupled with the exclusive use of premium, commercial-grade materials ensures a brilliant, enduring, and maintenance-free display.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-20 lg:py-32 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fc46db2117e2947fb97b0993642d34356%2F296e6a4682304726a0836e7d50277bf7?format=webp&width=2000')`,
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-primary/30"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto shadow-2xl">
            <h1
              className="text-4xl lg:text-6xl font-bold text-background mb-6"
              style={{
                textShadow:
                  "2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)",
              }}
            >
              Atlanta's Premier
              <span
                className="block text-accent"
                style={{
                  textShadow:
                    "2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)",
                }}
              >
                Holiday Design & Installation
              </span>
            </h1>
            <p
              className="text-lg lg:text-xl text-background mb-8 max-w-3xl mx-auto"
              style={{
                textShadow:
                  "1px 1px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.5)",
              }}
            >
              Elegant, creative, and completely hassle-free holiday decorating
              for your home. Let us bring the magic, so you can make the
              memories.
            </p>
            <Link
              to="/free-consultation"
              className="inline-block w-full sm:w-auto px-4 sm:px-0"
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary hover:shadow-lg transition-all duration-200 text-base sm:text-lg px-4 sm:px-8 py-4 sm:py-6 shadow-xl w-full sm:w-auto whitespace-normal sm:whitespace-nowrap text-center"
                style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.3)" }}
              >
                Request Your Free Design Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 font-heading">
              The Art of Effortless Elegance
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              The Jolly Deco Co. was born from a singular vision: to fuse
              technical mastery with uncompromising creative vision. Our
              foundation is built on the refined precision of a craftsman,
              enabling us to deliver installations that are not merely
              decorations, but architectural masterpieces. We don't just
              decorate; we curate a legacy of wonder, restoring the luxury of
              time and flawless execution to your holiday season.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 font-heading">
              Our Three-Step Process for Bespoke Illumination
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-accent font-bold text-xl font-heading">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 font-heading">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4 font-heading">
              The Jolly Deco Co. Distinction
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-accent mb-4 font-heading">
                  {feature.title}
                </h3>
                <p className="text-primary">{feature.description}</p>
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
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
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
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-accent mb-4 font-heading">
              The Season Awaits Your Signature
            </h2>
            <p className="text-lg text-background max-w-3xl mx-auto">
              Begin the process of elevating your estate. We invite you to
              schedule a private design review to explore the possibilities of
              bespoke holiday illumination.
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
                  <h3 className="font-semibold text-accent">Phone</h3>
                  <a
                    href="tel:(404)416-9505"
                    className="text-lg text-background hover:text-accent transition-colors"
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
                  <h3 className="font-semibold text-accent">Email</h3>
                  <a
                    href="mailto:info@thejollydeco.com"
                    className="text-lg text-background hover:text-accent transition-colors"
                  >
                    info@thejollydeco.com
                  </a>
                </div>
              </div>

              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-semibold text-accent mb-2">
                  Service Areas
                </h3>
                <p className="text-primary">
                  Alpharetta, Roswell, Milton, Johns Creek, Sandy Springs, and
                  Buckhead
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form
                  name="contact-form"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact-form" />
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
                      className="w-full bg-accent hover:bg-accent/90 text-primary hover:shadow-lg transition-all duration-200 text-base sm:text-lg whitespace-normal text-center"
                      size="lg"
                    >
                      Schedule Private Design Review
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
