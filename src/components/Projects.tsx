
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { Github, Link } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tech_stack: string[];
  github_url: string;
  live_url: string;
  level: string;
  learning_outcome: string;
  image_url: string;
  // Legacy fields for static data compatibility
  techStack?: string[];
  githubUrl?: string;
  liveUrl?: string;
  learningOutcome?: string;
  image?: string;
}

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error loading projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const staticProjects = [
    {
      id: 1,
      title: 'Password Strength Analyzer',
      description: 'A Python tool that analyzes password strength and provides security recommendations for better password practices.',
      category: 'tools',
      techStack: ['Python', 'Tkinter', 'RegEx'],
      githubUrl: '#',
      liveUrl: null,
      level: 'Beginner',
      learningOutcome: 'Understanding password security principles',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
    },
    {
      id: 2,
      title: 'Network Scanner',
      description: 'Basic network scanning tool to discover active devices on a network. Built as part of cybersecurity fundamentals course.',
      category: 'networking',
      techStack: ['Python', 'Socket Programming', 'Threading'],
      githubUrl: '#',
      liveUrl: null,
      level: 'Intermediate',
      learningOutcome: 'Network protocols and socket programming',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
    },
    {
      id: 3,
      title: 'Personal Portfolio Website',
      description: 'Responsive portfolio website built with React and modern web technologies to showcase academic projects and skills.',
      category: 'web',
      techStack: ['React', 'TypeScript', 'Tailwind CSS'],
      githubUrl: '#',
      liveUrl: '#',
      level: 'Intermediate',
      learningOutcome: 'Modern web development and responsive design',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'
    },
    {
      id: 4,
      title: 'Basic Vulnerability Scanner',
      description: 'Simple web vulnerability scanner that checks for common security issues like XSS and SQL injection patterns.',
      category: 'security',
      techStack: ['Python', 'Requests', 'BeautifulSoup'],
      githubUrl: '#',
      liveUrl: null,
      level: 'Intermediate',
      learningOutcome: 'Web application security testing',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
    },
    {
      id: 5,
      title: 'Encryption/Decryption Tool',
      description: 'Educational tool demonstrating various encryption algorithms including Caesar cipher and basic cryptographic concepts.',
      category: 'crypto',
      techStack: ['Python', 'Cryptography', 'GUI'],
      githubUrl: '#',
      liveUrl: null,
      level: 'Beginner',
      learningOutcome: 'Cryptography fundamentals',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    },
    {
      id: 6,
      title: 'Study Notes Web App',
      description: 'A web application for organizing and sharing cybersecurity study notes with fellow students.',
      category: 'web',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
      githubUrl: '#',
      liveUrl: '#',
      level: 'Beginner',
      learningOutcome: 'Frontend development and data persistence',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
    }
  ];

  // Use database projects if available, otherwise fall back to static data
  const allProjects = projects.length > 0 ? projects : staticProjects;
  
  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'tools', label: 'Security Tools' },
    { id: 'web', label: 'Web Development' },
    { id: 'networking', label: 'Networking' },
    { id: 'security', label: 'Security Testing' },
    { id: 'crypto', label: 'Cryptography' }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fira font-bold text-white mb-4">
            Academic <span className="text-cyber-green">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-cyber-green mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 font-space max-w-2xl mx-auto">
            A collection of projects completed during my cybersecurity studies, showcasing practical application of security concepts and programming skills.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? 'default' : 'outline'}
              size="sm"
              className={`font-fira text-sm ${
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
          {loading ? (
            <div className="col-span-full text-center py-16">
              <div className="text-cyber-green text-lg font-fira">Loading projects...</div>
            </div>
          ) : filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-cyber-navy/30 border border-cyber-green/20 rounded-lg overflow-hidden hover:border-cyber-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-green/10 group"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                  <img
                    src={(project as any).image_url || (project as any).image || 'https://images.unsplash.com/photo-1518770660439-4636190af475'}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-navy to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-cyber-green/20 border border-cyber-green/40 text-cyber-green text-sm font-fira rounded-full">
                    {project.level}
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

                {/* Learning outcome */}
                <div className="mb-4">
                  <p className="text-cyber-green font-fira text-sm">
                    <span className="text-gray-400">Learning:</span> {(project as any).learning_outcome || (project as any).learningOutcome}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {((project as any).tech_stack || (project as any).techStack || []).map((tech: string) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-cyber-navy/50 text-cyber-green text-xs font-fira rounded border border-cyber-green/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-cyber-green/40 text-cyber-green hover:bg-cyber-green/10 font-fira flex-1"
                    onClick={() => window.open((project as any).github_url || (project as any).githubUrl || '#', '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  {((project as any).live_url || (project as any).liveUrl) && (
                    <Button
                      size="sm"
                      className="bg-cyber-green text-black hover:bg-cyber-green/80 font-fira flex-1"
                      onClick={() => window.open((project as any).live_url || (project as any).liveUrl || '#', '_blank')}
                    >
                      <Link className="w-4 h-4 mr-2" />
                      Demo
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
