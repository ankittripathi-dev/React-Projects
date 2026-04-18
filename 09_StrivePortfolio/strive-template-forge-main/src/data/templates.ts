import { Template, TemplateCategory } from '@/types/template';

export const categories: TemplateCategory[] = [
  { id: 'all', name: 'All Templates', count: 24 },
  { id: 'creative', name: 'Creative', count: 6 },
  { id: 'minimal', name: 'Minimal', count: 5 },
  { id: 'business', name: 'Business', count: 4 },
  { id: 'developer', name: 'Developer', count: 3 },
  { id: 'designer', name: 'Designer', count: 2 }
];

export const templates: Template[] = [
  {
    id: '1',
    title: 'Creative Designer Pro',
    description: 'A vibrant and creative portfolio template perfect for designers, artists, and creative professionals.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Creative',
    tags: ['Creative', 'Colorful', 'Designer', 'Portfolio'],
    featured: true,
    created: '2024-01-15',
    downloads: 15420,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alex Rivera - Creative Designer</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:400,600,700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">Alex Rivera</div>
            <ul class="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Creative Designer & Visual Artist</h1>
            <p class="hero-subtitle">I create stunning visual experiences that captivate and inspire</p>
            <div class="hero-buttons">
                <a href="#portfolio" class="btn-primary">View My Work</a>
                <a href="#contact" class="btn-secondary">Get In Touch</a>
            </div>
        </div>
        <div class="hero-image">
            <div class="floating-shapes">
                <div class="shape shape-1"></div>
                <div class="shape shape-2"></div>
                <div class="shape shape-3"></div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <div class="section-header">
                <h2>About Me</h2>
                <p>Passionate about creating beautiful and functional designs</p>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <h3>Hello! I'm Alex Rivera</h3>
                    <p>A passionate creative designer with over 5 years of experience in graphic design, branding, and digital art. I specialize in creating visually stunning and user-friendly designs that help businesses stand out.</p>
                    <div class="skills-grid">
                        <div class="skill-item">
                            <h4>Graphic Design</h4>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 95%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <h4>UI/UX Design</h4>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 88%"></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <h4>Branding</h4>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 92%"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500" alt="Alex Rivera">
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
        <div class="container">
            <div class="section-header">
                <h2>My Services</h2>
                <p>What I can do for you</p>
            </div>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">🎨</div>
                    <h3>Graphic Design</h3>
                    <p>Custom graphics, logos, and visual identity design for your brand</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">💻</div>
                    <h3>Web Design</h3>
                    <p>Modern, responsive websites that engage and convert visitors</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">📱</div>
                    <h3>Mobile Design</h3>
                    <p>User-friendly mobile app interfaces and experiences</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🚀</div>
                    <h3>Branding</h3>
                    <p>Complete brand identity packages from concept to completion</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="portfolio">
        <div class="container">
            <div class="section-header">
                <h2>My Portfolio</h2>
                <p>Some of my recent work</p>
            </div>
            <div class="portfolio-filter">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="web">Web Design</button>
                <button class="filter-btn" data-filter="branding">Branding</button>
                <button class="filter-btn" data-filter="mobile">Mobile</button>
            </div>
            <div class="portfolio-grid">
                <div class="portfolio-item" data-category="web">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=300" alt="E-commerce Website">
                    <div class="portfolio-overlay">
                        <h4>E-commerce Platform</h4>
                        <p>Modern online store design</p>
                    </div>
                </div>
                <div class="portfolio-item" data-category="branding">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300" alt="Brand Identity">
                    <div class="portfolio-overlay">
                        <h4>Startup Branding</h4>
                        <p>Complete brand identity package</p>
                    </div>
                </div>
                <div class="portfolio-item" data-category="mobile">
                    <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400&h=300" alt="Mobile App">
                    <div class="portfolio-overlay">
                        <h4>Fitness App Design</h4>
                        <p>Mobile app UI/UX design</p>
                    </div>
                </div>
                <div class="portfolio-item" data-category="web">
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400&h=300" alt="Corporate Website">
                    <div class="portfolio-overlay">
                        <h4>Corporate Website</h4>
                        <p>Professional business site</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="section-header">
                <h2>Get In Touch</h2>
                <p>Let's work together on your next project</p>
            </div>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <h4>📧 Email</h4>
                        <p>alex@creativedesign.com</p>
                    </div>
                    <div class="contact-item">
                        <h4>📱 Phone</h4>
                        <p>+1 (555) 123-4567</p>
                    </div>
                    <div class="contact-item">
                        <h4>📍 Location</h4>
                        <p>New York, NY</p>
                    </div>
                </div>
                <form class="contact-form">
                    <input type="text" placeholder="Your Name" required>
                    <input type="email" placeholder="Your Email" required>
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit" class="btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Alex Rivera. All rights reserved.</p>
            <div class="social-links">
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
                <a href="#">Dribbble</a>
                <a href="#">Behance</a>
            </div>
        </div>
    </footer>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: #333;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 1rem 0;
    transition: all 0.3s ease;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-menu a:hover {
    color: #667eea;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: #333;
    margin: 3px 0;
    transition: 0.3s;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    position: relative;
    overflow: hidden;
}

.hero-content {
    flex: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    z-index: 2;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    animation: fadeInUp 1s ease;
}

.hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    animation: fadeInUp 1s ease 0.2s both;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    animation: fadeInUp 1s ease 0.4s both;
}

.btn-primary, .btn-secondary {
    padding: 12px 30px;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    display: inline-block;
}

.btn-primary {
    background: white;
    color: #667eea;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
}

.btn-secondary:hover {
    background: white;
    color: #667eea;
}

.floating-shapes {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    pointer-events: none;
}

.shape {
    position: absolute;
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
}

.shape-1 {
    width: 100px;
    height: 100px;
    background: rgba(255,255,255,0.1);
    top: 20%;
    right: 20%;
    animation-delay: 0s;
}

.shape-2 {
    width: 150px;
    height: 150px;
    background: rgba(255,255,255,0.05);
    top: 60%;
    right: 10%;
    animation-delay: 2s;
}

.shape-3 {
    width: 80px;
    height: 80px;
    background: rgba(255,255,255,0.1);
    top: 40%;
    right: 40%;
    animation-delay: 4s;
}

/* Section Headers */
.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.section-header h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.section-header p {
    font-size: 1.1rem;
    color: #666;
}

/* About Section */
.about {
    padding: 5rem 0;
    background: #f8f9fa;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.about-text h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
}

.about-text p {
    margin-bottom: 2rem;
    color: #666;
    line-height: 1.8;
}

.skills-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.skill-item h4 {
    margin-bottom: 0.5rem;
    color: #333;
}

.skill-bar {
    width: 100%;
    height: 8px;
    background: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
}

.skill-progress {
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 4px;
    transition: width 2s ease;
}

.about-image img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

/* Services Section */
.services {
    padding: 5rem 0;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.service-card {
    background: white;
    padding: 2rem;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.service-card:hover {
    transform: translateY(-10px);
}

.service-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.service-card h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #333;
}

.service-card p {
    color: #666;
    line-height: 1.6;
}

/* Portfolio Section */
.portfolio {
    padding: 5rem 0;
    background: #f8f9fa;
}

.portfolio-filter {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 10px 20px;
    border: none;
    background: white;
    color: #666;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.filter-btn.active,
.filter-btn:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.portfolio-item {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.portfolio-item:hover {
    transform: translateY(-5px);
}

.portfolio-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.portfolio-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    color: white;
    padding: 2rem;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}

.portfolio-item:hover .portfolio-overlay {
    transform: translateY(0);
}

.portfolio-overlay h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

/* Contact Section */
.contact {
    padding: 5rem 0;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.contact-item h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #333;
}

.contact-item p {
    color: #666;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-form input,
.contact-form textarea {
    padding: 1rem;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    font-family: inherit;
    transition: border-color 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: #667eea;
}

/* Footer */
.footer {
    background: #333;
    color: white;
    padding: 2rem 0;
    text-align: center;
}

.footer .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
}

.social-links a:hover {
    color: #667eea;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-menu {
        display: none;
    }
    
    .hamburger {
        display: flex;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .about-content,
    .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .services-grid,
    .portfolio-grid {
        grid-template-columns: 1fr;
    }
    
    .footer .container {
        flex-direction: column;
        gap: 1rem;
    }
}`,
    js: `// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Portfolio filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.style.width;
                skillBar.style.width = '0%';
                setTimeout(() => {
                    skillBar.style.width = width;
                }, 200);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
});`
  },
  {
    id: '2',
    title: 'Minimal Professional',
    description: 'Clean and minimalist design focusing on content and readability.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Minimal',
    tags: ['Minimal', 'Clean', 'Professional', 'Simple'],
    featured: true,
    created: '2024-01-12',
    downloads: 12890,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sarah Johnson - Product Designer</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:400,500,600,700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <nav class="nav">
            <div class="nav-brand">Sarah Johnson</div>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Hero -->
    <section class="hero">
        <div class="container">
            <h1 class="hero-title">Product Designer</h1>
            <p class="hero-description">I design digital products that are intuitive, accessible, and delightful to use.</p>
            <div class="hero-cta">
                <a href="#work" class="btn-primary">View Work</a>
                <a href="/resume.pdf" class="btn-secondary">Download Resume</a>
            </div>
        </div>
    </section>

    <!-- About -->
    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2>About</h2>
                    <p>I'm a product designer with 6+ years of experience creating user-centered digital experiences. I'm passionate about solving complex problems through simple, elegant design solutions.</p>
                    <p>Currently working at TechCorp, where I lead design for our mobile applications used by over 2 million users worldwide.</p>
                    
                    <h3>Skills</h3>
                    <div class="skills-list">
                        <span class="skill">User Research</span>
                        <span class="skill">Wireframing</span>
                        <span class="skill">Prototyping</span>
                        <span class="skill">Design Systems</span>
                        <span class="skill">Figma</span>
                        <span class="skill">Adobe Creative Suite</span>
                        <span class="skill">HTML/CSS</span>
                        <span class="skill">JavaScript</span>
                    </div>
                </div>
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1494790108755-2616b612b647?auto=format&fit=crop&q=80&w=400&h=500" alt="Sarah Johnson">
                </div>
            </div>
        </div>
    </section>

    <!-- Work -->
    <section id="work" class="work">
        <div class="container">
            <h2 class="section-title">Selected Work</h2>
            <div class="work-grid">
                <article class="work-item">
                    <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600&h=400" alt="Mobile Banking App">
                    <div class="work-content">
                        <h3>Mobile Banking App</h3>
                        <p>Redesigned the core user experience for a leading fintech company, resulting in 40% increase in user engagement.</p>
                        <div class="work-tags">
                            <span>Mobile Design</span>
                            <span>User Research</span>
                            <span>Prototyping</span>
                        </div>
                    </div>
                </article>
                
                <article class="work-item">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400" alt="E-commerce Platform">
                    <div class="work-content">
                        <h3>E-commerce Platform</h3>
                        <p>Complete redesign of checkout flow that increased conversion rates by 25% and reduced cart abandonment.</p>
                        <div class="work-tags">
                            <span>Web Design</span>
                            <span>UX Research</span>
                            <span>A/B Testing</span>
                        </div>
                    </div>
                </article>
                
                <article class="work-item">
                    <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=600&h=400" alt="Design System">
                    <div class="work-content">
                        <h3>Design System</h3>
                        <p>Built a comprehensive design system used across 15+ products, improving design consistency and development speed.</p>
                        <div class="work-tags">
                            <span>Design Systems</span>
                            <span>Component Library</span>
                            <span>Documentation</span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!-- Experience -->
    <section id="experience" class="experience">
        <div class="container">
            <h2 class="section-title">Experience</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">2022 - Present</div>
                    <div class="timeline-content">
                        <h3>Senior Product Designer</h3>
                        <h4>TechCorp</h4>
                        <p>Lead designer for mobile applications with 2M+ users. Responsible for user research, design strategy, and cross-functional collaboration.</p>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-date">2020 - 2022</div>
                    <div class="timeline-content">
                        <h3>Product Designer</h3>
                        <h4>StartupXYZ</h4>
                        <p>Designed end-to-end user experiences for B2B SaaS platform. Conducted user interviews and usability testing.</p>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-date">2018 - 2020</div>
                    <div class="timeline-content">
                        <h3>UI/UX Designer</h3>
                        <h4>Design Agency</h4>
                        <p>Worked on diverse client projects ranging from e-commerce to healthcare, developing strong foundation in design principles.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Let's Work Together</h2>
            <div class="contact-content">
                <p>I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just say hello.</p>
                <div class="contact-links">
                    <a href="mailto:sarah@example.com" class="contact-link">sarah@example.com</a>
                    <a href="https://linkedin.com/in/sarahjohnson" class="contact-link">LinkedIn</a>
                    <a href="https://dribbble.com/sarahjohnson" class="contact-link">Dribbble</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Sarah Johnson. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`,
    css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #333;
    background: #fff;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 24px;
}

