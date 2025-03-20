
import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
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
  
  const projects = [
    {
      title: 'Employee Engagement Strategy',
      category: 'Human Resources',
      description: 'Developed a comprehensive employee engagement strategy for a mid-sized tech company, resulting in a 25% increase in employee satisfaction scores.',
      tags: ['Employee Experience', 'Survey Design', 'Strategy Implementation'],
      image: 'bg-gradient-to-br from-blue-100 to-blue-200',
    },
    {
      title: 'Digital Marketing Campaign',
      category: 'Marketing',
      description: 'Designed and executed a multi-channel digital marketing campaign for a retail client that increased online sales by 40% within three months.',
      tags: ['Digital Strategy', 'Social Media', 'ROI Analysis'],
      image: 'bg-gradient-to-br from-orange-100 to-orange-200',
    },
    {
      title: 'Talent Acquisition Framework',
      category: 'Human Resources',
      description: 'Created an innovative talent acquisition framework focusing on diversity and inclusion, improving candidate quality and reducing time-to-hire by 30%.',
      tags: ['Recruitment', 'Diversity & Inclusion', 'Process Optimization'],
      image: 'bg-gradient-to-br from-green-100 to-green-200',
    },
    {
      title: 'Brand Repositioning Strategy',
      category: 'Marketing',
      description: 'Led a brand repositioning study for a consumer products company, developing new messaging and visual identity that resonated with target demographics.',
      tags: ['Brand Strategy', 'Market Research', 'Consumer Insights'],
      image: 'bg-gradient-to-br from-purple-100 to-purple-200',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div 
        ref={sectionRef}
        className="section-container opacity-0 transition-opacity duration-1000"
      >
        <div className="stagger-animate">
          <div className="text-center mb-16">
            <h2 className="section-title">Projects & Case Studies</h2>
            <p className="section-subtitle">Showcasing My Academic & Professional Work</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="glass-card overflow-hidden group transition-all duration-300 hover:shadow-md"
              >
                <div className={`h-48 ${project.image} flex items-center justify-center relative`}>
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <span className="text-4xl font-bold text-white/80 text-shadow">{project.title.charAt(0)}</span>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-white/80 backdrop-blur-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 text-xs bg-secondary rounded text-foreground/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center text-accent font-medium hover:underline">
                    View Details
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-6">Research & Publications</h3>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="glass-card p-6 text-left">
                <h4 className="text-lg font-semibold text-primary">The Impact of Remote Work on Employee Engagement</h4>
                <p className="text-sm text-muted-foreground mb-3">Published in Business Journal, 2023</p>
                <p className="text-foreground/80">
                  Research study examining how remote work arrangements affect employee engagement levels, with recommendations for HR professionals.
                </p>
              </div>
              <div className="glass-card p-6 text-left">
                <h4 className="text-lg font-semibold text-primary">Sustainable Marketing Practices in Consumer Goods</h4>
                <p className="text-sm text-muted-foreground mb-3">University Research Paper, 2022</p>
                <p className="text-foreground/80">
                  Analysis of sustainable marketing strategies in the consumer goods industry and their impact on brand perception and consumer loyalty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
