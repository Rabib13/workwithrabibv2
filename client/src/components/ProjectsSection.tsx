import ProjectCard from "./ProjectCard";
import metaImage from "@assets/generated_images/AI_network_infrastructure_visualization_7610c659.png";
import teslaImage from "@assets/generated_images/Fleet_monitoring_dashboard_709abcb6.png";
import loblawImage from "@assets/generated_images/Personalized_ads_platform_272efe23.png";
import gmImage from "@assets/generated_images/EV_optimization_interface_82f5d08a.png";

const projects = [
  {
    title: "AI Network Infrastructure",
    company: "Meta",
    problem: "Scaling MTIA chip communication across Meta's GW-scale data centres required efficient collective communication and transport-layer software to avoid billions in capital spend.",
    solution: "Led cross-functional NPI programs coordinating hardware, network, and AI platform teams — building high-speed networking for fabric, switches, NICs, and collectives for HPC, from chip-level to full cross-rack deployments.",
    impact: "Projected $XB capital avoidance and major training throughput gains by 2030",
    technologies: ["MTIA", "Network Architecture", "HPC Collectives", "NPI Programs", "Data Centre Infrastructure", "NVIDIA", "Broadcom"],
    image: metaImage,
    imagePosition: "left" as const,
    logo: "/logos/meta.png",
    url: "https://www.meta.com"
  },
  {
    title: "Fleet Health Monitoring System",
    company: "Tesla Energy",
    problem: "Managing health and availability of 1M+ Tesla Energy products across Superchargers, Powerwalls, solar, and Megapacks required automated monitoring and rapid issue detection.",
    solution: "Built a fleet health monitoring tool with 600+ automated ticketing workflows, each detecting unique failure signatures across the full product portfolio. Introduced offline update flows and fail-fast mechanisms.",
    impact: "99% availability guarantee maintained; site update times cut from 60 to 35 minutes",
    technologies: ["Automated Workflows", "Fleet Monitoring", "SQL Analytics", "Real-time Alerting", "OTA Systems"],
    image: teslaImage,
    imagePosition: "right" as const,
    logo: "/logos/tesla.png",
    url: "https://www.tesla.com/energy"
  },
  {
    title: "ML-Powered Personalized Ads Platform",
    company: "Loblaw Digital",
    problem: "Loblaw's e-commerce sites needed targeted advertising to increase engagement and revenue — and a self-serve model to move beyond manually managed accounts.",
    solution: "Launched ML-based personalized ads platform with keyword relevancy ranking, GenAI keyword suggestions, offline sales attribution, and predictive analytics across all PCExpress banners — in under 3 months.",
    impact: "40% lift in CTR, $10M+ revenue, and platform scaled from 15 to 200+ advertisers",
    technologies: ["Machine Learning", "GenAI", "Data Engineering", "DBT", "Distributed Tracing", "Ad Tech"],
    image: loblawImage,
    imagePosition: "left" as const,
    logo: "/logos/loblaw.png",
    url: "https://www.loblawdigital.co"
  },
  {
    title: "GenAI Health Assistant Chatbot",
    company: "Loblaw Digital",
    problem: "Healthcare access was bottlenecked by physician availability, with patients waiting too long for appointments and struggling to navigate insurance benefits.",
    solution: "Built a PaLM 2-based health assistant chatbot that automated appointment booking, guided patients through insurance benefits utilization, and provided contextual health guidance.",
    impact: "Physician wait times cut by 90%+ and insurance benefits utilization improved",
    technologies: ["PaLM 2", "LLM", "GenAI", "Healthcare AI", "Chatbot", "NLP"],
    image: loblawImage,
    imagePosition: "right" as const,
    logo: "/logos/loblaw.png",
    url: "https://www.loblawdigital.co"
  },
  {
    title: "OTA Platform Migration",
    company: "Tesla Energy",
    problem: "Legacy script-based deployment tools were error-prone and slow, requiring manual intervention for 1M+ device updates across Superchargers, Megapacks, and Powerwalls.",
    solution: "Migrated entire Tesla Energy fleet to the internal OTA platform. Used SQL-driven analysis to optimize Megapack processes and implemented offline updates and fail-fast capabilities.",
    impact: "300+ hours saved per engineer annually; update time reduced from 60 to 35 minutes",
    technologies: ["OTA Systems", "SQL Analytics", "Process Optimization", "Firmware Deployment"],
    image: teslaImage,
    imagePosition: "left" as const,
    logo: "/logos/tesla.png",
    url: "https://www.tesla.com/energy"
  },
  {
    title: "Vehicle R&D ML Programs",
    company: "General Motors",
    problem: "GM needed ML-powered features for next-gen vehicles including EV optimization, climate control, and safety systems — with no existing internal delivery framework.",
    solution: "Led end-to-end ML product development for 4+ projects: EV battery charging optimization, smart climate control, automatic trailer hitching, and road/tire traction prediction — from discovery to deployment.",
    impact: "4+ ML features shipped on time, improving user engagement and operational efficiency",
    technologies: ["Machine Learning", "User Journey Mapping", "Automotive AI", "Requirements Engineering", "MLOps"],
    image: gmImage,
    imagePosition: "right" as const,
    logo: "/logos/gm.png",
    url: "https://www.gm.com"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="space-y-2 mb-14">
          <p className="text-xs uppercase tracking-widest font-medium text-muted-foreground">
            Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold" data-testid="text-section-title">
            Projects I'm Proud Of
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl" data-testid="text-section-description">
            The initiatives that made a real difference
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
