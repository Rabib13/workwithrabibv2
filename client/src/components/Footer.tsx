import { Mail, MapPin, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="text-lg font-semibold" data-testid="text-footer-name">
              Rabib Alam
            </h3>
            <p className="text-sm text-muted-foreground mt-1" data-testid="text-footer-title">
              Sr. Engineering Program Manager · Meta
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <a
              href="mailto:RabibAlamAIPM@gmail.com"
              className="flex items-center gap-2 text-sm hover-elevate px-3 py-1 rounded-md text-foreground/75 hover:text-foreground transition-colors"
              data-testid="link-footer-email"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>RabibAlamAIPM@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rabibalam/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover-elevate px-3 py-1 rounded-md text-foreground/75 hover:text-foreground transition-colors"
              data-testid="link-footer-linkedin"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>linkedin.com/in/rabibalam</span>
            </a>
            <div className="flex items-center gap-2 text-sm text-muted-foreground px-3 py-1" data-testid="text-footer-location">
              <MapPin className="w-3.5 h-3.5" />
              <span>San Francisco Bay Area</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-xs text-muted-foreground" data-testid="text-copyright">
          © {new Date().getFullYear()} Rabib Alam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
