import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Beyond",
    location: "Dallas, Texas",
    title: "Software Engineering Manager",
    period: "June 2022 - Present",
    achievements: [
      "Managed three teams, achieving 20% improvement in customer satisfaction by optimizing warehouse and return systems across e-commerce sites Overstock.com, BedbathandBeyond.com & Zulily.com",
      "Led application development and support for U.S. Fulfillment Centers, centralizing operations and ensuring daily handling of 1,000 orders with increased efficiency",
      "Delivered $560K annual savings by implementing in-house liquidator onboarding process",
      "Managing Reverse Logistics Projects to support $500M covering all of USA",
      "Reengineered warranty processes saving $350K, reduced resolution time by 10 hours, improved efficiency by 17%",
      "Engineered onboarding workflows for Angi, driving $3.4 million contribution margin",
      "Transitioned to generative AI Platform for chatbot and SMS reducing support tickets by 30%",
      "Built Various Projects with Overstock's transition to Bed Bath and Beyond ensuring 100% business continuity"
    ]
  },
  {
    company: "Argano Keste",
    location: "Dallas, Texas",
    title: "Senior Technology Consultant",
    period: "May 2013 - June 2022",
    achievements: [
      "Led 15+ client implementations across diverse industries (Symantec, Thermo Fisher, Western Union)",
      "Converted business goals into features for SAFe Agile, enhanced business alignment through 3+ PI Planning cycles",
      "Reduced delays by 80% by implementing payment guideline validation engine",
      "Designed centralized Single Entity Store at Western Union, optimizing payment processing",
      "Streamlined bank data services, cutting development hours by 40%",
      "Led Enterprise Products' Oracle upgrade from 11g to 12c as Delivery Manager/Technical Lead",
      "Implemented Oracle Coherence Cache resulting in 4x performance improvement",
      "Developed web application for Thermo Fisher supporting 2,000 users at launch",
      "Designed Portal and Content Server for Enterprise Products serving 8,000 employees",
      "Created Oracle Webcenter portals for Schreiber and Symantec enhancing collaboration"
    ]
  },
  {
    company: "Cognizant Technology Solutions",
    title: "Senior Associate Consultant",
    period: "June 2004 - May 2013",
    achievements: [
      "Orchestrated migration of application suites to Oracle Ecosystem, leading team of 20 members",
      "Designed & Developed Visibility Tool for business shipment tracking",
      "Built portal for BP & GM managing EDI Workflows and purchase order visibility",
      "Identified root cause analysis for support tickets improving warehouse processes",
      "Built 6 High Jump warehouses for companies like Wal-Mart, Kohls, Target & Family Dollar",
      "Led team of 6 in creating Pricing app for North American market"
    ]
  }
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
                <div className="flex-1">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-lg text-muted-foreground mb-2">{exp.title}</p>
                  {exp.location && (
                    <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
                  )}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}