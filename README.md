
<a name="readme-top"></a>




[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![AGPL License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/chrisnmorrison/openeducation">
    <img src="src/assets/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Revista</h3>

  <p align="center">
    Open-source Gatsby Magazine/Blog template
    <br />
    <a href="https://github.com/chrisnmorrison/openeducation/issues">Report Bug</a>
    ·
    <a href="https://github.com/chrisnmorrison/openeducation/issues">Request Feature</a>
  </p>
    <br />
</div>



<!-- TABLE OF CONTENTS -->
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Revista? Here is our tl:dr](#revista-here-is-our-tldr)
- [Quick Start](#quick-start)
- [IMPORTANT STEP](#important-step)
- [Roadmap](#roadmap)
- [Usage](#usage)
- [License](#license)
- [Usage Agreement](#usage-agreement)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)




<!-- ABOUT THE PROJECT -->
## About The Project

[![Revista Screen Shot][opened-ed-screenshot]](https://opened.one)

Revista is an MIT licensed open-source magazine/blog template for passionate people to promote their favourite knowledge and learning resources online.

**FYI**: If you were a user of <a href='https://openmastery.one'>https://openmastery.one</a> (no longer in use) or <a href='https://opened.one'>https://opened.one</a>, be aware that we've moved all of our old articles to the new Open Ed site (See on <a href='https://github.com/chrisnmorrison/openeducation'>Github</a>, or <a href='https://opened.one'>view our live site</a>), which contains articles and text-based courses. If this doesn't sound familiar to you, don't worry about it 😊 Essentially, we converted our old site into this Gatsby template for all to use.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![React][React.js]][React-url]
* [![Gatsby][Gatsbyjs.com]][Gatsbyjs-url]
* [![Markdown][Markdown]][Markdown-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Revista? Here is our tl:dr

1. Open-source blog or magazine template built with Gatsby, React, and Markdown
2. Many out-of-the-box configurations have already been completed, so all you have to do is make a few small adjustments (keep reading) and write articles.
3. Clean, modern, **complete** design (i.e. more than a boilerplate), and very easy to customize.
4. Incredibly fast speeds, optimized SEO, and since we are open-source, many more improvements on the way.


## Quick Start

To get a local copy up and running:

1. Fork our project
2. Clone to your local machine

Then,

```bash
yarn
yarn start
```

OR

```bash
npm install
npm run start
# You might get an error as we use yarn. If you do:
# 1. Delete yarn.lock
# 2. Delete node_modules if it exists, otherwise ignore 
# 3. Open package.json and modify scripts to use npm instead of yarn
# 4. Run above commands again
```

Wait, there's more..

3. (optional) Look at structure and articles in `/content` to understand what metadata to include in your articles.
4. Delete ALL content in `/content` except the `/content/template` folder

## IMPORTANT STEP

**Note**: We've decided to change to Netlify Forms for simplicity. 

If you are using Netlify, this will already be set up for you. Ensure to read their docs to understand how Netlify Forms work.

Leaving this here in case we decide to change back to StaticForms.

---

We use [StaticForms](https://www.staticforms.xyz/) and [Gatsby Environment Variables](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/) for our contact form. With the current code as-is, you may get an error when building. 

You will have to

1. Set up your contact form, if you plan to use it.
2. Get an API key from [StaticForms](https://www.staticforms.xyz/).
3. Create the following two files:
```bash
# .env.production
STATIC_FORMS_KEY=YOUR_KEY
```
```bash
# .env.development
STATIC_FORMS_KEY=YOUR_KEY
# This one is optional 
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Launch Revista, free forever
- [ ] Improve Documentation
- [ ] Clean up messy code
- [ ] Drink more coffee
- [ ] Multi-language Support
- [ ] What else would you like to see? [Open an issue](https://github.com/chrisnmorrison/openeducation/issues)!

See the [open issues](https://github.com/chrisnmorrison/openeducation/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

I'm proud of my design, and i'd love to see other sites using it.

You're welcome to fork our project and use it for your own site. Revista is a Markdown + Gatsby blog/magazine starter, and can be hosted for free on sites like Netlify.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

[![AGPL License][license-shield]][license-url]

Distributed under the MIT License. See [our license file](LICENSE) for more information.

## Usage Agreement

By forking our repository and using it for your own purposes, we require two things.

**1. You MUST adhere to our MIT license**

**What does this mean?** MIT is a very permissive license, and you are free to fork, modify, and redistribute as you please. We simply require you to give credit to either 1) Chris, Revista's creator, or 2) <a href='https://mesmerdesign.ca' target='_blank' rel='noopener noreferrer'>Mesmer Design</a>, Chris' web development company.

**2. You must delete all content in the `/content` folder**

Except the `/template` folder, which you can optionally use to create a `.md` template for your articles. We've kept out old articles to give you a full picture of what a complete site looks like, with 7-10 categories. If you keep these articles, they will be repeated across the internet, which is an SEO nightmare for your site, and for others who do the same. Also, we've added placeholder (e.g. lorem ipsum, hipsum) to some articles, so you might not want to publish them ;)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Chris (primary maintainer) - opendotone@gmail.com

Chris' Web Development Company - <a href='https://mesmerdesign.ca' target='_blank' rel='noopener noreferrer'>Mesmer Design</a>

Project Link: [https://github.com/chrisnmorrison/openeducation](https://github.com/chrisnmorrison/openeducation)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Choose an Open Source License](https://choosealicense.com)
* [Img Shields](https://shields.io)
* [Netlify](https://www.netlify.com/)
* [Gatsby](https://www.gatsbyjs.com/)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/chrisnmorrison/openeducation.svg?style=for-the-badge
[contributors-url]: https://github.com/chrisnmorrison/openeducation/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/chrisnmorrison/openeducation.svg?style=for-the-badge
[forks-url]: https://github.com/chrisnmorrison/openeducation/network/members
[stars-shield]: https://img.shields.io/github/stars/chrisnmorrison/openeducation.svg?style=for-the-badge
[stars-url]: https://github.com/chrisnmorrison/openeducation/stargazers
[issues-shield]: https://img.shields.io/github/issues/chrisnmorrison/openeducation.svg?style=for-the-badge
[issues-url]: https://github.com/chrisnmorrison/openeducation/issues
[license-shield]: https://img.shields.io/github/license/chrisnmorrison/openeducation.svg?style=for-the-badge
[license-url]: https://github.com/chrisnmorrison/openeducation/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/chris-morrison-180072/
[opened-ed-screenshot]: src/assets/landing-screenshot.jpeg
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Markdown]: https://img.shields.io/badge/Markdown-4A525A?style=for-the-badge&logo=markdown&logoColor=white
[Markdown-url]: https://daringfireball.net/projects/markdown/
[Gatsbyjs.com]: https://img.shields.io/badge/gatsby-643194?style=for-the-badge&logo=gatsby&logoColor=white
[Gatsbyjs-url]: https://www.gatsbyjs.com/