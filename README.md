<p align="center">
  <img width="587.5" alt="image" src="https://github.com/wolz-CODElife/portfolio2.0/assets/55518764/2bf26ddb-268b-4ba2-9554-18ca11766a31">
</p>

# 👨🏽‍🦯 Guidelines
First off, let me tell you a secret(although, it may not be a secret by the time you are reading this) 🤫 – my portfolio is now open source!

👍 Yup, you read it right! You can dig into my code and even reuse it for your projects. Feel free to create issues, fix bugs, suggest cool features, or simply marvel at what I have brought to this world.

🚧 🚨 Now, hold your horses, cowboys! 🤠

While it's open-source fiesta, let's keep things in check with a few fun-loving rules:
1. **Do Not Poach!**: Okay, I get it – my projects are irresistible! But please, pretty please, don't grab it for your clone unless you've put in some genuine effort and contributed tangibly to it. We all want to see some originality here, partner!
2. **Commits with Character!**: When you decide to sprinkle some improvements on my masterpiece, don't be shy! Write those commit messages with flair and style. Add emojis, puns, or even a touch of dramatic effect – anything to keep those commits snazzy!
3. **Respectful Remix**: Remember, we're all in this open-source dance together. If you're planning to remix my creation, show some love to the original contributors. Talk it out, discuss, and let's boogie together on the dancefloor of improvement!
4. **No Bug-tastrophes**: Bugs are sneaky little creatures, but don't let them take over my portfolio! When you push your changes, make sure they're not causing a ruckus. No one likes a party pooper, right? Let's keep it smooth and working!

So, my fellow developers, go forth and conquer! Let's make the most of this open-source extravaganza. The world is our playground, and together, we'll create code wonders that'll make even the nerdiest of unicorns shed a tear of joy. 🦄🌈

Happy coding, and may the code be with you! 🚀😉

# 📁 Project Structure
### Index
Contains the route definitions(`"/", "/apps", "/articles" and "/presentations"`), and the `<Loader />` component's display mechanism.
```bash
📁 src
  └── 📓 index.js
```

### Routes or Pages
Contains files for different pages of the portfolio(Apps, Articles, Home, Presentations and Videos) 
```bash
📁 src
  └── 📁 routers
      ├── 📓 Apps.js
      ├── 📓 Articles.js
      ├── 📓 Home.js
      ├── 📓 Presentations.js
      └── 📓 Videos.js
```

### Components
Contains files of children components across the landing page and routes
+ Universal Components: These components are used at multiple layers/level of the site.
  ```bash
  📁 src
  └── 📁 components
      ├── 📓 Footer.js
      ├── 📓 Header.js
      ├── 📓 ImageLoader.js
      └── 📓 Loader.js
  ```
+ Landing Page Components: These components are unique to the landing page(`"/"`).
  ```bash
  📁 src
  └── 📁 components
      ├── 📓 Hero.js
      ├── 📓 Resume.js
      ├── 📓 LandingApps.js
      ├── 📓 LandingArticles.js
      ├── 📓 LandingDesigns.js
      ├── 📓 LandingPresentations.js
      └── 📓 LandingCompanies.js
  ```
+ Apps Route Components: These components are unique to the `"/apps"` route.
  ```bash
  📁 src
  └── 📁 components
      └── 📓 AppsGrid.js
  ```
+ Articles Route Components: These components are unique to the `"/articles"` route.
  ```bash
  📁 src
  └── 📁 components
      └── 📓 ArticlesGrid.js
  ```
+ Presentations Route Components: These components are unique to the `"/presentations"` route.
  ```bash
  📁 src
  └── 📁 components
      └── 📓 PresentationsGrid.js
  ```

### Data
Contains modules that export a list of the data we need in various routes
+ Footer Component Data: The module exports a list of contact information used in the `<Footer />` component.
  ```bash
  📁 src
  └── 📁 data
      └── 📓 contacts.js
  ```
+ Apps Route Data: The module exports a list of project information used in the `AppsGrid.js` component.
  ```bash
  📁 src
  └── 📁 data
      └── 📓 works.js
  ```
+ Articles Route Data: The module exports a list of articles information used in the `ArticlesGrid.js` component.
  ```bash
  📁 src
  └── 📁 data
      └── 📓 articles.js
  ```
+ Presentations Route Data: The module exports a list of presentations information used in the `PresenationsGrid.js` component.
  ```bash
  📁 src
  └── 📁 data
      └── 📓 presentations.js
  ```

### Icons
Contains all the icons used throughout the portfolio
```bash
📁 src
  └── 📁 icons
      └── 📓 icons.js
```

### Styles
The project uses Tailwind CSS for styling. However, the animation in the Hero section on the landing page uses custom CSS.
```bash
📁 src
  └── 📁 components
      └── 📁 styles
          └── 📓 Hero.css
```

# 🌐 Hosting
Alright, let's talk about hosting, the mystical realm where my portfolio comes to life! 🏰✨ 

As of now, I've conjured the powerful forces of Firebase for hosting, but fear not – you too can wield the magic of hosting on any provider of your choosing!

# 🤔 What Next?
Feel free to update and improve this documentation as needed! 😊

Happy coding, and may your code forever enchant the hearts of all who visit your digital realm! 💻❤️
