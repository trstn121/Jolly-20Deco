import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center text-sm sm:flex-row sm:justify-between sm:text-left">
          <p>© 2026 The Jolly Deco Co LLC</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
            <Link
              to="/privacy-policy"
              className="font-medium text-accent transition-colors hover:text-accent/80"
            >
              Privacy Policy
            </Link>
            <a
              href="tel:7707443965"
              className="transition-colors hover:text-accent"
            >
              (770) 744-3965
            </a>
            <a
              href="mailto:info@jollydecoco.com"
              className="transition-colors hover:text-accent"
            >
              info@jollydecoco.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
