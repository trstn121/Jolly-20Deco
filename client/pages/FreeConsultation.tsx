import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, CheckCircle } from "lucide-react";

export default function FreeConsultation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    source: "",
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

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      source: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Netlify Forms will handle the submission automatically
    // Just show success message and reset form
    setTimeout(() => {
      alert('Thank you! Your consultation request has been submitted. We will contact you within one business day.');
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        source: "",
        message: "",
      });
    }, 500);
  };

  const expectedItems = [
    "Walk Your Property With You: We'll listen to your ideas and what you hope to achieve, whether you have a specific vision or are looking for brand-new concepts.",
    "Provide Expert Advice & Creative Ideas: We will offer professional design suggestions tailored to your home's architecture, landscaping, and your personal style.",
    "Discuss Products & Materials: We'll show you examples of our premium, commercial-grade lights and decor so you can see and feel the quality for yourself.",
    "Deliver a No-Obligation Proposal: Within 24-48 hours of our meeting, you will receive a detailed, itemized proposal with a firm price for your project.",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-holiday-cream via-white to-holiday-cream py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-holiday-green mb-6">
            Book Your Complimentary Holiday Design Consultation
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            This is the first step toward a beautiful, effortless holiday season. We know you're busy, which is why we've made our process simple and respectful of your time. This on-site meeting is a no-obligation, creative conversation where we discover what's possible for your home. There are no high-pressure sales tactics, just professional advice and a passion for great design.
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
                <h2 className="text-2xl lg:text-3xl font-bold text-holiday-green mb-6">
                  What to Expect During Your Consultation
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Our goal is to provide you with immense value in a short amount of time. During our 30-45 minute on-site visit, we will:
                </p>
              </div>

              <div className="space-y-6">
                {expectedItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-holiday-green" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-holiday-green mb-3">
                      Take the First Step
                    </h2>
                    <p className="text-gray-700">
                      Fill out the form below, and we will contact you within one business day to schedule a convenient time for your on-site consultation.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-holiday-green focus:ring-holiday-green"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-holiday-green focus:ring-holiday-green"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-holiday-green focus:ring-holiday-green"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-holiday-green focus:ring-holiday-green"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Address *
                      </label>
                      <Input
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-holiday-green focus:ring-holiday-green"
                        placeholder="Street address, city, ZIP"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        How did you hear about us?
                      </label>
                      <Select onValueChange={handleSelectChange}>
                        <SelectTrigger className="border-gray-300 focus:border-holiday-green focus:ring-holiday-green">
                          <SelectValue placeholder="Please select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="google">Google Search</SelectItem>
                          <SelectItem value="referral">Friend/Family Referral</SelectItem>
                          <SelectItem value="social">Social Media</SelectItem>
                          <SelectItem value="neighbor">Saw Your Work in Neighborhood</SelectItem>
                          <SelectItem value="sign">Saw a Sign</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tell us a little about your project...
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="border-gray-300 focus:border-holiday-green focus:ring-holiday-green"
                        placeholder="Share your vision, special requirements, or any questions you have..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-holiday-red hover:bg-holiday-red-dark text-white text-lg py-6"
                      size="lg"
                    >
                      Schedule My Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Section */}
      <section className="py-16 bg-holiday-cream/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-holiday-green mb-4">
            Prefer to Speak With Us Directly?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We'd be happy to answer your questions and schedule your consultation over the phone. Give us a call today.
          </p>
          <div className="inline-flex items-center space-x-4 bg-white rounded-lg px-8 py-6 shadow-lg">
            <Phone className="w-8 h-8 text-holiday-green" />
            <a
              href="tel:(404)416-9505"
              className="text-3xl lg:text-4xl font-bold text-holiday-green hover:text-holiday-green-light transition-colors"
            >
              (404) 416-9505
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-600">
            The Jolly Deco Co. is a fully insured business proudly serving the Greater Atlanta Area.
          </p>
        </div>
      </footer>
    </div>
  );
}
