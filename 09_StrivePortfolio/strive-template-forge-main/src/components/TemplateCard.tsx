
import { useState } from 'react';
import { Eye, Code, Download, Star, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Template } from '@/types/template';

interface TemplateCardProps {
  template: Template;
  onPreview: (template: Template) => void;
  onViewCode: (template: Template) => void;
}

export const TemplateCard = ({ template, onPreview, onViewCode }: TemplateCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    // Create a simple zip-like structure (in a real app, you'd use JSZip)
    const files = {
      'index.html': template.html,
      'style.css': template.css,
      'script.js': template.js
    };
    
    // For demo purposes, we'll just show an alert
    alert(`Downloading ${template.title}!\n\nIncludes:\n- index.html\n- style.css\n- script.js`);
    console.log('Template files:', files);
  };

  return (
    <Card 
      className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white dark:bg-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Template Preview Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
        <img
          src={template.image}
          alt={template.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Featured Badge */}
        {template.featured && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-primary text-primary-foreground">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          </div>
        )}

        {/* Hover Overlay */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center space-x-2 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onPreview(template)}
            className="bg-white/90 hover:bg-white text-gray-900"
          >
            <Eye className="w-4 h-4 mr-1" />
            Preview
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onViewCode(template)}
            className="bg-white/90 hover:bg-white text-gray-900"
          >
            <Code className="w-4 h-4 mr-1" />
            Code
          </Button>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
              {template.title}
            </h3>
            <Badge variant="outline" className="text-xs">
              {template.category}
            </Badge>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {template.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {template.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {template.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{template.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center text-muted-foreground text-xs space-x-4 mb-4">
          <div className="flex items-center">
            <Users className="w-3 h-3 mr-1" />
            {template.downloads.toLocaleString()}
          </div>
          <div className="flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            {new Date(template.created).toLocaleDateString()}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <div className="flex space-x-2 w-full">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => onPreview(template)}
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={handleDownload}
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
