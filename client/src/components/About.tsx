import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="section-container">
      <h2 className="section-heading">About Me</h2>
      <Card>
        <CardContent className="pt-6">
          <p className="text-lg leading-relaxed">
            Passionate software engineer with over 8 years of experience building scalable web applications.
            Specialized in frontend development with React and modern JavaScript. Strong advocate for clean code,
            test-driven development, and continuous learning. Currently focused on building accessible and 
            performant web applications that deliver exceptional user experiences.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
