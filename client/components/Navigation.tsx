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
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-holiday-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">J</span>
            </div>
            <div className="flex flex-col">
              <span className="text-holiday-green font-bold text-lg leading-none">
                The Jolly
              </span>
              <span className="text-holiday-green-light text-sm leading-none">
                Deco Co.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-holiday-green border-b-2 border-holiday-green"
                    : "text-gray-700 hover:text-holiday-green"
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
              className="flex items-center space-x-2 text-holiday-green hover:text-holiday-green-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(404) 416-9505</span>
            </a>
            <Button className="bg-holiday-red hover:bg-holiday-red-dark text-white">
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-holiday-green hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium py-2 transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-holiday-green"
                      : "text-gray-700 hover:text-holiday-green"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a
                  href="tel:(404)416-9505"
                  className="flex items-center space-x-2 text-holiday-green font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>(404) 416-9505</span>
                </a>
                <Button className="w-full bg-holiday-red hover:bg-holiday-red-dark text-white">
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
