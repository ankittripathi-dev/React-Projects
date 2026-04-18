
export interface Template {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  featured: boolean;
  created: string;
  downloads: number;
  html: string;
  css: string;
  js: string;
}

export interface TemplateCategory {
  id: string;
  name: string;
  count: number;
}
