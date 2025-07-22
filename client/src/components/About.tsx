import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="section-container">
      <h2 className="section-heading">About Me</h2>
      <Card>
        <CardContent className="pt-6 space-y-6">
          <div>
            <p className="text-lg leading-relaxed">
              Engineering leader with 20+ years of experience leading full-stack development teams, building scalable backend systems, and delivering exceptional front-end experiences across e-commerce, logistics, 
              and fintech domains. Skilled in architecting microservices and event-driven platforms using Java, Spring Boot, and AWS and frontend frameworks like React, 
              Angular, and Node.js. Proven ability to drive digital transformation by aligning technical execution with business goals. 
              Adept at managing globally distributed engineering teams, improving developer productivity, and optimizing delivery pipelines in Agile, Scrum, and SAFe environments
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
