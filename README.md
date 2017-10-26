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

```
$ specificity-graph dist/style.css

```

## Folder structure

```
src/
├── 01_settings/
│   ├── settings.scss
│   ├── 01_settings__config.scss
│   ├── 02_settings__variables.scss
│   ├── 03_settings__breakpoints.scss
│   ├── 04_settings__colors.scss
│   └── 05_settings__fonts.scss
│ 
├── 02_tools/
│   ├── tools.scss
│   ├── 01_tools__mixins.scss
│   └── 02_tools__media-queries.scss
│ 
├── 03_generic/
│   ├── generic.scss
│   ├── 01_generic__normalize.scss
│   ├── 02_generic__box-sizing.scss
│   ├── 03_generic__global.scss
│   └── 04_generic__print.scss
│ 
├── 04_elements/
│   ├── elements.scss
│   ├── 01_elements__headings.scss
│   ├── 02_elements__paragraphs.scss
│   ├── 03_elements__anchors.scss
│   └── 04_elements__images.scss
│
├── 05_headings/
│   ├── headings.scss
│   ├── 01_headings__title.scss
│   ├── 02_headings__heading.scss
│   ├── 03_headings__headline.scss
│   └── 04_headings__subtitle.scss
│ 
├── 06_objects/
│   ├── objects.scss
│   ├── 01_objects__container.scss
│   ├── 02_objects__grid.scss
│   ├── 03_objects__section.scss
│   └── 04_objects__table.scss
│ 
├── 07_components/
│   ├── components.scss
│   ├── 01_components__button.scss
│   ├── 02_components__input.scss
│   └── structure/
│       ├── 01_components__header.scss
│       └── 02_components__footer.scss
│ 
├── 08_utilities/
│   ├── utilities.scss
│   ├── 01_utilities__widths.scss
│   ├── 02_utilities__colors.scss
│   ├── 03_utilities__trumps.scss
│   └── 02_utilities__debug.scss
│ 
└── style.scss
```