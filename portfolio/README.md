# Guruprasad K P — Portfolio

A minimal, clean personal portfolio site. Two files only: `index.html` and `style.css`. No build tools, no dependencies — open `index.html` in any browser and it works.

---

## 1. Add Your Projects (the only thing left to fill in)

Open `index.html`, search for `[[` — you'll find two project blocks like this:

```html
<h3 class="project-title">[[ Project One Name ]]</h3>
<p class="project-desc">
  [[ One or two lines describing what this project does and the
  problem it solves. ]]
</p>
<ul class="project-stack">
  <li>[[ Tech 1 ]]</li>
  <li>[[ Tech 2 ]]</li>
  <li>[[ Tech 3 ]]</li>
</ul>
```

Replace each `[[ ... ]]` with your real text. Also update the `href="#"` on the `View code →` link to your actual GitHub repo URL for that project.

Need a 3rd project later? Copy one whole `<article class="project">...</article>` block and paste it right after the second one — the layout and spacing will match automatically.

---

## 2. Put It Online for Free (GitHub Pages)

1. Go to **https://github.com/Guruprasad-K-P** and click **New repository**
2. Name it exactly: `Guruprasad-K-P.github.io`
   (must match your GitHub username exactly, including capitalization)
3. Set it to **Public**, click **Create repository**
4. Click **uploading an existing file**, drag in `index.html` and `style.css`, commit
5. Wait about 1 minute, then visit:
   ```
   https://guruprasad-k-p.github.io
   ```
   Your portfolio is now live with a free URL you can put on your resume.

---

## 3. File Structure

```
portfolio/
├── index.html   ← all content lives here
├── style.css    ← all styling lives here
└── README.md    ← this file
```

Everything is in two files on purpose — easy to find, easy to edit, nothing to break.

---

## 4. Design Notes

- **Palette**: warm paper background (`#faf8f4`), near-black ink, bronze accent — avoids the generic dark-mode-with-blue-gradient look.
- **Type**: Fraunces (serif) for headings, Inter (sans) for body text, JetBrains Mono for labels and small caps text.
- **Fully responsive** down to small phone widths.
- **No JavaScript frameworks, no build step** — just open and edit.
