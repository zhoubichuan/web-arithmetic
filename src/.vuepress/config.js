module.exports = {
  // 基础配置
  base: '/web-arithmetic/', // 部署站点的基础路径
  locales: {
    // 默认标题
    '/': {
      title: '算法学习笔记',
      description: ''
    }
  },
  head: [
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js'
    }],
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js'
    }],
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js'
    }],
    ['script', {
      src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js'
    }],
    // 添加链接 pwa 的 manifest 如果需要
    [
      'link',
      {
        rel: 'icon',
        href: ''
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#000000'
      }
    ]
  ],
  plugins: [
    'demo-block',
    // you can use this plugin multiple times
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],

    // this is how VuePress Default Theme use this plugin
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示',
        },
      },
    ],
  ],
  port: 3009,
  dest: 'dist',
  serviceWorker: true,

  themeConfig: {
    editLinks: true,
    docsDir: 'src',
    locales: {
      '/': {
        docsBranch: 'master',
        editLinkText: '在github上编辑此页',
        lastUpdated: '上次更新',
        nav: [{
          text: '算法基础',
          items: [{
            text: '一.基础算法',
            link: '/base/1.sortAlgorithm',
          },
          {
            text: '二.贪心算法',
            link: '/base/2.greedyAlgorithm',
          }
          ],
        },
        {
          text: '算法书籍',
          items: [
            {
              text: '一.小灰的算法之旅',
              link: '/books/1/1.index',
            },
            {
              text: '二.学习Javascript数据结构与算法',
              link: '/books/2/1.index',
            },
          ]
        }
        ],
        sidebar: {
          '/base/': [
            '1.sortAlgorithm',
            '2.greedyAlgorithm',
            '3.recursiveAlgorithm',
            '4.dynamicProgramming',
            '5.divideAndConquerAlgorithm',
            '6.backtrackingMethod',
            '7.branchAndBoundMethod',
            '8.topologicalSorting',
            '9.stringCorrelationAlgorithm',
            '10.arrayCorrelationAlgorithm',
            '11.linkedListCorrelationAlgorithm',
            '12.treeCorrelationAlgorithm'
          ],
          '/books/1': ['1.index'],
          '/books/2': ['1.index'],
          '/books/3': ['1.index'],
          '/books/4': ['1.index'],
        }
      }
    }
  }
}