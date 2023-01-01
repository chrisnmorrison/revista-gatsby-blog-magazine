
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
  <a href="https://github.com/chrisnmorrison/revista-gatsby-blog-magazine">
    <img src="src/assets/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Revista</h3>

  <p align="center">
    Open-source Gatsby Magazine/Blog template
    <br />
    <a href="https://github.com/chrisnmorrison/revista-gatsby-blog-magazine/issues">Report Bug</a>
    ·
    <a href="https://github.com/chrisnmorrison/revista-gatsby-blog-magazine/issues">Request Feature</a>
  </p>
    <br />
</div>



<!-- TABLE OF CONTENTS -->
- [About The Project](#about-the-project)
- [pagespeed.web.dev Results](#pagespeedwebdev-results)
  - [Built With](#built-with)
- [Revista? Here is our tl:dr](#revista-here-is-our-tldr)
- [Quick Start](#quick-start)
- [Guide to Article Metadata](#guide-to-article-metadata)
- [How to Customize](#how-to-customize)
  - [1. Modify `gatsby-config.js` to contain your information, not ours](#1-modify-gatsby-configjs-to-contain-your-information-not-ours)
  - [2. Enable Netlify Forms (optional)](#2-enable-netlify-forms-optional)
  - [3. Replace icon and favicon with your own](#3-replace-icon-and-favicon-with-your-own)
  - [4. Replace all placeholder text with your own.](#4-replace-all-placeholder-text-with-your-own)
- [Form Submission](#form-submission)
- [Roadmap](#roadmap)
- [Usage](#usage)
- [License](#license)
- [Usage Agreement](#usage-agreement)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)




<!-- ABOUT THE PROJECT -->
## About The Project

[![Revista Screen Shot][opened-ed-screenshot]](https://opened.one)

View live site: https://revista.mesmerdesign.ca/

## pagespeed.web.dev Results

[![Lighthouse][lighthouse-screenshot]](https://pagespeed.web.dev/report?url=https%3A%2F%2Frevista.mesmerdesign.ca%2F&form_factor=mobile)



Revista is an MIT licensed open-source magazine/blog template, built using React and Gatsby.

**FYI**: If you were a user of <a href='https://openmastery.one'>https://openmastery.one</a> (no longer in use) or <a href='https://opened.one'>https://opened.one</a>, be aware that we've moved all of our old articles to the new Open Ed site (See on <a href='https://github.com/chrisnmorrison/revista-gatsby-blog-magazine'>Github</a>, or <a href='https://opened.one'>view our live site</a>), which contains articles and text-based courses. If this doesn't sound familiar to you, don't worry about it 😊 Essentially, we converted our old site into this Gatsby template for all to use.

At the moment, Revista is a very opinionated template. We originally made specific changes to suit our interests and needs, and now that we are open-sourcing our template, some of these opinionated choices remain.

We've listed in customization instruction in [How to Customize](#how-to-customize). Apart from changing basic metadata, further customization will require knowledge of React, Gatsby, and GraphQL. However, if you are happy with Revista as-is, it is set up to begin publishing articles right away!

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
npm i
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
5. Place your articles in `/content` with the required metadata (see any existing `.md` file in `/content` for an example) 

## Guide to Article Metadata

See any existing `.md` file in `/content` for an example of metadata.

`title`: Article title. **Mandatory**.

`image`: Path to image. **Optional**, but excluding may result in display errors.

`imageAttribution`: Sites like Vecteezy require attribution, so consider using this field if getting images from a source that requires attribution. **Optional**, can be excluded without error.

`date`: **Mandatory**. More recent dates are ordered first.

`category`: **Mandatory**.

`trending`: **Optional.** Displays article in "Featured" section. <a href='https://revista.mesmerdesign.ca/'>See demo site</a> for how this is displayed.

`topPick`: **Optional.** Displays article in "Featured" section. <a href='https://revista.mesmerdesign.ca/'>See demo site</a> for how this is displayed.

`popular`: **Optional.** Displays article in "Featured" section. <a href='https://revista.mesmerdesign.ca/'>See demo site</a> for how this is displayed.

## How to Customize

In order to turn Revista into your own blog or magazine, you'll have to make some changes. Let's discuss them here.

### 1. Modify `gatsby-config.js` to contain your information, not ours

Simply run through `gatsby-config.js` and change settings as needed. In addition to updating metadata to your info, uncomment `gatsby-plugin-robots-txt` and update the paths to your own site. 

**Note**: if using the Netlify sitemap plugin, your sitemap will be located at `https://yoursiteurl.com/sitemap.xml` 

### 2. Enable Netlify Forms (optional)

If you'd like to use Netlify Forms, head over to `src/components/ContactForm.jsx` and uncomment the line that says `// data-netlify="true"` (around line 57). Everything else is setup, so you will start receiving form submissions through Netlify. Ensure you set up email notifications in the Netlify app, if you want that.

### 3. Replace icon and favicon with your own

Note that if your icon is not close to 1:1 size, you may see display errors. Keep an eye out for this.

### 4. Replace all placeholder text with your own.

All pages are in `/src/pages`. 

Article template and category page template are in `/src/templates`.

Most page components are in `/src/components`, and almost everything else is located in one of the other `/src` subfolders.

Pages/Components with text that you will need to update:

- `src/components/Hero.jsx`
- `src/components/Sidebar/` - several components to update
- `src/pages/about.jsx` - several components to update
- `src/pages/contact.jsx` - several components to update
- `src/pages/support-us.jsx` - several components to update
- `src/pages/privacy-policy.jsx` - add your own
- `src/pages/terms-and-conditions.jsx` - add your own
- `src/components/Footer.jsx` - add the name of your site
- `src/constants/socialLinks.js` - add your own social links and icons

**Note**: All main pages are linked to from the Navbar, so we recommend going page-by-page to look for text that needs updating. All components with text that needs updating will either be in `src/pages/` or `src/components/`

## Form Submission

**Note**: We've decided to change to Netlify Forms for simplicity. 

If you are using Netlify, this will already be set up for you. Ensure to read their docs to understand how Netlify Forms work.

Leaving this here in case we decide to change back to StaticForms.

---

[StaticForms](https://www.staticforms.xyz/) and [Gatsby Environment Variables](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/). With the current code as-is, you may get an error when building. 

You will have to

1. Set up your contact form, if you plan to use it.
2. Get an API key from [StaticForms](https://www.staticforms.xyz/).
3. Create the following:
```bash
# .env
STATIC_FORMS_KEY=YOUR_KEY
```

If using Netlify, add your API key to the Netlify app as well.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] Convert opened.one to Revista template
- [x] Launch Revista, free forever
- [ ] Improve Documentation
- [ ] Clean up messy code
- [ ] Drink more coffee
- [ ] Multi-language Support
- [ ] What else would you like to see? [Open an issue](https://github.com/chrisnmorrison/revista-gatsby-blog-magazine/issues)!

See the [open issues](https://github.com/chrisnmorrison/revista-gatsby-blog-magazine/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

Revista is a Markdown + Gatsby blog/magazine starter, and can be hosted for free on sites like Netlify. I'm proud of my design, and i'd love to see other sites using it.

You're welcome to fork Revista and use it for your own site. You are not required to publish your code, you are only required to give credit (per MIT license). 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

[![AGPL License][license-shield]][license-url]

Distributed under the MIT License. See [our license file](LICENSE) for more information.

## Usage Agreement

By forking our repository and using it for your own purposes, we require two things.

**1. You MUST adhere to our MIT license**

**What does this mean?** MIT is a very permissive license, and you are free to fork, modify, and redistribute as you please. We simply require you to give credit to either 1) Chris, Revista's creator, by linking to Revista's Github repo, or 2) <a href='https://mesmerdesign.ca' target='_blank' rel='noopener noreferrer'>Mesmer Design</a>, Chris' web development company.

**2. You must delete all content in the `/content` folder**

We've left some old files there so that you can see how to structure the `.md` article files.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Chris (primary maintainer) - mesmerdesignca@gmail.com

Chris' Web Development Company - <a href='https://mesmerdesign.ca' target='_blank' rel='noopener noreferrer'>Mesmer Design</a>

Project Link: [https://github.com/chrisnmorrison/revista-gatsby-blog-magazine](https://github.com/chrisnmorrison/revista-gatsby-blog-magazine)

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
[contributors-shield]: https://img.shields.io/github/contributors/chrisnmorrison/revista-gatsby-blog-magazine.svg?style=for-the-badge
[contributors-url]: https://github.com/chrisnmorrison/revista-gatsby-blog-magazine/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/chrisnmorrison/revista-gatsby-blog-magazine.svg?style=for-the-badge
[forks-url]: https://github.com/chrisnmorrison/revista-gatsby-blog-magazine/network/members
[stars-shield]: https://img.shields.io/github/stars/chrisnmorrison/revista-gatsby-blog-magazine.svg?style=for-the-badge
[stars-url]: https://github.com/chrisnmorrison/revista-gatsby-blog-magazine/stargazers
[issues-shield]: https://img.shields.io/github/issues/chrisnmorrison/revista-gatsby-blog-magazine.svg?style=for-the-badge
[issues-url]: https://github.com/chrisnmorrison/revista-gatsby-blog-magazine/issues
[license-shield]: https://img.shields.io/github/license/chrisnmorrison/revista-gatsby-blog-magazine.svg?style=for-the-badge
[license-url]: https://github.com/chrisnmorrison/revista-gatsby-blog-magazine/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/chris-morrison-180072/
[opened-ed-screenshot]: src/assets/landing-screenshot.jpeg
[lighthouse-screenshot]: src/assets/lighthouse.png
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