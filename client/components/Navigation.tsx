import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { name: "Services", href: "/#services" },
  { name: "Meet Triston", href: "/#about" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Contact", href: "/#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] bg-primary shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link to="/" className="flex items-center" aria-label="The Jolly Deco Co. home">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fc46db2117e2947fb97b0993642d34356%2Fe2cf7d947c4349dab891698e99052d11?format=webp&width=800"
              alt="The Jolly Deco Co. Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isHome ? "text-accent" : "text-background/90 hover:text-accent"
              }`}
            >
              Home
            </Link>
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-background/90 transition-colors hover:text-accent"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:4044169505"
              className="flex items-center gap-2 font-medium text-accent transition-colors hover:text-accent/80"
            >
              <Phone className="h-4 w-4" />
              <span>(404) 416-9505</span>
            </a>
            <Link to="/free-consultation">
              <Button className="bg-accent font-semibold text-primary hover:bg-accent/90">
                Get a Free Quote
              </Button>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-md p-2 text-background transition-colors hover:bg-background/10 hover:text-accent lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-background/20 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="py-2 font-medium text-background transition-colors hover:text-accent"
              >
                Home
              </Link>
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 font-medium text-background transition-colors hover:text-accent"
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-1 space-y-3 border-t border-background/20 pt-4">
                <a
                  href="tel:4044169505"
                  className="flex items-center gap-2 font-medium text-accent"
                >
                  <Phone className="h-4 w-4" />
                  <span>(404) 416-9505</span>
                </a>
                <Link to="/free-consultation" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-accent font-semibold text-primary hover:bg-accent/90">
                    Get a Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
