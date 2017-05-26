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
│   ├── _settings.config.scss
│   ├── _settings.fonts.scss
│   └── _settings.variables.scss
│ 
├── 02_tools/
│   ├── _tools.mixins.scss
│   └── _tools.tools.scss
│ 
├── 03_generic/
│   ├── _generic.normalize.scss
│   └── _generic.print.scss
│ 
├── 04_elements/
│   └── _elements.elements.scss
│ 
├── 05_objects/
│   └── _objects.objects.scss
│ 
├── 06_components/
│   ├── _components.buttons.scss
│   └── _components.forms.scss
│ 
├── 07_trumps/
│   └── _trumps.trumps.scss
│ 
└── style.scss
```