# Guruprasad K P — Portfolio

Plain HTML, CSS and JavaScript. No build step, no dependencies. Open `index.html` in a browser, or host it free on GitHub Pages.

## Folder structure

```
portfolio/
├── index.html        page skeleton (rarely edited)
├── style.css         look and feel (colors are at the top of :root)
├── script.js         builds the page from data.js (rarely edited)
├── data.js           ALL your content: profile, projects, skills, education
├── README.md
└── assets/
    ├── resume.pdf            your resume
    └── images/
        ├── profile.jpg       your photo (square-ish, ~600x600)
        └── projects/
            ├── student-management/1.png, 2.png ...
            ├── bank-management/1.png, 2.png ...
            ├── crime-dss/1.png, 2.png ...
            └── healthcare-camp/1.png ...
```

Any image that is missing shows a tidy placeholder, so the site never looks broken while you collect screenshots.

## Add a photo and project output images

1. Save your photo as `assets/images/profile.jpg`.
2. Take screenshots of each project running (console output, web pages, dashboards). PNG or JPG, ideally 1280x720 or similar.
3. Put them in `assets/images/projects/<project-folder>/` as `1.png`, `2.png`, ...
4. Their paths and captions are already listed in `data.js`. Rename or add entries there if your file names differ.

Tip: keep each image under about 500 KB so the page loads fast. Squoosh (squoosh.app) can compress them for free.

## Add a new project

Open `data.js`, copy one whole `{ ... }` block inside `projects: [ ... ]`, paste it after the last one (with a comma between blocks), and edit the text and image paths. The card, the filter buttons and the pop-up gallery appear automatically.

## Put it online (GitHub Pages)

1. Create a public repo named exactly `Guruprasad-K-P.github.io`.
2. Upload everything in this folder, keeping the `assets` folder structure.
3. Visit `https://guruprasad-k-p.github.io` after about a minute.

## Features

- Light and dark theme (follows the system, with a toggle)
- Project cards with cover image, tag filters, and a pop-up with a screenshot gallery (arrow keys work)
- Resume button, education and certifications timeline
- Fully responsive, keyboard accessible, reduced-motion friendly
