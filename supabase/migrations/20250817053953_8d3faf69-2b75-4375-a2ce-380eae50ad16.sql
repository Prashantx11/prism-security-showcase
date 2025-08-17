-- Fix RLS security issues
-- Enable RLS on existing blog tables
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_post_tags ENABLE ROW LEVEL SECURITY;

-- RLS Policies for blog_categories
CREATE POLICY "Anyone can view blog categories" ON public.blog_categories
FOR SELECT USING (true);

CREATE POLICY "Admin can insert blog categories" ON public.blog_categories
FOR INSERT WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

CREATE POLICY "Admin can update blog categories" ON public.blog_categories
FOR UPDATE USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

CREATE POLICY "Admin can delete blog categories" ON public.blog_categories
FOR DELETE USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

-- RLS Policies for blog_tags
CREATE POLICY "Anyone can view blog tags" ON public.blog_tags
FOR SELECT USING (true);

CREATE POLICY "Admin can insert blog tags" ON public.blog_tags
FOR INSERT WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

CREATE POLICY "Admin can update blog tags" ON public.blog_tags
FOR UPDATE USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

CREATE POLICY "Admin can delete blog tags" ON public.blog_tags
FOR DELETE USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

-- RLS Policies for blog_post_tags
CREATE POLICY "Anyone can view blog post tags" ON public.blog_post_tags
FOR SELECT USING (true);

CREATE POLICY "Admin can insert blog post tags" ON public.blog_post_tags
FOR INSERT WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

CREATE POLICY "Admin can update blog post tags" ON public.blog_post_tags
FOR UPDATE USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

CREATE POLICY "Admin can delete blog post tags" ON public.blog_post_tags
FOR DELETE USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

-- Fix function search paths by altering existing functions
ALTER FUNCTION public.handle_new_user() SET search_path = public;
ALTER FUNCTION public.update_updated_at_column() SET search_path = public;