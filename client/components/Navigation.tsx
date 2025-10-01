import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Our Process", href: "/our-process" },
    { name: "Gallery", href: "/gallery" },
    { name: "Why Us", href: "/why-us" },
    { name: "Contact", href: "/free-consultation" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-primary shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc46db2117e2947fb97b0993642d34356%2Fe2cf7d947c4349dab891698e99052d11?format=webp&width=800"
              alt="The Jolly Deco Co. Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 py-2 px-1 ${
                  isActive(item.href)
                    ? "text-background border-b-2 border-accent"
                    : "text-background/90 hover:text-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:(404)416-9505"
              className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(404) 416-9505</span>
            </a>
            <Link to="/free-consultation">
              <Button className="bg-accent hover:bg-accent/90 text-primary">
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-background hover:text-accent hover:bg-primary-foreground/10"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-background/20">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium py-2 transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-accent"
                      : "text-background hover:text-accent"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-background/20 space-y-3">
                <a
                  href="tel:(404)416-9505"
                  className="flex items-center space-x-2 text-accent font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>(404) 416-9505</span>
                </a>
                <Link to="/free-consultation">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-primary">
                    Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
