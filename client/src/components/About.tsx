import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="section-container">
      <h2 className="section-heading">About Me</h2>
      <Card>
        <CardContent className="pt-6 space-y-6">
          <div>
            <p className="text-lg leading-relaxed">
              20+ years of experience in Consulting & Engineering Management 
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
        </CardContent>
      </Card>
    </section>
  );
}