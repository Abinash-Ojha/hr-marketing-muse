
import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, GitHub, Twitter } from 'lucide-react';

const Contact = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Contact form submission logic would go here
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div 
        ref={sectionRef}
        className="section-container opacity-0 transition-opacity duration-1000"
      >
        <div className="stagger-animate">
          <div className="text-center mb-16">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Let's Connect & Collaborate</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:johndoe@example.com" className="text-muted-foreground hover:text-accent transition-colors">
                      johndoe@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-accent transition-colors">
                      +123 456 7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      San Francisco, California, USA
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent/10 transition-colors">
                    <Linkedin className="text-accent" size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent/10 transition-colors">
                    <GitHub className="text-accent" size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent/10 transition-colors">
                    <Twitter className="text-accent" size={18} />
                  </a>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-accent/5 rounded-lg border border-accent/10">
                <h3 className="text-lg font-medium mb-2">Looking for opportunities</h3>
                <p className="text-foreground/80">
                  I'm currently seeking internship and entry-level opportunities in HR and Marketing. Feel free to reach out if you think I might be a good fit for your team.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-accent text-white rounded-md font-medium hover:bg-accent/90 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
