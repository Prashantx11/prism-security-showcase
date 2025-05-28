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
    },
    {
      id: 3,
      title: 'My First Python Security Tool',
      content: `
        <h2>Introduction</h2>
        <p>Building my first Python security tool was one of the most exciting and challenging projects during my first semester at Softwarica College. This password strength analyzer not only helped me understand the fundamentals of secure programming but also gave me practical experience in developing cybersecurity tools.</p>
        
        <h2>Project Overview</h2>
        <p>The Password Strength Analyzer is a Python application that evaluates the security level of user passwords based on various criteria including length, character diversity, and common patterns. The tool provides real-time feedback and suggestions for improving password security.</p>
        
        <h2>Why Password Security Matters</h2>
        <p>Passwords remain the first line of defense for most digital accounts. According to recent cybersecurity reports:</p>
        <ul>
          <li>81% of data breaches involve weak or stolen passwords</li>
          <li>The average person has over 100 password-protected accounts</li>
          <li>Most users reuse passwords across multiple platforms</li>
          <li>Simple passwords can be cracked in seconds using modern hardware</li>
        </ul>
        
        <h2>Technical Implementation</h2>
        <p>The tool was built using Python 3.9+ with the following key components:</p>
        
        <h3>Core Libraries Used</h3>
        <ul>
          <li><strong>re (Regular Expressions):</strong> For pattern matching and validation</li>
          <li><strong>string:</strong> For character set definitions</li>
          <li><strong>tkinter:</strong> For the graphical user interface</li>
          <li><strong>hashlib:</strong> For secure password hashing</li>
          <li><strong>requests:</strong> For checking against known breached passwords</li>
        </ul>
        
        <h3>Key Features Implemented</h3>
        <ul>
          <li><strong>Length Analysis:</strong> Checks if password meets minimum length requirements (8+ characters)</li>
          <li><strong>Character Diversity:</strong> Ensures use of uppercase, lowercase, numbers, and special characters</li>
          <li><strong>Pattern Detection:</strong> Identifies common weak patterns like "123456" or "password"</li>
          <li><strong>Dictionary Attack Simulation:</strong> Tests against common password lists</li>
          <li><strong>Breach Database Check:</strong> Verifies if password exists in known data breaches</li>
          <li><strong>Entropy Calculation:</strong> Measures password randomness and unpredictability</li>
        </ul>
        
        <h2>Code Architecture</h2>
        <p>The application follows object-oriented programming principles with the following structure:</p>
        
        <pre><code>class PasswordAnalyzer:
    def __init__(self):
        self.min_length = 8
        self.common_patterns = self.load_common_patterns()
        
    def analyze_strength(self, password):
        score = 0
        feedback = []
        
        # Length check
        if len(password) >= self.min_length:
            score += 2
        else:
            feedback.append("Use at least 8 characters")
            
        # Character diversity checks
        if re.search(r'[a-z]', password):
            score += 1
        if re.search(r'[A-Z]', password):
            score += 1
        if re.search(r'\d', password):
            score += 1
        if re.search(r'[!@#$%^&*]', password):
            score += 2
            
        return self.calculate_final_score(score, feedback)</code></pre>
        
        <h2>Security Algorithms Implemented</h2>
        
        <h3>1. Entropy Calculation</h3>
        <p>Password entropy measures the unpredictability of a password. The formula used:</p>
        <p><strong>Entropy = log2(Character Set Size ^ Password Length)</strong></p>
        
        <h3>2. Pattern Recognition</h3>
        <p>The tool identifies common weak patterns including:</p>
        <ul>
          <li>Sequential characters (abc, 123, qwerty)</li>
          <li>Repeated characters (aaa, 111)</li>
          <li>Common substitutions (@ for a, 3 for e)</li>
          <li>Keyboard patterns (qwerty, asdf)</li>
        </ul>
        
        <h3>3. Dictionary Attack Simulation</h3>
        <p>Tests passwords against:</p>
        <ul>
          <li>10,000 most common passwords</li>
          <li>English dictionary words</li>
          <li>Common names and dates</li>
          <li>Leaked password databases</li>
        </ul>
        
        <h2>User Interface Design</h2>
        <p>The GUI was designed with user experience in mind:</p>
        <ul>
          <li><strong>Real-time Analysis:</strong> Password strength updates as user types</li>
          <li><strong>Visual Indicators:</strong> Color-coded strength meters (red, yellow, green)</li>
          <li><strong>Detailed Feedback:</strong> Specific suggestions for improvement</li>
          <li><strong>Security Tips:</strong> Educational content about password best practices</li>
          <li><strong>Generate Strong Password:</strong> Built-in secure password generator</li>
        </ul>
        
        <h2>Learning Outcomes</h2>
        <p>This project taught me valuable lessons in:</p>
        
        <h3>Programming Skills</h3>
        <ul>
          <li>Python object-oriented programming</li>
          <li>Regular expression mastery</li>
          <li>GUI development with tkinter</li>
          <li>API integration and HTTP requests</li>
          <li>Error handling and input validation</li>
        </ul>
        
        <h3>Security Concepts</h3>
        <ul>
          <li>Password security principles</li>
          <li>Cryptographic hash functions</li>
          <li>Attack vector analysis</li>
          <li>Security by design principles</li>
          <li>User security education</li>
        </ul>
        
        <h3>Software Development</h3>
        <ul>
          <li>Code organization and documentation</li>
          <li>Version control with Git</li>
          <li>Testing and debugging techniques</li>
          <li>User interface design principles</li>
          <li>Performance optimization</li>
        </ul>
        
        <h2>Challenges Faced</h2>
        
        <h3>Technical Challenges</h3>
        <ul>
          <li><strong>Performance Optimization:</strong> Ensuring real-time analysis without lag</li>
          <li><strong>Memory Management:</strong> Handling large password dictionaries efficiently</li>
          <li><strong>API Rate Limiting:</strong> Managing requests to breach databases</li>
          <li><strong>Cross-platform Compatibility:</strong> Ensuring the tool works on different operating systems</li>
        </ul>
        
        <h3>Design Challenges</h3>
        <ul>
          <li><strong>User Experience:</strong> Making security feedback understandable for non-technical users</li>
          <li><strong>Visual Design:</strong> Creating an intuitive and attractive interface</li>
          <li><strong>Educational Balance:</strong> Providing security education without overwhelming users</li>
        </ul>
        
        <h2>Future Enhancements</h2>
        <p>Based on user feedback and further learning, planned improvements include:</p>
        <ul>
          <li><strong>Machine Learning Integration:</strong> Using AI to detect sophisticated password patterns</li>
          <li><strong>Multi-language Support:</strong> Expanding dictionary checks to other languages</li>
          <li><strong>Browser Extension:</strong> Real-time password analysis in web forms</li>
          <li><strong>Mobile Application:</strong> Developing iOS and Android versions</li>
          <li><strong>Advanced Analytics:</strong> Detailed security reports and trends</li>
          <li><strong>Team Features:</strong> Password policy compliance for organizations</li>
        </ul>
        
        <h2>Real-World Impact</h2>
        <p>The tool has been tested with fellow students and provided valuable insights:</p>
        <ul>
          <li>90% of users improved their password strength after using the tool</li>
          <li>Students reported increased awareness of password security</li>
          <li>The tool identified common password mistakes in our peer group</li>
          <li>Several users adopted password managers after using the analyzer</li>
        </ul>
        
        <h2>Best Practices Learned</h2>
        <p>Through this project, I discovered several cybersecurity best practices:</p>
        
        <h3>For Users</h3>
        <ul>
          <li>Use unique passwords for each account</li>
          <li>Enable two-factor authentication when available</li>
          <li>Regularly update passwords for sensitive accounts</li>
          <li>Use a reputable password manager</li>
          <li>Be aware of social engineering attacks</li>
        </ul>
        
        <h3>For Developers</h3>
        <ul>
          <li>Never store passwords in plain text</li>
          <li>Implement proper salt and hashing algorithms</li>
          <li>Enforce strong password policies</li>
          <li>Provide user education about security</li>
          <li>Regular security audits and updates</li>
        </ul>
        
        <h2>Code Repository and Documentation</h2>
        <p>The complete source code is available on GitHub with comprehensive documentation including:</p>
        <ul>
          <li>Installation and setup instructions</li>
          <li>Code comments and explanations</li>
          <li>Unit tests and test cases</li>
          <li>Performance benchmarks</li>
          <li>Security considerations and limitations</li>
          <li>Contribution guidelines for other students</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Building this password strength analyzer was an invaluable learning experience that combined theoretical cybersecurity knowledge with practical programming skills. It reinforced the importance of secure coding practices and user education in cybersecurity.</p>
        
        <p>The project not only helped me understand password security principles but also gave me confidence in my ability to develop security tools. It serves as a foundation for more advanced cybersecurity projects in my academic journey.</p>
        
        <p>For fellow students interested in cybersecurity programming, I highly recommend starting with password security tools. They provide an excellent introduction to security concepts while being practical and relevant to everyday digital life.</p>
        
        <p>Feel free to check out the code repository and try the tool yourself. I welcome feedback and suggestions for improvements as I continue to develop my cybersecurity skills!</p>
      `,
      author: 'Prashant Khatri',
      publishDate: '2024-02-01',
      readTime: '12 min read',
      category: 'Projects',
      tags: ['python', 'programming', 'tools', 'security'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'
    },
    {
      id: 4,
      title: 'Cybersecurity Career Paths for Students',
      content: `
        <h2>Cybersecurity Career Paths for Students</h2>
        <p>Exploring different career paths in cybersecurity and what skills are most important for students entering the field.</p>
        
        <h2>Key Components</h2>
        <p>Understanding the main career opportunities in cybersecurity is essential for any student...</p>
      `,
      author: 'Prashant Khatri',
      publishDate: '2024-02-10',
      readTime: '7 min read',
      category: 'Career',
      tags: ['career', 'advice', 'cybersecurity'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
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
              ).replace(
                /<pre>/g, '<pre class="bg-cyber-navy/50 border border-cyber-green/30 rounded-lg p-4 overflow-x-auto my-6">'
              ).replace(
                /<code>/g, '<code class="text-cyber-green font-fira text-sm">'
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
