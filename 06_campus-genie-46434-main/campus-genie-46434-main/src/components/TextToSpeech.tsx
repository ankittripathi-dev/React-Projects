import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Volume2, Square, Pause, Play } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState<string>("");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const { toast } = useToast();

  // Load voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0 && !selectedVoice) {
        setSelectedVoice(availableVoices[0].name);
      }
    };

    // Initial attempt
    loadVoices();

    // Some browsers populate voices asynchronously
    window.speechSynthesis.onvoiceschanged = loadVoices;

    // Fallback: try again shortly if list was empty on mount
    const fallbackTimer = setTimeout(() => {
      if (voices.length === 0) {
        loadVoices();
      }
    }, 300);

    return () => {
      window.speechSynthesis.onvoiceschanged = null as any;
      clearTimeout(fallbackTimer);
    };
  }, [selectedVoice, voices.length]);

  const speak = () => {
    if (!text.trim()) {
      toast({
        title: "No Text",
        description: "Please enter some text to convert to speech",
        variant: "destructive",
      });
      return;
    }

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = voices.find((v) => v.name === selectedVoice);
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onstart = () => {
      setIsSpeaking(true);
      toast({
        title: "Speaking",
        description: "Text-to-speech started",
      });
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utterance.onerror = (event) => {
      setIsSpeaking(false);
      setIsPaused(false);
      toast({
        title: "Error",
        description: `Speech synthesis error: ${event.error}`,
        variant: "destructive",
      });
    };

    window.speechSynthesis.speak(utterance);
  };

  const pause = () => {
    window.speechSynthesis.pause();
    setIsPaused(true);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  return (
    <Card className="p-6 bg-gradient-card border-primary/20 shadow-lg">
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center shadow-md">
            <Volume2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">Text to Speech</h3>
            <p className="text-sm text-muted-foreground">Convert written text to speech</p>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Select Voice
          </label>
          <Select value={selectedVoice} onValueChange={setSelectedVoice}>
            <SelectTrigger className="border-primary/30 focus:border-primary transition-colors">
              <SelectValue placeholder="Select a voice" />
            </SelectTrigger>
            <SelectContent>
              {voices.map((voice) => (
                <SelectItem key={voice.name} value={voice.name}>
                  {voice.name} ({voice.lang})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to convert to speech..."
          className="min-h-[200px] border-primary/30 focus:border-primary transition-colors"
        />

        <div className="flex gap-2">
          {!isSpeaking && !isPaused && (
            <Button
              onClick={speak}
              className="bg-gradient-secondary hover:opacity-90 transition-opacity shadow-md flex-1"
            >
              <Play className="h-5 w-5 mr-2" />
              Speak
            </Button>
          )}

          {isSpeaking && !isPaused && (
            <Button
              onClick={pause}
              variant="secondary"
              className="flex-1 shadow-md"
            >
              <Pause className="h-5 w-5 mr-2" />
              Pause
            </Button>
          )}

          {isPaused && (
            <Button
              onClick={speak}
              className="bg-gradient-secondary hover:opacity-90 transition-opacity shadow-md flex-1"
            >
              <Play className="h-5 w-5 mr-2" />
              Resume
            </Button>
          )}

          {(isSpeaking || isPaused) && (
            <Button
              onClick={stop}
              variant="destructive"
              className="flex-1 shadow-md"
            >
              <Square className="h-5 w-5 mr-2" />
              Stop
            </Button>
          )}
        </div>

        {isSpeaking && !isPaused && (
          <div className="flex items-center justify-center gap-2 text-secondary animate-pulse">
            <Volume2 className="w-4 h-4" />
            <span className="text-sm font-medium">Speaking...</span>
          </div>
        )}
      </div>
    </Card>
  );
};
