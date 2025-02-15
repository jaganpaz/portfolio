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

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center">
          <span className="text-sm font-medium">Portfolio</span>
          <Button 
            onClick={handlePrint}
            className="ml-auto no-print"
            variant="ghost"
            size="sm"
          >
            <Printer className="h-4 w-4" />
          </Button>
        </div>
      </nav>

      <main className="container max-w-6xl py-20">
        {/* Header Section */}
        <div className="mb-32">
          <Header />
        </div>

        {/* About Section */}
        <div className="mb-32">
          <About />
        </div>

        {/* Skills Section with Grid */}
        <div className="mb-32">
          <Skills />
        </div>

        {/* Experience Section */}
        <div className="mb-32">
          <Experience />
        </div>

        {/* Education Section */}
        <div className="mb-32">
          <Education />
        </div>
      </main>
    </div>
  );
}