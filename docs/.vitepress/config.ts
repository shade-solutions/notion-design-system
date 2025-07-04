import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Notion Design System",
  description: "A comprehensive Notion-inspired design system built with React, TypeScript, and Tailwind CSS",
  base: '/notion-design-system/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#2383e2' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Notion Design System | Beautiful React Components' }],
    ['meta', { property: 'og:site_name', content: 'Notion Design System' }],
    ['meta', { property: 'og:image', content: '/og-image.png' }],
    ['meta', { property: 'og:url', content: 'https://shade-solutions.github.io/notion-design-system/' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/button' },
      { text: 'Playground', link: '/playground' },
      { 
        text: 'v1.0.0',
        items: [
          { text: 'Changelog', link: '/changelog' },
          { text: 'NPM Package', link: 'https://www.npmjs.com/package/notion-design-system' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Usage', link: '/guide/usage' },
            { text: 'Theming', link: '/guide/theming' },
            { text: 'Dark Mode', link: '/guide/dark-mode' },
            { text: 'TypeScript', link: '/guide/typescript' },
            { text: 'Migration', link: '/guide/migration' }
          ]
        }
      ],
      '/components/': [
        {
          text: 'Core Components',
          items: [
            { text: 'Button', link: '/components/button' },
            { text: 'Input', link: '/components/input' },
            { text: 'Typography', link: '/components/typography' },
            { text: 'Card', link: '/components/card' },
            { text: 'Badge', link: '/components/badge' },
            { text: 'Avatar', link: '/components/avatar' },
            { text: 'Tooltip', link: '/components/tooltip' }
          ]
        },
        {
          text: 'Notion Components',
          items: [
            { text: 'Block', link: '/components/block' },
            { text: 'Sidebar', link: '/components/sidebar' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shade-solutions/notion-design-system' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/notion-design-system' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 sh20raj'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/shade-solutions/notion-design-system/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    codeTransformers: [
      {
        name: 'copy-button',
        preprocess: (code, options) => {
          // Add copy button to code blocks
          return code
        }
      }
    ]
  }
})
