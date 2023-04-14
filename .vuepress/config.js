const fs = require('fs');
const path = require('path')
function getFilesAndFoldersInDir(path) {
  const items = fs.readdirSync(path);
  const result = [];
  items.forEach(item => {
    const itemPath = `${path}/${item}`;
    const stat = fs.statSync(itemPath);
    if (stat.isDirectory()) {
      let data = {
        // 文件夹
        type: 'folder',
        name: item
      }
      let children = getFilesAndFoldersInDir(itemPath)
      if (children && children.length) {
        data.children = children
      }
      result.push(data);
    } else {
      // 文件
      result.push({
        type: 'file',
        name: item
      });
    }
  });
  return result;
}
const list = getFilesAndFoldersInDir('C:\\Users\\Administrator\\Desktop\\React\\my-blog\\docs\\foo\\cssMD')
const fileList = list.map(item => '/docs/foo/cssMD/' + item.name)
const list1 = getFilesAndFoldersInDir('C:\\Users\\Administrator\\Desktop\\React\\my-blog\\docs\\foo\\JavaScriptMD')
const fileList1 = list1.map(item => '/docs/foo/JavaScriptMD/' + item.name)
const list2 = getFilesAndFoldersInDir('C:\\Users\\Administrator\\Desktop\\React\\my-blog\\docs\\foo\\React')
const fileList2 = list2.map(item => '/docs/foo/React/' + item.name)
const list3 = getFilesAndFoldersInDir('C:\\Users\\Administrator\\Desktop\\React\\my-blog\\docs\\foo\\Vue')
const fileList3 = list3.map(item => '/docs/foo/Vue/' + item.name)
module.exports = {
  "title": "龙鱼混杂",
  "description": "this is my blog",
  "base": "/Personal/",
  "locales": {
    '/': {
      lang: 'zh-CN'
    }
  },
  "head": [
    [
      "link",
      {
        rel: "icon",
        href: "https://pic1.zhimg.com/v2-6e0a159878fbd9af3ec10b5d15de24d7_r.jpg?source=1940ef5c",
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ["script", { src: "/assets/js/bodyClick.js" }]
  ],
  "theme": "jabinblog",
  "themeConfig": {
    "mode": 'dark',
    "noFoundPageByTencent": true,
    "logo": '/img.png',
    "nav": [
      {text:'首页',link:'/'},
      {text: '学习路线',link:'/docs/foo/'},
      {text: '项目实战',link:'/docs/practice/'},
      {text: '零散文章',link:'/docs/articles/'},
      {text: '一起学习',link:'/docs/together/'},
      {text: 'github', link: 'https://github.com/QHSWGS'}
    ],
    "sidebar": {
      '/docs/foo/': [
        {
          title:'css学习路线',
          collapsable:true,
          children: fileList,
        },
        {
          title:'JavaScript学习路线',
          collapsable:true,
          children:fileList1
        },
        {
          title:'React学习路线',
          collapsable:true,
          children:fileList2
        },
        {
          title:'Vue学习路线',
          collapsable:true,
          children:fileList3
        },
      ],
    },
    "type": "blog",
    "blogConfig": {
      "tag": {
        "location": 3,
        "text": "无关紧要的小标签"
      }
    },
    "friendLink": [
      {
        "title": "Lucifer",
        "desc": "Everything can be expected in the future.",
        "email": "2726181200@qq.com",
        "logo": "https://nightliuguoxing-github-io.vercel.app/img/avatar.jpg",
        "link": "https://love.liuguoxing.top"
      },
      {
        "title": "午后南杂",
        "desc": "一款简洁而优雅的 vuepress 博客 & 文档 主题。",
        "email": "无",
        "link": "https://vuepress-theme-reco.recoluan.com/"
      }
    ],
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "QHS",
    "authorAvatar": "/img_1.png",
    "record": "鄂ICP备18004957号-2",
    "startYear": "2018"
  },
  "configureWebpack": {
    "resolve": {
      "alias": {
        '@assets': '/assets'
      }
    }
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    ["sakura", {
      num: 10,  // 默认数量
      show: true,
      zIndex: 2,
      img: {
        replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: 'https://www.zpzpup.com/assets/image/sakura.png'     // 绝对路径
      }
    }],
    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: 1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }],
    ['go-top'],
    [
      "dynamic-title",
      {
        showIcon: "https://www.zpzpup.com/assets/image/favicon.ico",
        showText: "欢迎回来 O(∩_∩)O~",
        hideIcon: "https://www.zpzpup.com/assets/image/favicon.ico",
        hideText: "失联中。。。快回来~",
        recoverTime: 2000
      }
    ],
    [
      'vuepress-plugin-helper-live2d', {
        // 是否开启控制台日志打印(default: false)
        log: false,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)
          model: 'koharu',
          display: {
            position: "left", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 1 // 模型透明度(default: 0.8)
          }
        }
      }
   ],
    // [
    //   '@vuepress-reco/vuepress-plugin-bgm-player',{
    //   audios: [
    //     {
    //       name: '牵丝戏 (DJ亚明版)',
    //       artist: '不只中二',
    //       url: '/不只中二 - 牵丝戏 (DJ亚明版).mp3',
    //       cover: 'https://pic1.zhimg.com/v2-6e0a159878fbd9af3ec10b5d15de24d7_r.jpg?source=1940ef5c'
    //     }
    //     ,
    //     {
    //       name: '大雨还在下',
    //       artist: '高夫',
    //       url: '/高夫 - 大雨还在下.mp3',
    //       cover: 'https://pic1.zhimg.com/v2-6e0a159878fbd9af3ec10b5d15de24d7_r.jpg?source=1940ef5c'
    //     },
    //     {
    //       name: '樱花树下的约定',
    //       artist: 'MC康乐、名决',
    //       url: '/MC康乐、名决 - 樱花树下的约定 (咚鼓版).mp3',
    //       cover: 'https://pic1.zhimg.com/v2-6e0a159878fbd9af3ec10b5d15de24d7_r.jpg?source=1940ef5c'
    //     },
    //   ]
    // }
    // ]
  ]
}
