import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Trophy, Users, Cog, Award, ArrowRight, Zap, Target, Medal } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const Home = () => {
  const heroImages = [
    '/images/Image.jpeg',
    '/images/IMG_2448.JPG',
    '/images/IMG_0317.HEIC'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const achievements = [
    { year: "2024", title: "Үндэсний аварга", competition: "FIRST Robotics Competition" },
    { year: "2018", title: "Үндэсний аварга", competition: "FIRST Robotics Competition" },
    { year: "2016", title: "Үндэсний аварга", competition: "FIRST Robotics Competition" },
    { year: "2021", title: "Үндэсний аварга", competition: "FIRST Robotics Competition" },
  ];

  const stats = [
    { icon: Trophy, value: "6", label: "Үндэсний аварга", color: "text-accent" },
    { icon: Users, value: "250+", label: "Багийн гишүүд", color: "text-primary" },
    { icon: Cog, value: "50+", label: "Робот хөгжүүлсэн туршлага", color: "text-secondary" },
    { icon: Award, value: "100%", label: "Success Rate", color: "text-accent" },
  ];

  console.log("Home component is rendering");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
                <Medal className="w-4 h-4 mr-2" />
                6 удаагийн үндэсний аварга
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                SOYOMBO
                <span className="bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent"> Robotics</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Ази номхон далайн бүсийн үндэсний телвизийн дунд жил бүр зохион байгуулагддаг
                робоын аварга шалгаруулах тэмцээн.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/about">
                    Багийн түүх
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white-500 text-black-500 hover:bg-red-500 hover:text-white">
                  <Link to="/robots">Роботууд
                    <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary-glow/20 rounded-3xl blur-3xl"></div>
              <Card className="relative bg-background/10 backdrop-blur-sm border-primary-foreground/20">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-accent mb-2">+20</div>
                  <div className="text-primary-foreground text-lg mb-4">жилийн туршлага</div>
                  <div className="text-primary-foreground/80 text-sm">
                    Тасралтгүй амжилттай оролцсон
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

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Бидний алсын хараа</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Дэлхийд үнэлэгдэх инженерүүдийг бэлтгэнэ.
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
                  Орчин үеийн роботын технологийг нэвтрүүлсэн.
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


      <Footer />
    </div>
  );
};

export default Home;
