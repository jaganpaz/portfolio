import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="section-container">
      <h2 className="section-heading">About Me</h2>
      <Card>
        <CardContent className="pt-6 space-y-6">
          <div>
            <p className="text-lg leading-relaxed">
              Engineering leader with 20+ years of experience architecting scalable software solutions, leading high-performing engineering teams, 
              and modernizing enterprise platforms across e-commerce, logistics, and financial services domains. Proven expertise in backend architecture 
              (microservices, event-driven), cloud infrastructure (AWS, GCP), and DevOps practices.
              Skilled in bridging the gap between business goals and engineering execution in Agile/Scrum/SAFe environments.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
