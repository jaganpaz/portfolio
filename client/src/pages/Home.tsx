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
    <div className="min-h-screen">
      <Button 
        onClick={handlePrint}
        className="fixed bottom-4 right-4 no-print"
        variant="secondary"
      >
        <Printer className="mr-2 h-4 w-4" />
        Download PDF
      </Button>

      <Header />
      <main>
        <About />
        <Experience />
        <Education />
        <Skills />
      </main>
    </div>
  );
}