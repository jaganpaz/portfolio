import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-primary text-white py-16">
      <div className="section-container flex flex-col md:flex-row items-center gap-8">
        <Avatar className="w-48 h-48 border-4 border-white">
          <AvatarImage src="https://images.unsplash.com/photo-1507679799987-c73779587ccf" alt="Professional headshot" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>

        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">Jagan Pazhaniyandi</h1>
          <h2 className="text-2xl mb-4">Software Engineer</h2>

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
              Location
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}