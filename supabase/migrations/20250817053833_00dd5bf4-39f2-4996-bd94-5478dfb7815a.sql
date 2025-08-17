-- Create contact messages table
CREATE TABLE public.contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  read BOOLEAN DEFAULT false
);

-- Create projects table
CREATE TABLE public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(100) NOT NULL,
  tech_stack TEXT[] NOT NULL,
  github_url TEXT,
  live_url TEXT,
  level VARCHAR(50) NOT NULL,
  learning_outcome TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create profiles table for admin users
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for contact_messages (admin only)
CREATE POLICY "Admin can view all contact messages" ON public.contact_messages
FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

CREATE POLICY "Anyone can insert contact messages" ON public.contact_messages
FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin can update contact messages" ON public.contact_messages
FOR UPDATE USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

-- RLS Policies for projects
CREATE POLICY "Anyone can view projects" ON public.projects
FOR SELECT USING (true);

CREATE POLICY "Admin can insert projects" ON public.projects
FOR INSERT WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

CREATE POLICY "Admin can update projects" ON public.projects
FOR UPDATE USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

CREATE POLICY "Admin can delete projects" ON public.projects
FOR DELETE USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

-- RLS Policies for blog_posts (admin only)
CREATE POLICY "Anyone can view published blog posts" ON public.blog_posts
FOR SELECT USING (status = 'published');

CREATE POLICY "Admin can view all blog posts" ON public.blog_posts
FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

CREATE POLICY "Admin can insert blog posts" ON public.blog_posts
FOR INSERT WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

CREATE POLICY "Admin can update blog posts" ON public.blog_posts
FOR UPDATE USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

CREATE POLICY "Admin can delete blog posts" ON public.blog_posts
FOR DELETE USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON public.profiles
FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
FOR UPDATE USING (auth.uid() = id);

-- Function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, role)
  VALUES (NEW.id, NEW.email, 'user');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user registration
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Insert some sample projects
INSERT INTO public.projects (title, description, category, tech_stack, github_url, live_url, level, learning_outcome, image_url) VALUES
('Password Strength Analyzer', 'A Python tool that analyzes password strength and provides security recommendations for better password practices.', 'tools', ARRAY['Python', 'Tkinter', 'RegEx'], '#', null, 'Beginner', 'Understanding password security principles', 'https://images.unsplash.com/photo-1518770660439-4636190af475'),
('Network Scanner', 'Basic network scanning tool to discover active devices on a network. Built as part of cybersecurity fundamentals course.', 'networking', ARRAY['Python', 'Socket Programming', 'Threading'], '#', null, 'Intermediate', 'Network protocols and socket programming', 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'),
('Personal Portfolio Website', 'Responsive portfolio website built with React and modern web technologies to showcase academic projects and skills.', 'web', ARRAY['React', 'TypeScript', 'Tailwind CSS'], '#', '#', 'Intermediate', 'Modern web development and responsive design', 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5');

-- Update timestamp function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for projects updated_at
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();