import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Trophy, Users, Cog, Award, ArrowRight, Zap, Target, Medal } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  const achievements = [
    { year: "2024", title: "National Champions", competition: "FIRST Robotics Competition" },
    { year: "2023", title: "National Champions", competition: "FIRST Robotics Competition" },
    { year: "2022", title: "National Champions", competition: "FIRST Robotics Competition" },
    { year: "2021", title: "National Champions", competition: "FIRST Robotics Competition" },
  ];

  const stats = [
    { icon: Trophy, value: "20", label: "Championships", color: "text-accent" },
    { icon: Users, value: "250+", label: "Alumni", color: "text-primary" },
    { icon: Cog, value: "50+", label: "Robots Built", color: "text-secondary" },
    { icon: Award, value: "100%", label: "Success Rate", color: "text-accent" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-secondary">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
                <Medal className="w-4 h-4 mr-2" />
                20-Time National Champions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Champions 
                <span className="bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent"> Robotics</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Two decades of excellence in robotics engineering. Every year, new members. 
                Every year, national champions. Join the legacy of innovation and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/about">
                    Learn Our Story
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/robots">View Our Robots</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary-glow/20 rounded-3xl blur-3xl"></div>
              <Card className="relative bg-background/10 backdrop-blur-sm border-primary-foreground/20">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-accent mb-2">20</div>
                  <div className="text-primary-foreground text-lg mb-4">Consecutive Championships</div>
                  <div className="text-primary-foreground/80 text-sm">
                    An unprecedented streak of excellence in competitive robotics
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-background shadow-lg">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              To foster innovation in robotics engineering while building the next generation of technical leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Innovation</h3>
                <p className="text-muted-foreground">
                  Pushing the boundaries of what's possible with cutting-edge robotics technology and creative problem-solving.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent to-yellow-400 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Excellence</h3>
                <p className="text-muted-foreground">
                  Maintaining our championship standard through rigorous training, precise engineering, and strategic thinking.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Legacy</h3>
                <p className="text-muted-foreground">
                  Building a sustainable culture of success that transfers knowledge across generations of team members.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Recent Championships</h2>
            <p className="text-xl text-muted-foreground">Our latest victories in national competition</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-l-4 border-l-accent">
                <CardContent className="space-y-3">
                  <div className="text-2xl font-bold text-accent">{achievement.year}</div>
                  <div className="flex justify-center">
                    <Trophy className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.competition}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/about">
                View Complete History
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;