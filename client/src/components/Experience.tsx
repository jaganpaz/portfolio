import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const experiences = [
  {
    company: "Overstock.com / BedBathandBeyond.com / Beyond",
    location: "Dallas, Texas",
    title: "Software Engineering Manager",
    period: "June 2022 - Present",
    achievements: [
      "Managed three teams in Beyond, achieving a 20% improvement in customer satisfaction by optimizing warehouse and return systems across e-commerce sites Overstock.com, BedbathandBeyond.com & Zulily.com",
      "Led application development and support for U.S. Fulfillment Centers, centralizing operations and ensuring the daily handling of 1,000 orders with increased efficiency",
      "Delivered $560K annual savings by implementing an in-house liquidator onboarding process, reducing warehouse labor and shipping costs",
      "Managing the Reverse Logistics Projects to support $500M Covering all of USA",
      "Reengineered warranty processes saving $350K and enhanced warranty shopping experience, reduced resolution time by 10 hours, and improved efficiency by 17%",
      "Engineered onboarding workflows for Angi and streamlined the installation process to boost conversion rates and enhance the customer experience, driving a $3.4 million contribution margin",
      "Transitioned to a generative AI Platform for chatbot and SMS reducing support tickets by 30% and boosting satisfaction rates",
      "Built Various Projects with Overstock's transition to Bed Bath and Beyond ensuring smooth operations and 100% business continuity"
    ]
  },
  {
    company: "Argano Keste",
    location: "Dallas, Texas",
    title: "Senior Technology Consultant",
    period: "May 2013 - June 2022",
    achievements: [
      "Led 15+ client implementations across diverse industries (Symantec, Thermo Fisher, Western Union) in a consulting environment. Gained experience working with a wide range of technologies",
      "Converted business goals into features for SAFe Agile, preplanning driving, socialization, and deep dives. Enhanced business alignment through 3+ PI Planning cycles",
      "Reduced delays by 80% by implementing a payment guideline validation engine",
      "Designed a centralized Single Entity Store at Western Union, optimizing payment processing costs and faster payments to end users",
      "Streamlined bank data services with the 'Find a Bank' microservice, cutting development hours by 40%",
      "Led the upgrade of Enterprise Products' entire suite of Oracle products from 11g to 12c version as Delivery Manager/Technical Lead",
      "Led the implementation of the Oracle Coherence Cache enabling all applications to access location, customer, and equipment data. This integration resulted in a 4x improvement in performance",
      "Led the development of a web application for Thermo Fisher using Oracle Middleware stack that supported 2,000 users at launch, enabling tailored views, secure dashboards, and global inventory reports",
      "Designed and developed Portal and Content Server for Enterprise Products, providing a centralized platform for 8,000 employees across all departments to collaborate and access critical content",
      "Developed Portal for Schreiber, enabling internal teams to collaborate, publish blogs, discussions, and announcements, enhancing communication and knowledge sharing across the organization",
      "Created a single destination Oracle Webcenter portal for Symantec, enabling seamless navigation across enterprise services"
    ]
  },
  {
    company: "Cognizant Technology Solutions",
    title: "Senior Associate Consultant",
    period: "June 2004 - May 2013",
    achievements: [
      "Orchestrated the migration of entire application suites to Oracle Ecosystem, serving as a pivotal liaison among Datawarehousing, QA, and Development teams. Led a team of 20 members onsite offshore",
      "Design & Developed a Visibility Tool for business to track shipments. The tool enhanced visibility and resulted in significant improvements in the shipment tracking process",
      "Built portal for BP & GM that allowed Schneider to request Inbound Transportation of their supplier base. This application managed various EDI Workflows provided purchase order visibility",
      "Identified root cause analysis for support tickets to identify potential fixes resulting in cost savings and faster efficiency of warehouse processes",
      "Built 6 High Jump warehouses for companies such as Wal-Mart, Kohls, Target & Family Dollar and established a production support model for applications handling warehouse management",
      "Led a team of 6 in creating a Pricing app that captures, processes, and responds to custom requests for quotes. This tool was used to price the North American market"
    ]
  }
];

export default function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section 
      ref={ref} 
      className={`section-container bg-muted ${isInView ? 'in-view' : ''}`}
    >
      <h2 className="section-heading">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <Card key={exp.company} className="card-hover">
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