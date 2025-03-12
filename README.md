# Aaron Bycoffe's Personal Website

This is a modern personal website built with Next.js and Tailwind CSS, deployed to GitHub Pages.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Making Changes

- Edit `pages/index.js` to update the home page content
- Edit `components/SocialLink.js` to modify the link styling
- Edit `styles/globals.css` to change global styles

## Adding Pages

Create a new file in the `pages` directory, for example:

```javascript
// pages/about.js
export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>This is my about page.</p>
    </div>
  )
}
```

## Deploying to GitHub Pages

The site will automatically deploy when you push changes to the `master` branch through a GitHub Actions workflow.

To manually deploy:

1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

2. GitHub Actions will automatically build and deploy your site to GitHub Pages.

3. You can check the status of your deployment in the "Actions" tab of your GitHub repository.

## Local Build

To build the site locally:

```bash
npm run build
```

This will create a static export in the `out` directory.

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **CSS**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: GitHub Pages via GitHub Actions
