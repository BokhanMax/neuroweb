import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'uk',
  title: "Neuroweb",
  description: "Блог про веб-розробку",
  srcDir: './src',
  outDir: './docs',
  cleanUrls: 'true',
  search: {
    provider: 'local'
  },

  head: [
    ['link', { rel: 'shortcut icon', href: '/favicons/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/favicons/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/favicons/safari-pinned-tab', color: '#5bbad5' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Neuroweb' }],
    ['meta', { name: 'application-name', content: 'Neuroweb' }],
    ['meta', { name: 'msapplication-TileColor', content: '#2d89ef' }],
    ['meta', { name: 'msapplication-config', content: '/favicons/browserconfig.xml' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }]
  ],

  themeConfig: {
    nav: [
      { text: 'Головна', link: '/' },
      { text: 'Роботи', link: '/portfolio' },
      { text: 'Про студію', link: '/about' },
      {
        text: 'Послуги',
        items: [
          { text: 'Сайт-візитка', link: '/services/create-corporate' },
          { text: 'Інтернет-магазин', link: '/services/create-internet-shop' },
          { text: 'Корпоративний блог', link: '/services/create-blog' },
          { text: 'Односторінковий лендінг', link: '/services/create-landing' },
          /* { text: 'Персональне портфоліо', link: '/services/create-portfolio' },
          { text: 'Веб-довідник', link: '/services/create-wiki' },
          { text: 'CRM система', link: '/services/create-crm' },
          { text: 'Учбовий портал', link: '/services/create-learning' },
          { text: 'Внутрішня документація', link: '/services/create-docu' } */
        ]
      },
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
      { icon: 'github', link: 'https://github.com/neurowebstudio' },
      { icon: 'instagram', link: 'https://instagram.com/neurowebstudio' },
      { icon: 'telegram', link: 'https://t.me/neurowebstudio' }
    ],

    footer: {
      message: 'Всі права захищені.',
      copyright: 'Neuroweb © 2025'
    }
  },

  sitemap: {
    hostname: 'https://neuroweb.pp.ua'
  }
})
