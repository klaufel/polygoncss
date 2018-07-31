# Structured for a project based in ITCSS and BEMIT (BEM) Methodology

Basic blank structure of a project based on ITCSS (Scalable and Maintainable CSS Architecture) and BEMIT (BEM) Methodology.

## Installation

Clone the repository in local and install the dependencies, then run gulp.

**git:**

```
$ git clone https://github.com/klaufel/structure-itcss-bemit.git
```

**npm:**

```
$ npm install
$ gulp

```

## Specificity graph

Generate a specificity graph in a `specificity-graph` folder.

```bash
npm run graph
```

## Preview docs

Run the local server with `docsify serve`. You can preview your site in your browser on `http://localhost:3000`.

```bash
docsify serve docs
```


## Folder structure

```
src/
├── 01_settings/
│   ├── settings.scss
│   ├── settings__config.scss
│   ├── settings__variables.scss
│   ├── settings__breakpoints.scss
│   ├── settings__colors.scss
│   └── settings__fonts.scss
│ 
├── 02_tools/
│   ├── tools.scss
│   ├── tools__mixins.scss
│   └── tools__media-queries.scss
│ 
├── 03_generic/
│   ├── generic.scss
│   ├── generic__normalize.scss
│   ├── generic__box-sizing.scss
│   ├── generic__global.scss
│   └── generic__print.scss
│ 
├── 04_elements/
│   ├── elements.scss
│   ├── elements__headings.scss
│   ├── elements__paragraphs.scss
│   ├── elements__anchors.scss
│   └── elements__images.scss
│
├── 05_headings/
│   ├── headings.scss
│   ├── headings__title.scss
│   ├── headings__heading.scss
│   ├── headings__headline.scss
│   └── headings__subtitle.scss
│ 
├── 06_objects/
│   ├── objects.scss
│   ├── objects__container.scss
│   ├── objects__grid.scss
│   ├── objects__section.scss
│   └── objects__table.scss
│ 
├── 07_components/
│   ├── components.scss
│   ├── components__button.scss
│   ├── components__input.scss
│   └── structure/
│       ├── components__header.scss
│       └── components__footer.scss
│ 
├── 08_utilities/
│   ├── utilities.scss
│   ├── utilities__widths.scss
│   ├── utilities__colors.scss
│   ├── utilities__trumps.scss
│   └── utilities__debug.scss
│ 
└── style.scss
```

