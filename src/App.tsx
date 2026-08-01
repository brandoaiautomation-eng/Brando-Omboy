import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { SkillsGrid } from './components/SkillsGrid';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AutomationCalculator } from './components/AutomationCalculator';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'experience', 'works', 'skills', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#222222] font-sans selection:bg-[#222222] selection:text-white antialiased">
      {/* Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onNavigate={scrollToSection}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />

        {/* Services Section */}
        <Services
          onOpenCalculator={() => setIsCalculatorOpen(true)}
          onBookConsultation={() => scrollToSection('contact')}
        />

        {/* Work Experience Section */}
        <Experience />

        {/* Previous Works / Case Studies Section */}
        <Projects
          onBookConsultation={() => scrollToSection('contact')}
        />

        {/* Technical Tech Stack & Skills Section */}
        <SkillsGrid />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Automation Cost & Time ROI Calculator Modal */}
      <AutomationCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onBookConsultation={() => scrollToSection('contact')}
      />
    </div>
  );
}