/* Header */
.header {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    z-index: 100;
    border-bottom: 1px solid #eee;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
    max-width: 1000px;
    margin: 0 auto;
}

.nav-brand {
    font-weight: 600;
    font-size: 18px;
    color: #000;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 32px;
}

.nav-links a {
    text-decoration: none;
    color: #666;
    font-weight: 500;
    transition: color 0.2s ease;
}

.nav-links a:hover {
    color: #000;
}

/* Hero */
.hero {
    padding: 120px 0 80px;
    text-align: center;
}

.hero-title {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 24px;
    color: #000;
}

.hero-description {
    font-size: 20px;
    color: #666;
    margin-bottom: 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.hero-cta {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
    padding: 12px 24px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;
    display: inline-block;
}

.btn-primary {
    background: #000;
    color: #fff;
    border: 2px solid #000;
}

.btn-primary:hover {
    background: #333;
    border-color: #333;
}

.btn-secondary {
    background: transparent;
    color: #000;
    border: 2px solid #000;
}

.btn-secondary:hover {
    background: #000;
    color: #fff;
}

/* About */
.about {
    padding: 80px 0;
    background: #f9f9f9;
}

.about-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 80px;
    align-items: start;
}

.about-text h2 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 24px;
    color: #000;
}

.about-text h3 {
    font-size: 20px;
    font-weight: 600;
    margin: 40px 0 20px;
    color: #000;
}

