import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/hooks/useInView";

const skills = {
  "Leadership & Management": [
    "Technical Leadership",
    "Strategic Planning",
    "Agile/Safe Agile Methodologies",
    "Stakeholder Management",
    "Client Relationship Management",
    "Team Building & Mentoring",
    "Technical Analysis",
    "Application Design",
    "User Story Grooming",
    "Planning Sessions",
    "Development Prioritization"
  ],
  "Specialized Knowledge": [
    "Microservices Architecture",
    "Warehouse Management Systems",
    "HighJump/Körber Integration",
    "Reverse Logistics",
    "UI/UX Alignment",
    "Business Vision Integration"
  ],
  "Cloud Platforms": ["AWS Lambda", "API Gateway", "ECS", "DynamoDB", "EC2", "GCP"],
  "Programming & Frameworks": ["Java", "Spring Boot", "REST APIs", "Oracle ADF", "WebCenter", "Angular", "Node.js", "React"],
  "Database": ["Oracle DB", "MySQL", "PostgreSQL", "DynamoDB", "MongoDB"],
  "DevOps": ["Jenkins", "Maven", "SonarQube", "Checkmarx", "Docker", "Kubernetes", "Git", "AWS", "CI/CD"],
  "Enterprise Tools": ["Oracle ADF", "WebCenter Portal", "Content Servers", "WebLogic", "Oracle Coherence Cache", "Redis Cache", "Kafka", "Pulsar", "RabbitMQ", "ElasticSearch", "REST Services", "GraphQL"],
  "Warehouse Management": ["HighJump/Körber", "Blujay/Parcel/E2Open TMS Systems", "Bartender", "Rebus"]
};

export default function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section 
      ref={ref} 
      className={`section-container bg-muted ${isInView ? 'in-view' : ''}`}
    >
      <h2 className="section-heading">Skills & Expertise</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <Card key={category} className="card-hover">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="text-sm badge-hover"
                  >
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