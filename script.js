// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger to X
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Initialize AOS (Animate On Scroll)
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        delay: 100
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Active nav link based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all elements that should animate
const animateElements = document.querySelectorAll('.timeline-item, .project-card, .skill-category, .achievement-category, .activity-card, .contact-item');

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Typing effect for hero title (optional enhancement)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Start typing effect after page load
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}

// Add hover effect to skill badges
document.querySelectorAll('.skill-badge').forEach(badge => {
    badge.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    badge.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer p');
if (footerText) {
    footerText.textContent = `© ${currentYear} Arisha Sofia. All rights reserved.`;
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 700);
    }
});

// Add click animation to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        let ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            width: 100px;
            height: 100px;
            margin-top: -50px;
            margin-left: -50px;
            animation: ripple 0.6s;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        
        let x = e.clientX - this.offsetLeft;
        let y = e.clientY - this.offsetTop;
        
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        from {
            opacity: 1;
            transform: scale(0);
        }
        to {
            opacity: 0;
            transform: scale(2);
        }
    }
`;
document.head.appendChild(rippleStyle);

// Console message
console.log('%c👋 Hello! Welcome to Arisha Sofia\'s Portfolio', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Feel free to reach out!', 'color: #8b5cf6; font-size: 14px;');

// Performance optimization: Lazy load images if any are added
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Disable right-click on images (optional protection)
// Uncomment if you want to protect portfolio images
// document.querySelectorAll('img').forEach(img => {
//     img.addEventListener('contextmenu', (e) => e.preventDefault());
// });

// Project Details Modal
function showProjectDetails(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    const projectDetails = {
        oceantrust: {
            title: 'OceanTrust: Marketplace for Marine Tourism',
            subtitle: 'Final Year Project - SEATRU UMT (Sea Turtle Research Unit)',
            description: 'A comprehensive web-based snorkeling trip marketplace developed for SEATRU UMT (Sea Turtle Research Unit) as my Final Year Project. Built with PHP using CodeIgniter 4 framework and MySQL database, this platform connects customers with boat operators for authentic marine tourism experiences. The system features dedicated boat operator dashboards where service providers can manage their trips, schedules, and bookings while promoting responsible tourism and sea turtle conservation efforts.',
            objectives: [
                'Develop a user-friendly snorkeling trip marketplace for SEATRU UMT',
                'Create boat operator dashboards for trip and schedule management',
                'Provide real-time booking and availability management system',
                'Support marine conservation education through integrated content',
                'Enable boat operators to efficiently manage their offerings and customers'
            ],
            features: [
                'Customer registration and authentication system',
                'Boat operator registration with dedicated dashboards',
                'Advanced snorkeling trip browsing with filters (location, date, boat capacity)',
                'Real-time booking system with instant email confirmation',
                'Boat operator dashboard for trip and schedule management',
                'Booking management and customer communication tools',
                'Admin panel with comprehensive analytics and reports',
                'Customer review and rating system with photo uploads',
                'Educational content about sea turtles and marine conservation',
                'Email notifications for bookings, updates, and reminders',
                'Trip availability calendar for boat operators',
                'Responsive design optimized for mobile and desktop devices'
            ],
            technologies: [
                'PHP (Backend Language)',
                'CodeIgniter 4 Framework',
                'MySQL Database',
                'phpMyAdmin',
                'HTML5 & CSS3',
                'JavaScript & jQuery',
                'Bootstrap 5',
                'MVC Architecture',
                'RESTful API Design'
            ],
            challenges: [
                'Implementing real-time availability checking for multiple boat operators',
                'Creating intuitive boat operator dashboards with comprehensive features',
                'Optimizing database queries for performance with large datasets',
                'Managing concurrent bookings across multiple operators',
                'Integrating marine conservation educational content seamlessly'
            ],
            outcome: 'Successfully completed as SEATRU UMT Final Year Project with excellent feedback from supervisors and stakeholders. The boat operator dashboard effectively manages trip bookings and raises awareness about marine conservation. The platform demonstrates the integration of e-commerce functionality with environmental education, connecting customers with responsible boat operators while promoting sea turtle protection.'
        },
        quickbite: {
            title: 'Quick Bite: Food Ordering Platform',
            subtitle: 'Web Development Project - API Integration',
            description: 'An innovative food ordering and delivery platform that showcases advanced API integration skills. The system leverages Spoonacular API for comprehensive recipe and restaurant data, PayPal API for secure payment processing, and Google Maps API for real-time location services and delivery tracking. This project demonstrates modern web development practices in creating a full-featured food delivery solution with seamless user experience.',
            objectives: [
                'Create a comprehensive food ordering platform with multiple API integrations',
                'Implement secure payment processing using PayPal API',
                'Provide real-time location tracking and delivery updates via Google Maps',
                'Integrate recipe discovery and restaurant data through Spoonacular API',
                'Deliver seamless user experience across all devices'
            ],
            features: [
                'Recipe search and discovery powered by Spoonacular API',
                'Restaurant browsing with detailed menus and ratings',
                'Location services with Google Maps API integration',
                'Interactive map showing restaurant locations',
                'Payment gateway integration with PayPal API',
                'User authentication and profile management',
                'Shopping cart with item customization',
                'Order tracking with status updates',
                'Rating and review system',
                'Order history functionality',
                'Restaurant dashboard for order and menu management'
            ],
            technologies: [
                'HTML5',
                'CSS3 with Flexbox/Grid',
                'JavaScript (ES6+)',
                'PHP (Backend)',
                'MySQL Database',
                'Spoonacular API',
                'PayPal REST API',
                'Google Maps JavaScript API',
                'Bootstrap Framework',
                'AJAX for async requests'
            ],
            challenges: [
                'Integrating multiple third-party APIs with different authentication methods',
                'Handling real-time location updates efficiently',
                'Ensuring secure payment processing and PCI compliance',
                'Managing API rate limits and optimizing API calls',
                'Synchronizing order status across multiple user interfaces'
            ],
            outcome: 'Successfully completed as an academic project demonstrating API integration skills. The platform effectively showcases the ability to work with multiple third-party APIs including Spoonacular, PayPal, and Google Maps, creating a functional prototype for a modern food ordering system.'
        },
        kfun: {
            title: 'K-Fun Booking System',
            subtitle: 'Web Application Development',
            description: 'An innovative web-based karaoke booking system that transforms how entertainment venues manage reservations. Developed using HTML, Java, and CSS with phpMyAdmin for database management, this system automates scheduling and enhances operational efficiency.',
            objectives: [
                'Create a karaoke room reservation system',
                'Manage room availability in real-time',
                'Provide customers with easy booking interface',
                'Implement booking management functionality',
                'Design user-friendly admin dashboard'
            ],
            features: [
                'Online karaoke room reservation portal',
                'Real-time room availability checker with calendar view',
                'Session time management with flexible duration options',
                'Customer booking history and profile management',
                'Admin panel for room and booking management',
                'Booking status tracking',
                'Mobile-responsive interface'
            ],
            technologies: [
                'HTML5',
                'Java (JSP/Servlets)',
                'CSS3',
                'JavaScript',
                'MySQL',
                'phpMyAdmin',
                'Apache Tomcat Server',
                'JDBC for database connectivity'
            ],
            challenges: [
                'Preventing double bookings with concurrent users',
                'Implementing flexible time slot management',
                'Creating an intuitive booking calendar interface',
                'Managing real-time room availability updates'
            ],
            outcome: 'Successfully developed as an academic group project demonstrating full-stack web development skills. The system effectively manages karaoke room bookings with real-time availability checking and comprehensive admin controls, showcasing proficiency in Java web development and database management.'
        },
        jobtracker: {
            title: 'Job Application Tracker System',
            subtitle: 'Career Management Platform',
            description: 'A comprehensive web-based job application tracking system designed to help job seekers organize and monitor their career journey. Built with HTML, CSS, Java, and phpMyAdmin, this platform provides intuitive dashboards and analytics to streamline the job search process.',
            objectives: [
                'Help users organize multiple job applications efficiently',
                'Track application status from submission to offer',
                'Manage application deadlines and follow-ups',
                'Store application information and notes',
                'Provide insights through analytics and statistics'
            ],
            features: [
                'Application tracking with customizable status stages',
                'Reminder system for follow-ups and deadlines',
                'Company and position information database',
                'Analytics dashboard with visual charts',
                'Application timeline and history',
                'Notes and comments for each application',
                'Search and filter capabilities',
                'User dashboard with statistics'
            ],
            technologies: [
                'HTML5',
                'CSS3 with Flexbox and Grid',
                'JavaScript (ES6+)',
                'Java (Backend)',
                'MySQL',
                'phpMyAdmin',
                'Chart.js for analytics',
                'AJAX for dynamic updates'
            ],
            challenges: [
                'Designing an intuitive status workflow',
                'Implementing effective search and filter mechanisms',
                'Creating meaningful analytics and visualizations',
                'Ensuring data security and privacy'
            ],
            outcome: 'Successfully completed as an academic project showcasing web application development skills. The system provides a practical solution for job seekers to organize and track their applications, demonstrating proficiency in full-stack development, database design, and creating intuitive user interfaces with data visualization.'
        }
    };
    
    const project = projectDetails[projectId];
    
    if (project) {
        modalBody.innerHTML = `
            <h2 style="color: var(--text-primary); margin-bottom: 0.5rem;">${project.title}</h2>
            <span style="display: inline-block; padding: 0.4rem 1rem; background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2)); border: 1px solid var(--primary-color); border-radius: 20px; color: var(--primary-color); font-size: 0.85rem; font-weight: 600; margin-bottom: 2rem;">${project.subtitle}</span>
            
            <div style="background: rgba(15, 23, 42, 0.5); padding: 1.5rem; border-left: 4px solid var(--primary-color); border-radius: 10px; margin: 2rem 0;">
                <p style="color: var(--text-secondary); line-height: 1.8; margin: 0;">${project.description}</p>
            </div>
            
            <h3 style="color: var(--text-primary); margin: 2rem 0 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-bullseye" style="color: var(--primary-color);"></i> Project Objectives
            </h3>
            <ul style="list-style: none; padding-left: 0;">
                ${project.objectives.map(obj => `<li style="padding: 0.5rem 0; padding-left: 1.5rem; position: relative; color: var(--text-secondary);"><span style="position: absolute; left: 0; color: var(--primary-color);">▹</span>${obj}</li>`).join('')}
            </ul>
            
            <h3 style="color: var(--text-primary); margin: 2rem 0 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-star" style="color: var(--success-color);"></i> Key Features
            </h3>
            <ul style="list-style: none; padding-left: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 0.75rem;">
                ${project.features.map(feature => `<li style="padding: 0.5rem 0; padding-left: 1.5rem; position: relative; color: var(--text-secondary);"><span style="position: absolute; left: 0; color: var(--success-color);">✓</span>${feature}</li>`).join('')}
            </ul>
            
            <h3 style="color: var(--text-primary); margin: 2rem 0 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-code" style="color: var(--secondary-color);"></i> Technologies Used
            </h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
                ${project.technologies.map(tech => `<span style="padding: 0.5rem 1rem; background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); color: white; border-radius: 8px; font-size: 0.9rem;">${tech}</span>`).join('')}
            </div>
            
            <h3 style="color: var(--text-primary); margin: 2rem 0 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-exclamation-triangle" style="color: var(--warning-color);"></i> Challenges & Solutions
            </h3>
            <ul style="list-style: none; padding-left: 0;">
                ${project.challenges.map(challenge => `<li style="padding: 0.5rem 0; padding-left: 1.5rem; position: relative; color: var(--text-secondary);"><span style="position: absolute; left: 0; color: var(--warning-color);">⚡</span>${challenge}</li>`).join('')}
            </ul>
            
            <h3 style="color: var(--text-primary); margin: 2rem 0 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-trophy" style="color: var(--accent-color);"></i> Outcome & Impact
            </h3>
            <div style="background: rgba(236, 72, 153, 0.1); padding: 1.5rem; border-left: 4px solid var(--accent-color); border-radius: 10px; margin-bottom: 2rem;">
                <p style="color: var(--text-secondary); line-height: 1.8; margin: 0;">${project.outcome}</p>
            </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Smooth number counting animation for statistics
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = progress * (end - start) + start;
        
        // Handle decimal numbers
        if (end % 1 !== 0) {
            element.textContent = value.toFixed(2);
        } else {
            element.textContent = Math.floor(value);
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseFloat(stat.getAttribute('data-count'));
                animateValue(stat, 0, target, 2000);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsContainer = document.querySelector('.stats-container');
if (statsContainer) {
    statsObserver.observe(statsContainer);
}

// Add particle effect to hero section (optional enhancement)
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(99, 102, 241, 0.5);
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particle-float ${5 + Math.random() * 10}s infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        hero.appendChild(particle);
    }
}

// Add particle animation keyframes
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particle-float {
        0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Initialize particles on load
window.addEventListener('load', () => {
    createParticles();
});