.about-text p {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
    line-height: 1.7;
}

.skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.skill {
    background: #fff;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    color: #666;
    border: 1px solid #eee;
}

.about-image img {
    width: 100%;
    border-radius: 8px;
    max-width: 300px;
}

/* Work */
.work {
    padding: 80px 0;
}

.section-title {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 48px;
    color: #000;
    text-align: center;
}

.work-grid {
    display: grid;
    gap: 48px;
}

.work-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
}

.work-item:nth-child(even) {
    direction: rtl;
}

.work-item:nth-child(even) .work-content {
    direction: ltr;
}

.work-item img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.work-content h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #000;
}

.work-content p {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
    line-height: 1.7;
}

.work-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.work-tags span {
    background: #f0f0f0;
    padding: 4px 12px;
    border-radius: 16px;
    font-size: 12px;
    color: #666;
}

/* Experience */
.experience {
    padding: 80px 0;
    background: #f9f9f9;
}

.timeline {
    max-width: 800px;
    margin: 0 auto;
}

.timeline-item {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 40px;
    margin-bottom: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid #eee;
}

.timeline-item:last-child {
    border-bottom: none;
}

.timeline-date {
    font-weight: 500;
    color: #666;
    font-size: 14px;
}

.timeline-content h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 4px;
    color: #000;
}

