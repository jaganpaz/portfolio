import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skills = {
  "Cloud Platforms": ["AWS Lambda", "API Gateway", "ECS", "DynamoDB", "EC2", "GCP"],
  "Programming & Frameworks": ["Java", "Spring Boot", "REST APIs", "Oracle ADF", "WebCenter", "Angular", "Node.js", "React"],
  "Database": ["Oracle DB", "MySQL", "PostgreSQL", "DynamoDB", "MongoDB"],
  "DevOps": ["Jenkins", "Maven", "SonarQube", "Checkmarx", "Docker", "Kubernetes", "Git", "AWS", "CI/CD"],
  "Enterprise Tools": ["Oracle ADF", "WebCenter Portal", "Content Servers", "WebLogic", "Oracle Coherence Cache", "Redis Cache", "Kafka", "Pulsar", "RabbitMQ", "ElasticSearch", "REST Services", "GraphQL"],
  "Warehouse Management": ["HighJump/Körber", "Blujay/Parcel/E2Open TMS Systems", "Bartender", "Rebus"],
  "Other": ["Agile/Scrum", "TDD", "UI/UX Design", "Performance Optimization", "Technical Writing"]
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