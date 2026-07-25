const course = require('./course.config.json');

const navigationVersion = '2026.07.07.1';
const navigationUrl = `https://skunkworksacademy.com/assets/academy-navigation.js?v=${navigationVersion}`;
const faviconBlack = 'https://raw.githubusercontent.com/skunkworks-academy/www/refs/heads/main/images/favicon-black.png';
const faviconWhite = 'https://raw.githubusercontent.com/skunkworks-academy/www/refs/heads/main/images/favicon-white.png';

const config = {
  title: `${course.courseCode} | ${course.title}`,
  tagline: course.summary,
  url: course.siteUrl,
  baseUrl: '/',
  trailingSlash: true,
  organizationName: 'skunkworks-academy',
  projectName: course.repository,
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
    },
    faster: true,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {htmlLang: course.locale},
    },
  },
  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'icon', type: 'image/png', href: faviconBlack, media: '(prefers-color-scheme: light)'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'icon', type: 'image/png', href: faviconWhite, media: '(prefers-color-scheme: dark)'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'apple-touch-icon', href: faviconBlack},
    },
    {
      tagName: 'script',
      attributes: {
        src: navigationUrl,
        defer: 'true',
        'data-skunkworks-global-nav': 'v6',
      },
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
          ignorePatterns: ['/login/**'],
        },
      },
    ],
  ],
  themeConfig: {
    image: faviconBlack,
    metadata: [
      {name: 'description', content: course.summary},
      {name: 'author', content: 'Skunkworks Academy'},
      {name: 'robots', content: 'index,follow,max-image-preview:large,max-snippet:-1'},
      {name: 'theme-color', content: '#050505'},
      {property: 'og:locale', content: 'en_ZA'},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'Skunkworks Academy'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
  customFields: {
    course,
    navigationVersion,
  },
};

module.exports = config;
