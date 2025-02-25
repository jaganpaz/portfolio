import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Jagan Pazhaniyandi</h1>

            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm transition-colors hover:text-foreground ${
                    activeSection === id
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-[385px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => {
                        scrollToSection(id);
                        const sheet = document.querySelector('[data-state="open"]');
                        if (sheet) {
                          const closeButton = sheet.querySelector('button[aria-label="Close"]');
                          closeButton?.click();
                        }
                      }}
                      className={`text-lg py-2 transition-colors hover:text-foreground text-left ${
                        activeSection === id
                          ? "text-foreground font-medium"
                          : "text-muted-foreground"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>
        <div className="container py-12 max-w-[90rem] mx-auto px-4 md:px-8">
          <Header />
        </div>

        <div className="space-y-24">
          <section id="about" className="container py-24 max-w-[90rem] mx-auto px-4 md:px-8">
            <About />
          </section>

          <section id="experience" className="container py-24 max-w-[90rem] mx-auto px-4 md:px-8">
            <Experience />
          </section>

          <section id="skills" className="container py-24 max-w-[90rem] mx-auto px-4 md:px-8">
            <Skills />
          </section>

          <section id="education" className="container py-24 max-w-[90rem] mx-auto px-4 md:px-8">
            <Education />
          </section>
        </div>
      </main>
    </div>
  );
}