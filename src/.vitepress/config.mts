import { defineConfig } from 'vitepress'
import path from "node:path"
import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "092五笔",
  description: "静待你的指尖舞动，点亮你的文字之路。",
  lang: "zh-hans-CN",
  outDir: "../dist",
  markdown: {
    theme: {
      light: "light-plus",
      dark: "material-theme-palenight",
    },
  },
  head: [
    ['link', { rel: 'icon', href: 'icon.svg', type: 'image/svg+xml' }],
  ],
  vite: {
    css: {
      postcss: {
        plugins: [tailwind(), autoprefixer()],
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../components'),
      }
    }
  },
  themeConfig: {
    logo: '/icon.svg',
    nav: [
      { text: '主页', link: '/' },
      {
        text: '092分支', items: [
          { text: '092（标准）', link: '/092-code/' },
          { text: '092K', link: '/092K-code/' },
          { text: '092不良帅', link: '/092W-code/' },
        ]
      },
    ],
    sidebar: {
      '/092-code': [
        {
          text: '简介',
          link: '/092-code/',
        },
        {
          text: '字根练习',
          link: 'https://092wb.github.io/092wb-typing/',
        },
/* 
        {
          text: '反查',
          link: '/092-code/search',
        },
        {
          text: '字根练习',
          link: '/092-code/gen',
        },
*/
        {
          text: '入门',
          collapsed: true,
          items: [
            { text: '取码规则(文字版)', link: '/092-code/beginners/' },
            { text: '取码规则(图文版)', link: '/092-code/beginners/092help' },
            { text: '分支', link: '/092-code/beginners/forks' },
            { text: '字集支持', link: '/092-code/beginners/ziji' },
            { text: '常见问题', link: '/092-code/beginners/wenti' },
          ]
        },
        {
          text: '进阶',
          collapsed: true,
          items: [
            { text: '技巧', link: '/092-code/advance/' },
            { text: '难拆字', link: '/092-code/advance/nancai' },
          ]
        },
        {
          text: '感谢',
          collapsed: true,
          items: [
            {
              text: '易码',
              link: 'https://yb6b.github.io/yima/'
            },
          ],
        },
      ],
      '/092K-code': [
        {
          text: '介绍',
          link: '/092K-code/',
        },
      ],
      '/092W-code': [
        {
          text: '介绍',
          link: '/092W-code/',
        },
      ],
    },
    footer: {
      message: "092五笔",
      copyright: "092wb team. Copyright © 2024 Under GPLv3 license.",
    },
    darkModeSwitchLabel: "黑暗模式",
    langMenuLabel: "选择语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "目录",
    outline: {
      level: "deep",
      label: "本页大纲"
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonAriaLabel: "搜索",
            buttonText: "搜索",
          },
          modal: {
            displayDetails: "展示详细内容",
            resetButtonTitle: "清空关键词",
            noResultsText: "搜索不到，请换个关键词",
            backButtonTitle: "返回",
            footer: {
              selectText: "进入网页",
              navigateText: "浏览",
              navigateDownKeyAriaLabel: "下键",
              navigateUpKeyAriaLabel: "上键",
              closeKeyAriaLabel: "关闭",
              closeText: "取消搜索",
            },
          },
        },
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/092wb' },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tencent-qq" viewBox="0 0 16 16">
      <path d="M6.048 3.323c.022.277-.13.523-.338.55-.21.026-.397-.176-.419-.453-.022-.277.13-.523.338-.55.21-.026.397.176.42.453Zm2.265-.24c-.603-.146-.894.256-.936.333-.027.048-.008.117.037.15.045.035.092.025.119-.003.361-.39.751-.172.829-.129l.011.007c.053.024.147.028.193-.098.023-.063.017-.11-.006-.142-.016-.023-.089-.08-.247-.118Z"/>
      <path fill-rule="evenodd" d="M11.727 6.719c0-.022.01-.375.01-.557 0-3.07-1.45-6.156-5.015-6.156-3.564 0-5.014 3.086-5.014 6.156 0 .182.01.535.01.557l-.72 1.795a25.85 25.85 0 0 0-.534 1.508c-.68 2.187-.46 3.093-.292 3.113.36.044 1.401-1.647 1.401-1.647 0 .979.504 2.256 1.594 3.179-.408.126-.907.319-1.228.556-.29.213-.253.43-.201.518.228.386 3.92.246 4.985.126 1.065.12 4.756.26 4.984-.126.052-.088.088-.305-.2-.518-.322-.237-.822-.43-1.23-.557 1.09-.922 1.594-2.2 1.594-3.178 0 0 1.041 1.69 1.401 1.647.168-.02.388-.926-.292-3.113a25.78 25.78 0 0 0-.534-1.508l-.72-1.795ZM9.773 5.53c-.13-.286-1.431-.605-3.042-.605h-.017c-1.611 0-2.913.319-3.042.605a.096.096 0 0 0-.01.04c0 .022.008.04.018.056.11.159 1.554.943 3.034.943h.017c1.48 0 2.924-.784 3.033-.943a.095.095 0 0 0 .008-.096Zm-4.32-.989c-.483.022-.896-.529-.922-1.229-.026-.7.344-1.286.828-1.308.483-.022.896.529.922 1.23.027.7-.344 1.286-.827 1.307Zm2.538 0c.483.022.896-.529.922-1.229.026-.7-.344-1.286-.827-1.308-.484-.022-.896.529-.923 1.23-.026.7.344 1.285.828 1.307ZM2.928 8.99a10.674 10.674 0 0 0-.097 2.284c.146 2.45 1.6 3.99 3.846 4.012h.091c2.246-.023 3.7-1.562 3.846-4.011.054-.9 0-1.663-.097-2.285-1.312.26-2.669.41-3.786.396h-.017c-.297.003-.611-.005-.937-.023v2.148c-1.106.154-2.21-.068-2.21-.068V9.107a22.93 22.93 0 0 1-.639-.117Z"/>
    </svg>`,
        },
        link: "https://qm.qq.com/q/XIGPHILKYk",
      },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1024 1024"><path fill="currentColor" fill-rule="evenodd" d="M828.975746 894.125047 190.189132 894.125047c-70.550823 0-127.753639-57.18542-127.753639-127.752616L62.435493 606.674243c0-17.634636 14.308891-31.933293 31.93227-31.933293l63.889099 0c17.634636 0 31.93227 14.298658 31.93227 31.933293l0 95.821369c0 35.282574 28.596292 63.877843 63.87682 63.877843L765.098927 766.373455c35.281551 0 63.87682-28.595268 63.87682-63.877843l0-95.821369c0-17.634636 14.298658-31.933293 31.943526-31.933293l63.877843 0c17.634636 0 31.933293 14.298658 31.933293 31.933293l0 159.699212C956.729385 836.939627 899.538849 894.125047 828.975746 894.125047L828.975746 894.125047zM249.938957 267.509636c12.921287-12.919241 33.884738-12.919241 46.807049 0l148.97087 148.971893L445.716876 94.89323c0-17.634636 14.300704-31.94762 31.933293-31.94762l63.875796 0c17.637706 0 31.945573 14.312984 31.945573 31.94762l0 321.588299 148.97087-148.971893c12.921287-12.919241 33.875528-12.919241 46.796816 0l46.814212 46.818305c12.921287 12.922311 12.921287 33.874505 0 46.807049L552.261471 624.930025c-1.140986 1.137916-21.664416 13.68365-42.315758 13.69286-20.87647 0.010233-41.878806-12.541641-43.020816-13.69286L203.121676 361.13499c-12.922311-12.933567-12.922311-33.884738 0-46.807049L249.938957 267.509636 249.938957 267.509636z"/></svg>`,
        },
        link: "http://092wb.ysepan.com/",
      },
    ]
  },
})
