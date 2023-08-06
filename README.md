<p align="center">
  <img width="587.5" alt="image" src="https://github.com/wolz-CODElife/portfolio2.0/assets/55518764/2bf26ddb-268b-4ba2-9554-18ca11766a31">
</p>

### 📝 Table of Content
+ [How to reuse my portfolio]()
+ [🛠️Forking, Cloning and Improving your version]()
+ [📁 Project structure]()
+ [Routes/Pages]()

# How to reuse my portfolio
I've made my portfolio open source, so feel free to open issues or reuse it. Even though it's a free world, there are still rules. Here are the rules 👍:
1. Do not use my projects in your clone if you didn't make tangible contributions to the project.
2. When making improvements, write proper commit messages.
3. Respect other's contributions - discuss improvements before you overwrite. Or, simply create an issue and tag the author.
4. Although tests were not written, make sure to push only working commits.

# 📁 Project structure
### Index
Contains the route definitions(`"/", "/apps", "/articles" and "/presentations"`)
```bash
📁 src
  └── index.js
```

### Routes or Pages
Contains files for different pages of the portfolio(Apps, Articles, Home, Presentations and Videos) 
```bash
📁 src
  └── routers
      ├── Apps.js
      ├── Articles.js
      ├── Home.js
      ├── Presentations.js
      └── Videos.js
```

### Components
Contains files of children components across the landing page and routes
+ Universal Components
  ```bash
  📁 src
  └── components
      ├── Footer.js
      ├── Header.js
      ├── ImageLoader.js
      └── Loader.js
  ```
+ Landing Page Components
  ```bash
  📁 src
  └── components
      ├── Hero.js
      ├── Resume.js
      ├── LandingApps.js
      ├── LandingArticles.js
      ├── LandingDesigns.js
      ├── LandingPresentations.js
      └── LandingCompanies.js
  ```
+ Apps Route Components
  ```bash
  📁 src
  └── components
      └── AppsGrid.js
  ```
+ Articles Route Components
  ```bash
  📁 src
  └── components
      └── ArticlesGrid.js
  ```
+ Presentations Route Components
  ```bash
  📁 src
  └── components
      └── PresentationsGrid.js
  ```

### Data
Contains modules that export a list of the data we need in various routes
+ Footer/Contact Component Data
  ```bash
  📁 src
  └── data
      └── contacts.js
  ```
+ Apps Route Data
  ```bash
  📁 src
  └── data
      └── works.js
  ```
+ Articles Route Data
  ```bash
  📁 src
  └── data
      └── articles.js
  ```
+ Presentations Route Data
  ```bash
  📁 src
  └── data
      └── presentations.js
  ```

### Icons
Contains all the icons used throughout the portfolio
```bash
📁 src
  └── icons
      └── icons.js
```

### Styles
The project uses Tailwind CSS for styling. However, the animation in the Hero section on the landing page uses custom CSS.
```bash
📁 src
  └── components
      └── styles
          └── Hero.css
```

# 🌐 Hosting
I currently use Firebase for hosting. You can set up your own hosting on any hosting provider of your choice.

Feel free to update and improve this documentation as needed! 😊
