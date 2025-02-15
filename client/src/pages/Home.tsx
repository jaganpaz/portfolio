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

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Jagan Pazhaniyandi</h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
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
            </nav>

            {/* Mobile Navigation */}
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
                    <a
                      key={id}
                      href={`#${id}`}
                      className={`text-lg py-2 transition-colors hover:text-foreground ${
                        activeSection === id
                          ? "text-foreground font-medium"
                          : "text-muted-foreground"
                      }`}
                      onClick={() => {
                        const sheet = document.querySelector('[data-state="open"]');
                        if (sheet) {
                          const closeButton = sheet.querySelector('button[aria-label="Close"]');
                          closeButton?.click();
                        }
                      }}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Cover/Header Section */}
        <div className="container py-12 max-w-[90rem] mx-auto px-4 md:px-8">
          <Header />
        </div>

        {/* Content Sections */}
        <div className="space-y-24">
          <section id="about">
            <div className="container py-24 max-w-[90rem] mx-auto px-4 md:px-8">
              <About />
            </div>
          </section>

          <section id="experience">
            <div className="container py-24 max-w-[90rem] mx-auto px-4 md:px-8">
              <Experience />
            </div>
          </section>

          <section id="skills">
            <div className="container py-24 max-w-[90rem] mx-auto px-4 md:px-8">
              <Skills />
            </div>
          </section>

          <section id="education">
            <div className="container py-24 max-w-[90rem] mx-auto px-4 md:px-8">
              <Education />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}