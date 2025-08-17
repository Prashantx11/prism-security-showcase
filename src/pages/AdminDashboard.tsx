import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Eye, MessageSquare, FolderOpen, FileText, Plus, Trash2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ProjectForm from '@/components/admin/ProjectForm';
import BlogPostForm from '@/components/admin/BlogPostForm';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  created_at: string;
}

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
  created_at: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  status: string;
  created_at: string;
  author_name: string;
}

const AdminDashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const { toast } = useToast();
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editingBlogPost, setBlogPostId] = useState<BlogPost | null>(null);

  // Redirect if not authenticated or not admin
  if (!loading && (!user || !isAdmin)) {
    return <Navigate to="/auth" replace />;
  }

  useEffect(() => {
    if (user && isAdmin) {
      loadContactMessages();
      loadProjects();
      loadBlogPosts();
    }
  }, [user, isAdmin]);

  const loadContactMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContacts(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading messages",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const loadProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading projects",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const loadBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, excerpt, status, created_at, author_name')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogPosts(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading blog posts",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ read: true })
        .eq('id', id);

      if (error) throw error;
      
      setContacts(prev => prev.map(contact => 
        contact.id === id ? { ...contact, read: true } : contact
      ));

      toast({
        title: "Success",
        description: "Message marked as read",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const deleteProject = async (id: string) => {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setProjects(prev => prev.filter(project => project.id !== id));
      
      toast({
        title: "Success",
        description: "Project deleted successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const deleteBlogPost = async (id: number) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setBlogPosts(prev => prev.filter(post => post.id !== id));
      
      toast({
        title: "Success",
        description: "Blog post deleted successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-cyber-green text-lg font-fira">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-fira font-bold text-cyber-green mb-2">
                Admin Dashboard
              </h1>
              <p className="text-gray-300 font-space">
                Welcome back, {user?.email}
              </p>
            </div>
            <Button
              onClick={signOut}
              variant="outline"
              className="border-cyber-green/40 text-cyber-green hover:bg-cyber-green/10 font-fira"
            >
              Sign Out
            </Button>
          </div>

          <Tabs defaultValue="messages" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-cyber-navy/30 mb-8">
              <TabsTrigger 
                value="messages" 
                className="text-gray-300 data-[state=active]:text-cyber-green data-[state=active]:bg-cyber-green/20 font-fira"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Messages
              </TabsTrigger>
              <TabsTrigger 
                value="projects"
                className="text-gray-300 data-[state=active]:text-cyber-green data-[state=active]:bg-cyber-green/20 font-fira"
              >
                <FolderOpen className="w-4 h-4 mr-2" />
                Projects
              </TabsTrigger>
              <TabsTrigger 
                value="blog"
                className="text-gray-300 data-[state=active]:text-cyber-green data-[state=active]:bg-cyber-green/20 font-fira"
              >
                <FileText className="w-4 h-4 mr-2" />
                Blog Posts
              </TabsTrigger>
            </TabsList>

            <TabsContent value="messages">
              <Card className="bg-cyber-navy/30 border-cyber-green/20">
                <CardHeader>
                  <CardTitle className="text-cyber-green font-fira">Contact Messages</CardTitle>
                  <CardDescription className="text-gray-300 font-space">
                    Messages from the contact form
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-cyber-green font-fira">Name</TableHead>
                        <TableHead className="text-cyber-green font-fira">Email</TableHead>
                        <TableHead className="text-cyber-green font-fira">Subject</TableHead>
                        <TableHead className="text-cyber-green font-fira">Status</TableHead>
                        <TableHead className="text-cyber-green font-fira">Date</TableHead>
                        <TableHead className="text-cyber-green font-fira">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contacts.map((contact) => (
                        <TableRow key={contact.id}>
                          <TableCell className="text-white font-space">{contact.name}</TableCell>
                          <TableCell className="text-white font-space">{contact.email}</TableCell>
                          <TableCell className="text-white font-space">{contact.subject}</TableCell>
                          <TableCell>
                            <Badge 
                              variant={contact.read ? "secondary" : "default"}
                              className={contact.read ? "bg-gray-600" : "bg-cyber-green text-black"}
                            >
                              {contact.read ? "Read" : "Unread"}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-white font-space">
                            {new Date(contact.created_at).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            {!contact.read && (
                              <Button
                                size="sm"
                                onClick={() => markAsRead(contact.id)}
                                className="bg-cyber-green text-black hover:bg-cyber-green/80 font-fira"
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="projects">
              <Card className="bg-cyber-navy/30 border-cyber-green/20">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-cyber-green font-fira">Projects</CardTitle>
                      <CardDescription className="text-gray-300 font-space">
                        Manage your portfolio projects
                      </CardDescription>
                    </div>
                    <Button
                      onClick={() => setShowProjectForm(true)}
                      className="bg-cyber-green text-black hover:bg-cyber-green/80 font-fira"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Project
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-cyber-green font-fira">Title</TableHead>
                        <TableHead className="text-cyber-green font-fira">Category</TableHead>
                        <TableHead className="text-cyber-green font-fira">Level</TableHead>
                        <TableHead className="text-cyber-green font-fira">Created</TableHead>
                        <TableHead className="text-cyber-green font-fira">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {projects.map((project) => (
                        <TableRow key={project.id}>
                          <TableCell className="text-white font-space">{project.title}</TableCell>
                          <TableCell className="text-white font-space">{project.category}</TableCell>
                          <TableCell className="text-white font-space">{project.level}</TableCell>
                          <TableCell className="text-white font-space">
                            {new Date(project.created_at).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  setEditingProject(project);
                                  setShowProjectForm(true);
                                }}
                                className="border-cyber-green/40 text-cyber-green hover:bg-cyber-green/10"
                              >
                                Edit
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => deleteProject(project.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="blog">
              <Card className="bg-cyber-navy/30 border-cyber-green/20">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-cyber-green font-fira">Blog Posts</CardTitle>
                      <CardDescription className="text-gray-300 font-space">
                        Manage your blog content
                      </CardDescription>
                    </div>
                    <Button
                      onClick={() => setShowBlogForm(true)}
                      className="bg-cyber-green text-black hover:bg-cyber-green/80 font-fira"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Post
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-cyber-green font-fira">Title</TableHead>
                        <TableHead className="text-cyber-green font-fira">Status</TableHead>
                        <TableHead className="text-cyber-green font-fira">Author</TableHead>
                        <TableHead className="text-cyber-green font-fira">Created</TableHead>
                        <TableHead className="text-cyber-green font-fira">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {blogPosts.map((post) => (
                        <TableRow key={post.id}>
                          <TableCell className="text-white font-space">{post.title}</TableCell>
                          <TableCell>
                            <Badge 
                              variant={post.status === 'published' ? "default" : "secondary"}
                              className={post.status === 'published' ? "bg-cyber-green text-black" : "bg-gray-600"}
                            >
                              {post.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-white font-space">{post.author_name}</TableCell>
                          <TableCell className="text-white font-space">
                            {new Date(post.created_at).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  setBlogPostId(post);
                                  setShowBlogForm(true);
                                }}
                                className="border-cyber-green/40 text-cyber-green hover:bg-cyber-green/10"
                              >
                                Edit
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => deleteBlogPost(post.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {showProjectForm && (
        <ProjectForm
          project={editingProject}
          onClose={() => {
            setShowProjectForm(false);
            setEditingProject(null);
          }}
          onSuccess={() => {
            loadProjects();
            setShowProjectForm(false);
            setEditingProject(null);
          }}
        />
      )}

      {showBlogForm && (
        <BlogPostForm
          post={editingBlogPost}
          onClose={() => {
            setShowBlogForm(false);
            setBlogPostId(null);
          }}
          onSuccess={() => {
            loadBlogPosts();
            setShowBlogForm(false);
            setBlogPostId(null);
          }}
        />
      )}
    </div>
  );
};

export default AdminDashboard;