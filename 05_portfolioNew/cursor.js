// Custom Cursor JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    
    // Move cursor with mouse
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, h1, h2, h3, .timeline-item h3, .experience-content h3, .skill-box, .project-card, .timeline-date, .college-name, .organization-badge, .experience-skills span, .detail-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.classList.remove('hover');
        });
    });
    
    // Add click effect
    document.addEventListener('mousedown', function() {
        cursor.classList.add('active');
    });
    
    document.addEventListener('mouseup', function() {
        cursor.classList.remove('active');
    });
    
    // Hide cursor when it leaves the window
    document.addEventListener('mouseleave', function() {
        cursor.style.display = 'none';
        cursorDot.style.display = 'none';
    });
    
    document.addEventListener('mouseenter', function() {
        cursor.style.display = 'block';
        cursorDot.style.display = 'block';
    });
    
    // Add special effects for different section types
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
        heading.addEventListener('mouseenter', function() {
            cursor.style.mixBlendMode = 'difference';
            cursor.style.backgroundColor = 'rgba(0, 255, 115, 0.2)';
        });
        
        heading.addEventListener('mouseleave', function() {
            cursor.style.mixBlendMode = 'difference';
            cursor.style.backgroundColor = 'transparent';
        });
    });
    
    // Special effect for buttons
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            cursor.style.mixBlendMode = 'normal';
            cursor.style.border = '2px solid var(--primary-color)';
            cursor.style.backgroundColor = 'rgba(0, 255, 115, 0.1)';
        });
        
        button.addEventListener('mouseleave', function() {
            cursor.style.mixBlendMode = 'difference';
            cursor.style.border = '2px solid var(--primary-color)';
            cursor.style.backgroundColor = 'transparent';
        });
    });
    
    // Special effect for images
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.addEventListener('mouseenter', function() {
            cursor.style.mixBlendMode = 'normal';
            cursor.style.border = '2px solid white';
            cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });
        
        image.addEventListener('mouseleave', function() {
            cursor.style.mixBlendMode = 'difference';
            cursor.style.border = '2px solid var(--primary-color)';
            cursor.style.backgroundColor = 'transparent';
        });
    });
});
