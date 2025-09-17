import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Building, Wrench, Zap, Award, ExternalLink, Mail, Handshake } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Platinum Champions",
      color: "from-accent to-yellow-400",
      textColor: "text-accent",
      borderColor: "border-accent/20",
      bgColor: "bg-accent/10",
      sponsors: [
        {
          name: "TechCorp Industries",
          logo: "TC",
          type: "Technology Partner",
          contribution: "Primary funding and engineering mentorship",
          since: "2015",
          website: "www.techcorp.com"
        },
        {
          name: "Innovation Manufacturing",
          logo: "IM",
          type: "Manufacturing Partner",
          contribution: "CNC machining and 3D printing services",
          since: "2018",
          website: "www.innovationmfg.com"
        }
      ]
    },
    {
      tier: "Gold Supporters",
      color: "from-primary to-primary-glow",
      textColor: "text-primary",
      borderColor: "border-primary/20",
      bgColor: "bg-primary/10",
      sponsors: [
        {
          name: "Elite Engineering Solutions",
          logo: "EE",
          type: "Engineering Firm",
          contribution: "CAD software licenses and design consultation",
          since: "2019",
          website: "www.eliteeng.com"
        },
        {
          name: "Robotics Supply Co",
          logo: "RS",
          type: "Parts Supplier",
          contribution: "Motors, sensors, and electronic components",
          since: "2017",
          website: "www.roboticssupply.com"
        },
        {
          name: "Metro Credit Union",
          logo: "MC",
          type: "Financial Institution",
          contribution: "Travel funding and equipment financing",
          since: "2020",
          website: "www.metrocu.org"
        }
      ]
    },
    {
      tier: "Silver Partners",
      color: "from-secondary to-muted",
      textColor: "text-secondary",
      borderColor: "border-secondary/20",
      bgColor: "bg-secondary/10",
      sponsors: [
        {
          name: "Local Hardware Store",
          logo: "LH",
          type: "Retail Partner",
          contribution: "Tools and basic materials",
          since: "2021",
          website: "www.localhardware.com"
        },
        {
          name: "Community Foundation",
          logo: "CF",
          type: "Non-Profit",
          contribution: "Educational grants and scholarships",
          since: "2016",
          website: "www.communityfund.org"
        },
        {
          name: "Pizza Palace",
          logo: "PP",
          type: "Food Service",
          contribution: "Team meals during build season",
          since: "2022",
          website: "www.pizzapalace.com"
        },
        {
          name: "Tech Repair Shop",
          logo: "TR",
          type: "Service Provider",
          contribution: "Electronics repair and maintenance",
          since: "2023",
          website: "www.techrepair.com"
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Building,
      title: "Brand Visibility",
      description: "Logo placement on robot, team shirts, and all promotional materials"
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Support STEM education and inspire the next generation of engineers"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Acknowledgment at competitions and in championship celebrations"
    },
    {
      icon: Handshake,
      title: "Networking",
      description: "Connect with other business leaders and potential customers"
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
              <Heart className="w-4 h-4 mr-2" />
              Our Supporters
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Thank You 
              <span className="bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent"> Sponsors</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our championship success wouldn't be possible without the generous support of our 
              community partners. Together, we're building the future of robotics education.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsor Recognition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {sponsorTiers.map((tier, tierIndex) => (
              <div key={tierIndex} className="space-y-8">
                <div className="text-center">
                  <h2 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-4`}>
                    {tier.tier}
                  </h2>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-${tier.sponsors.length > 2 ? '2' : tier.sponsors.length} lg:grid-cols-${tier.sponsors.length > 3 ? '4' : tier.sponsors.length} gap-6`}>
                  {tier.sponsors.map((sponsor, index) => (
                    <Card key={index} className={`hover:shadow-lg transition-shadow border-2 ${tier.borderColor}`}>
                      <CardHeader className="text-center pb-4">
                        <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${tier.color} rounded-2xl flex items-center justify-center`}>
                          <span className="text-2xl font-bold text-primary-foreground">{sponsor.logo}</span>
                        </div>
                        <CardTitle className="text-lg">{sponsor.name}</CardTitle>
                        <Badge variant="outline" className={`${tier.borderColor} ${tier.textColor}`}>
                          {sponsor.type}
                        </Badge>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <h4 className="font-medium text-sm text-foreground mb-1">Contribution</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{sponsor.contribution}</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-xs text-muted-foreground">Partner since </span>
                            <span className={`text-xs font-semibold ${tier.textColor}`}>{sponsor.since}</span>
                          </div>
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            <span className="text-xs">Visit</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Partnership Benefits</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our championship team and support the next generation of engineers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sponsorship Packages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the sponsorship level that works best for your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-secondary/20 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-secondary">Bronze Package</CardTitle>
                <div className="text-3xl font-bold text-foreground">$500</div>
                <p className="text-muted-foreground">Supporting Partner</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Logo on team website</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Recognition at competitions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Thank you certificate</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-xl text-accent">Silver Package</CardTitle>
                <div className="text-3xl font-bold text-foreground">$1,500</div>
                <p className="text-muted-foreground">Championship Partner</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>All Bronze benefits</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Logo on robot and team shirts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Social media mentions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Competition passes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-primary">Gold Package</CardTitle>
                <div className="text-3xl font-bold text-foreground">$5,000+</div>
                <p className="text-muted-foreground">Title Sponsor</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>All Silver benefits</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Prominent logo placement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Speaking opportunities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Custom partnership benefits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us for Partnership
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Custom sponsorship packages available. Contact us to discuss your organization's goals.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sponsors;