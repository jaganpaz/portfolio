import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Built a full-stack e-commerce platform using Next.js, GraphQL, and Stripe integration.",
    github: "https://github.com/johndoe/ecommerce",
    live: "https://ecommerce-demo.com",
  },
  {
    title: "Task Management App",
    description: "Developed a real-time task management application with React and Firebase.",
    github: "https://github.com/johndoe/taskmanager",
    live: "https://taskmanager-demo.com",
  },
];

export default function Projects() {
  return (
    <section className="section-container">
      <h2 className="section-heading">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{project.description}</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
