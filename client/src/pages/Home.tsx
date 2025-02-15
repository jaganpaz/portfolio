import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import { useState, useEffect } from "react";

const navItems = [
  { id: "header", label: "Overview" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("header");

  const handlePrint = () => {
    window.print();
  };

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
        rootMargin: "-50% 0px",
        threshold: 0
      }
    );

    // Observe all sections
    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      navItems.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.offsetTop - 40; // Add some padding
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Fixed Sidebar */}
      <aside className="fixed w-64 h-screen border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex flex-col h-full p-6">
          <div className="space-y-2 mb-8">
            <h2 className="text-lg font-medium">Jagan Pazhaniyandi</h2>
            <p className="text-sm text-muted-foreground">Software Engineering Manager</p>
          </div>

          <nav className="space-y-1 flex-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-2 text-sm rounded-md transition-colors
                  ${activeSection === item.id
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-accent"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button
            onClick={handlePrint}
            className="w-full mt-auto no-print"
            variant="outline"
            size="sm"
          >
            <Printer className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        <div className="container max-w-4xl py-20">
          <section id="header" className="min-h-[80vh] flex items-center">
            <Header />
          </section>

          <section id="about" className="min-h-[80vh] flex items-center">
            <About />
          </section>

          <section id="experience" className="min-h-[80vh] flex items-center">
            <Experience />
          </section>

          <section id="skills" className="min-h-[80vh] flex items-center">
            <Skills />
          </section>

          <section id="education" className="min-h-[80vh] flex items-center">
            <Education />
          </section>
        </div>
      </main>
    </div>
  );
}