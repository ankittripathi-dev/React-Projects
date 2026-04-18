
import { useState } from 'react';
import { X, Copy, Download, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Template } from '@/types/template';

interface TemplateCodeModalProps {
  template: Template | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TemplateCodeModal = ({ template, isOpen, onClose }: TemplateCodeModalProps) => {
  const [activeTab, setActiveTab] = useState('html');
  const [copiedFile, setCopiedFile] = useState<string | null>(null);

  if (!template) return null;

  const copyToClipboard = async (content: string, fileName: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedFile(fileName);
      setTimeout(() => setCopiedFile(null), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  const handleDownload = () => {
    const files = {
      'index.html': template.html,
      'style.css': template.css,
      'script.js': template.js
    };
    
    alert(`Downloading ${template.title}!\n\nIncludes:\n- index.html\n- style.css\n- script.js`);
    console.log('Template files:', files);
  };

  const getFileContent = (fileType: string) => {
    switch (fileType) {
      case 'html':
        return template.html;
      case 'css':
        return template.css;
      case 'js':
        return template.js;
      default:
        return '';
    }
  };

  const getLanguageClass = (fileType: string) => {
    switch (fileType) {
      case 'html':
        return 'language-html';
      case 'css':
        return 'language-css';
      case 'js':
        return 'language-javascript';
      default:
        return '';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 py-4 border-b flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <DialogTitle className="text-xl font-semibold">
                {template.title} - Source Code
              </DialogTitle>
              <Badge variant="outline">{template.category}</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={handleDownload}>
                <Download className="w-4 h-4 mr-2" />
                Download All
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
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="html">index.html</TabsTrigger>
                <TabsTrigger value="css">style.css</TabsTrigger>
                <TabsTrigger value="js">script.js</TabsTrigger>
              </TabsList>
            </div>

            <div className="flex-1 overflow-hidden">
              {['html', 'css', 'js'].map((fileType) => (
                <TabsContent key={fileType} value={fileType} className="h-full m-0">
                  <div className="h-full flex flex-col">
                    {/* File Header */}
                    <div className="px-6 py-3 border-b bg-muted/30 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">
                          {fileType === 'html' ? 'index.html' : fileType === 'css' ? 'style.css' : 'script.js'}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {fileType.toUpperCase()}
                        </Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(getFileContent(fileType), fileType)}
                        className="text-xs"
                      >
                        {copiedFile === fileType ? (
                          <>
                            <Check className="w-3 h-3 mr-1" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 mr-1" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Code Content */}
                    <div className="flex-1 overflow-auto">
                      <pre className="p-6 text-sm bg-gray-50 dark:bg-gray-900 h-full overflow-auto">
                        <code className={getLanguageClass(fileType)}>
                          {getFileContent(fileType)}
                        </code>
                      </pre>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};
