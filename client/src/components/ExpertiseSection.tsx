import { Badge } from "@/components/ui/badge";

const tools = [
  {
    category: "Programming & Dev",
    items: ["Python", "SQL", "GitHub", "Cursor", "Claude Code", "VSCode"]
  },
  {
    category: "ML & AI",
    items: ["Classification", "Clustering", "NLP", "Computer Vision", "MLOps", "Azure ML", "PaLM 2", "LLM"]
  },
  {
    category: "Infrastructure & Cloud",
    items: ["AWS", "Azure", "Kubernetes", "Docker"]
  },
  {
    category: "Data & Analytics",
    items: ["DBeaver", "Periscope", "Splunk", "DBT", "BigQuery", "Distributed Tracing"]
  },
  {
    category: "Collaboration & PM",
    items: ["JIRA", "Confluence", "Postman", "Notion"]
  }
];

const domains = [
  { label: "AI Infrastructure", note: "Meta — data centre networking, custom silicon" },
  { label: "Energy & Utilities", note: "Tesla Energy — OTA systems, fleet monitoring" },
  { label: "Ad-Tech & E-Commerce", note: "Loblaw Digital — ML ads, self-serve platforms" },
  { label: "Automotive", note: "General Motors — in-vehicle ML, R&D programs" },
  { label: "Healthcare AI", note: "Loblaw Digital — GenAI chatbot, appointment automation" },
];

const strengths = [
  "Technical program delivery from 0 to 1",
  "Bridging product strategy and engineering execution",
  "Cross-functional alignment across hardware, software, and platform teams",
  "Data-driven problem scoping and ROI assessment",
  "NPI programs with hardware and network vendors",
  "ML product lifecycle: discovery → model → deployment",
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="space-y-2 mb-14">
          <p className="text-xs uppercase tracking-widest font-medium text-muted-foreground">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold" data-testid="text-section-title">
            What I Bring
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl" data-testid="text-section-description">
            Technical depth across industries, stacks, and program types
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Domain Experience */}
          <div className="rounded-xl border border-border p-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-1" data-testid="text-domains-title">
                Domain Experience
              </h3>
              <p className="text-sm text-muted-foreground">
                Five industries, one consistent pattern: shipping programs that run at scale.
              </p>
            </div>
            <ul className="space-y-4">
              {domains.map((domain) => (
                <li key={domain.label} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <div>
                    <span className="font-medium text-sm">{domain.label}</span>
                    <p className="text-xs text-muted-foreground mt-0.5">{domain.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Strengths */}
          <div className="rounded-xl border border-border p-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-1" data-testid="text-interests-title">
                Core Strengths
              </h3>
              <p className="text-sm text-muted-foreground">
                What I do best, regardless of industry or stack.
              </p>
            </div>
            <ul className="space-y-3">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`text-interest-${index}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <span className="text-sm text-foreground/85">{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Stack */}
          <div className="rounded-xl border border-border p-8 space-y-6 lg:col-span-2">
            <div>
              <h3 className="text-lg font-semibold mb-1" data-testid="text-stack-title">
                Technical Stack
              </h3>
              <p className="text-sm text-muted-foreground">
                Tools I've shipped with across the full stack.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {tools.map((toolGroup, index) => (
                <div key={index} data-testid={`group-tools-${index}`}>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                    {toolGroup.category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {toolGroup.items.map((item) => (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="text-xs"
                        data-testid={`badge-tool-${item.toLowerCase()}`}
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
