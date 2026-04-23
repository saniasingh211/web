# HOW TO EDIT — Sania Singh Website

All pages pull their styles from **styles.css** — edit that one file and every page updates.

---

## File Structure

```
uploads/
├── index.html          ← Homepage
├── music.html          ← Music page
├── research.html       ← Research page
├── blog.html           ← Writing index
├── styles.css          ← ALL styles live here
│
├── writing/            ← One file per essay
│   ├── on-making-music-while-studying-the-universe.html
│   ├── what-ligo-taught-me-about-listening.html
│   ├── why-i-started-studying-law.html
│   ├── moving-to-london-with-a-guitar-and-a-python-script.html
│   ├── neutron-stars-and-why-i-find-them-deeply-romantic.html
│   ├── on-being-a-woman-in-physics.html
│   └── what-it-means-to-produce-your-own-album.html
│
└── projects/           ← One file per GitHub repo
    └── template.html   ← Duplicate this for each repo
```

---

## Adding an Essay

1. Open the correct file in `writing/`
2. Replace the `<div class="article-placeholder">` block with your essay content
3. Use `<p>` for paragraphs, `<h2>` for section headings, `<strong>` for emphasis

**Example:**
```html
<p>Your first paragraph here.</p>
<h2>A section heading</h2>
<p>More text.</p>
```

---

## Adding MP3 Tracks (Music page)

1. Create a folder called `music/` inside `uploads/`
2. Drop your `.mp3` files in there
3. Open `music.html`, find the `<!-- EXAMPLE TRACK -->` comment block
4. Uncomment it and duplicate it for each track, updating:
   - `src="music/your-file.mp3"` — the file path
   - The title and date text

---

## Adding YouTube Videos (Music page)

1. Go to your YouTube video → **Share → Embed**
2. Copy the URL from `src="..."` — it looks like `https://www.youtube.com/embed/VIDEO_ID`
3. Open `music.html`, find the `<!-- EXAMPLE VIDEO -->` comment block
4. Uncomment it, paste your URL into `iframe src`, update the title

---

## Importing GitHub Repos as Project Pages

Each repo gets its own page in `projects/`. Here's how:

### Option A — Simple link (easiest)
Just link directly to the repo from `research.html`. The GitHub section already has a link to your profile.

### Option B — Dedicated project page (recommended)
1. **Duplicate** `projects/template.html` and rename it, e.g. `projects/firedrake-fem.html`
2. Edit the title, description, stack bars, and GitHub link inside the file
3. In `research.html`, add a `project-link` inside the relevant `.project-card`:
   ```html
   <a href="projects/firedrake-fem.html" class="project-link">View Project →</a>
   ```

### Option C — GitHub Pages (for repos with web UIs)
If a repo already has a `gh-pages` branch or `index.html`, enable GitHub Pages:
- Repo → **Settings → Pages → Deploy from branch**
- You'll get a URL like `https://saniasingh211.github.io/repo-name/`
- Link to it from `research.html` using `target="_blank"`

---

## Updating Colours

All colours are CSS variables in `styles.css` under `:root`. The key ones:

| Variable | Used for |
|---|---|
| `--accent` | Links, highlights, accent lines |
| `--bg` | Page background |
| `--bg2` | Alternate section background |
| `--text` | Body text |
| `--muted` | Secondary text |

---

## Adding a New Essay to the Index

After writing an essay, add it to `blog.html` — duplicate one of the `.post-item` blocks and update the `href`, title, tag, date and excerpt.
