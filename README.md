# Amisor.github.io

This is the source of my personal website, **<https://amisor.github.io>**.

I'm Ivana Sánchez Olivares, a bioinformatician with a background in applied mathematics and data science. On the site you'll find my career path, my publication, and a selection of projects, each linked to its code or write-up.

## How it's built

I kept it simple: plain HTML and CSS, with a few lines of JavaScript for the light/dark mode toggle. There's no build step. GitHub Pages serves the files in this repo exactly as they are.

```
index.html            All page content: profile, about me, publications, career timeline, projects
assets/css/style.css  Styles; the light and dark colour palettes are the variables at the top
assets/js/theme.js    Light/dark toggle (follows the device setting until a visitor chooses)
assets/img/           Profile photo, favicon, and the organisation logos used in the timeline
assets/CV.pdf         My CV, linked from the footer
.nojekyll             Tells GitHub Pages to serve the files as-is
```

## Updating the site

Everything is in `index.html`, in the same order as on the page.

- **Career timeline:** each entry is an `<li class="tl-item …">` inside `<ol class="timeline">`, newest first. The class sets the label colour: `tl-work` (turquoise), `tl-edu` (yellow), or `tl-volunteer` (blue). Logos live in `assets/img/logos/`.
- **Projects:** each card is an `<article class="card">` with a drawing, a title, the question it answers, a **Methods** row, a **Tools** row, a date line (`Institution · City, Country · Year`), and a link.
- **CV:** I replace `assets/CV.pdf` and keep the same file name so the download button keeps working.
- **Colours:** the variables at the top of `style.css` (`:root` for light mode; the two dark-mode blocks should stay identical).

## Previewing locally

From the repo folder:

```sh
python3 -m http.server 8000
```

Then I open <http://localhost:8000> and refresh after each edit.

## Publishing

GitHub Pages publishes the `main` branch, so pushing is all it takes:

```sh
git add .
git commit -m "Describe the change"
git push
```

The live site updates within a minute or two.
