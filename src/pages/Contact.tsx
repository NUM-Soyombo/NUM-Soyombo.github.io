import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, MessageSquare, Users, Heart, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form or show success message
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "team@championsrobotics.org",
      description: "General inquiries and support"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "(555) 123-ROBOT",
      description: "Monday - Friday, 3:00 PM - 6:00 PM"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Innovation High School",
      description: "Robotics Lab, Building C, Room 201"
    },
    {
      icon: Calendar,
      title: "Meeting Hours",
      content: "Mon-Fri: 3:30-6:00 PM",
      description: "Saturday workshops during build season"
    }
  ];

  const inquiryTypes = [
    { value: "general", label: "General Information" },
    { value: "sponsorship", label: "Sponsorship Opportunity" },
    { value: "recruitment", label: "Joining the Team" },
    { value: "collaboration", label: "Team Collaboration" },
    { value: "media", label: "Media & Press" },
    { value: "alumni", label: "Alumni Network" }
  ];

  const faqs = [
    {
      question: "How can I join the robotics team?",
      answer: "We welcome new members at the beginning of each school year. Attend our information session in September or contact us directly."
    },
    {
      question: "Do I need prior robotics experience?",
      answer: "No experience required! We provide comprehensive training in programming, mechanical design, and competition strategy."
    },
    {
      question: "What time commitment is required?",
      answer: "Regular season: 3-4 hours per week. Build season (Jan-Feb): 15-20 hours per week including weekends."
    },
    {
      question: "How can my company sponsor the team?",
      answer: "We offer various sponsorship levels starting at $500. Contact us to discuss partnership opportunities that align with your goals."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-primary-glow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact 
              <span className="bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent"> Champions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ready to join our championship legacy? Have questions about sponsorship? 
              Want to collaborate with our team? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-bold text-foreground">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="px-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the type of inquiry" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="Brief description of your inquiry"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl font-bold text-foreground">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        <p className="text-primary font-medium">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl font-bold text-foreground">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/sponsors">
                      <Heart className="mr-2 h-4 w-4" />
                      Become a Sponsor
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/about">
                      <Users className="mr-2 h-4 w-4" />
                      Join Our Team
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/gallery">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      View Gallery
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about joining our team and partnership opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-3">
                  <h3 className="font-semibold text-foreground text-lg">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Have more questions?</p>
            <Button variant="outline" size="lg">
              <Mail className="mr-2 h-5 w-5" />
              Email us directly
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;