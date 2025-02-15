import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px",
        threshold: 0.1
      }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-light">Jagan Pazhaniyandi</h1>
              <p className="text-sm text-muted-foreground">Software Engineering Manager</p>
            </div>

            <nav className="flex items-center space-x-6">
              {navItems.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`text-sm transition-colors hover:text-foreground ${
                    activeSection === id
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {label}
                </a>
              ))}
              <Button
                onClick={handlePrint}
                variant="outline"
                size="sm"
                className="no-print"
              >
                <Printer className="mr-2 h-4 w-4" />
                PDF
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        {/* Cover/Header Section */}
        <div className="py-12">
          <Header />
        </div>

        {/* Content Sections */}
        <div className="space-y-24">
          <section id="about">
            <About />
          </section>

          <section id="experience">
            <Experience />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="education">
            <Education />
          </section>
        </div>
      </main>
    </div>
  );
}