
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TemplateCategory } from '@/types/template';

interface CategoryFilterProps {
  categories: TemplateCategory[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category.id)}
          className={`transition-all duration-200 ${
            selectedCategory === category.id 
              ? 'bg-primary text-primary-foreground' 
              : 'hover:bg-muted hover:border-primary/50'
          }`}
        >
          {category.name}
          <Badge 
            variant="secondary" 
            className={`ml-2 ${
              selectedCategory === category.id 
                ? 'bg-primary-foreground/20 text-primary-foreground' 
                : 'bg-muted-foreground/20'
            }`}
          >
            {category.count}
          </Badge>
        </Button>
      ))}
    </div>
  );
};