.timeline-content h4 {
    font-size: 16px;
    font-weight: 500;
    color: #666;
    margin-bottom: 12px;
}

.timeline-content p {
    font-size: 16px;
    color: #666;
    line-height: 1.7;
}

/* Contact */
.contact {
    padding: 80px 0;
    text-align: center;
}

.contact-content {
    max-width: 600px;
    margin: 0 auto;
}

.contact-content p {
    font-size: 18px;
    color: #666;
    margin-bottom: 40px;
    line-height: 1.7;
}

.contact-links {
    display: flex;
    justify-content: center;
    gap: 32px;
    flex-wrap: wrap;
}

.contact-link {
    color: #000;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    transition: color 0.2s ease;
}

.contact-link:hover {
    color: #666;
}

/* Footer */
.footer {
    padding: 40px 0;
    border-top: 1px solid #eee;
    text-align: center;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-content p {
    color: #666;
    font-family: var(--font-mono);
    font-size: 12px;
}

.footer-links {
    display: flex;
    gap: 30px;
}

.footer-links a {
    color: #666;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: #000;
}

/* Responsive */
@media (max-width: 768px) {
    .hero-title {
        font-size: 36px;
    }
    
    .hero-description {
        font-size: 18px;
    }
    
    .about-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .work-item {
        grid-template-columns: 1fr;
        gap: 24px;
    }
    
    .work-item:nth-child(even) {
        direction: ltr;
    }
    
    .timeline-item {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    
    .nav-links {
        display: none;
    }
    
    .contact-links {
        flex-direction: column;
        gap: 16px;
    }
}`,
    js: `document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe work items and timeline items
    const animatedElements = document.querySelectorAll('.work-item, .timeline-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});`
  },
  {
    id: '3',
    title: 'Developer Theme',
    description: 'Modern theme perfect for developers and tech professionals.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=600',
    category: 'Developer',
    tags: ['Developer', 'Modern', 'Tech'],
    featured: true,
    created: '2024-01-10',
    downloads: 18950,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marcus Chen - Full Stack Developer</title>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:400,500,700&family=Inter:400,500,600,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Terminal Header -->
    <div class="terminal-bar">
        <div class="terminal-buttons">
            <span class="btn red"></span>
            <span class="btn yellow"></span>
            <span class="btn green"></span>
        </div>
        <div class="terminal-title">marcus@developer:~$</div>
    </div>

    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <span class="bracket">{</span>
                <span>MC</span>
                <span class="bracket">}</span>
            </div>
            <ul class="nav-menu">
                <li><a href="#home"><span class="nav-dot">•</span>home</a></li>
                <li><a href="#about"><span class="nav-dot">•</span>about</a></li>
                <li><a href="#skills"><span class="nav-dot">•</span>skills</a></li>
                <li><a href="#projects"><span class="nav-dot">•</span>projects</a></li>
                <li><a href="#contact"><span class="nav-dot">•</span>contact</a></li>
            </ul>
            <div class="theme-toggle">
                <i class="fas fa-terminal"></i>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <div class="typing-animation">
                <span class="prompt">$</span>
                <span class="command" id="typed-text"></span>
                <span class="cursor">|</span>
            </div>
            <h1 class="hero-title">Marcus Chen</h1>
            <h2 class="hero-subtitle">Full Stack Developer</h2>
            <p class="hero-description">
                Crafting robust web applications with modern technologies. 
                Passionate about clean code, scalable architecture, and innovative solutions.
            </p>
            <div class="hero-buttons">
                <a href="#projects" class="btn-primary">
                    <i class="fas fa-code"></i>
                    View Projects
                </a>
                <a href="/resume.pdf" class="btn-secondary">
                    <i class="fas fa-download"></i>
                    Download Resume
                </a>
            </div>
            <div class="social-links">
                <a href="https://github.com/marcuschen" class="social-link">
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/marcuschen" class="social-link">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/marcuschen" class="social-link">
                    <i class="fab fa-twitter"></i>
                </a>
            </div>
        </div>
        <div class="code-animation">
            <pre class="code-block">
<span class="comment">// Building the future, one line at a time</span>
<span class="keyword">const</span> <span class="variable">developer</span> = {
  <span class="property">name</span>: <span class="string">'Marcus Chen'</span>,
  <span class="property">skills</span>: [<span class="string">'React'</span>, <span class="string">'Node.js'</span>, <span class="string">'Python'</span>],
  <span class="property">passion</span>: <span class="string">'Innovation'</span>,
  <span class="property">code</span>: () => <span class="string">'Clean & Scalable'</span>
};
            </pre>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <div class="section-header">
                <h2><span class="section-number">01.</span> About Me</h2>
                <div class="section-line"></div>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <p>Hello! I'm Marcus, a passionate full-stack developer based in San Francisco. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.</p>
                    
                    <p>My interest in web development started back in 2018 when I decided to build a simple website for my local gaming community. Fast-forward to today, and I've had the privilege of working at a start-up, a huge corporation, and everything in between.</p>
                    
                    <p>Here are a few technologies I've been working with recently:</p>
                    
                    <div class="tech-list">
                        <div class="tech-column">
                            <div class="tech-item">
                                <i class="fas fa-chevron-right"></i>
                                JavaScript (ES6+)
                            </div>
                            <div class="tech-item">
                                <i class="fas fa-chevron-right"></i>
                                React.js
                            </div>
                            <div class="tech-item">
                                <i class="fas fa-chevron-right"></i>
                                Node.js
                            </div>
                        </div>
                        <div class="tech-column">
                            <div class="tech-item">
                                <i class="fas fa-chevron-right"></i>
                                Python
                            </div>
                            <div class="tech-item">
                                <i class="fas fa-chevron-right"></i>
                                PostgreSQL
                            </div>
                            <div class="tech-item">
                                <i class="fas fa-chevron-right"></i>
                                AWS
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-image">
                    <div class="image-border">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500" alt="Marcus Chen">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills">
        <div class="container">
            <div class="section-header">
                <h2><span class="section-number">02.</span> Skills & Experience</h2>
                <div class="section-line"></div>
            </div>
            <div class="skills-content">
                <div class="experience-timeline">
                    <h3>Experience</h3>
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-date">2023 - Present</div>
                            <div class="timeline-content">
                                <h4>Senior Full Stack Developer</h4>
                                <h5>TechFlow Inc.</h5>
                                <p>Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and architecting cloud solutions.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-date">2021 - 2023</div>
                            <div class="timeline-content">
                                <h4>Full Stack Developer</h4>
                                <h5>StartupXYZ</h5>
                                <p>Developed and maintained multiple client applications. Implemented CI/CD pipelines and improved application performance by 40%.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-date">2019 - 2021</div>
                            <div class="timeline-content">
                                <h4>Frontend Developer</h4>
                                <h5>WebCorp</h5>
                                <p>Built responsive web applications using React and Vue.js. Collaborated with UX/UI designers to implement pixel-perfect designs.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="skills-grid">
                    <h3>Technical Skills</h3>
                    <div class="skill-category">
                        <h4>Frontend</h4>
                        <div class="skill-items">
                            <span>React.js</span>
                            <span>Vue.js</span>
                            <span>TypeScript</span>
                            <span>Next.js</span>
                            <span>Tailwind CSS</span>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h4>Backend</h4>
                        <div class="skill-items">
                            <span>Node.js</span>
                            <span>Python</span>
                            <span>Express.js</span>
                            <span>Django</span>
                            <span>GraphQL</span>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h4>Database & Cloud</h4>
                        <div class="skill-items">
                            <span>PostgreSQL</span>
                            <span>MongoDB</span>
                            <span>AWS</span>
                            <span>Docker</span>
                            <span>Kubernetes</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
        <div class="container">
            <div class="section-header">
                <h2><span class="section-number">03.</span> Featured Projects</h2>
                <div class="section-line"></div>
            </div>
            <div class="projects-grid">
                <div class="project-card featured">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400" alt="E-commerce Platform">
                        <div class="project-overlay">
                            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                            <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                    <div class="project-content">
                        <div class="project-header">
                            <h3>E-commerce Platform</h3>
                            <div class="project-links">
                                <a href="#"><i class="fab fa-github"></i></a>
                                <a href="#"><i class="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                        <p>Full-stack e-commerce solution with React frontend, Node.js backend, and Stripe integration. Features include user authentication, product management, and order processing.</p>
                        <div class="project-tech">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>MongoDB</span>
                            <span>Stripe</span>
                            <span>AWS</span>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=600&h=400" alt="Task Management App">
                        <div class="project-overlay">
                            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                            <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                    <div class="project-content">
                        <div class="project-header">
                            <h3>Task Management App</h3>
                            <div class="project-links">
                                <a href="#"><i class="fab fa-github"></i></a>
                                <a href="#"><i class="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                        <p>Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.</p>
                        <div class="project-tech">
                            <span>Vue.js</span>
                            <span>Express</span>
                            <span>Socket.io</span>
                            <span>PostgreSQL</span>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400" alt="Data Visualization Dashboard">
                        <div class="project-overlay">
                            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                            <a href="#" class="project-link"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                    <div class="project-content">
                        <div class="project-header">
                            <h3>Analytics Dashboard</h3>
                            <div class="project-links">
                                <a href="#"><i class="fab fa-github"></i></a>
                                <a href="#"><i class="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                        <p>Interactive data visualization dashboard for business analytics with real-time charts, filters, and export functionality.</p>
                        <div class="project-tech">
                            <span>React</span>
                            <span>D3.js</span>
                            <span>Python</span>
                            <span>Flask</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="section-header">
                <h2><span class="section-number">04.</span> Get In Touch</h2>
                <div class="section-line"></div>
            </div>
            <div class="contact-content">
                <div class="contact-text">
                    <p>I'm always interested in new opportunities and interesting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                </div>
                <div class="contact-form-container">
                    <form class="contact-form">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn-primary">
                            <i class="fas fa-paper-plane"></i>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <p>&copy; 2024 Marcus Chen. Built with passion and lots of coffee.</p>
                <div class="footer-links">
                    <a href="https://github.com/marcuschen">GitHub</a>
                    <a href="https://linkedin.com/in/marcuschen">LinkedIn</a>
                    <a href="mailto:marcus@example.com">Email</a>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>`,
    css: `:root {
    --bg-primary: #0a0a0a;
    --bg-secondary: #111111;
    --bg-tertiary: #1a1a1a;
    --text-primary: #e0e0e0;
    --text-secondary: #a0a0a0;
    --text-tertiary: #707070;
    --accent-primary: #00d9ff;
    --accent-secondary: #ff6b6b;
    --accent-green: #4ade80;
    --border-color: #333333;
    --shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    --font-mono: 'JetBrains Mono', monospace;
    --font-sans: 'Inter', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-sans);
    background: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Terminal Bar */
.terminal-bar {
    background: var(--bg-secondary);
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border-bottom: 1px solid var(--border-color);
}

.terminal-buttons {
    display: flex;
    gap: 8px;
}

.btn {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.btn.red { background: #ff5f57; }
.btn.yellow { background: #ffbd2e; }
.btn.green { background: #28ca42; }

.terminal-title {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--text-secondary);
}

/* Navigation */
.navbar {
    position: fixed;
    top: 40px;
    width: 100%;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    border-bottom: 1px solid var(--border-color);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
}

.nav-logo {
    font-family: var(--font-mono);
    font-size: 20px;
    font-weight: 700;
    color: var(--accent-primary);
}

.bracket {
    color: var(--accent-secondary);
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 40px;
}

.nav-menu a {
    color: var(--text-secondary);
    text-decoration: none;
    font-family: var(--font-mono);
    font-size: 14px;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
}

.nav-menu a:hover {
    color: var(--accent-primary);
}

.nav-dot {
    color: var(--accent-secondary);
    font-size: 18px;
}

.theme-toggle {
    color: var(--accent-primary);
    font-size: 18px;
    cursor: pointer;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 60px;
    padding: 120px 0 40px;
    margin: 0 auto;
    max-width: 1200px;
    padding-left: 20px;
    padding-right: 20px;
}

.typing-animation {
    font-family: var(--font-mono);
    font-size: 16px;
    margin-bottom: 20px;
    color: var(--accent-primary);
}

.prompt {
    color: var(--accent-secondary);
}

.command {
    color: var(--accent-green);
}

.cursor {
    animation: blink 1s infinite;
    color: var(--text-primary);
}

.hero-title {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 10px;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 1.5rem;
    color: var(--text-secondary);
    margin-bottom: 20px;
    font-family: var(--font-mono);
}

.hero-description {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 40px;
    line-height: 1.8;
}

.hero-buttons {
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
}

.btn-primary, .btn-secondary {
    padding: 12px 24px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-mono);
    font-size: 14px;
}

.btn-primary {
    background: var(--accent-primary);
    color: var(--bg-primary);
    border: 2px solid var(--accent-primary);
}

.btn-primary:hover {
    background: transparent;
    color: var(--accent-primary);
    box-shadow: 0 0 20px rgba(0, 217, 255, 0.3);
}

.btn-secondary {
    background: transparent;
    color: var(--text-primary);
    border: 2px solid var(--border-color);
}

.btn-secondary:hover {
    border-color: var(--accent-primary);
    color: var(--accent-primary);
}

.social-links {
    display: flex;
    gap: 20px;
}

.social-link {
    color: var(--text-secondary);
    font-size: 20px;
    transition: all 0.3s ease;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border-color);
    border-radius: 6px;
}

.social-link:hover {
    color: var(--accent-primary);
    border-color: var(--accent-primary);
    box-shadow: 0 0 15px rgba(0, 217, 255, 0.2);
}

.code-animation {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 30px;
    font-family: var(--font-mono);
    font-size: 14px;
    line-height: 1.8;
    position: relative;
    overflow: hidden;
}

.code-animation::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.1), transparent);
    animation: scan 3s infinite;
}

.code-block {
    position: relative;
    z-index: 2;
}

.comment { color: #6a9955; }
.keyword { color: #569cd6; }
.variable { color: #9cdcfe; }
.property { color: #92c5f7; }
.string { color: #ce9178; }

/* Section Styles */
.section-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 60px;
}

.section-header h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-primary);
    font-family: var(--font-mono);
}

.section-number {
    color: var(--accent-primary);
    font-size: 1.2rem;
}

.section-line {
    flex: 1;
    height: 1px;
    background: var(--border-color);
}

/* About Section */
.about {
    padding: 100px 0;
    background: var(--bg-secondary);
}

.about-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 80px;
    align-items: start;
}

.about-text p {
    margin-bottom: 20px;
    color: var(--text-secondary);
    line-height: 1.8;
}

.tech-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 30px;
}

.tech-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-mono);
    font-size: 14px;
    color: var(--text-secondary);
}

