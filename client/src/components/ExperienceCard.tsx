interface ExperienceCardProps {
  company: string;
  title?: string;
  dateRange: string;
  summary: string;
  index: number;
  logo?: string;
  url?: string;
}

export default function ExperienceCard({ company, title, dateRange, summary, logo, url }: ExperienceCardProps) {
  return (
    <div
      className="relative pl-8"
      data-testid={`card-experience-${company.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-background border-2 border-primary" />

      <div className="space-y-4">
        <div className="flex items-start gap-4">
          {logo && url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mt-0.5 hover:opacity-75 transition-opacity"
              aria-label={`Visit ${company} website`}
            >
              <img
                src={logo}
                alt={`${company} logo`}
                className="w-10 h-10 object-contain rounded-lg"
              />
            </a>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
              <div>
                <h3 className="text-xl font-semibold" data-testid="text-company">
                  {company}
                </h3>
                <p className="text-sm text-primary font-medium mt-0.5" data-testid="text-title">
                  {title}
                </p>
              </div>
              <span
                className="text-sm text-muted-foreground whitespace-nowrap pt-0.5"
                data-testid="text-daterange"
              >
                {dateRange}
              </span>
            </div>
          </div>
        </div>

        <p className="text-foreground/85 leading-relaxed" data-testid="text-summary">
          {summary}
        </p>
      </div>
    </div>
  );
}
