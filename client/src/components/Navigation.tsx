import { useState } from "react";
import { Mail, Menu, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const navLinks = [
  { label: "Impact", id: "impact" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "expertise" },
  { label: "Education", id: "education" },
];

export default function Navigation({ isDark, toggleTheme }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-base font-semibold hover-elevate px-3 py-1 rounded-md tracking-tight"
            data-testid="button-logo"
          >
            Rabib Alam
          </button>

          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(link.id)}
                data-testid={`link-${link.id}`}
                className="text-sm font-normal text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground"
              data-testid="button-theme-toggle"
            >
              {isDark ? "🌞" : "🌙"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-muted-foreground hover:text-foreground hidden md:inline-flex"
            >
              <a
                href="https://www.linkedin.com/in/rabibalam/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="default"
              size="sm"
              asChild
              data-testid="button-contact"
            >
              <a href="mailto:RabibAlamAIPM@gmail.com">
                <Mail className="w-4 h-4 mr-1.5" />
                Contact
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(true)}
              data-testid="button-menu"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent side="right" className="w-[250px] sm:w-[300px]">
          <nav className="flex flex-col gap-3 mt-8">
            {navLinks.map((link) => (
              <Button
                key={link.id}
                variant="ghost"
                className="justify-start text-base font-normal"
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </Button>
            ))}
            <div className="border-t my-2" />
            <a
              href="https://www.linkedin.com/in/rabibalam/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
