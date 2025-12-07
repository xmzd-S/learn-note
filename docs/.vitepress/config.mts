import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "个人知识笔记",
  description: "记录学习之路，分享技术心得",
  base: '/',
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '后端', link: '/docs/backend/backend' },
      { text: '前端', link: '/docs/fronted/fronted' },
      { text: 'Freqtrade', link: '/docs/freqtrade/freqtrade' },
      { text: '常见问题', link: '/docs/questions/questions' }
    ],

    sidebar: {
      '/docs/backend/': [
        {
          text: '后端开发',
          items: [
            { text: '后端概述', link: '/docs/backend/backend' },
            { text: '集成 Mybatis', link: '/docs/backend/集成Mybatis' },
            { text: 'Mybatis Generator', link: '/docs/backend/mybatis generator' },
            { text: '封装返回结果', link: '/docs/backend/封装返回结果' },
            { text: '全局异常处理', link: '/docs/backend/全局异常处理' },
            { text: '自定义异常', link: '/docs/backend/自定义异常' },
            { text: '全局注册 Message', link: '/docs/backend/全局注册message' },
            { text: '集成校验框架', link: '/docs/backend/集成校验框架' },
            { text: '请求响应日志切片类', link: '/docs/backend/请求响应日志切片类' },
            { text: '日志配置', link: '/docs/backend/日志配置' }
          ]
        }
      ],
      '/docs/fronted/': [
        {
          text: '前端开发',
          items: [
            { text: '前端概述', link: '/docs/fronted/fronted' },
            { text: 'Vue CLI 安装', link: '/docs/fronted/VueCLI安装' },
            { text: 'CSS', link: '/docs/fronted/css' },
            { text: '集成 Ant Design Vue', link: '/docs/fronted/集成ant-design-vue' },
            { text: 'Vue3', link: '/docs/fronted/Vue3' }
          ]
        }
      ],
      '/docs/freqtrade/': [
        {
          text: 'Freqtrade',
          items: [
            { text: 'Freqtrade 使用指南', link: '/docs/freqtrade/freqtrade' }
          ]
        }
      ],
      '/docs/questions/': [
        {
          text: '常见问题',
          items: [
            { text: '问题汇总', link: '/docs/questions/questions' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2024 个人知识笔记'
    },

    // 搜索功能
    search: {
      provider: 'local'
    },

    // 文档页脚
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 大纲配置
    outline: {
      level: [2, 3],
      label: '目录'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  }
})
