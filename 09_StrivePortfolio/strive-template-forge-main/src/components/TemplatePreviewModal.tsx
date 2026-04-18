
import { useState } from 'react';
import { X, Code, Download, ExternalLink, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Template } from '@/types/template';

interface TemplatePreviewModalProps {
  template: Template | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TemplatePreviewModal = ({ template, isOpen, onClose }: TemplatePreviewModalProps) => {
  const [activeTab, setActiveTab] = useState('preview');

  if (!template) return null;

  const handleDownload = () => {
    const files = {
      'index.html': template.html,
      'style.css': template.css,
      'script.js': template.js
    };
    
    alert(`Downloading ${template.title}!\n\nIncludes:\n- index.html\n- style.css\n- script.js`);
    console.log('Template files:', files);
  };

  const createPreviewHTML = () => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${template.title}</title>
        <style>${template.css}</style>
      </head>
      <body>
        ${template.html.replace(/<!DOCTYPE html>[\s\S]*?<body[^>]*>/, '').replace(/<\/body>[\s\S]*?<\/html>/, '')}
        <script>${template.js}</script>
      </body>
      </html>
    `;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 py-4 border-b flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <DialogTitle className="text-xl font-semibold">
                {template.title}
              </DialogTitle>
              <Badge variant="outline">{template.category}</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={handleDownload}>
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
            <div className="px-6 py-2 border-b">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="preview" className="flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Preview
                </TabsTrigger>
                <TabsTrigger value="html" className="flex items-center">
                  <Code className="w-4 h-4 mr-2" />
                  HTML
                </TabsTrigger>
                <TabsTrigger value="css" className="flex items-center">
                  <Code className="w-4 h-4 mr-2" />
                  CSS
                </TabsTrigger>
                <TabsTrigger value="js" className="flex items-center">
                  <Code className="w-4 h-4 mr-2" />
                  JavaScript
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="flex-1 overflow-hidden">
              <TabsContent value="preview" className="h-full m-0 p-4">
                <div className="w-full h-full border rounded-lg overflow-hidden bg-white">
                  <iframe
                    srcDoc={createPreviewHTML()}
                    className="w-full h-full border-0"
                    title={`Preview of ${template.title}`}
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              </TabsContent>

              <TabsContent value="html" className="h-full m-0 p-4">
                <div className="w-full h-full border rounded-lg overflow-hidden">
                  <pre className="p-4 text-sm overflow-auto h-full bg-gray-50 dark:bg-gray-900">
                    <code className="language-html">{template.html}</code>
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="css" className="h-full m-0 p-4">
                <div className="w-full h-full border rounded-lg overflow-hidden">
                  <pre className="p-4 text-sm overflow-auto h-full bg-gray-50 dark:bg-gray-900">
                    <code className="language-css">{template.css}</code>
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="js" className="h-full m-0 p-4">
                <div className="w-full h-full border rounded-lg overflow-hidden">
                  <pre className="p-4 text-sm overflow-auto h-full bg-gray-50 dark:bg-gray-900">
                    <code className="language-javascript">{template.js}</code>
                  </pre>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};
