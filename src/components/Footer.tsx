import { Link } from "react-router-dom";
import { Trophy, Mail, Github, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-primary to-primary-glow rounded-lg w-16 h-16 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/logo/SOYMBO_logo.png"
                  alt="Soyombo Robotics Logo"
                  className="object-contain w-full h-full transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">Soyombo Robotics</h3>
                <p className="text-accent text-sm font-semibold">20-Time National Champions</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building excellence through innovation, teamwork, and dedication.
              Our legacy of championship wins spans two decades, with each generation
              of students continuing our tradition of engineering excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/robots" className="text-sm text-muted-foreground hover:text-accent transition-colors">Our Robots</Link></li>
              <li><Link to="/members" className="text-sm text-muted-foreground hover:text-accent transition-colors">Team Members</Link></li>
              <li><Link to="/gallery" className="text-sm text-muted-foreground hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link to="/sponsors" className="text-sm text-muted-foreground hover:text-accent transition-colors">Sponsors</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">soyomboteam@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">National University of Mongolia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Github className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">@NUM-Soyombo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Champions Robotics Team. All rights reserved. | 20 Years of Experience
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;