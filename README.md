# Amisor.github.io

Personal academic website of Ivana Sánchez Olivares, served by GitHub Pages at <https://amisor.github.io/>.

Plain HTML/CSS with a few lines of JavaScript for the light/dark toggle. There is no build step: whatever is in the repo is what gets published.

## Files

```
index.html            All page content (profile + about, career timeline, publications, projects, footer)
assets/css/style.css  Styles; colours for light and dark mode are the variables at the top
assets/js/theme.js    Light/dark toggle (follows the device setting until the visitor clicks)
assets/img/profile.jpg  Your photo (square crop, 600x600px)
assets/img/favicon.svg  Browser-tab icon (placeholder)
assets/img/logos/     Organisation logos shown on the career timeline
assets/CV.pdf         The CV linked from the footer
.nojekyll             Tells GitHub Pages to serve files as-is
.gitignore            Keeps the original (unoptimized) files in the repo root out of git
```

## Editing content

Everything lives in `index.html`, in the same order as on the page:

- The top of the page is two columns (`<div class="intro">`): on the left, `<section class="profile">` holds your photo, name, links, About Me (with the skills list), and Publications; on the right, `<div class="career">` holds the career timeline. On screens narrower than 860px they stack.
- Below that, `<section id="projects">` holds the project cards at full width.

- **Career timeline entry:** each item is an `<li class="tl-item …">` inside `<ol class="timeline">`, newest first. Copy one and change the badge, dates, title, organisation, and bullets. The class sets the dot colour: `tl-work`, `tl-edu`, or `tl-volunteer`.
- **Photo:** replace `assets/img/profile.jpg` with any square image.
- **Timeline logos:** each entry starts with `<img class="tl-logo" src="assets/img/logos/…">`. Put the file in `assets/img/logos/`; square images on a white or transparent background work best.
- **Project card:** copy an existing `<article class="card">` block. Each card has an illustration (`<figure class="thumb">`), a title, one line stating the question, a **Methods** row (models and analyses in plain words, with the tool name in parentheses when it helps) and a **Tools** row (languages and libraries), a date line in the format `Institution · City, Country · Year`, and a link. To use a real figure instead of the drawn illustration, replace the `<svg>…</svg>` inside the `<figure>` with `<img src="assets/img/your-figure.png" alt="Short description">` and remove `aria-hidden="true"` from the `<figure>`.
- **Replace a TODO:** search the repo for `TODO`. Visible placeholders look like `<span class="todo">TODO: GitHub link</span>`; replace the whole span, e.g. with `<a href="https://github.com/Amisor/repo-name">GitHub</a>`.
- **Update the CV:** overwrite `assets/CV.pdf` (keep the same name so the link keeps working).
- **Colours:** change the variables at the top of `style.css` (`:root` for light mode, the two dark blocks for dark mode; keep the two dark blocks identical).
- **Search/social previews:** the `<title>`, `description`, and `og:` tags are at the top of `index.html`.

## Preview locally

From the repo folder:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Refresh the browser after each edit. Stop the server with `Ctrl+C`.

(Opening `index.html` directly also works, but a local server matches GitHub Pages more closely.)

## Publishing

Commit and push to the branch GitHub Pages is set to publish (Settings → Pages). The site updates within a minute or two.
