import { ChevronDown, Linkedin } from "lucide-react";
import profileImage from "@assets/generated_images/profile_picture.jpg";

export default function HeroSection() {
  const scrollToImpact = () => {
    const element = document.getElementById("impact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          <div className="md:col-span-3 space-y-8">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest font-medium text-muted-foreground">
                Engineering Program Manager
              </p>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
                data-testid="text-hero-name"
              >
                Rabib Alam
              </h1>
              <p
                className="text-xl md:text-2xl font-medium text-muted-foreground"
                data-testid="text-hero-title"
              >
                Deploying AI compute capacity at Meta's data centres.
              </p>
            </div>

            <div className="space-y-4 max-w-xl">
              <p
                className="text-lg leading-relaxed text-foreground/85"
                data-testid="text-hero-mission"
              >
                Engineering Leader with 6+ years shipping impactful programs across AI infrastructure,
                energy, ad-tech, and automotive. If you've used Tesla's Powerwalls, Loblaw's PC Express,
                or GM vehicles — you've likely benefited from programs I've managed.
              </p>
              <p className="text-base leading-relaxed text-foreground/70">
                Currently driving NPI programs at Meta Infra to deliver AI compute capacity to data centres
                in record timelines, serving Meta's superintelligence labs and product groups globally.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4" data-testid="text-contact-info">
              <a
                href="mailto:RabibAlamAIPM@gmail.com"
                className="text-sm hover-elevate px-3 py-1.5 rounded-md text-foreground/80 hover:text-foreground transition-colors"
                data-testid="link-email"
              >
                RabibAlamAIPM@gmail.com
              </a>
              <span className="text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground">San Francisco Bay Area</span>
              <span className="text-muted-foreground">·</span>
              <a
                href="https://www.linkedin.com/in/rabibalam/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm hover-elevate px-3 py-1.5 rounded-md text-foreground/80 hover:text-foreground transition-colors"
                aria-label="LinkedIn profile"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border border-border">
              <img
                src={profileImage}
                alt="Rabib Alam"
                className="w-full h-full object-cover"
                data-testid="img-hero-profile"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToImpact}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hover-elevate p-2 rounded-full animate-bounce"
        data-testid="button-scroll-indicator"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  );
}
