
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 to-transparent -z-10"></div>
      
      <div 
        ref={containerRef}
        className="section-container flex flex-col items-center justify-center text-center opacity-0 transition-opacity duration-1000"
      >
        <div className="stagger-animate">
          <div className="inline-block px-3 py-1 mb-6 bg-accent/10 text-accent rounded-full text-sm font-medium animate-slide-down">
            MBA Undergraduate
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="block">John Doe</span>
            <span className="block text-accent mt-2">HR & Marketing Specialist</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            A passionate MBA student specializing in human resources and marketing, 
            dedicated to creating effective strategies and driving organizational success.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-accent text-white rounded-md font-medium hover:bg-accent/90 transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="#about" 
              className="px-6 py-3 bg-transparent border border-primary text-primary rounded-md font-medium hover:bg-primary/5 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary opacity-80 hover:opacity-100 transition-opacity">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
