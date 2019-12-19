# British Columbia Government Design System 

The Design System helps developers and designers build better digital products and services.

It’s a collection of digital resources and tools – including a library of reusable UI/interface components and design patterns. The system makes it easier and faster to build custom B.C. government websites and applications.

Components are collectively built by the government community, meet accessibility standards and are open for input and improvement.


## Project Status
Alpha


## Development and Updates of Website.

* git clone https://github.com/bcgov/design-system-temporary.git
* cd ./design-system-temporary/
* npm install
* npm run
    * npm run build (builds producition files)
    * npm run start (starts dev server with hot reload)
    * npm run deploy (Creats the gh-pages branch and pushes it to repo)  Make sure you build before this process



## Layout
```
├── CHANGELOG.md
├── LICENSE
├── README.md
├── html
│   ├── components
│   │   ├── beta.html
│   │   ├── breadcrumb.html
│   │   ├── button.html
│   │   ├── callout.html
│   │   ├── carousel.html
│   │   ├── footer.html
│   │   ├── form.html
│   │   ├── header.html
│   │   ├── index.html
│   │   ├── menu.html
│   │   ├── search.html
│   │   └── section-divider.html
│   ├── css
│   │   ├── app.css
│   │   └── components.css
│   ├── documentation
│   │   ├── component_workflow.html
│   │   ├── developer.html
│   │   ├── index.html
│   │   ├── propose_a_component.html
│   │   └── prototyping_tools.html
│   ├── index.html
│   ├── js
│   │   ├── app.js
│   │   └── components.js
│   └── styles
│       ├── accessibility.html
│       ├── colour-pallette.html
│       └── index.html
├── package-lock.json
├── package.json
├── pull_request_template.md
├── src
│   ├── html **Templates**
│   │   ├── layout.html
│   │   ├── partials
│   │   └── sidebar
│   ├── pages
│   │   ├── components **Components Pages**
│   │   ├── documentation **Documentation Pages**
│   │   ├── index.md **Home Page**
│   │   └── styles **Styles Pages**
│   ├── scripts
│   │   ├── build.js **Builds pages**
│   │   ├── components.js
│   │   └── index.js
│   └── styles
│       ├── _general.scss
│       ├── _mixins.scss
│       ├── _variables.scss
│       └── index.scss
└── webpack.js
```