import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gray-50 py-32">
      <div className="section-container">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Jagan Pazhaniyandi</h1>
          <h2 className="text-2xl mb-8 text-gray-600">Software Engineering Manager</h2>

          <div className="flex flex-wrap gap-6 text-gray-600">
            <a 
              href="mailto:Jagan.Pazhaniyandi@gmail.com" 
              className="flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Jagan.Pazhaniyandi@gmail.com
            </a>
            <a 
              href="tel:+13109104447" 
              className="flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              <Phone className="h-5 w-5" />
              (310) 910-4447
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Dallas, Texas
            </span>
            <a 
              href="https://www.linkedin.com/in/jaganpazhaniyandi/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}