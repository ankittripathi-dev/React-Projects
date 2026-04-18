import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Square, Copy, Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const SpeechToText = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<any>(null);
  const { toast } = useToast();

  const startRecording = () => {
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
          finalTranscript += transcript + " ";
        } else {
          interimTranscript += transcript;
        }
      }

      setTranscript((prev) => prev + finalTranscript);
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
      title: "Recording Started",
      description: "Speak now...",
    });
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
      toast({
        title: "Recording Stopped",
        description: "Transcript ready",
      });
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(transcript);
    toast({
      title: "Copied",
      description: "Transcript copied to clipboard",
    });
  };

  const downloadTranscript = () => {
    const blob = new Blob([transcript], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transcript.txt";
    a.click();
    URL.revokeObjectURL(url);
    toast({
      title: "Downloaded",
      description: "Transcript downloaded successfully",
    });
  };

  return (
    <Card className="p-6 bg-gradient-card border-primary/20 shadow-lg">
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-md">
            <Mic className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">Speech to Text</h3>
            <p className="text-sm text-muted-foreground">Convert your speech to written text</p>
          </div>
        </div>

        <div className="flex gap-2">
          {!isRecording ? (
            <Button
              onClick={startRecording}
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-md flex-1"
            >
              <Mic className="h-5 w-5 mr-2" />
              Start Recording
            </Button>
          ) : (
            <Button
              onClick={stopRecording}
              variant="destructive"
              className="flex-1 shadow-md"
            >
              <Square className="h-5 w-5 mr-2" />
              Stop Recording
            </Button>
          )}
        </div>

        {isRecording && (
          <div className="flex items-center justify-center gap-2 text-destructive animate-pulse">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <span className="text-sm font-medium">Recording in progress...</span>
          </div>
        )}

        <Textarea
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          placeholder="Your transcript will appear here..."
          className="min-h-[200px] border-primary/30 focus:border-primary transition-colors"
        />

        {transcript && (
          <div className="flex gap-2">
            <Button
              onClick={copyToClipboard}
              variant="outline"
              className="flex-1 border-primary/30 hover:border-primary transition-colors"
            >
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
            <Button
              onClick={downloadTranscript}
              variant="outline"
              className="flex-1 border-primary/30 hover:border-primary transition-colors"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};
