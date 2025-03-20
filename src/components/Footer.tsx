
import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-primary text-white py-10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">John Doe</h3>
            <p className="text-primary-foreground/80 max-w-md">
              MBA undergraduate specializing in Human Resources and Marketing. 
              Passionate about creating effective strategies and driving organizational success.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-primary-foreground/80 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#education" className="text-primary-foreground/80 hover:text-white transition-colors">Education</a></li>
              <li><a href="#projects" className="text-primary-foreground/80 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">johndoe@example.com</li>
              <li className="text-primary-foreground/80">+123 456 7890</li>
              <li className="text-primary-foreground/80">San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/70 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} John Doe. All Rights Reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
