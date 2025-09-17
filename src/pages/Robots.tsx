import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cog, Zap, Trophy, Weight, Ruler, Cpu, Camera, Gauge } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Robots = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  const robots = {
    "2024": {
      name: "Titan Apex",
      year: "2024",
      status: "National Champion",
      description: "Our most advanced robot yet, featuring AI-powered autonomous navigation and precision manipulation systems.",
      specs: {
        dimensions: "3.2ft × 2.8ft × 2.5ft",
        weight: "125 lbs",
        programming: "Python + C++",
        sensors: "LiDAR, Vision, IMU, Encoders",
        actuators: "4x NEO Motors, Pneumatics",
        speed: "15 ft/s max"
      },
      features: [
        "Autonomous navigation with SLAM",
        "Computer vision object detection",
        "Precision manipulator arm",
        "Adaptive grip system",
        "Real-time strategy adjustment"
      ],
      achievements: [
        "FIRST National Champions",
        "Innovation in Control Award",
        "Autonomous Programming Excellence"
      ]
    },
    "2023": {
      name: "Thunder Strike",
      year: "2023",
      status: "National Champion",
      description: "High-speed precision robot designed for rapid task completion and strategic gameplay.",
      specs: {
        dimensions: "3.0ft × 2.5ft × 2.3ft",
        weight: "118 lbs",
        programming: "Java + LabVIEW",
        sensors: "Gyroscope, Cameras, Ultrasonic",
        actuators: "6x CIM Motors",
        speed: "12 ft/s max"
      },
      features: [
        "Lightning-fast pickup mechanism",
        "Strategic scoring system",
        "Robust defense capabilities",
        "Multi-mode operation",
        "Enhanced stability control"
      ],
      achievements: [
        "FIRST National Champions",
        "Engineering Excellence Award",
        "Team Spirit Award"
      ]
    },
    "2022": {
      name: "Phoenix Rising",
      year: "2022",
      status: "National Champion",
      description: "Versatile competition robot with modular design for maximum adaptability during matches.",
      specs: {
        dimensions: "2.9ft × 2.4ft × 2.2ft",
        weight: "115 lbs",
        programming: "C++ + Python",
        sensors: "Vision, Gyro, Encoders",
        actuators: "4x Falcon 500 Motors",
        speed: "10 ft/s max"
      },
      features: [
        "Modular attachment system",
        "Adaptive scoring mechanisms",
        "Enhanced maneuverability",
        "Reliable autonomous routines",
        "Strategic alliance capabilities"
      ],
      achievements: [
        "FIRST National Champions",
        "Design Award",
        "Rookie Inspiration (Mentoring)"
      ]
    }
  };

  const currentRobot = robots[selectedYear as keyof typeof robots];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-primary-glow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Cog className="w-4 h-4 mr-2" />
              Our Machines
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Championship 
              <span className="bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent"> Robots</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Each robot represents a year of innovation, engineering excellence, and championship performance. 
              Explore the technical achievements that have made us 20-time national champions.
            </p>
          </div>
        </div>
      </section>

      {/* Robot Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedYear} onValueChange={setSelectedYear} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="2024" className="text-lg">2024</TabsTrigger>
              <TabsTrigger value="2023" className="text-lg">2023</TabsTrigger>
              <TabsTrigger value="2022" className="text-lg">2022</TabsTrigger>
            </TabsList>

            {Object.entries(robots).map(([year, robot]) => (
              <TabsContent key={year} value={year} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Robot Image Placeholder */}
                  <div className="space-y-6">
                    <Card className="aspect-square bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/10">
                      <CardContent className="h-full flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                            <Cog className="h-16 w-16 text-primary-foreground animate-spin" />
                          </div>
                          <p className="text-muted-foreground">Robot Image Gallery</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((i) => (
                        <Card key={i} className="aspect-square bg-muted/30">
                          <CardContent className="h-full flex items-center justify-center">
                            <Camera className="h-8 w-8 text-muted-foreground" />
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Robot Details */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="outline" className="border-accent text-accent">
                          <Trophy className="w-4 h-4 mr-1" />
                          {robot.status}
                        </Badge>
                        <Badge variant="secondary">{robot.year}</Badge>
                      </div>
                      <h2 className="text-3xl font-bold text-foreground mb-4">{robot.name}</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">{robot.description}</p>
                    </div>

                    {/* Technical Specifications */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Cpu className="h-5 w-5 text-primary" />
                          <span>Technical Specifications</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3">
                            <Ruler className="h-5 w-5 text-accent" />
                            <div>
                              <div className="font-medium">Dimensions</div>
                              <div className="text-sm text-muted-foreground">{robot.specs.dimensions}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Weight className="h-5 w-5 text-accent" />
                            <div>
                              <div className="font-medium">Weight</div>
                              <div className="text-sm text-muted-foreground">{robot.specs.weight}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Cpu className="h-5 w-5 text-accent" />
                            <div>
                              <div className="font-medium">Programming</div>
                              <div className="text-sm text-muted-foreground">{robot.specs.programming}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Gauge className="h-5 w-5 text-accent" />
                            <div>
                              <div className="font-medium">Max Speed</div>
                              <div className="text-sm text-muted-foreground">{robot.specs.speed}</div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 md:col-span-2">
                            <Zap className="h-5 w-5 text-accent" />
                            <div>
                              <div className="font-medium">Sensors & Actuators</div>
                              <div className="text-sm text-muted-foreground">{robot.specs.sensors} | {robot.specs.actuators}</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Key Features */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Key Features</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {robot.features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-accent rounded-full"></div>
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Achievements */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Trophy className="h-5 w-5 text-accent" />
                          <span>Competition Achievements</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {robot.achievements.map((achievement, index) => (
                            <Badge key={index} variant="outline" className="mr-2 mb-2 border-accent/30 text-accent">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Robot Evolution Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Evolution of Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each year brings new challenges and innovations. See how our robots have evolved over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(robots).reverse().map(([year, robot]) => (
              <Card key={year} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                      <Trophy className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{robot.name}</h3>
                      <p className="text-accent font-semibold">{robot.year} Champion</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {robot.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setSelectedYear(year)}
                      className="border-primary/20 hover:bg-primary/10"
                    >
                      View Details
                    </Button>
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

export default Robots;