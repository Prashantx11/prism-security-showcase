
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Ethical Hacking: A Student\'s Journey',
      excerpt: 'My experience starting the cybersecurity program at Softwarica College and what I\'ve learned so far about ethical hacking fundamentals.',
      content: 'This is the full content of the first blog post...',
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
      excerpt: 'A comprehensive guide to network security fundamentals including firewalls, intrusion detection systems, and network monitoring.',
      content: 'This is the full content of the second blog post...',
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
      excerpt: 'Building a simple password strength analyzer in Python - lessons learned and code snippets from my first security programming project.',
      content: 'This is the full content of the third blog post...',
      author: 'Prashant Khatri',
      publishDate: '2024-02-01',
      readTime: '6 min read',
      category: 'Projects',
      tags: ['python', 'programming', 'tools'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'
    },
    {
      id: 4,
      title: 'Cybersecurity Career Paths for Students',
      excerpt: 'Exploring different career paths in cybersecurity and what skills are most important for students entering the field.',
      content: 'This is the full content of the fourth blog post...',
      author: 'Prashant Khatri',
      publishDate: '2024-02-10',
      readTime: '7 min read',
      category: 'Career',
      tags: ['career', 'advice', 'cybersecurity'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
    }
  ];

  const categories = ['all', 'Education', 'Technical', 'Projects', 'Career'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-cyber-navy to-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-fira font-bold text-white mb-6">
              Cyber<span className="text-cyber-green">Security</span> Blog
            </h1>
            <p className="text-xl text-gray-300 font-space mb-8">
              Sharing my journey through cybersecurity studies, project insights, and learning experiences
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-cyber-navy/50 border-cyber-green/30 text-white placeholder-gray-400"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-cyber-navy/50 border border-cyber-green/30 text-white rounded-md px-3 py-2"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-cyber-navy">
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-cyber-navy/30 border border-cyber-green/20 rounded-lg overflow-hidden hover:border-cyber-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-green/10 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-navy to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-cyber-green/20 border border-cyber-green/40 text-cyber-green text-sm font-fira rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 font-space mb-3">
                    <span>{post.publishDate}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-fira font-semibold text-white mb-3 group-hover:text-cyber-green transition-colors duration-300">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-300 font-space text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-cyber-navy/50 text-cyber-green text-xs font-fira rounded border border-cyber-green/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link to={`/blog/${post.id}`}>
                    <Button
                      size="sm"
                      className="bg-cyber-green text-black hover:bg-cyber-green/80 font-fira w-full"
                    >
                      Read More
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 font-space text-lg">
                No articles found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
