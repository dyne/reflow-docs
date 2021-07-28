export default {
  "title": "ReflowOS",
  "tagline": "Architecture and Manual for Distributed Network Setup and Maintenance",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "organizationName": "dyne",
  "projectName": "ReflowOS",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "favicon": "img/favicon.ico",
  "customFields": {
    "githubUsername": "dyne",
    "githubProject": "zenpub",
    "users": [
      {
        "caption": "User1",
        "image": "/img/undraw_open_source.svg",
        "infoLink": "https://www.facebook.com",
        "pinned": true
      }
    ],
    "separateCss": [
      "api/styles/graphdoc.css",
      "api/assets/code.css",
      "api/assets/require-by.css"
    ]
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "/",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "./docs",
          "sidebarPath": "../website/sidebars.json"
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": "../src/css/customTheme.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "ReflowOS",
      "logo": {
        "src": "img/logoBlue.svg"
      },
      "items": [
        {
          "to": "docs/what_is_reflowOS",
          "label": "Documentation",
          "position": "left"
        },
        {
          "to": "/static/api/index.html",
          "label": "API",
          "position": "left"
        },
        {
          "href": "https://github.com/dyne/zenpub",
          "label": "Github",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "image": "img/undraw_online.svg",
    "footer": {
      "copyright": "Copyright © 2021 Dyne.org",
      "logo": {
        "src": "img/logoBlue.svg"
      },
      "style": "light",
      "links": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};