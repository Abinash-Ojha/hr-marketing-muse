
import React, { useEffect, useRef } from 'react';

const Skills = () => {
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
  
  const hrSkills = [
    { name: 'Talent Acquisition', level: 85 },
    { name: 'Employee Relations', level: 90 },
    { name: 'Performance Management', level: 82 },
    { name: 'Compensation & Benefits', level: 78 },
    { name: 'HR Analytics', level: 75 },
    { name: 'Organizational Development', level: 80 },
  ];
  
  const marketingSkills = [
    { name: 'Digital Marketing', level: 88 },
    { name: 'Market Research', level: 85 },
    { name: 'Brand Management', level: 90 },
    { name: 'Social Media Strategy', level: 92 },
    { name: 'Content Marketing', level: 87 },
    { name: 'Marketing Analytics', level: 80 },
  ];
  
  const softSkills = [
    'Leadership', 'Communication', 'Problem Solving', 'Critical Thinking', 
    'Time Management', 'Teamwork', 'Adaptability', 'Creativity',
  ];

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div 
        ref={sectionRef} 
        className="section-container opacity-0 transition-opacity duration-1000"
      >
        <div className="stagger-animate">
          <div className="text-center mb-16">
            <h2 className="section-title">My Skills</h2>
            <p className="section-subtitle">What I Bring to the Table</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Human Resources</h3>
              <div className="space-y-6">
                {hrSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%`, animationDelay: '0.5s' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Marketing</h3>
              <div className="space-y-6">
                {marketingSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%`, animationDelay: '0.5s' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-white rounded-full border text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-8 mt-6">
              {['HRMS', 'ATS', 'SAP', 'Workday', 'Google Analytics', 'HubSpot', 'Adobe Creative Suite', 'Tableau'].map((tool) => (
                <div key={tool} className="text-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-2 mx-auto">
                    <span className="text-lg font-medium text-primary">{tool.charAt(0)}</span>
                  </div>
                  <p className="text-sm font-medium">{tool}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
