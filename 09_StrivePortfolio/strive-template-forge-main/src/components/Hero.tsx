
import { ArrowRight, Sparkles, Zap, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const scrollToTemplates = () => {
    document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' });
  };

  // New: Scroll and filter to Developer templates
  const showDeveloperTemplates = () => {
    document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' });
    // Dispatch a custom event to set the category filter to 'developer'
    window.dispatchEvent(new CustomEvent('setCategory', { detail: 'developer' }));
  };

  return (
    <section className="relative py-10 lg:py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-success/5" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-bounce-subtle">
            <Sparkles className="w-4 h-4 mr-2" />
            20+ Professional Templates Available
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="gradient-text">Professional</span>{' '}
            <span className="gradient-text">Portfolio</span>{' '}
            <span className="gradient-text">Templates</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover, customize, and download professional portfolio templates. 
            Build your perfect portfolio in minutes, not hours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg group"
              onClick={scrollToTemplates}
            >
              Browse Templates
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent relative"
              onClick={showDeveloperTemplates}
            >
              <Download className="mr-2 h-5 w-5" />
              Developer Portfolios
              <span className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-xs font-semibold px-2 py-0.5 rounded-full shadow">Popular</span>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Instant Preview</h3>
              <p className="text-muted-foreground text-center">
                See exactly how your portfolio will look before downloading
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Easy Customization</h3>
              <p className="text-muted-foreground text-center">
                Edit colors, fonts, and content with our built-in editor
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Cold Email Templates</h3>
              <p className="text-muted-foreground text-center">
                Access proven cold email formats for job and internship applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
