
import { useState, useMemo, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CategoryFilter } from '@/components/CategoryFilter';
import { TemplateGrid } from '@/components/TemplateGrid';
import { templates, categories } from '@/data/templates';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Listen for custom event to set category from Hero button
  useEffect(() => {
    const handler = (e: CustomEvent) => {
      setSelectedCategory(e.detail);
    };
    window.addEventListener('setCategory', handler as EventListener);
    return () => window.removeEventListener('setCategory', handler as EventListener);
  }, []);

  const filteredTemplates = useMemo(() => {
    let filtered = templates;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(template => 
        template.category.toLowerCase() === selectedCategory.toLowerCase() ||
        template.category.toLowerCase().replace(' ', '-') === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(template =>
        template.title.toLowerCase().includes(query) ||
        template.description.toLowerCase().includes(query) ||
        template.tags.some(tag => tag.toLowerCase().includes(query)) ||
        template.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setSearchQuery} searchQuery={searchQuery} />
      
      <main>
        <Hero />
        
        {/* Templates Section */}
        <section id="templates" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Professional Portfolio Templates
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover, customize, and download professional portfolio templates. Build your perfect portfolio in minutes, not hours.
              </p>
            </div>

            {/* Category Filter */}
            <div className="mb-12">
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>

            {/* Results Summary */}
            <div className="mb-8">
              <p className="text-center text-muted-foreground">
                Showing {filteredTemplates.length} of {templates.length} templates
                {searchQuery && (
                  <span> for "<span className="font-medium text-foreground">{searchQuery}</span>"</span>
                )}
                {selectedCategory !== 'all' && (
                  <span> in <span className="font-medium text-foreground">
                    {categories.find(c => c.id === selectedCategory)?.name}
                  </span></span>
                )}
              </p>
            </div>

            {/* Template Grid */}
            <TemplateGrid templates={filteredTemplates} />

            {/* Featured Templates Section */}
            {selectedCategory === 'all' && !searchQuery && (
              <div className="mt-20">
                <div className="text-center mb-12">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    Featured Templates
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Our most popular and highly-rated portfolio templates
                  </p>
                </div>
                <TemplateGrid templates={templates.filter(t => t.featured)} />
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Why Choose Strive Portfolio?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to create a stunning portfolio that stands out
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">Optimized templates that load quickly and perform excellently on all devices</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Mobile First</h3>
                <p className="text-muted-foreground">Every template is fully responsive and looks perfect on mobile, tablet, and desktop</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy to Customize</h3>
                <p className="text-muted-foreground">Clean, well-documented code that's easy to modify and make your own</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cold Email Formats Section */}
        <section id="cold-emails" className="py-16 bg-muted/40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Cold Email Formats for Job & Internship Applications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Use these proven cold email templates to reach out to recruiters, hiring managers, or professionals for job and internship opportunities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email Example 1 */}
              <div className="bg-background rounded-lg shadow p-6 border border-muted">
                <h3 className="font-semibold text-lg mb-2">Internship Inquiry</h3>
                <pre className="text-sm whitespace-pre-wrap bg-muted/20 rounded p-4 mb-2">
{`Subject: Internship Opportunity Inquiry

Hi [Recipient Name],

I hope this message finds you well. My name is [Your Name], and I am a [Your Year/Field] student at [Your University]. I am very interested in [Company/Field] and would love to learn about any internship opportunities at [Company Name].

I have experience with [Relevant Skills/Technologies] and am eager to contribute and learn from your team. Please let me know if there are any openings or if you could connect me with the right person.

Thank you for your time!
Best regards,
[Your Name]
[LinkedIn/GitHub/Portfolio Link]`}
                </pre>
              </div>
              {/* Email Example 2 */}
              <div className="bg-background rounded-lg shadow p-6 border border-muted">
                <h3 className="font-semibold text-lg mb-2">Job Application Cold Email</h3>
                <pre className="text-sm whitespace-pre-wrap bg-muted/20 rounded p-4 mb-2">
{`Subject: Application for [Job Title] - [Your Name]

Dear [Recipient Name],

I am writing to express my interest in the [Job Title] position at [Company Name]. With my background in [Your Field/Expertise] and hands-on experience in [Relevant Skills/Technologies], I believe I would be a great fit for your team.

I have attached my resume and portfolio for your review. I would appreciate the opportunity to discuss how I can contribute to [Company Name].

Thank you for considering my application.
Sincerely,
[Your Name]
[LinkedIn/GitHub/Portfolio Link]`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-success/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Build Your Portfolio?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have built their dream portfolios with our templates
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Browse Templates
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-8 lg:space-y-0">
            {/* Left side - Developer Section */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">Developer</h4>
                

                
                {/* Developer Information */}
                <div>
                  <p className="text-sm font-medium text-foreground mb-3">
                    Developed by Aditya Gupta
                  </p>
                  <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm">
                    <a 
                      href="https://www.youtube.com/@AlgoStrive" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <span>@AlgoStrive</span>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/adityagupta-swe/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Logo and Company Info */}
            <div className="text-center lg:text-right">
              <div className="flex items-center justify-center lg:justify-end space-x-2 mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-primary">Strive</span>
                  <span className="text-sm font-medium text-muted-foreground -mt-1">Portfolio</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                {/* Slogan removed */}
              </p>
              <p className="text-sm text-muted-foreground">
                © 2025 Strive Portfolio. Built with ❤️ for creators and professionals.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
