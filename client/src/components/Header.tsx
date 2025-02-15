import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-primary text-white py-16">
      <div className="section-container">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">Jagan Pazhaniyandi</h1>
          <h2 className="text-2xl mb-4">Software Engineering Manager</h2>

          <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
            <a href="mailto:Jagan.Pazhaniyandi@gmail.com" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Jagan.Pazhaniyandi@gmail.com
            </a>
            <a href="tel:+13109104447" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              (310) 910-4447
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Dallas, Texas
            </span>
            <a 
              href="https://www.linkedin.com/in/jaganpazhaniyandi/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}