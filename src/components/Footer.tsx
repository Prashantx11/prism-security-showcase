
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-cyber-green/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-cyber-green font-fira font-bold text-xl">
              PK<span className="text-white">.</span>
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Ethical Hacking & Cybersecurity Student
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/Prashantx11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-green transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/prashant-khatri-53b518230/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-green transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:prashant.khatri110@gmail.com"
              className="text-gray-400 hover:text-cyber-green transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Prashant Khatri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
