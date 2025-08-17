import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { X } from 'lucide-react';

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
}

interface ProjectFormProps {
  project?: Project | null;
  onClose: () => void;
  onSuccess: () => void;
}

const ProjectForm = ({ project, onClose, onSuccess }: ProjectFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    tech_stack: '',
    github_url: '',
    live_url: '',
    level: '',
    learning_outcome: '',
    image_url: ''
  });

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        description: project.description,
        category: project.category,
        tech_stack: project.tech_stack.join(', '),
        github_url: project.github_url || '',
        live_url: project.live_url || '',
        level: project.level,
        learning_outcome: project.learning_outcome,
        image_url: project.image_url
      });
    }
  }, [project]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const techStackArray = formData.tech_stack
        .split(',')
        .map(tech => tech.trim())
        .filter(tech => tech.length > 0);

      const projectData = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        tech_stack: techStackArray,
        github_url: formData.github_url || null,
        live_url: formData.live_url || null,
        level: formData.level,
        learning_outcome: formData.learning_outcome,
        image_url: formData.image_url
      };

      let error;
      
      if (project) {
        // Update existing project
        const result = await supabase
          .from('projects')
          .update(projectData)
          .eq('id', project.id);
        error = result.error;
      } else {
        // Create new project
        const result = await supabase
          .from('projects')
          .insert([projectData]);
        error = result.error;
      }

      if (error) throw error;

      toast({
        title: "Success",
        description: `Project ${project ? 'updated' : 'created'} successfully!`,
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="bg-cyber-navy border-cyber-green/20 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-cyber-green font-fira text-xl">
            {project ? 'Edit Project' : 'Add New Project'}
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
              <Label htmlFor="category" className="text-gray-300 font-space">
                Category
              </Label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                <SelectTrigger className="bg-cyber-navy/50 border-cyber-green/30 text-white">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-cyber-navy border-cyber-green/30">
                  <SelectItem value="tools">Security Tools</SelectItem>
                  <SelectItem value="web">Web Development</SelectItem>
                  <SelectItem value="networking">Networking</SelectItem>
                  <SelectItem value="security">Security Testing</SelectItem>
                  <SelectItem value="crypto">Cryptography</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-gray-300 font-space">
              Description
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              className="bg-cyber-navy/50 border-cyber-green/30 text-white"
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="level" className="text-gray-300 font-space">
                Level
              </Label>
              <Select value={formData.level} onValueChange={(value) => handleInputChange('level', value)}>
                <SelectTrigger className="bg-cyber-navy/50 border-cyber-green/30 text-white">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent className="bg-cyber-navy border-cyber-green/30">
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="tech_stack" className="text-gray-300 font-space">
                Tech Stack (comma separated)
              </Label>
              <Input
                id="tech_stack"
                value={formData.tech_stack}
                onChange={(e) => handleInputChange('tech_stack', e.target.value)}
                className="bg-cyber-navy/50 border-cyber-green/30 text-white"
                placeholder="React, TypeScript, Python"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="learning_outcome" className="text-gray-300 font-space">
              Learning Outcome
            </Label>
            <Input
              id="learning_outcome"
              value={formData.learning_outcome}
              onChange={(e) => handleInputChange('learning_outcome', e.target.value)}
              className="bg-cyber-navy/50 border-cyber-green/30 text-white"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="github_url" className="text-gray-300 font-space">
                GitHub URL (optional)
              </Label>
              <Input
                id="github_url"
                type="url"
                value={formData.github_url}
                onChange={(e) => handleInputChange('github_url', e.target.value)}
                className="bg-cyber-navy/50 border-cyber-green/30 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="live_url" className="text-gray-300 font-space">
                Live URL (optional)
              </Label>
              <Input
                id="live_url"
                type="url"
                value={formData.live_url}
                onChange={(e) => handleInputChange('live_url', e.target.value)}
                className="bg-cyber-navy/50 border-cyber-green/30 text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image_url" className="text-gray-300 font-space">
              Image URL
            </Label>
            <Input
              id="image_url"
              type="url"
              value={formData.image_url}
              onChange={(e) => handleInputChange('image_url', e.target.value)}
              className="bg-cyber-navy/50 border-cyber-green/30 text-white"
              required
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
              {loading ? 'Saving...' : (project ? 'Update Project' : 'Create Project')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectForm;