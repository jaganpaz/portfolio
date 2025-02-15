import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Header() {
  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <div className="flex items-start gap-6 flex-wrap">
          <div className="space-y-2 flex-1">
            <h2 className="text-2xl font-bold">Software Engineering Manager</h2>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <a 
                href="mailto:Jagan.Pazhaniyandi@gmail.com" 
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                Jagan.Pazhaniyandi@gmail.com
              </a>
              <a 
                href="tel:+13109104447" 
                className="flex items-center gap-2 hover:text-foreground transition-colors"
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
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}