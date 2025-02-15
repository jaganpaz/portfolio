import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skills = {
  "Frontend": ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "HTML5/CSS3"],
  "Backend": ["Node.js", "Express", "PostgreSQL", "MongoDB", "RESTful APIs", "GraphQL"],
  "DevOps": ["Git", "Docker", "AWS", "CI/CD", "Kubernetes"],
  "Other": ["Agile/Scrum", "TDD", "UI/UX Design", "Performance Optimization", "Technical Writing"],
};

export default function Skills() {
  return (
    <section className="section-container bg-muted">
      <h2 className="section-heading">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <Card key={category}>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
