import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Image as ImageIcon, Upload, Loader2, Volume2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const ImageDescriber = () => {
  const [image, setImage] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid File",
        description: "Please upload an image file",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
      setDescription("");
    };
    reader.readAsDataURL(file);
  };

  const generateDescription = async () => {
    if (!image) {
      toast({
        title: "No Image",
        description: "Please upload an image first",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("describe-image", {
        body: { image },
      });

      if (error) throw error;

      setDescription(data.description);
      toast({
        title: "Description Generated",
        description: "Image description created successfully",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to generate image description",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const speakDescription = () => {
    if (!description) {
      toast({
        title: "No Description",
        description: "Generate a description first",
        variant: "destructive",
      });
      return;
    }

    const utterance = new SpeechSynthesisUtterance(description);
    window.speechSynthesis.speak(utterance);
    toast({
      title: "Speaking",
      description: "Reading image description aloud",
    });
  };

  return (
    <Card className="p-6 bg-gradient-card border-primary/20 shadow-lg">
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center shadow-md">
            <ImageIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">Image to Audio Description</h3>
            <p className="text-sm text-muted-foreground">AI-powered descriptions for visually impaired</p>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />

        <Button
          onClick={() => fileInputRef.current?.click()}
          variant="outline"
          className="w-full border-primary/30 hover:border-primary transition-colors"
        >
          <Upload className="h-5 w-5 mr-2" />
          Upload Image
        </Button>

        {image && (
          <div className="relative rounded-lg overflow-hidden border border-primary/20">
            <img src={image} alt="Uploaded" className="w-full h-auto max-h-[300px] object-contain" />
          </div>
        )}

        {image && !description && (
          <Button
            onClick={generateDescription}
            disabled={isLoading}
            className="w-full bg-gradient-accent hover:opacity-90 transition-opacity shadow-md"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Analyzing Image...
              </>
            ) : (
              <>
                <ImageIcon className="h-5 w-5 mr-2" />
                Generate Description
              </>
            )}
          </Button>
        )}

        {description && (
          <>
            <Textarea
              value={description}
              readOnly
              className="min-h-[150px] border-primary/30 bg-muted"
            />
            <Button
              onClick={speakDescription}
              className="w-full bg-gradient-secondary hover:opacity-90 transition-opacity shadow-md"
            >
              <Volume2 className="h-5 w-5 mr-2" />
              Read Description Aloud
            </Button>
          </>
        )}
      </div>
    </Card>
  );
};
