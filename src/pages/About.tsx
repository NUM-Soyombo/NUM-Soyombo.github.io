import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, BookOpen, Lightbulb, Target, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push the boundaries of robotics technology, encouraging creative solutions and breakthrough thinking."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Teamwork is at our core. Every member contributes unique skills to achieve our collective goals."
    },
    {
      icon: Target,
      title: "Perseverance",
      description: "Challenges fuel our determination. We view setbacks as learning opportunities and stepping stones to success."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in engineering, competition, and sportsmanship."
    }
  ];

  const milestones = [
    { year: "2000", event: "Team Founded", description: "Champions Robotics was established with a vision of excellence" },
    { year: "2006", event: "First Championship", description: "Won our first national championship in rookie year" },
    { year: "2010", event: "5th Consecutive Win", description: "Established ourselves as a robotics powerhouse" },
    { year: "2015", event: "10th Championship", description: "Reached double-digit championship wins" },
    { year: "2020", event: "15th Championship", description: "Maintained excellence through adversity" },
    { year: "2024", event: "6th Championship", description: "Achieved unprecedented 20-year winning streak" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/images/IMG_2448.JPG)' }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Trophy className="w-4 h-4 mr-2" />
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Two Decades of
              <span className="bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent"> Excellence</span>
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Since 2004, Champions Robotics has redefined what's possible in competitive robotics.
              Our unprecedented 20-year championship streak represents more than victories—it's a testament
              to our culture of innovation, mentorship, and sustainable excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To foster innovation in robotics engineering while inspiring the next generation of technical leaders.
                We believe that through collaborative problem-solving, rigorous engineering practices, and a commitment
                to excellence, we can prepare students for successful careers in STEM fields.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our unique approach combines cutting-edge technology with time-tested mentorship practices,
                ensuring that each new generation of team members inherits not just technical knowledge,
                but the values and work ethic that drive championship performance.
              </p>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/10">
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">20</div>
                  <div className="text-muted-foreground">Years of Championships</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Success Rate Since Founding</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">250+</div>
                  <div className="text-muted-foreground">Alumni in STEM Careers</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our championship culture and drive our continued success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Strategy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Secret to Our Success</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How we maintain championship performance with annual member turnover
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <span>Knowledge Transfer System</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our comprehensive documentation and mentorship program ensures that critical knowledge,
                  strategies, and engineering practices are preserved and passed down to new team members.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-primary" />
                  <span>Multi-Year Leadership</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Senior members serve as mentors and technical leads, creating continuity across
                  competition seasons while developing the next generation of team leaders.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Trophy className="h-6 w-6 text-primary" />
                  <span>Championship Culture</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We've built a culture where excellence is the expectation, not the exception.
                  Every new member joins a legacy of success and is motivated to maintain our standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Major Milestones</h2>
            <p className="text-xl text-muted-foreground">Key moments in our championship journey</p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-accent-foreground">{milestone.year}</span>
                  </div>
                </div>
                <Card className="flex-1">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.event}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;