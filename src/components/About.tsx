
import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div 
        ref={sectionRef}
        className="section-container opacity-0 transition-opacity duration-1000"
      >
        <div className="stagger-animate">
          <div className="text-center mb-16">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">My Journey & Passion</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-accent">Hello! I'm John Doe,</span> an MBA undergraduate with a specialization in Human Resources and Marketing. My academic journey has equipped me with a deep understanding of organizational dynamics and strategic marketing principles.
              </p>
              <p className="text-lg leading-relaxed">
                I'm passionate about creating effective HR strategies that foster positive workplace cultures and implementing marketing approaches that drive business growth. My goal is to bridge the gap between employee satisfaction and customer engagement.
              </p>
              <p className="text-lg leading-relaxed">
                Throughout my academic career, I've developed a keen interest in employee engagement, talent acquisition, digital marketing, and brand development. I believe that well-designed HR practices and innovative marketing strategies are key ingredients for organizational success.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3">Personal Philosophy</h3>
                <p className="italic text-muted-foreground">
                  "I believe in creating workplaces where people thrive and marketing strategies that genuinely connect with audiences. When these two elements align, magic happens."
                </p>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center">
                  <span className="text-6xl">JD</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="glass-card p-6">
              <h3 className="text-4xl font-bold text-accent mb-2">3+</h3>
              <p className="text-muted-foreground">Years Academic Experience</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-4xl font-bold text-accent mb-2">10+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-4xl font-bold text-accent mb-2">4+</h3>
              <p className="text-muted-foreground">Academic Awards</p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-4xl font-bold text-accent mb-2">5+</h3>
              <p className="text-muted-foreground">Certifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
