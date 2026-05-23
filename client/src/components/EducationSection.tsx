import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master's Degree",
    field: "Computer Science",
    specialization: "Computer Architecture, High-Performance Computing & Networking",
    institution: "Georgia Institute of Technology",
    status: "Currently Enrolled",
    isCurrent: true
  },
  {
    degree: "Bachelor of Science",
    field: "Engineering / Industrial Management",
    specialization: "Faculty of Engineering",
    institution: "University of Alberta",
    status: "Graduated June 2017",
    isCurrent: false
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="space-y-2 mb-14">
          <p className="text-xs uppercase tracking-widest font-medium text-muted-foreground">
            Academic Background
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold" data-testid="text-section-title">
            Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="rounded-xl border border-border p-8 space-y-4"
              data-testid={`card-education-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-3 min-w-0">
                  <div>
                    <h3 className="text-lg font-semibold" data-testid="text-degree">
                      {edu.degree}
                    </h3>
                    <p className="text-base font-medium" data-testid="text-field">
                      {edu.field}
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {edu.specialization}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium" data-testid="text-institution">
                      {edu.institution}
                    </p>
                    {edu.isCurrent ? (
                      <span
                        className="inline-flex items-center mt-1.5 text-xs font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full"
                        data-testid="badge-status"
                      >
                        {edu.status}
                      </span>
                    ) : (
                      <p className="text-sm text-muted-foreground mt-1" data-testid="text-status">
                        {edu.status}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
