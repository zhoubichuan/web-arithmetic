module.exports = {
  // 基础配置
  base: '/Web-Arithmetic/', // 部署站点的基础路径
  locales: {
    // 默认标题
    '/': {
      title: '前端算法训练',
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
  serviceWorker: false,

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
                text: '一、基础算法',
                link: '/base/1.sortAlgorithm',
              },
              {
                text: '二、贪心算法',
                link: '/base/2.greedyAlgorithm',
              }
            ],
          },
          {
            text: '算法书籍',
            items: [{
              text: '一、小灰的算法之旅',
              link: '/books/1.xiaohuiAlgorithmTour',
            }]
          },
          {
            text: 'leetCode',
            items: [{
              text: '一、Node',
              link: '/service/node',
            }, {
              text: '二、Express',
              link: '/service/express',
            }, {
              text: '三、Koa',
              link: '/service/koa',
            }, {
              text: '四、Egg',
              link: '/service/egg',
            }]
          },
          {
            text: '大厂面试题',
            link: '/article/',
            items: [{
              text: '阿里巴巴',
              link: '/article/阿里巴巴',
            }, {
              text: '饿了么',
              link: '/article/饿了么',
            }, {
              text: '百分点',
              link: '/article/百分点',
            }, {
              text: '宝宝树',
              link: '/article/宝宝树',
            }, {
              text: '滴滴',
              link: '/article/滴滴',
            }, {
              text: '兑吧',
              link: '/article/兑吧',
            }, {
              text: '海风教育',
              link: '/article/宝海风教育',
            }, {
              text: '海康威视',
              link: '/article/海康威视',
            }, {
              text: '沪江',
              link: '/article/沪江',
            }, {
              text: '今日头条',
              link: '/article/今日头条',
            }, {
              text: '酷家乐',
              link: '/article/酷家乐',
            }, {
              text: '蘑菇街',
              link: '/article/蘑菇街',
            }, {
              text: '寺库',
              link: '/article/寺库',
            }, {
              text: '挖财',
              link: '/article/挖财',
            }, {
              text: '网易',
              link: '/article/网易',
            }, {
              text: '微医',
              link: '/article/微医',
            }, {
              text: '喜马拉雅',
              link: '/article/喜马拉雅',
            }, {
              text: '携程',
              link: '/article/携程',
            }, {
              text: '有赞',
              link: '/article/有赞',
            }]
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
          '/books/': ['1.xiaohuiAlgorithmTour', 'React'],
          '/service/': [{
              title: '一、node',
              collapsable: false,
              children: ['node']
            },
            {
              title: '二、express',
              collapsable: false,
              children: ['express']
            },
            {
              title: '三、koa',
              collapsable: false,
              children: ['koa']
            },
            {
              title: '四、egg',
              collapsable: false,
              children: ['egg']
            }
          ],
          '/article/': [{
              title: '阿里相关',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                '阿里巴巴',
                '蘑菇街',
                '饿了么'
              ]
            },
            {
              title: '今日头条',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                '今日头条',
              ]
            },
            {
              title: '滴滴',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                '滴滴',
              ]
            },
            {
              title: '兑吧',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                '兑吧',
              ]
            },
            {
              title: '百分点',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                '百分点',
              ]
            },
            {
              title: '海风教育',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                '海风教育',
              ]
            },
            {
              title: '海康威视',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                '海康威视',
              ]
            },
            {
              title: '沪江',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                '沪江',
              ]
            },
            {
              title: '酷家乐',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                '酷家乐',
              ]
            },
            {
              title: '寺库',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                '寺库',
              ]
            },
            {
              title: '今日头条',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                '今日头条',
              ]
            },
            {
              title: '挖财',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                '挖财',
              ]
            },
            {
              title: '网易',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                '网易',
              ]
            },
            {
              title: '微医',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                '微医',
              ]
            },
            {
              title: '携程',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                '携程',
              ]
            },
            {
              title: '喜马拉雅',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                '喜马拉雅',
              ]
            },
            {
              title: '有赞',
              collapsable: false, // 让一个组永远都是展开状态
              children: [
                '有赞',
              ]
            },
          ]
        }
      }
    }
  }
}