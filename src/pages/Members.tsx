import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Crown, Code, Wrench, Gamepad2, Palette, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import member images
import alexChenImg from "/images/member/alex-chen.jpg";
import mayaRodriguezImg from "/images/member/maya-rodriguez.jpg";
import samThompsonImg from "/images/member/sam-thompson.jpg";
import jordanKimImg from "/images/member/jordan-kim.jpg";
import taylorBrooksImg from "/images/member/taylor-brooks.jpg";
import caseyWilliamsImg from "/images/member/casey-williams.jpg";
import riverPatelImg from "/images/member/river-patel.jpg";
import averyJohnsonImg from "/images/member/avery-johnson.jpg";

const Members = () => {
  const currentMembers = [
    {
      name: "Alex Chen",
      role: "Team Captain",
      grade: "Senior",
      icon: Crown,
      bio: "Leading the team for two years, specializing in autonomous programming and strategic planning.",
      skills: ["Leadership", "Python", "Strategy"],
      image: alexChenImg
    },
    {
      name: "Maya Rodriguez",
      role: "Lead Programmer",
      grade: "Senior",
      icon: Code,
      bio: "Expert in robot control systems and computer vision algorithms.",
      skills: ["C++", "Computer Vision", "AI"],
      image: mayaRodriguezImg
    },
    {
      name: "Sam Thompson",
      role: "Chief Engineer",
      grade: "Junior",
      icon: Wrench,
      bio: "Mechanical design specialist with expertise in CAD and manufacturing.",
      skills: ["CAD", "Manufacturing", "Design"],
      image: samThompsonImg
    },
    {
      name: "Jordan Kim",
      role: "Driver & Strategy",
      grade: "Senior",
      icon: Gamepad2,
      bio: "Primary robot operator with exceptional hand-eye coordination and game analysis skills.",
      skills: ["Driving", "Strategy", "Game Analysis"],
      image: jordanKimImg
    },
    {
      name: "Taylor Brooks",
      role: "Marketing Lead",
      grade: "Junior",
      icon: Palette,
      bio: "Handles team branding, social media, and sponsor relations.",
      skills: ["Design", "Marketing", "Communication"],
      image: taylorBrooksImg
    },
    {
      name: "Casey Williams",
      role: "Build Team",
      grade: "Sophomore",
      icon: Wrench,
      bio: "Passionate about hands-on construction and mechanical systems.",
      skills: ["Assembly", "Testing", "Problem Solving"],
      image: caseyWilliamsImg
    },
    {
      name: "River Patel",
      role: "Programmer",
      grade: "Sophomore",
      icon: Code,
      bio: "Developing skills in autonomous programming and sensor integration.",
      skills: ["Java", "Sensors", "Learning"],
      image: riverPatelImg
    },
    {
      name: "Avery Johnson",
      role: "Scout & Analyst",
      grade: "Junior",
      icon: Users,
      bio: "Analyzes competition data and develops strategic alliances.",
      skills: ["Data Analysis", "Scouting", "Strategy"],
      image: averyJohnsonImg
    }
  ];

  const alumni = [
    {
      name: "Dr. Emily Zhang",
      graduationYear: "2019",
      currentPosition: "Robotics Engineer at Boston Dynamics",
      achievement: "Lead programmer for 2017-2019 championship teams"
    },
    {
      name: "Marcus Johnson",
      graduationYear: "2020",
      currentPosition: "Software Engineer at Tesla",
      achievement: "Team Captain, led team to 2020 championship"
    },
    {
      name: "Sarah Mitchell",
      graduationYear: "2021",
      currentPosition: "Mechanical Engineer at SpaceX",
      achievement: "Chief Engineer for award-winning robot designs"
    },
    {
      name: "David Park",
      graduationYear: "2022",
      currentPosition: "Computer Science Student at MIT",
      achievement: "Autonomous programming specialist"
    }
  ];

  const getRoleColor = (role: string) => {
    if (role.includes("Captain")) return "bg-accent/10 text-accent border-accent/20";
    if (role.includes("Lead") || role.includes("Chief")) return "bg-primary/10 text-primary border-primary/20";
    return "bg-secondary/10 text-secondary border-secondary/20";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-primary-glow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Users className="w-4 h-4 mr-2" />
              Our Team
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet the 
              <span className="bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent"> Champions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Behind every championship robot is a dedicated team of student engineers, programmers, 
              and strategists. Meet the current team members who continue our legacy of excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Current Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">2024 Team Roster</h2>
            <p className="text-xl text-muted-foreground">The current champions driving our success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <Badge variant="outline" className={`mt-2 ${getRoleColor(member.role)}`}>
                      <member.icon className="w-3 h-3 mr-1" />
                      {member.role}
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-1">{member.grade}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide">Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Team Culture</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What makes our team special beyond the championships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Mentorship</h3>
                <p className="text-muted-foreground">
                  Senior members mentor newcomers, ensuring knowledge transfer and continuous improvement across generations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent to-yellow-400 rounded-full flex items-center justify-center">
                  <Wrench className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Hands-On Learning</h3>
                <p className="text-muted-foreground">
                  Every member gets practical experience with design, programming, and competition strategy.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
                  <Crown className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Leadership Development</h3>
                <p className="text-muted-foreground">
                  Students develop leadership skills through project management and team coordination roles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alumni Success */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Alumni Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our graduates go on to excel in top universities and leading technology companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alumni.map((alum, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center space-y-3">
                    <Avatar className="w-16 h-16 mx-auto">
                      <AvatarFallback className="bg-gradient-to-br from-secondary to-primary text-secondary-foreground">
                        {alum.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-foreground">{alum.name}</h3>
                      <p className="text-sm text-accent">Class of {alum.graduationYear}</p>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{alum.currentPosition}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{alum.achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Members;