.tech-item i {
    color: var(--accent-primary);
    font-size: 12px;
}

.about-image {
    position: relative;
}

.image-border {
    position: relative;
    border: 2px solid var(--accent-primary);
    border-radius: 8px;
    overflow: hidden;
}

.image-border::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    border: 2px solid var(--accent-secondary);
    border-radius: 8px;
    z-index: -1;
}

.about-image img {
    width: 100%;
    display: block;
    filter: grayscale(100%);
    transition: filter 0.3s ease;
}

.about-image:hover img {
    filter: grayscale(0%);
}

/* Skills Section */
.skills {
    padding: 100px 0;
}

.skills-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
}

.experience-timeline h3,
.skills-grid h3 {
    font-size: 1.5rem;
    margin-bottom: 40px;
    color: var(--accent-primary);
    font-family: var(--font-mono);
}

.timeline {
    position: relative;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--accent-primary);
}

.timeline-item {
    position: relative;
    padding-left: 60px;
    margin-bottom: 40px;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: 14px;
    top: 8px;
    width: 12px;
    height: 12px;
    background: var(--accent-primary);
    border-radius: 50%;
    box-shadow: 0 0 0 4px var(--bg-primary);
}

.timeline-date {
    font-family: var(--font-mono);
    font-size: 12px;
    color: var(--accent-secondary);
    margin-bottom: 8px;
}

