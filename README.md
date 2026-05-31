# Arisha Sofia - Portfolio Website

A modern, responsive personal portfolio website showcasing my skills, education, projects, and achievements as a Software Engineering student.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Navigation**: Smooth scrolling navigation with active link highlighting
- **Project Showcase**: Detailed presentation of academic projects
- **Skills Display**: Comprehensive technical skills organized by category
- **Achievements Section**: Academic awards and professional certifications
- **Contact Form**: Easy-to-use contact form with email integration
- **Dark Theme**: Eye-friendly dark color scheme with gradient accents

## 🚀 Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript**: Interactive features and DOM manipulation
- **Font Awesome**: Icon library for visual elements

## 📁 File Structure

```
portfolio/
│
├── index.html          # Main HTML file with all sections
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript for interactivity
└── README.md           # Project documentation
```

## 🎨 Sections

1. **Hero Section**: Introduction with name, title, and social links
2. **About**: Professional summary, qualities, and languages
3. **Education**: Academic timeline with degree details
4. **Projects**: Showcase of three major academic projects
5. **Skills**: Technical skills categorized by area (Frontend, Backend, Database, IoT, Tools, etc.)
6. **Achievements**: Dean's List awards and professional certifications
7. **Contact**: Contact information and form with reference details

## 🛠️ Setup & Installation

1. **Clone or Download** the portfolio files to your local machine

2. **File Structure**: Ensure all files are in the same directory:
   - index.html
   - styles.css
   - script.js

3. **Open in Browser**: Simply open `index.html` in any modern web browser

   ```bash
   # On Windows
   start index.html
   
   # On Mac
   open index.html
   
   # On Linux
   xdg-open index.html
   ```

## 🌐 Deployment Options

### Option 1: GitHub Pages
1. Create a new repository on GitHub
2. Upload all portfolio files
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://username.github.io/repository-name`

### Option 2: Netlify
1. Sign up at [Netlify](https://www.netlify.com)
2. Drag and drop your portfolio folder
3. Get instant deployment with custom domain option

### Option 3: Vercel
1. Sign up at [Vercel](https://vercel.com)
2. Import your project from GitHub or upload files
3. Automatic deployment with every update

### Option 4: Local Hosting
Simply open the `index.html` file in any web browser - no server required!

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 🎯 Customization Guide

### Update Personal Information

**Contact Details** (in `index.html`):
```html
<!-- Update these sections -->
<a href="mailto:your-email@gmail.com">
<a href="tel:+60123456789">
```

**Social Media Links**:
```html
<a href="https://linkedin.com/in/your-profile" target="_blank">
<a href="https://github.com/your-username" target="_blank">
```

### Modify Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;     /* Secondary accent */
    --accent-color: #ec4899;        /* Highlight color */
    /* ... modify other colors as needed */
}
```

### Add More Projects

Copy and paste this structure in the projects section:
```html
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Project Name</h3>
    <p class="project-type">Project Type</p>
    <p>Project description here...</p>
    <div class="project-tech">
        <span class="tech-tag">Technology 1</span>
        <span class="tech-tag">Technology 2</span>
    </div>
</div>
```

### Update Skills

Add new skills in the respective category:
```html
<span class="skill-badge">New Skill</span>
```

## ✨ Features Breakdown

### Animations
- Smooth scroll navigation
- Fade-in animations on scroll
- Hover effects on cards and buttons
- Parallax effect on hero section
- Typing effect on main title

### Interactive Elements
- Mobile-responsive hamburger menu
- Active navigation highlighting
- Button ripple effects
- Form validation
- Notification system

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- High contrast for readability

## 📊 Performance

- Lightweight: ~100KB total size
- Fast loading: <1s on average connection
- Optimized CSS and JavaScript
- No external dependencies except Font Awesome CDN

## 🔧 Future Enhancements

Potential features to add:
- [ ] Blog section
- [ ] Dark/Light theme toggle
- [ ] Portfolio filtering by technology
- [ ] Animated statistics counter
- [ ] Testimonials section
- [ ] Download CV button
- [ ] Multi-language support
- [ ] Backend integration for contact form

## 📝 License

This portfolio is created for Arisha Sofia. Feel free to use the structure as inspiration for your own portfolio, but please don't use the personal information directly.

## 👤 Contact

**Arisha Sofia**
- Email: nurarisha6221@gmail.com
- Phone: +60 11 1098 9724
- Location: Tanah Merah, Kelantan, Malaysia

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography inspiration
- Color scheme inspired by modern UI design trends

---

**Built with ❤️ by Arisha Sofia**

*Last Updated: May 2026*
