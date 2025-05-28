
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail, Github, Link } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'prashant@cybersec.com',
      href: 'mailto:prashant@cybersec.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/prashantkhatri',
      href: 'https://github.com/prashantkhatri'
    },
    {
      icon: Link,
      label: 'LinkedIn',
      value: 'linkedin.com/in/prashantkhatri',
      href: 'https://linkedin.com/in/prashantkhatri'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-cyber-navy to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-fira font-bold text-white mb-4">
            Get In <span className="text-cyber-green">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-cyber-green mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 font-space max-w-2xl mx-auto">
            Ready to secure your systems? Let's discuss your cybersecurity needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <div className="bg-cyber-navy/30 border border-cyber-green/20 rounded-lg p-8 hover:border-cyber-green/50 transition-all duration-300">
            <h3 className="text-2xl font-fira font-semibold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-cyber-green font-fira text-sm mb-2">
                    Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-black/50 border-cyber-green/30 text-white focus:border-cyber-green font-space"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-cyber-green font-fira text-sm mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-black/50 border-cyber-green/30 text-white focus:border-cyber-green font-space"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-cyber-green font-fira text-sm mb-2">
                  Subject *
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-black/50 border-cyber-green/30 text-white focus:border-cyber-green font-space"
                  placeholder="Security consultation inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-cyber-green font-fira text-sm mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-black/50 border border-cyber-green/30 text-white focus:border-cyber-green font-space rounded-md px-3 py-2 resize-none"
                  placeholder="Tell me about your security requirements..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyber-green text-black hover:bg-cyber-green/80 font-fira font-semibold py-3 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-fira font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 font-space leading-relaxed mb-8">
                Whether you need a security audit, penetration testing, or cybersecurity consulting, 
                I'm here to help protect your digital assets. Reach out through any of the channels below.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className="flex items-center p-4 bg-cyber-navy/30 border border-cyber-green/20 rounded-lg hover:border-cyber-green/50 transition-all duration-300 hover:bg-cyber-navy/50 group"
                >
                  <method.icon className="w-6 h-6 text-cyber-green mr-4 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <div className="text-white font-fira font-semibold">{method.label}</div>
                    <div className="text-gray-300 font-space text-sm">{method.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability status */}
            <div className="bg-cyber-navy/30 border border-cyber-green/20 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse mr-3"></div>
                <span className="text-cyber-green font-fira font-semibold">Available for Projects</span>
              </div>
              <p className="text-gray-300 font-space text-sm">
                Currently accepting new cybersecurity consulting projects and security assessments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
