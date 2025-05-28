
import { Shield, Code, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const skills = [
    { name: 'Penetration Testing', level: 95 },
    { name: 'Vulnerability Assessment', level: 90 },
    { name: 'Malware Analysis', level: 85 },
    { name: 'Network Security', level: 88 },
    { name: 'Web Application Security', level: 92 },
    { name: 'Digital Forensics', level: 80 }
  ];

  const certifications = [
    'OSCP - Offensive Security Certified Professional',
    'CEH - Certified Ethical Hacker',
    'CISSP - Certified Information Systems Security Professional',
    'GPEN - GIAC Penetration Tester'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-cyber-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fira font-bold text-white mb-4">
            About <span className="text-cyber-green">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cyber-green mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile section */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-green to-blue-500 rounded-full animate-glow opacity-20"></div>
                <div className="absolute inset-2 bg-cyber-navy rounded-full flex items-center justify-center">
                  <Shield className="w-32 h-32 text-cyber-green" />
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-fira font-semibold text-white mb-4">
                Cybersecurity Professional
              </h3>
              <p className="text-gray-300 font-space leading-relaxed mb-6">
                With over 5 years of experience in cybersecurity, I specialize in penetration testing, 
                vulnerability assessments, and security research. My mission is to help organizations 
                strengthen their security posture through comprehensive security audits and ethical hacking.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-cyber-navy/30 border border-cyber-green/20 rounded-lg hover:border-cyber-green/50 transition-all duration-300">
                  <Shield className="w-8 h-8 text-cyber-green mx-auto mb-2" />
                  <div className="text-cyber-green font-fira font-semibold text-xl">150+</div>
                  <div className="text-gray-400 text-sm">Security Audits</div>
                </div>
                <div className="text-center p-4 bg-cyber-navy/30 border border-cyber-green/20 rounded-lg hover:border-cyber-green/50 transition-all duration-300">
                  <Code className="w-8 h-8 text-cyber-green mx-auto mb-2" />
                  <div className="text-cyber-green font-fira font-semibold text-xl">50+</div>
                  <div className="text-gray-400 text-sm">Tools Developed</div>
                </div>
                <div className="text-center p-4 bg-cyber-navy/30 border border-cyber-green/20 rounded-lg hover:border-cyber-green/50 transition-all duration-300">
                  <Search className="w-8 h-8 text-cyber-green mx-auto mb-2" />
                  <div className="text-cyber-green font-fira font-semibold text-xl">300+</div>
                  <div className="text-gray-400 text-sm">Vulnerabilities Found</div>
                </div>
              </div>

              <Button 
                className="bg-cyber-green text-black hover:bg-cyber-green/80 font-fira font-semibold"
              >
                Download Resume
              </Button>
            </div>
          </div>

          {/* Skills and certifications */}
          <div className="space-y-8">
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-fira font-semibold text-white mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-space">{skill.name}</span>
                      <span className="text-cyber-green font-fira">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-cyber-navy/50 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyber-green to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-fira font-semibold text-white mb-6">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div 
                    key={cert}
                    className="p-4 bg-cyber-navy/30 border border-cyber-green/20 rounded-lg hover:border-cyber-green/50 transition-all duration-300 hover:bg-cyber-navy/50"
                  >
                    <span className="text-gray-300 font-space">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
