import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  company: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  image: string;
  imagePosition: "left" | "right";
  logo?: string;
  url?: string;
}

export default function ProjectCard({
  title,
  company,
  problem,
  solution,
  impact,
  technologies,
  image,
  imagePosition,
  logo,
  url,
}: ProjectCardProps) {
  return (
    <div
      className="grid md:grid-cols-2 overflow-hidden rounded-xl border border-border"
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className={imagePosition === "right" ? "md:order-2" : ""}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover min-h-[280px] md:min-h-[360px]"
          data-testid="img-project"
        />
      </div>

      <div
        className={`p-8 md:p-10 flex flex-col justify-center bg-card ${imagePosition === "right" ? "md:order-1" : ""}`}
      >
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              {logo && url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 hover:opacity-75 transition-opacity"
                  aria-label={`Visit ${company} website`}
                >
                  <img
                    src={logo}
                    alt={`${company} logo`}
                    className="w-5 h-5 object-contain"
                  />
                </a>
              )}
              <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium" data-testid="text-company">
                {company}
              </span>
            </div>
            <h3 className="text-2xl font-semibold" data-testid="text-title">
              {title}
            </h3>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <p className="text-xs uppercase tracking-widest font-medium text-muted-foreground mb-1.5">Problem</p>
              <p className="text-foreground/85 leading-relaxed" data-testid="text-problem">{problem}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-medium text-muted-foreground mb-1.5">Solution</p>
              <p className="text-foreground/85 leading-relaxed" data-testid="text-solution">{solution}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-medium text-muted-foreground mb-1.5">Impact</p>
              <p className="font-semibold text-base text-foreground" data-testid="text-impact">{impact}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs"
                data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
