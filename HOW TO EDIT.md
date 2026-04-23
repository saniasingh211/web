# HOW TO EDIT YOUR WEBSITE

No coding required. Follow these steps.

---

## Quick edits (text, links, bio)

1. Open `content.js` in any text editor (Notepad, TextEdit, or VS Code)
2. Find the section you want to change (they're clearly labelled)
3. Edit the text between the quote marks `"like this"`
4. Save the file
5. Refresh your browser — changes appear immediately

**Example:** To change your email, find:
```
email: "saniasingh721@gmail.com",
```
And change the email address between the quotes.

---

## Your files

| File | What it is |
|---|---|
| `index.html` | Homepage |
| `music.html` | Music page |
| `research.html` | Research & PhD page |
| `blog.html` | Writing / blog page |
| `content.js` | **All your text content — edit this** |
| `sania-portrait.png` | Your photo |

---

## To add a blog post

Open `blog.html` in a text editor. Find a block that looks like this:

```html
<div class="post-item reveal">
  <span class="post-num">01</span>
  <div class="post-body">
    <div class="post-meta">
      <span class="post-tag">Science</span>
      <span class="post-date">January 2025</span>
    </div>
    <h3 class="post-title">Your Post Title Here</h3>
    <p class="post-excerpt">Your excerpt here...</p>
  </div>
</div>
```

Copy one of these blocks and paste it above the others. Change the title, date, tag and excerpt.

---

## To change your photo

Replace the file `sania-portrait.png` with your new photo.  
**Important:** Name the new file exactly `sania-portrait.png` (same name, lowercase).

---

## To go live (publish your site)

1. Go to **netlify.com** → sign up free
2. Drag your entire website folder onto the Netlify dashboard
3. Your site is live in 30 seconds
4. Buy a domain (namecheap.com, ~$12/year) and connect it in Netlify settings

---

## To update your live site after edits

Just drag the folder onto Netlify again. It redeploys automatically.

---

## Need help?

Come back here and describe what you want changed — I'll do it instantly.
