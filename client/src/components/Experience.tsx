import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Google",
    title: "Senior Frontend Engineer",
    period: "2020 - Present",
    description: "Led development of core features for Google Cloud Platform's web console. Improved performance by 40%.",
  },
  {
    company: "Microsoft",
    title: "Software Engineer",
    period: "2018 - 2020",
    description: "Developed features for Microsoft Teams. Implemented real-time collaboration tools used by millions.",
  },
  {
    company: "Amazon",
    title: "Software Developer",
    period: "2015 - 2018",
    description: "Built and maintained customer-facing features for Amazon.com. Optimized checkout flow reducing cart abandonment by 15%.",
  },
];

export default function Experience() {
  return (
    <section className="section-container bg-muted">
      <h2 className="section-heading">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <Card key={exp.company}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <p className="text-lg text-muted-foreground mb-2">{exp.title}</p>
                  <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}