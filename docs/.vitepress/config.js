export default {
  title: '我的博客',
  description: '一个用 VitePress 搭建的技术博客',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '前言', link: '/posts/first' },
      { text: '文章', link: '/posts/oop' }
    ],

    sidebar: [
      {
        text: '文章',
        items: [
            { text: '前言', link: '/posts/first' },
          { text: '面向对象OOP', link: '/posts/oop' }
        ]
      }
    ]
  }
}