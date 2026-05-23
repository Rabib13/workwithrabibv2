import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    company: "Meta",
    title: "Sr. Engineering Program Manager, AI Data Centre Network Infra",
    dateRange: "May 2025 – Present",
    summary: "Managing networking hardware and software development for Meta's AI data centres — fabric, network switches, NICs, collectives for HPC, tooling, and telemetry. Driving NPI programs through active engagements with vendors including Broadcom, NVIDIA, AMD, and Celestica. Measuring and optimizing AI data centre network performance at GW scale globally, and building Meta's in-house silicon (MTIA) to support training and inference of AI workloads.",
    logo: "/logos/meta.png",
    url: "https://www.meta.com"
  },
  {
    company: "Tesla Energy",
    title: "Engineering Program Manager, Service & Firmware Analytics",
    dateRange: "Feb 2024 – May 2025",
    summary: "Optimized over-the-air software updates and proactive alert monitoring across Tesla Energy's full product portfolio — Superchargers, Powerwalls, solar, and Megapacks. Led the migration of 1M+ devices to the internal OTA platform and built a fleet health monitoring system with 600+ automated workflows maintaining 99% availability. Introduced offline update flows and fail-fast mechanisms that reduced site update times from 60 to 35 minutes, saving engineers 300+ hours annually.",
    logo: "/logos/tesla.png",
    url: "https://www.tesla.com/energy"
  },
  {
    company: "Loblaw Digital",
    title: "Engineering Program Manager, GenAI, ML & Data Engineering",
    dateRange: "Jul 2022 – Jan 2024",
    summary: "Led two programs in under 3 months: an ML-powered personalized ads platform across all PCExpress banners (40% CTR lift, $10M+ revenue) and advertiser self-serve features that scaled the platform from 15 to 200+ advertisers. Also built a PaLM 2-based health assistant chatbot that automated appointment booking and cut physician wait times by 90%+. Enhanced the data engineering stack with distributed tracing, automated DBT pipelines, and a BigTable migration to address latency at scale.",
    logo: "/logos/loblaw.png",
    url: "https://www.loblawdigital.co"
  },
  {
    company: "General Motors",
    title: "Forward Deployed Engineering, ML & Data",
    dateRange: "Jul 2021 – Jul 2022",
    summary: "Led AI/ML programs at GM's Canadian Technical Centre AI Innovation Team: EV battery charging optimization, smart climate control, automatic trailer hitching, and road/tire traction prediction. Owned the full PDLC — discovery sessions, business case creation, user journey mapping, backlog creation, execution, and continuous improvement. Delivered 4+ features on time, improving both user engagement and stakeholder satisfaction.",
    logo: "/logos/gm.png",
    url: "https://www.gm.com"
  },
  {
    company: "AltaML",
    title: "Forward Deployed Engineering, AI Solutions",
    dateRange: "May 2020 – Jul 2021",
    summary: "Led end-to-end delivery of ML solutions for enterprise clients across Healthcare, Energy & Utilities, Insurance, Technology, and Construction. Delivered low-risk PoC models built for production scalability, then guided clients through pilot and integration phases. Applied Classification, Clustering, NLP, Computer Vision, and MLOps on Azure ML. Facilitated ROI assessments and AI strategy workshops to determine feasibility before committing to build.",
    logo: "/logos/altaml.png",
    url: "https://www.altaml.com"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="space-y-2 mb-14">
          <p className="text-xs uppercase tracking-widest font-medium text-muted-foreground">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold" data-testid="text-section-title">
            Where I've Worked
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl" data-testid="text-section-description">
            From AI-native startups to big tech, building at every scale
          </p>
        </div>

        <div className="relative border-l-2 border-border space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
