
import React, { useEffect, useRef } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
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
  
  const educationItems = [
    {
      degree: 'Master of Business Administration',
      specialization: 'Human Resources & Marketing',
      institution: 'University Business School',
      period: '2022 - Present',
      description: 'Currently pursuing MBA with specialization in HR and Marketing with a focus on strategic talent management and digital marketing strategies.',
      icon: GraduationCap,
    },
    {
      degree: 'Bachelor of Business Administration',
      specialization: 'Business Management',
      institution: 'State University',
      period: '2018 - 2022',
      description: 'Graduated with honors in Business Management with coursework focused on organizational behavior and marketing principles.',
      icon: BookOpen,
    },
  ];
  
  const certifications = [
    {
      name: 'Strategic Human Resource Management',
      issuer: 'HR Institute',
      year: '2023',
    },
    {
      name: 'Digital Marketing Specialist',
      issuer: 'Marketing Academy',
      year: '2023',
    },
    {
      name: 'Data-Driven Marketing',
      issuer: 'Analytics Institute',
      year: '2022',
    },
    {
      name: 'Talent Acquisition & Management',
      issuer: 'Recruitment Council',
      year: '2022',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div 
        ref={sectionRef}
        className="section-container opacity-0 transition-opacity duration-1000"
      >
        <div className="stagger-animate">
          <div className="text-center mb-16">
            <h2 className="section-title">Education & Certifications</h2>
            <p className="section-subtitle">Academic Background & Professional Development</p>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <GraduationCap className="mr-2 text-accent" size={24} />
              Academic Journey
            </h3>
            
            <div className="space-y-12">
              {educationItems.map((item, index) => (
                <div key={index} className="glass-card p-8 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 h-full w-1 bg-accent"></div>
                  <div className="ml-2">
                    <h4 className="text-xl font-semibold text-primary">{item.degree}</h4>
                    <p className="text-accent font-medium mt-1">{item.specialization}</p>
                    <div className="flex items-center text-muted-foreground mt-2 mb-4">
                      <span>{item.institution}</span>
                      <span className="mx-2">•</span>
                      <span>{item.period}</span>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Award className="mr-2 text-accent" size={24} />
              Certifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="glass-card p-6 transition-transform duration-300 hover:translate-y-[-5px]">
                  <h4 className="text-lg font-semibold text-primary">{cert.name}</h4>
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>{cert.issuer}</span>
                    <span>{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 p-8 glass-card bg-accent/5 border-accent/20">
            <h3 className="text-xl font-semibold mb-4 text-primary">Academic Achievements</h3>
            <ul className="space-y-3 list-disc pl-5">
              <li>Dean's List for Academic Excellence (2022-2023)</li>
              <li>Best Marketing Strategy Award - Business Case Competition</li>
              <li>Winner, HR Innovation Challenge</li>
              <li>Research Publication on "Employee Engagement in Digital Era"</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