.timeline-content h4 {
    font-size: 1.1rem;
    color: var(--text-primary);
    margin-bottom: 4px;
}

.timeline-content h5 {
    color: var(--accent-primary);
    margin-bottom: 12px;
    font-family: var(--font-mono);
    font-size: 14px;
}

.timeline-content p {
    color: var(--text-secondary);
    line-height: 1.6;
}

.skill-category {
    margin-bottom: 30px;
}

.skill-category h4 {
    color: var(--text-primary);
    margin-bottom: 15px;
    font-size: 1.1rem;
}

.skill-items {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.skill-items span {
    background: var(--bg-secondary);
    color: var(--text-secondary);
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 12px;
    font-family: var(--font-mono);
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
}

.skill-items span:hover {
    color: var(--accent-primary);
    border-color: var(--accent-primary);
}

/* Projects Section */
.projects {
    padding: 100px 0;
    background: var(--bg-secondary);
}

.projects-grid {
    display: grid;
    gap: 40px;
}

.project-card {
    background: var(--bg-tertiary);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
}

.project-card.featured {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
}

.project-image {
    position: relative;
    overflow: hidden;
}

.project-image img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
    transform: scale(1.05);
}

.project-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.project-image:hover .project-overlay {
    opacity: 1;
}

.project-link {
    color: var(--text-primary);
    font-size: 20px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-secondary);
    border-radius: 50%;
    transition: all 0.3s ease;
}

