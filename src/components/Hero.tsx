
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Cybersecurity Expert & Ethical Hacker';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-cyber-navy to-black">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,140,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,140,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Scanning line effect */}
      <div className="absolute top-0 h-0.5 w-20 bg-gradient-to-r from-transparent via-cyber-green to-transparent animate-scan"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Terminal window */}
          <div className="bg-cyber-navy/50 backdrop-blur-sm border border-cyber-green/30 rounded-lg p-6 mb-8 shadow-2xl">
            <div className="flex items-center gap-2 mb-4 border-b border-cyber-green/20 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-cyber-green text-sm font-fira ml-4">terminal@prashant-khatri:~$</span>
            </div>
            
            <div className="text-left font-fira text-cyber-green">
              <div className="mb-2">
                <span className="text-white">whoami</span>
              </div>
              <div className="mb-4 text-cyber-green">
                {'>'}  Prashant Khatri
              </div>
              <div className="mb-2">
                <span className="text-white">cat role.txt</span>
              </div>
              <div className="text-cyber-green">
                {'>'} <span className="inline-block">{displayText}</span>
                <span className="animate-blink">|</span>
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-fira font-bold text-white mb-6">
            <span className="block">PRASHANT</span>
            <span className="block text-cyber-green animate-glow">KHATRI</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-space text-gray-300 mb-8 leading-relaxed">
            Penetration Tester • Security Researcher • Bug Hunter
          </p>

          {/* Skills badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Python', 'JavaScript', 'Kali Linux', 'Metasploit', 'Burp Suite', 'OSCP'].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-cyber-navy/60 border border-cyber-green/40 text-cyber-green rounded-full text-sm font-fira hover:bg-cyber-green/10 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-green/20"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-cyber-green text-black hover:bg-cyber-green/80 font-fira font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-cyber-green/20 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-cyber-green text-cyber-green hover:bg-cyber-green/10 font-fira font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-cyber-green hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
