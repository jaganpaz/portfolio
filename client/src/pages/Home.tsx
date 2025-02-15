import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

const navItems = [
  { id: "header", label: "Overview" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" }
];

export default function Home() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between max-w-4xl">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-medium">Jagan Pazhaniyandi</h2>
            <p className="text-sm text-muted-foreground">Software Engineering Manager</p>
          </div>
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={handlePrint}
              className="ml-4 no-print"
              variant="outline"
              size="sm"
            >
              <Printer className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container max-w-4xl py-8">
        <div id="header" className="py-16">
          <Header />
        </div>

        <div id="about" className="py-16">
          <About />
        </div>

        <div id="experience" className="py-16">
          <Experience />
        </div>

        <div id="skills" className="py-16">
          <Skills />
        </div>

        <div id="education" className="py-16">
          <Education />
        </div>
      </main>
    </div>
  );
}