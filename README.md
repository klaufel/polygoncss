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

## Folder structure

```
src/
├── 01_settings/
│   ├── _settings.scss
│   ├── _settings__config.scss
│   ├── _settings__fonts.scss
│   └── _settings__variables.scss
│ 
├── 02_tools/
│   ├── _tools.scss
│   ├── _tools__media-queries.scss
│   ├── _tools__mixins.scss
│ 
├── 03_generic/
│   ├── _generic.scss
│   ├── _generic__box-sizing.scss
│   ├── _generic__global.scss
│   ├── _generic__normalize.scss
│   └── _generic__print.scss
│ 
├── 04_elements/
│   ├── _elements.scss
│   └── _elements__elements.scss
│ 
├── 05_objects/
│   ├── _objects.scss
│   ├── _objects__layout.scss
│   └── _objects__tables.scss
│ 
├── 06_components/
│   ├── _components.scss
│   ├── _components__buttons.scss
│   └── _components__forms.scss
│ 
├── 07_utilities/
│   ├── _utilities.scss
│   ├── _utilities__debug.scss
│   └── _utilities__trumps.scss
│ 
└── style.scss
```