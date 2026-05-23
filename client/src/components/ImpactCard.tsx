interface ImpactCardProps {
  metric: string;
  label: string;
  description: string;
  company: string;
  logo?: string;
  url?: string;
}

export default function ImpactCard({ metric, label, description, company, logo, url }: ImpactCardProps) {
  return (
    <div
      className="bg-background p-8 space-y-4"
      data-testid={`card-impact-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="space-y-1">
        <div className="text-5xl md:text-6xl font-bold text-primary tracking-tight" data-testid="text-metric">
          {metric}
        </div>
        <div className="text-base font-semibold" data-testid="text-label">
          {label}
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-description">
        {description}
      </p>
      <div className="flex items-center gap-2 pt-2">
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
              className="w-4 h-4 object-contain"
            />
          </a>
        )}
        <span className="text-xs text-muted-foreground" data-testid="text-company">
          {company}
        </span>
      </div>
    </div>
  );
}
