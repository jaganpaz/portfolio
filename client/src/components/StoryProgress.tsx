import { useEffect, useState } from 'react';

const sections = ['header', 'about', 'experience', 'education', 'skills'];

export default function StoryProgress() {
  const [activeSection, setActiveSection] = useState('header');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const { top, bottom } = element.getBoundingClientRect();
        const elementPosition = window.scrollY + top;
        
        if (scrollPosition >= elementPosition && scrollPosition <= elementPosition + bottom) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="story-progress no-print">
      {sections.map((section) => (
        <div
          key={section}
          onClick={() => scrollToSection(section)}
          className={`story-progress-dot ${
            activeSection === section ? 'active' : ''
          }`}
          title={section.charAt(0).toUpperCase() + section.slice(1)}
        />
      ))}
    </div>
  );
}
