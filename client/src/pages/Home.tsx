import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience"; 
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import StoryProgress from "@/components/StoryProgress";

export default function Home() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen relative">
      <Button 
        onClick={handlePrint}
        className="fixed bottom-4 right-4 no-print z-50"
        variant="secondary"
      >
        <Printer className="mr-2 h-4 w-4" />
        Download PDF
      </Button>

      <StoryProgress />

      <section id="header">
        <Header />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="skills">
        <Skills />
      </section>
    </div>
  );
}