import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    school: "PSG College of Technology",
    degree: "Bachelor of Engineering in Information Technology",
    location: "India",
  }
];

const certifications = [
  "AWS Certified Solutions Architect – Associate",
  "AWS Certified Developer – Associate",
  "Oracle Application Development Framework 11g Certified Implementation Specialist"
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
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}