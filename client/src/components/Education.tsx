import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Stanford University",
    degree: "Master of Science in Computer Science",
    period: "2013 - 2015",
    description: "Specialized in Software Engineering and Artificial Intelligence",
  },
  {
    school: "University of California, Berkeley",
    degree: "Bachelor of Science in Computer Science",
    period: "2009 - 2013",
    description: "Graduated with Honors, Dean's List all semesters",
  },
];

export default function Education() {
  return (
    <section className="section-container">
      <h2 className="section-heading">Education</h2>
      <div className="space-y-6">
        {education.map((edu) => (
          <Card key={edu.school}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{edu.school}</h3>
                  <p className="text-lg text-muted-foreground mb-2">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