.project-link:hover {
    color: var(--accent-primary);
    transform: scale(1.1);
}

.project-content {
    padding: 30px;
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.project-header h3 {
    font-size: 1.3rem;
    color: var(--text-primary);
}

.project-links {
    display: flex;
    gap: 15px;
}

.project-links a {
    color: var(--text-secondary);
    font-size: 18px;
    transition: color 0.3s ease;
}

.project-links a:hover {
    color: var(--accent-primary);
}

.project-content p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 20px;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.project-tech span {
    background: var(--bg-secondary);
    color: var(--text-secondary);
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 12px;
    font-family: var(--font-mono);
    border: 1px solid var(--border-color);
}

/* Contact Section */
.contact {
    padding: 100px 0;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
}

.contact-text p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.8;
}

.contact-form {
    background: var(--bg-secondary);
    padding: 40px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
}

.form-group {
    margin-bottom: 25px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    color: var(--text-primary);
    font-weight: 500;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 12px;
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 4px;
    color: var(--text-primary);
    font-family: inherit;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(0, 217, 255, 0.1);
}

/* Footer */
.footer {
    padding: 40px 0;
    border-top: 1px solid var(--border-color);
    background: var(--bg-secondary);
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-content p {
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 12px;
}

.footer-links {
    display: flex;
    gap: 30px;
}

.footer-links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: var(--accent-primary);
}

