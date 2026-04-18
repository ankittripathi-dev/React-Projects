import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Video, Upload, Play, Square, Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const VideoSubtitles = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [subtitles, setSubtitles] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("video/")) {
      toast({
        title: "Invalid File",
        description: "Please upload a video file",
        variant: "destructive",
      });
      return;
    }

    const url = URL.createObjectURL(file);
    setVideoUrl(url);
    setSubtitles("");
  };

  const startGeneratingSubtitles = () => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      toast({
        title: "Not Supported",
        description: "Speech recognition is not supported in your browser",
        variant: "destructive",
      });
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    recognitionRef.current.onresult = (event: any) => {
      let interimTranscript = "";
      let finalTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + "\n";
        } else {
          interimTranscript += transcript;
        }
      }

      setSubtitles((prev) => prev + finalTranscript);
    };

    recognitionRef.current.onerror = (event: any) => {
      toast({
        title: "Error",
        description: `Speech recognition error: ${event.error}`,
        variant: "destructive",
      });
      setIsRecording(false);
    };

    recognitionRef.current.start();
    setIsRecording(true);
    toast({
      title: "Generating Subtitles",
      description: "Play your video to generate real-time subtitles",
    });
  };

  const stopGeneratingSubtitles = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
      toast({
        title: "Subtitles Ready",
        description: "Subtitle generation stopped",
      });
    }
  };

  const downloadSubtitles = () => {
    const blob = new Blob([subtitles], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "subtitles.txt";
    a.click();
    URL.revokeObjectURL(url);
    toast({
      title: "Downloaded",
      description: "Subtitles downloaded successfully",
    });
  };

  return (
    <Card className="p-6 bg-gradient-card border-primary/20 shadow-lg">
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-md">
            <Video className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">Real-Time Video Subtitles</h3>
            <p className="text-sm text-muted-foreground">Generate live subtitles for videos</p>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          onChange={handleFileUpload}
          className="hidden"
        />

        <Button
          onClick={() => fileInputRef.current?.click()}
          variant="outline"
          className="w-full border-primary/30 hover:border-primary transition-colors"
        >
          <Upload className="h-5 w-5 mr-2" />
          Upload Video
        </Button>

        {videoUrl && (
          <div className="relative rounded-lg overflow-hidden border border-primary/20">
            <video
              src={videoUrl}
              controls
              className="w-full h-auto max-h-[300px] bg-black"
            />
          </div>
        )}

        {videoUrl && (
          <div className="flex gap-2">
            {!isRecording ? (
              <Button
                onClick={startGeneratingSubtitles}
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-md flex-1"
              >
                <Play className="h-5 w-5 mr-2" />
                Start Subtitle Generation
              </Button>
            ) : (
              <Button
                onClick={stopGeneratingSubtitles}
                variant="destructive"
                className="flex-1 shadow-md"
              >
                <Square className="h-5 w-5 mr-2" />
                Stop Generation
              </Button>
            )}
          </div>
        )}

        {isRecording && (
          <div className="flex items-center justify-center gap-2 text-destructive animate-pulse">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <span className="text-sm font-medium">Generating subtitles...</span>
          </div>
        )}

        {subtitles && (
          <>
            <Textarea
              value={subtitles}
              readOnly
              placeholder="Subtitles will appear here..."
              className="min-h-[200px] border-primary/30 bg-muted font-mono text-sm"
            />
            <Button
              onClick={downloadSubtitles}
              variant="outline"
              className="w-full border-primary/30 hover:border-primary transition-colors"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Subtitles
            </Button>
          </>
        )}
      </div>
    </Card>
  );
};
