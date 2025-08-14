# Ishaan's Portfolio Website

A modern, minimalistic portfolio website built with HTML, CSS, and JavaScript. Features smooth animations, responsive design, and a clean user interface.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Smooth Animations**: CSS animations and JavaScript-powered scroll effects
- **Modern UI**: Clean, minimalistic design with gradient accents
- **Interactive Elements**: Hover effects, smooth scrolling, and form validation
- **Mobile-First**: Optimized for mobile devices with hamburger navigation

## Sections

1. **Hero Section**: Eye-catching introduction with animated floating elements
2. **About**: Personal information and skills showcase
3. **Projects**: Portfolio of work with interactive cards
4. **Essays**: Blog posts and thoughts section
5. **CV**: Professional experience and education timeline
6. **Contact**: Contact form and information

## Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML/CSS/JavaScript (for customization)

### Installation
1. Download or clone the repository
2. Open `index.html` in your web browser
3. The website is ready to use!

### Local Development
For development purposes, you can use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have it installed)
npx serve .

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Customization

### Personal Information
Edit the following files to customize your portfolio:

- **`index.html`**: Update personal details, project descriptions, and contact information
- **`styles.css`**: Modify colors, fonts, and layout
- **`script.js`**: Adjust animations and interactions

### Key Customization Areas

#### 1. Personal Details
```html
<!-- Update in index.html -->
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
<p class="hero-subtitle">Your Title • Your Role</p>
```

#### 2. Color Scheme
```css
/* Update in styles.css */
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f0f2f5;
}
```

#### 3. Projects
```html
<!-- Add your projects in index.html -->
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-code"></i>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-tags">
            <span>Technology</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link">Live Demo</a>
            <a href="#" class="project-link">GitHub</a>
        </div>
    </div>
</div>
```

#### 4. Skills
```html
<!-- Update skills in index.html -->
<div class="skill-tags">
    <span class="skill-tag">Your Skill 1</span>
    <span class="skill-tag">Your Skill 2</span>
</div>
```

### Adding Your Own Content

#### Projects Section
1. Copy the existing project card structure
2. Update the project image (currently using Font Awesome icons)
3. Add your project details, technologies, and links
4. Consider adding real project screenshots

#### Essays Section
1. Replace the placeholder essay content with your actual blog posts
2. Add real dates and topics
3. Link to full articles if you have them

#### CV Section
1. Update the timeline with your actual work experience
2. Add your real education details
3. Include a downloadable CV file

#### Contact Section
1. Update contact information with your real details
2. Add your social media links
3. Consider connecting the form to a backend service

### Styling Customization

#### Fonts
```css
/* Update in styles.css */
body {
    font-family: 'Your Font', sans-serif;
}
```

#### Colors
```css
/* Primary gradient colors */
.btn-primary {
    background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

#### Animations
```css
/* Adjust animation timing */
.project-card {
    transition: all 0.3s ease; /* Change 0.3s to your preferred speed */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Lazy Loading**: Elements animate in as they come into view
- **Optimized Animations**: CSS transforms and opacity changes for smooth performance
- **Throttled Scroll Events**: Prevents excessive function calls during scrolling
- **Efficient DOM Manipulation**: Minimal DOM queries and updates

## File Structure

```
ishaan-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch and folder
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be deployed instantly
3. Custom domain can be added in settings

### Vercel
1. Connect your GitHub repository to Vercel
2. Automatic deployments on every push
3. Custom domain support included

## Troubleshooting

### Common Issues

#### Animations Not Working
- Ensure JavaScript is enabled in your browser
- Check browser console for errors
- Verify all files are in the same directory

#### Mobile Menu Not Working
- Check if the hamburger button is visible on mobile
- Ensure JavaScript is loading properly
- Test on different mobile devices

#### Form Not Submitting
- The current form is for demonstration only
- To make it functional, you'll need a backend service
- Consider using services like Formspree or Netlify Forms

### Performance Issues
- Optimize images if you add them
- Minimize CSS and JavaScript files for production
- Use a CDN for external resources

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements that could benefit others, consider submitting a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions about customization, please:

1. Check the troubleshooting section above
2. Review the code comments for guidance
3. Open an issue in the repository

## Future Enhancements

Potential improvements you could add:

- **Dark Mode Toggle**: Add a theme switcher
- **Blog Integration**: Connect to a CMS like Ghost or Strapi
- **Portfolio Gallery**: Add image lightbox for project screenshots
- **Analytics**: Integrate Google Analytics or Plausible
- **SEO Optimization**: Add meta tags and structured data
- **PWA Features**: Make it installable as a mobile app
- **Internationalization**: Add multiple language support

---

**Happy coding! 🚀**

Feel free to reach out if you need help with any customizations or have questions about the implementation.

