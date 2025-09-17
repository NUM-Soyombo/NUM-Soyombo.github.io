import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Video, Trophy, Users, Cog, Play, Image as ImageIcon } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      type: "image",
      category: "competition",
      title: "2024 National Championship Victory",
      description: "Team celebrating with the championship trophy",
      year: "2024",
      placeholder: "Trophy ceremony with confetti and team celebration"
    },
    {
      id: 2,
      type: "video",
      category: "robot",
      title: "Titan Apex in Action",
      description: "Our 2024 robot demonstrating autonomous capabilities",
      year: "2024",
      placeholder: "Robot performing complex autonomous tasks"
    },
    {
      id: 3,
      type: "image",
      category: "team",
      title: "Workshop Session",
      description: "Team members collaborating on robot construction",
      year: "2024",
      placeholder: "Students working together in the robotics lab"
    },
    {
      id: 4,
      type: "image",
      category: "competition",
      title: "Regional Finals",
      description: "Intense moment during regional competition",
      year: "2024",
      placeholder: "Robot on competition field during match"
    },
    {
      id: 5,
      type: "video",
      category: "robot",
      title: "Thunder Strike Highlights",
      description: "2023 championship robot showcase",
      year: "2023",
      placeholder: "High-speed robot movements and precision tasks"
    },
    {
      id: 6,
      type: "image",
      category: "team",
      title: "Team Building Day",
      description: "Annual team bonding and strategy session",
      year: "2024",
      placeholder: "Team members in a circle discussion outdoors"
    },
    {
      id: 7,
      type: "image",
      category: "competition",
      title: "Alliance Strategy Meeting",
      description: "Coordinating with alliance partners",
      year: "2024",
      placeholder: "Students huddled around strategy boards"
    },
    {
      id: 8,
      type: "video",
      category: "behind-scenes",
      title: "Build Season Time-lapse",
      description: "Six weeks of robot construction in 60 seconds",
      year: "2024",
      placeholder: "Fast-paced construction and testing montage"
    },
    {
      id: 9,
      type: "image",
      category: "behind-scenes",
      title: "Late Night Programming",
      description: "Dedicated team members perfecting autonomous code",
      year: "2024",
      placeholder: "Students coding late into the night"
    },
    {
      id: 10,
      type: "image",
      category: "competition",
      title: "Award Ceremony",
      description: "Receiving the Engineering Excellence Award",
      year: "2023",
      placeholder: "Team members accepting award on stage"
    },
    {
      id: 11,
      type: "video",
      category: "robot",
      title: "Phoenix Rising Demo",
      description: "2022 robot capabilities demonstration",
      year: "2022",
      placeholder: "Detailed robot feature demonstrations"
    },
    {
      id: 12,
      type: "image",
      category: "team",
      title: "Mentor Appreciation",
      description: "Honoring our dedicated volunteer mentors",
      year: "2024",
      placeholder: "Team with adult mentors in group photo"
    }
  ];

  const categories = [
    { id: "all", label: "All Media", icon: Camera },
    { id: "competition", label: "Competition", icon: Trophy },
    { id: "robot", label: "Robots", icon: Cog },
    { id: "team", label: "Team", icon: Users },
    { id: "behind-scenes", label: "Behind Scenes", icon: Video }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const MediaCard = ({ item }: { item: typeof galleryItems[0] }) => (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-primary-glow/10">
        <div className="absolute inset-0 flex items-center justify-center">
          {item.type === "video" ? (
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="h-8 w-8 text-primary-foreground ml-1" />
              </div>
              <div className="text-sm text-muted-foreground px-4">{item.placeholder}</div>
            </div>
          ) : (
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent to-yellow-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ImageIcon className="h-8 w-8 text-accent-foreground" />
              </div>
              <div className="text-sm text-muted-foreground px-4">{item.placeholder}</div>
            </div>
          )}
        </div>
        <div className="absolute top-3 left-3">
          <Badge variant={item.type === "video" ? "default" : "secondary"} className="bg-background/80 backdrop-blur-sm">
            {item.type === "video" ? <Video className="w-3 h-3 mr-1" /> : <Camera className="w-3 h-3 mr-1" />}
            {item.type.toUpperCase()}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
            {item.year}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-primary-glow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Camera className="w-4 h-4 mr-2" />
              Media Gallery
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Championship 
              <span className="bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent"> Moments</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Explore the highlights from our competitions, behind-the-scenes moments, and the 
              incredible robots that have made us 20-time national champions.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-12">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center space-x-2">
                  <category.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <MediaCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Achievement Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Competition Highlights</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Memorable moments from our championship journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Perfect Autonomous",
                description: "First team to achieve 100% autonomous scoring rate in finals",
                year: "2024",
                icon: Cog
              },
              {
                title: "Comeback Victory",
                description: "Overcame 50-point deficit in championship match",
                year: "2023",
                icon: Trophy
              },
              {
                title: "Innovation Award",
                description: "Recognized for breakthrough manipulator design",
                year: "2022",
                icon: Camera
              }
            ].map((highlight, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                    <highlight.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{highlight.title}</h3>
                    <Badge variant="outline" className="border-accent text-accent mb-3">
                      {highlight.year}
                    </Badge>
                    <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
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

export default Gallery;