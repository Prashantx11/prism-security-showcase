import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  status: string;
  author_name: string;
}

interface BlogPostFormProps {
  post?: BlogPost | null;
  onClose: () => void;
  onSuccess: () => void;
}

const BlogPostForm = ({ post, onClose, onSuccess }: BlogPostFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    status: 'draft',
    author_name: 'Prashant Khatri',
    meta_title: '',
    meta_description: '',
    featured_image: '',
    slug: '',
    read_time: 5
  });

  useEffect(() => {
    if (post) {
      // Fetch full post data for editing
      loadFullPost(post.id);
    }
  }, [post]);

  const loadFullPost = async (id: number) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      setFormData({
        title: data.title || '',
        excerpt: data.excerpt || '',
        content: data.content || '',
        status: data.status || 'draft',
        author_name: data.author_name || 'Prashant Khatri',
        meta_title: data.meta_title || '',
        meta_description: data.meta_description || '',
        featured_image: data.featured_image || '',
        slug: data.slug || '',
        read_time: data.read_time || 5
      });
    } catch (error: any) {
      toast({
        title: "Error loading post",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const slug = formData.slug || generateSlug(formData.title);
      
      const postData = {
        ...formData,
        slug,
        meta_title: formData.meta_title || formData.title,
        meta_description: formData.meta_description || formData.excerpt,
        published_at: formData.status === 'published' ? new Date().toISOString() : null
      };

      let error;
      
      if (post) {
        // Update existing post
        const result = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', post.id);
        error = result.error;
      } else {
        // Create new post
        const result = await supabase
          .from('blog_posts')
          .insert([postData]);
        error = result.error;
      }

      if (error) throw error;

      toast({
        title: "Success",
        description: `Blog post ${post ? 'updated' : 'created'} successfully!`,
      });

      onSuccess();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="bg-cyber-navy border-cyber-green/20 text-white max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-cyber-green font-fira text-xl">
            {post ? 'Edit Blog Post' : 'Add New Blog Post'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-gray-300 font-space">
                Title
              </Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="bg-cyber-navy/50 border-cyber-green/30 text-white"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status" className="text-gray-300 font-space">
                Status
              </Label>
              <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value)}>
                <SelectTrigger className="bg-cyber-navy/50 border-cyber-green/30 text-white">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent className="bg-cyber-navy border-cyber-green/30">
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt" className="text-gray-300 font-space">
              Excerpt
            </Label>
            <Textarea
              id="excerpt"
              value={formData.excerpt}
              onChange={(e) => handleInputChange('excerpt', e.target.value)}
              className="bg-cyber-navy/50 border-cyber-green/30 text-white"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content" className="text-gray-300 font-space">
              Content
            </Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => handleInputChange('content', e.target.value)}
              className="bg-cyber-navy/50 border-cyber-green/30 text-white"
              rows={10}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="slug" className="text-gray-300 font-space">
                Slug (optional - auto-generated from title)
              </Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => handleInputChange('slug', e.target.value)}
                className="bg-cyber-navy/50 border-cyber-green/30 text-white"
                placeholder="auto-generated-from-title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="read_time" className="text-gray-300 font-space">
                Read Time (minutes)
              </Label>
              <Input
                id="read_time"
                type="number"
                min="1"
                value={formData.read_time}
                onChange={(e) => handleInputChange('read_time', parseInt(e.target.value) || 5)}
                className="bg-cyber-navy/50 border-cyber-green/30 text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="featured_image" className="text-gray-300 font-space">
              Featured Image URL (optional)
            </Label>
            <Input
              id="featured_image"
              type="url"
              value={formData.featured_image}
              onChange={(e) => handleInputChange('featured_image', e.target.value)}
              className="bg-cyber-navy/50 border-cyber-green/30 text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="meta_title" className="text-gray-300 font-space">
                Meta Title (SEO - optional)
              </Label>
              <Input
                id="meta_title"
                value={formData.meta_title}
                onChange={(e) => handleInputChange('meta_title', e.target.value)}
                className="bg-cyber-navy/50 border-cyber-green/30 text-white"
                placeholder="Uses title if empty"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="author_name" className="text-gray-300 font-space">
                Author Name
              </Label>
              <Input
                id="author_name"
                value={formData.author_name}
                onChange={(e) => handleInputChange('author_name', e.target.value)}
                className="bg-cyber-navy/50 border-cyber-green/30 text-white"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="meta_description" className="text-gray-300 font-space">
              Meta Description (SEO - optional)
            </Label>
            <Textarea
              id="meta_description"
              value={formData.meta_description}
              onChange={(e) => handleInputChange('meta_description', e.target.value)}
              className="bg-cyber-navy/50 border-cyber-green/30 text-white"
              rows={2}
              placeholder="Uses excerpt if empty"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-cyber-green/40 text-cyber-green hover:bg-cyber-green/10 font-fira"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-cyber-green text-black hover:bg-cyber-green/80 font-fira"
            >
              {loading ? 'Saving...' : (post ? 'Update Post' : 'Create Post')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BlogPostForm;