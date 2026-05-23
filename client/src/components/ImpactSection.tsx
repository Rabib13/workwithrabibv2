import ImpactCard from "./ImpactCard";

const impacts = [
  {
    metric: "$10M+",
    label: "Revenue Unlocked",
    description: "Led Loblaw Digital's ML-powered personalized ads platform in under 3 months, achieving a 40% lift in CTR and unlocking $10M+ in new revenue.",
    company: "Loblaw Digital",
    logo: "/logos/loblaw.png",
    url: "https://www.loblawdigital.co"
  },
  {
    metric: "1M+",
    label: "Devices Migrated",
    description: "Led Tesla Energy's migration to the internal OTA platform — streamlining update flows and saving engineers 300+ hours annually.",
    company: "Tesla Energy",
    logo: "/logos/tesla.png",
    url: "https://www.tesla.com/energy"
  },
  {
    metric: "$XB",
    label: "Capital Avoided",
    description: "Driving technical delivery across Meta's AI network infrastructure program, projected to avoid billions in capital spend by enabling in-house silicon at scale.",
    company: "Meta",
    logo: "/logos/meta.png",
    url: "https://www.meta.com"
  },
  {
    metric: "600+",
    label: "Automated Workflows",
    description: "Built a fleet health monitoring system detecting unique failure signatures across Superchargers, Megapacks, and Powerwalls — ensuring 99% availability.",
    company: "Tesla Energy",
    logo: "/logos/tesla.png",
    url: "https://www.tesla.com/energy"
  },
  {
    metric: "90%+",
    label: "Wait Time Reduction",
    description: "Built a PaLM 2-based health assistant chatbot at Loblaw that automated appointment booking and cut physician wait times by over 90%.",
    company: "Loblaw Digital",
    logo: "/logos/loblaw.png",
    url: "https://www.loblawdigital.co"
  },
  {
    metric: "200+",
    label: "Advertisers Scaled",
    description: "Launched self-serve advertiser capabilities and data-powered features, growing Loblaw's ads platform from 15 managed accounts to 200+ self-serve advertisers.",
    company: "Loblaw Digital",
    logo: "/logos/loblaw.png",
    url: "https://www.loblawdigital.co"
  }
];

export default function ImpactSection() {
  return (
    <section id="impact" className="py-20 lg:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="space-y-2 mb-14">
          <p className="text-xs uppercase tracking-widest font-medium text-muted-foreground">
            Results
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold" data-testid="text-section-title">
            Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl" data-testid="text-section-description">
            Numbers that tell the story
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {impacts.map((impact) => (
            <ImpactCard key={`${impact.metric}-${impact.label}`} {...impact} />
          ))}
        </div>
      </div>
    </section>
  );
}
