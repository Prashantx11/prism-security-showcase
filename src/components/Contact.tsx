
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-cyber-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-fira">
            Get In <span className="text-cyber-green">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-space">
            Let's connect! Whether you have a project in mind, want to collaborate, or just want to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-fira">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-cyber-green/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-cyber-green" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:prashant.khatri110@gmail.com" className="text-white hover:text-cyber-green transition-colors">
                      prashant.khatri110@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-cyber-green/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-cyber-green" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 font-fira">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Prashantx11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyber-green/10 p-3 rounded-lg hover:bg-cyber-green/20 transition-colors group"
                >
                  <Github className="w-6 h-6 text-cyber-green group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/prashant-khatri-53b518230/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyber-green/10 p-3 rounded-lg hover:bg-cyber-green/20 transition-colors group"
                >
                  <Linkedin className="w-6 h-6 text-cyber-green group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-cyber-navy border-cyber-green/20">
            <CardHeader>
              <CardTitle className="text-white font-fira">Send Me a Message</CardTitle>
              <CardDescription className="text-gray-400">
                I'll get back to you as soon as possible!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-cyber-gray border-gray-600 text-white focus:border-cyber-green"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-cyber-gray border-gray-600 text-white focus:border-cyber-green"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-cyber-gray border-gray-600 text-white focus:border-cyber-green"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-cyber-gray border-gray-600 text-white focus:border-cyber-green"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-cyber-green text-black hover:bg-cyber-green/90 font-medium"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
