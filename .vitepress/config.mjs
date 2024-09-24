import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'uk_UA',
  title: "Neuroweb",
  description: "Блог про веб-розробку",
  srcDir: './src',
  outDir: './docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Головна', link: '/' },
      { text: 'Про студію', link: '/about' },
      { text: 'Блог', link: '/blog' },
      { text: 'Зв\'язок', link: '/contacts' },
    ],

    sidebar: [
      {
        text: 'Категорії',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/neurowebua' },
      { icon: 'instagram', link: 'https://instagram.com/neurowebua' }
    ],
    footer: {
      message: 'Всі права захищені.',
      copyright: 'Максим Бохан © 2024'
    }

  },
  sitemap: {
    hostname: 'https://neuroweb.pp.ua'
  }
})
