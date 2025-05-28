
import { Button } from '@/components/ui/button';

const About = () => {
  const skills = [
    { name: 'Python Programming', level: 75, category: 'Programming' },
    { name: 'JavaScript', level: 70, category: 'Programming' },
    { name: 'Linux Administration', level: 65, category: 'Systems' },
    { name: 'Network Security', level: 60, category: 'Security' },
    { name: 'Web Security Testing', level: 55, category: 'Security' },
    { name: 'Cryptography', level: 50, category: 'Security' },
    { name: 'Digital Forensics', level: 45, category: 'Security' },
    { name: 'Risk Assessment', level: 60, category: 'Management' }
  ];

  const achievements = [
    {
      title: 'Dean\'s List',
      description: 'Achieved Dean\'s List recognition for academic excellence in first semester',
      date: '2024'
    },
    {
      title: 'Security+ Study Group Leader',
      description: 'Leading a study group for CompTIA Security+ certification preparation',
      date: '2024'
    },
    {
      title: 'Cybersecurity Club Member',
      description: 'Active member of college cybersecurity club and CTF team',
      date: '2023-Present'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-cyber-navy/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fira font-bold text-white mb-4">
            About <span className="text-cyber-green">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cyber-green mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <div className="bg-cyber-navy/30 border border-cyber-green/20 rounded-lg p-8 hover:border-cyber-green/40 transition-all duration-300">
              <h3 className="text-2xl font-fira font-semibold text-cyber-green mb-4">Academic Background</h3>
              <p className="text-gray-300 font-space leading-relaxed mb-4">
                I'm currently pursuing a Bachelor's degree in <span className="text-cyber-green font-semibold">Ethical Hacking and Cybersecurity</span> at 
                Softwarica College of IT & E-Commerce, affiliated with Coventry University. My academic journey focuses on developing both theoretical 
                knowledge and practical skills in cybersecurity.
              </p>
              <p className="text-gray-300 font-space leading-relaxed">
                Through hands-on labs, real-world projects, and collaborative learning, I'm building expertise in penetration testing, 
                network security, digital forensics, and security risk management.
              </p>
            </div>

            <div className="bg-cyber-navy/30 border border-cyber-green/20 rounded-lg p-8 hover:border-cyber-green/40 transition-all duration-300">
              <h3 className="text-2xl font-fira font-semibold text-cyber-green mb-4">Career Aspirations</h3>
              <p className="text-gray-300 font-space leading-relaxed mb-4">
                My goal is to become a skilled <span className="text-cyber-green font-semibold">Penetration Tester</span> and 
                <span className="text-cyber-green font-semibold"> Security Consultant</span>, helping organizations strengthen their 
                cybersecurity posture and protect against evolving threats.
              </p>
              <p className="text-gray-300 font-space leading-relaxed">
                I'm particularly interested in web application security, network penetration testing, and security awareness training. 
                I believe in ethical hacking as a force for good in making the digital world safer.
              </p>
            </div>

            <div className="bg-cyber-navy/30 border border-cyber-green/20 rounded-lg p-8 hover:border-cyber-green/40 transition-all duration-300">
              <h3 className="text-2xl font-fira font-semibold text-cyber-green mb-4">Current Focus</h3>
              <ul className="space-y-2 text-gray-300 font-space">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyber-green rounded-full mr-3"></span>
                  Preparing for CompTIA Security+ certification
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyber-green rounded-full mr-3"></span>
                  Participating in Capture The Flag (CTF) competitions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyber-green rounded-full mr-3"></span>
                  Building practical cybersecurity tools and projects
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyber-green rounded-full mr-3"></span>
                  Contributing to cybersecurity research and learning
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Skills and Achievements */}
          <div className="space-y-8">
            {/* Skills Section */}
            <div className="bg-cyber-navy/30 border border-cyber-green/20 rounded-lg p-8 hover:border-cyber-green/40 transition-all duration-300">
              <h3 className="text-2xl font-fira font-semibold text-cyber-green mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-space font-medium">{skill.name}</span>
                      <span className="text-cyber-green font-fira text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-cyber-green to-cyber-green/70 h-2 rounded-full transition-all duration-700 hover:shadow-lg hover:shadow-cyber-green/20"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-400 font-space mt-1">{skill.category}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-cyber-navy/30 border border-cyber-green/20 rounded-lg p-8 hover:border-cyber-green/40 transition-all duration-300">
              <h3 className="text-2xl font-fira font-semibold text-cyber-green mb-6">Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="border-l-2 border-cyber-green/30 pl-4 hover:border-cyber-green/60 transition-colors duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-fira font-semibold">{achievement.title}</h4>
                      <span className="text-cyber-green font-space text-sm">{achievement.date}</span>
                    </div>
                    <p className="text-gray-300 font-space text-sm">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-cyber-green text-black hover:bg-cyber-green/80 font-fira font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-cyber-green/20 transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
