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
- [Built With](#built-with)
- [Revista? Here is our tl:dr](#revista-here-is-our-tldr)
- [Quick Start](#quick-start)
- [Guide to Article Metadata](#guide-to-article-metadata)
- [How to Customize](#how-to-customize)
  - [1. Modify `gatsby-config.js` to contain your information, not ours](#1-modify-gatsby-configjs-to-contain-your-information-not-ours)
  - [2. Enable Netlify Forms (optional)](#2-enable-netlify-forms-optional)
  - [3. Replace icon and favicon with your own](#3-replace-icon-and-favicon-with-your-own)
  - [4. Replace all placeholder text with your own.](#4-replace-all-placeholder-text-with-your-own)
  - [5. Customize Hero category list](#5-customize-hero-category-list)
- [Form Submission](#form-submission)
- [Roadmap](#roadmap)
- [FAQs](#faqs)
  - [1. How do I change the Hero categories?](#1-how-do-i-change-the-hero-categories)
  - [2. Do the names of the folders in `/content` mean anything?](#2-do-the-names-of-the-folders-in-content-mean-anything)
  - [3. How do I change the GraphQL queries?](#3-how-do-i-change-the-graphql-queries)
  - [4. Why are there so many warnings when I run Revista locally?](#4-why-are-there-so-many-warnings-when-i-run-revista-locally)
- [Usage](#usage)
- [License](#license)
- [Usage Agreement](#usage-agreement)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Revista Screen Shot][opened-ed-screenshot]](https://opened.one)

Revista is an MIT licensed open-source magazine/blog template, built using React and Gatsby.

At the moment, Revista is a very opinionated template. We originally made specific changes to suit our interests and needs, and now that we are open-sourcing our template, some of these opinionated choices remain.

We've listed customization instruction in [How to Customize](#how-to-customize). Apart from changing basic metadata, further customization will require knowledge of React, Gatsby, and GraphQL. However, if you are happy with Revista as-is, it is (mostly) set up to begin publishing articles right away!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

- [![React][react.js]][react-url]
- [![Gatsby][gatsbyjs.com]][gatsbyjs-url]
- [![Markdown][markdown]][markdown-url]

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

### 5. Customize Hero category list

The categories in the Hero section are NOT autogenerated - `/src/components/utils/heroCategories.jsx`

We decided it was easier this way, since you can decide on specific colors for certain categories, and choose your **Main categories**.

However, the Categories page is autogenerated, and the categories list in the sidebar is autogenerated as well. If you'd like your Hero to autogenerate categories, simply copy one of those GraphQL queries and adjust accordingly.

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

## FAQs

### 1. How do I change the Hero categories?

Navigate to - `/src/components/utils/heroCategories.jsx`

Currently, the Hero categories are hard-coded. We decided it was easier this way, since you can decide on specific colors for certain categories, and choose your **Main categories**.

However, the Categories page is autogenerated, and the categories list in the sidebar is autogenerated as well. If you'd like your Hero to autogenerate categories, simply copy one of those GraphQL queries and adjust accordingly.

### 2. Do the names of the folders in `/content` mean anything?

They mean nothing to the generated site. They are only for personal organization. GraphQL only retrieves `.md` or `.mdx` files, and does not store the folder structure.

### 3. How do I change the GraphQL queries?

Most queries are located alongside the elements they belong to. I.e. `post-template.jsx` contains the GraphQL query to get post data.

Once your site is running locally, navigate to http://localhost:8000/\_\_\_graphql to test and build queries. This will be printed in your console well for easy nativation.

You may prefer to store them all in a separate file, but we like to keep everything organized together.

### 4. Why are there so many warnings when I run Revista locally?

Most of these warnings are easy to remove - they are `<a>` tags with a placeholder `href`, or they are unused imports or GraphQL queries. Everything will still compile and run perfectly fine, and I decided to leave those warnings there since you may have a use for them. I.e. the unused GraphQL imports.

You can address these warnings without any issues.

One warning has to do with CSS modules. This is on the list of to-do's, and will also not affect compilation or local development.

<!-- USAGE -->

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

We've left some old files there so that you can see how to structure the `.md` article file metadata. After you understand it, we recommend keeping the template (and adjusting to your needs), and removing all other files. You probably don't want placeholder files on your live site :)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Chris (primary maintainer) - mesmerdesignca@gmail.com

Project Link: [https://github.com/chrisnmorrison/revista-gatsby-blog-magazine](https://github.com/chrisnmorrison/revista-gatsby-blog-magazine)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Choose an Open Source License](https://choosealicense.com)
- [Img Shields](https://shields.io)
- [Netlify](https://www.netlify.com/)
- [Gatsby](https://www.gatsbyjs.com/)
- [React Icons](https://react-icons.github.io/react-icons/search)

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
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[markdown]: https://img.shields.io/badge/Markdown-4A525A?style=for-the-badge&logo=markdown&logoColor=white
[markdown-url]: https://daringfireball.net/projects/markdown/
[gatsbyjs.com]: https://img.shields.io/badge/gatsby-643194?style=for-the-badge&logo=gatsby&logoColor=white
[gatsbyjs-url]: https://www.gatsbyjs.com/
