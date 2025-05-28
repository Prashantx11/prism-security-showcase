
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Link } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Advanced SQL Injection Scanner',
      description: 'Automated tool for detecting SQL injection vulnerabilities with advanced payload generation.',
      category: 'tools',
      techStack: ['Python', 'SQLAlchemy', 'Requests'],
      githubUrl: '#',
      liveUrl: null,
      impact: '500+ vulnerabilities detected',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
    },
    {
      id: 2,
      title: 'CTF Platform Development',
      description: 'Custom CTF platform with dynamic flag generation and real-time scoreboard.',
      category: 'ctf',
      techStack: ['Node.js', 'React', 'Docker', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#',
      impact: '1000+ participants',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
    },
    {
      id: 3,
      title: 'Zero-Day Research: CVE-2023-XXXX',
      description: 'Discovery and responsible disclosure of a critical vulnerability in popular web framework.',
      category: 'research',
      techStack: ['Reverse Engineering', 'Assembly', 'C++'],
      githubUrl: '#',
      liveUrl: null,
      impact: 'CVE assigned',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'
    },
    {
      id: 4,
      title: 'Network Traffic Analyzer',
      description: 'Real-time network monitoring tool with anomaly detection and threat classification.',
      category: 'tools',
      techStack: ['Python', 'Scapy', 'TensorFlow', 'Wireshark'],
      githubUrl: '#',
      liveUrl: null,
      impact: '95% accuracy rate',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
    },
    {
      id: 5,
      title: 'Red Team Exercise Platform',
      description: 'Comprehensive simulation environment for red team training and assessment.',
      category: 'ctf',
      techStack: ['Kubernetes', 'Terraform', 'Ansible'],
      githubUrl: '#',
      liveUrl: '#',
      impact: '50+ organizations trained',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    },
    {
      id: 6,
      title: 'Mobile App Security Framework',
      description: 'Automated security testing framework for Android and iOS applications.',
      category: 'tools',
      techStack: ['Java', 'Swift', 'Frida', 'Burp Suite'],
      githubUrl: '#',
      liveUrl: null,
      impact: '200+ apps tested',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'tools', label: 'Security Tools' },
    { id: 'ctf', label: 'CTF Platforms' },
    { id: 'research', label: 'Research' }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fira font-bold text-white mb-4">
            Featured <span className="text-cyber-green">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-cyber-green mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 font-space max-w-2xl mx-auto">
            A showcase of my cybersecurity tools, research, and contributions to the security community.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? 'default' : 'outline'}
              className={`font-fira ${
                filter === category.id
                  ? 'bg-cyber-green text-black hover:bg-cyber-green/80'
                  : 'border-cyber-green/40 text-cyber-green hover:bg-cyber-green/10'
              }`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-cyber-navy/30 border border-cyber-green/20 rounded-lg overflow-hidden hover:border-cyber-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-green/10 group"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-navy to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-cyber-green/20 border border-cyber-green/40 text-cyber-green text-sm font-fira rounded-full">
                    {project.category.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-fira font-semibold text-white mb-3 group-hover:text-cyber-green transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 font-space text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-cyber-navy/50 text-cyber-green text-xs font-fira rounded border border-cyber-green/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact metric */}
                <div className="mb-4">
                  <span className="text-cyber-green font-fira text-sm">Impact: {project.impact}</span>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-cyber-green/40 text-cyber-green hover:bg-cyber-green/10 font-fira flex-1"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="bg-cyber-green text-black hover:bg-cyber-green/80 font-fira flex-1"
                    >
                      <Link className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more projects button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-cyber-green text-black hover:bg-cyber-green/80 font-fira font-semibold px-8"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
