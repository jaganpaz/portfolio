import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="section-container">
      <h2 className="section-heading">About Me</h2>
      <Card>
        <CardContent className="pt-6 space-y-6">
          <div>
            <p className="text-lg leading-relaxed">
              Seasoned technology professional with 20+ years of experience in Consulting & Engineering Management 
              across the technology landscape. Expertise in Digital Transformation, Modernization, Infrastructure 
              Modernization, and Customer Experience enhancement. Demonstrated success in multiple roles including 
              Tech Leading, Design & Development, Solution Analysis, Product Management, and Enterprise & Application 
              Architecture.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Proven track record in managing and delivering projects through Onsite-Offshore Delivery Models, 
              implementing Agile/Safe Agile methodologies for various products and applications. Strong focus on 
              driving innovation and delivering high-impact solutions across different technology streams.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Leadership & Management</h3>
            <ul className="space-y-2 text-lg">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Technical Leadership, Strategic Planning, Agile/Safe Agile Methodologies
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Stakeholder & Client Relationship Management, Team Building & Mentoring
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Technical Analysis & Application design
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                User Story Grooming, planning sessions and prioritizing development stories among teams
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Specialized Knowledge</h3>
            <ul className="space-y-2 text-lg">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Microservices Architecture
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Warehouse Management Systems WMS (HighJump/Körber, Blujay, Bartender, Transportation Management Systems TMS), Reverse Logistics
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Work with UI/UX Teams to define User Interfaces that are aligned with Business Visions
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Technical Expertise</h3>
            <ul className="space-y-2 text-lg">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Cloud Platforms: AWS (Lambda | API Gateway | ECS | DynamoDB | EC2) | GCP
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Programming & Frameworks: Java | Spring Boot | REST APIs | Oracle ADF/WebCenter | Angular | Node.js | React
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Database: Oracle DB | MySql | Postgres | DynamoDB | MongoDb
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                DevOps Tools: Jenkins | Maven | SonarQube | Checkmarx | Docker | Kubernetes
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Enterprise Tools: Oracle ADF | Webcenter Portal | Content Servers | WebLogic | Oracle Coherence Cache | Redis Cache | Kafka | Pulsar | RabbitMQ | ElasticSearch | Rest Services | GraphQL
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Warehouse Management Systems: HighJump/Körber | Blujay/Parcel/E2Open TMS Systems | Bartender | Rebus
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}