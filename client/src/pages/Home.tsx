import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience"; 
import Education from "@/components/Education";
import Skills from "@/components/Skills";

export default function Home() {
  const handlePrint = () => {
    window.print();
  };

  const stats = [
    { label: "Years Experience", value: "20+" },
    { label: "Projects Led", value: "50+" },
    { label: "Team Size Managed", value: "20+" },
    { label: "Certifications", value: "3" },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <h2 className="text-lg font-semibold">Jagan Pazhaniyandi</h2>
          <Button 
            onClick={handlePrint}
            className="ml-auto no-print"
            variant="secondary"
          >
            <Printer className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </nav>

      <main className="container py-8">
        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <div className="text-3xl font-bold">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            <section className="rounded-lg border bg-card shadow-sm">
              <About />
            </section>
            <section className="rounded-lg border bg-card shadow-sm">
              <Skills />
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <section className="rounded-lg border bg-card shadow-sm">
              <Experience />
            </section>
            <section className="rounded-lg border bg-card shadow-sm">
              <Education />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}