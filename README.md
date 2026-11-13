# Personal Portfolio Website — Shriya Uskaikar

A professional, responsive personal portfolio website built with **HTML5, CSS3, and Vanilla JavaScript**.

**Live site:** https://portfolio-rose-two-93.vercel.app

## About

This portfolio showcases Shriya Uskaikar's skills, projects, and education. Designed with a dark navy theme and blue accent colors, it demonstrates fundamental frontend technologies without any frameworks or libraries.

## Technology Stack

- **HTML5** – Website structure and semantics
- **CSS3** – Styling, layouts, animations, and responsiveness (Flexbox, Grid, media queries)
- **Vanilla JavaScript** – All interactivity and functionality

No frameworks, no build step, no dependencies. Open `index.html` in a browser and it runs.

## Sections

- **Home** – Introduction with name, tagline, and navigation
- **About Me** – Professional background and interests
- **Skills** – Programming, AI & automation, database & cloud, and tools
- **Projects** – Featured work with filtering by category
- **Education** – Academic history and degrees
- **Contact** – Contact information and form

## Projects

| Project | Stack |
|---------|-------|
| AI Voice Receptionist | n8n, OpenAI API, Vapi, Twilio |
| Whose Turn – Chore Tracker | Claude Code, task tracking, web app |

## Functionality

- Mobile navigation toggle for small screens
- Smooth scrolling between sections
- Active navigation link highlighting on scroll
- Project filtering by category (AI & Automation, Tools)
- Contact form with frontend validation (name, email, message)
- Scroll reveal animations with staggered effects
- Back-to-top button
- Interactive hover effects on buttons, cards, and tags
- Responsive design that works from 320px to 1440px wide

## File Structure

```
portfolio/
├── index.html       # Website structure
├── style.css        # Styling with dark theme and responsive design
├── script.js        # All JavaScript functionality with comments
├── assets/
│   └── images/      # Placeholder for project images
└── README.md        # This file
```

## Browser Compatibility

Works in all modern browsers (Chrome, Firefox, Safari, Edge).

## Customization

- Update the contact email in `index.html`
- Replace placeholder text with personal information
- Add project images to the `assets/images` directory
- Modify colors by changing the CSS variables in the `:root` block of `style.css`

## Deployment

Deployed on Vercel. To redeploy after changes:

```bash
cd portfolio
vercel --prod
```

Or connect this GitHub repository to Vercel for automatic deployments on every push.
