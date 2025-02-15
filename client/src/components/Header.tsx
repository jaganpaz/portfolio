import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <div className="grid gap-8">
      <div>
        <h1 className="text-5xl font-light tracking-tight mb-4">Jagan Pazhaniyandi</h1>
        <h2 className="text-2xl font-light text-muted-foreground">Software Engineering Manager</h2>
      </div>

      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
        <a 
          href="mailto:Jagan.Pazhaniyandi@gmail.com" 
          className="flex items-center gap-2 link-hover"
        >
          <Mail className="h-4 w-4" />
          Jagan.Pazhaniyandi@gmail.com
        </a>
        <a 
          href="tel:+13109104447" 
          className="flex items-center gap-2 link-hover"
        >
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
          className="flex items-center gap-2 link-hover"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn Profile
        </a>
      </div>
    </div>
  );
}