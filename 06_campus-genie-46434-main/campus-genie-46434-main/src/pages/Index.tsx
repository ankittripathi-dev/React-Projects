import { SpeechToText } from "@/components/SpeechToText";
import { TextToSpeech } from "@/components/TextToSpeech";
import { ImageDescriber } from "@/components/ImageDescriber";
import { VideoSubtitles } from "@/components/VideoSubtitles";
import { Mic, Volume2, Image, Video } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-accent">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-hero py-20 px-6">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          {/* Removed logo and icon */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Accessibility Suite
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            Empowering everyone with accessibility tools for speech, vision, and communication
          </p>
        </div>
      </div>

      {/* Features Overview */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-card p-6 rounded-lg border border-primary/20 shadow-md hover:shadow-glow transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
              <Mic className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Speech to Text</h3>
            <p className="text-sm text-muted-foreground">Convert spoken words into written text instantly</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-primary/20 shadow-md hover:shadow-glow transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center mb-4">
              <Volume2 className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Text to Speech</h3>
            <p className="text-sm text-muted-foreground">Transform written content into natural speech</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-primary/20 shadow-md hover:shadow-glow transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
              <Image className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Image Descriptions</h3>
            <p className="text-sm text-muted-foreground">Audio descriptions for images</p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-primary/20 shadow-md hover:shadow-glow transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
              <Video className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Video Subtitles</h3>
            <p className="text-sm text-muted-foreground">Real-time subtitle generation for videos</p>
          </div>
        </div>

        {/* Main Tools */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="animate-fade-in">
              <SpeechToText />
            </div>
            <div className="animate-fade-in">
              <TextToSpeech />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="animate-fade-in">
              <ImageDescriber />
            </div>
            <div className="animate-fade-in">
              <VideoSubtitles />
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mt-16 text-center bg-gradient-card p-8 rounded-lg border border-primary/20 shadow-lg">
          {/* Removed icon */}
          <h2 className="text-2xl font-bold text-foreground mb-3">Built for Inclusivity</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our accessibility tools are designed to break down barriers and create equal access to information
            and communication for people with disabilities. Everyone deserves to be heard and included.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
