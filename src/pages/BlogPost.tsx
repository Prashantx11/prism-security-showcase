
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock blog post data - in a real app this would come from an API or CMS
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Ethical Hacking: A Student\'s Journey',
      content: `
        <h2>Introduction</h2>
        <p>Starting my journey in cybersecurity at Softwarica College has been an incredible experience. As a student pursuing a Bachelor's degree in Ethical Hacking and Cybersecurity, I want to share my insights and experiences with fellow students who might be considering this path.</p>
        
        <h2>Why I Chose Cybersecurity</h2>
        <p>The digital world is constantly evolving, and with it, the threats that we face online. I was fascinated by the idea of being on the front lines of digital defense, protecting individuals and organizations from cyber threats.</p>
        
        <h2>My First Semester Experience</h2>
        <p>The curriculum at Softwarica College, affiliated with Coventry University, provides a perfect blend of theoretical knowledge and practical application. Here are some key areas we've covered:</p>
        
        <ul>
          <li>Fundamentals of Information Security</li>
          <li>Network Security Basics</li>
          <li>Introduction to Ethical Hacking</li>
          <li>Programming for Security (Python & JavaScript)</li>
          <li>Risk Assessment and Management</li>
        </ul>
        
        <h2>Hands-on Learning</h2>
        <p>One of the most exciting aspects of the program is the practical labs. We get to work with industry-standard tools and simulate real-world scenarios. Some of the tools we've explored include:</p>
        
        <ul>
          <li>Kali Linux for penetration testing</li>
          <li>Wireshark for network analysis</li>
          <li>Metasploit for vulnerability assessment</li>
          <li>Burp Suite for web application security testing</li>
        </ul>
        
        <h2>Building My First Security Tool</h2>
        <p>As part of our coursework, I developed a password strength analyzer in Python. This project taught me about:</p>
        
        <ul>
          <li>Regular expressions for pattern matching</li>
          <li>Security best practices for password policies</li>
          <li>User interface design for security tools</li>
          <li>Algorithm design for security analysis</li>
        </ul>
        
        <h2>Looking Forward</h2>
        <p>As I progress through my studies, I'm excited to dive deeper into advanced topics like:</p>
        
        <ul>
          <li>Advanced penetration testing techniques</li>
          <li>Digital forensics</li>
          <li>Incident response procedures</li>
          <li>Security architecture design</li>
        </ul>
        
        <h2>Advice for Aspiring Cybersecurity Students</h2>
        <p>If you're considering a career in cybersecurity, here are my recommendations:</p>
        
        <ol>
          <li><strong>Start with the basics:</strong> Understand networking fundamentals and basic programming</li>
          <li><strong>Practice regularly:</strong> Set up virtual labs and practice what you learn</li>
          <li><strong>Stay curious:</strong> The field evolves rapidly, so continuous learning is essential</li>
          <li><strong>Join communities:</strong> Connect with other students and professionals in the field</li>
          <li><strong>Build projects:</strong> Apply your knowledge to create practical security tools</li>
        </ol>
        
        <h2>Conclusion</h2>
        <p>The journey into cybersecurity is challenging but incredibly rewarding. Every day brings new learning opportunities and the chance to make a real difference in protecting digital assets and privacy.</p>
        
        <p>I'll continue sharing my experiences and learnings as I progress through my degree program. Feel free to reach out if you have any questions about studying cybersecurity!</p>
      `,
      author: 'Prashant Khatri',
      publishDate: '2024-01-15',
      readTime: '5 min read',
      category: 'Education',
      tags: ['cybersecurity', 'education', 'beginner'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
    },
    {
      id: 2,
      title: 'Understanding Network Security Basics',
      content: `
        <h2>Network Security Fundamentals</h2>
        <p>Network security is a critical aspect of cybersecurity that focuses on protecting the integrity, confidentiality, and availability of computer networks and data.</p>
        
        <h2>Key Components</h2>
        <p>Understanding the main components of network security is essential for any cybersecurity professional...</p>
      `,
      author: 'Prashant Khatri',
      publishDate: '2024-01-20',
      readTime: '8 min read',
      category: 'Technical',
      tags: ['networking', 'security', 'firewall'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
    }
  ];

  const currentPost = blogPosts.find(post => post.id === parseInt(id || '1'));
  const currentIndex = blogPosts.findIndex(post => post.id === parseInt(id || '1'));
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-fira mb-4">Post not found</h1>
          <Button onClick={() => navigate('/blog')} className="bg-cyber-green text-black">
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Article Header */}
      <article className="pt-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back to blog link */}
          <Link 
            to="/blog" 
            className="inline-flex items-center text-cyber-green hover:text-white transition-colors duration-300 mb-8 font-space"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Article header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="px-3 py-1 bg-cyber-green/20 border border-cyber-green/40 text-cyber-green text-sm font-fira rounded-full">
                {currentPost.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-fira font-bold text-white mb-6">
              {currentPost.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-400 font-space text-sm mb-6">
              <span>By {currentPost.author}</span>
              <span>•</span>
              <span>{currentPost.publishDate}</span>
              <span>•</span>
              <span>{currentPost.readTime}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {currentPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-cyber-navy/50 text-cyber-green text-sm font-fira rounded border border-cyber-green/20"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* Featured image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={currentPost.image}
              alt={currentPost.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {/* Article content */}
          <div 
            className="prose prose-invert prose-lg max-w-none font-space"
            style={{
              color: '#e5e7eb',
              lineHeight: '1.8'
            }}
            dangerouslySetInnerHTML={{ 
              __html: currentPost.content.replace(
                /<h2>/g, '<h2 class="text-2xl font-fira font-bold text-white mt-8 mb-4">'
              ).replace(
                /<h3>/g, '<h3 class="text-xl font-fira font-semibold text-cyber-green mt-6 mb-3">'
              ).replace(
                /<p>/g, '<p class="mb-4 leading-relaxed">'
              ).replace(
                /<ul>/g, '<ul class="mb-4 space-y-2">'
              ).replace(
                /<ol>/g, '<ol class="mb-4 space-y-2 list-decimal list-inside">'
              ).replace(
                /<li>/g, '<li class="text-gray-300">'
              ).replace(
                /<strong>/g, '<strong class="text-cyber-green font-semibold">'
              )
            }}
          />

          {/* Navigation between posts */}
          <div className="flex justify-between items-center mt-16 pt-8 border-t border-cyber-green/20">
            {prevPost ? (
              <Link 
                to={`/blog/${prevPost.id}`}
                className="flex items-center text-cyber-green hover:text-white transition-colors duration-300 font-space"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                <div>
                  <div className="text-sm text-gray-400">Previous</div>
                  <div className="font-semibold">{prevPost.title}</div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            {nextPost ? (
              <Link 
                to={`/blog/${nextPost.id}`}
                className="flex items-center text-cyber-green hover:text-white transition-colors duration-300 font-space text-right"
              >
                <div>
                  <div className="text-sm text-gray-400">Next</div>
                  <div className="font-semibold">{nextPost.title}</div>
                </div>
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