/* Animations */
@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

@keyframes scan {
    0% { left: -100%; }
    100% { left: 100%; }
}

/* Responsive Design */
@media (max-width: 768px) {
    .terminal-bar {
        padding: 0 10px;
    }
    
    .nav-container {
        padding: 0 10px;
    }
    
    .nav-menu {
        display: none;
    }
    
    .hero {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
        padding: 100px 20px 40px;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .about-content,
    .skills-content,
    .contact-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .project-card.featured {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }
    
    .section-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    
    .section-line {
        width: 50px;
    }
}`,
    js: `document.addEventListener('DOMContentLoaded', function() {
    // Typing animation
    const typedTextElement = document.getElementById('typed-text');
    const commands = [
        'whoami',
        'Marcus Chen - Full Stack Developer', 
        'cat skills.txt',
        'React, Node.js, Python, AWS...',
        'ls projects/',
        'building amazing web applications...'
    ];
    
    let commandIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const currentCommand = commands[commandIndex];
        
        if (isDeleting) {
            typedTextElement.textContent = currentCommand.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextElement.textContent = currentCommand.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentCommand.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            commandIndex = (commandIndex + 1) % commands.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeWriter, typeSpeed);
    }
    
    typeWriter();

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
                link.style.color = 'var(--accent-primary)';
            } else {
                link.style.color = 'var(--text-secondary)';
            }
        });
    });

    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            const button = this.querySelector('button[type="submit"]');
            const originalText = button.innerHTML;
            
            button.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            button.style.background = 'var(--accent-green)';
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = 'var(--accent-primary)';
                this.reset();
            }, 3000);
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe project cards and timeline items
    const animatedElements = document.querySelectorAll('.project-card, .timeline-item, .skill-category');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add glitch effect to hero title on hover
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch 0.3s ease-in-out';
        });
        
        heroTitle.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    }

    // Matrix rain effect for code block
    const codeBlock = document.querySelector('.code-animation');
    if (codeBlock) {
        setInterval(() => {
            const randomChar = String.fromCharCode(0x30A0 + Math.random() * 96);
            const span = document.createElement('span');
            span.textContent = randomChar;
            span.style.position = 'absolute';
            span.style.top = '0';
            span.style.left = Math.random() * 100 + '%';
            span.style.color = 'var(--accent-primary)';
            span.style.opacity = '0.3';
            span.style.animation = 'fall 2s linear forwards';
            
            codeBlock.appendChild(span);
            
            setTimeout(() => {
                span.remove();
            }, 2000);
        }, 200);
    }
});

// Add CSS for glitch animation
const style = document.createElement('style');
style.textContent = \`
@keyframes fall {
    to {
        transform: translateY(300px);
        opacity: 0;
    }
}

@keyframes glitch {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
}

.nav-menu a.active {
    color: var(--accent-primary) !important;
}
\`;
document.head.appendChild(style);`
  }
];
