module.exports = {
  "title": "M-Town",
  "description": "Recording something like time...",
  "dest": "../public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "GAID": "UA-152942780-1", // 项目生成后生成的 ID 值
    "faceImage": '/head.png',
    vssueConfig: {
      platform: 'github',
      owner: 'HuyangJake',
      repo: 'https://github.com/HuyangJake/M-Town',
      clientId: '465fc53423145e17a447',
      clientSecret: '4c8103f9a678b2e4546912bd02111ddf33c49f24',
    },
    //  // 密钥
    //  keyPage: {
    //   keys: ['jake'],
    //   color: '#42b983', // 登录页动画球的颜色
    //   lineColor: '#42b983' // 登录页动画线的颜色
    // },
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeLine/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          // {
          //   "text": "NPM",
          //   "link": "https://www.npmjs.com/~reco_luan",
          //   "icon": "reco-npm"
          // },
          {
            "text": "GitHub",
            "link": "https://github.com/HuyangJake",
            "icon": "reco-github"
          },
          // {
          //   "text": "简书",
          //   "link": "https://www.jianshu.com/u/cd674a19515e",
          //   "icon": "reco-jianshu"
          // },
          // {
          //   "text": "CSDN",
          //   "link": "https://blog.csdn.net/recoluan",
          //   "icon": "reco-csdn"
          // },
          // {
          //   "text": "博客圆",
          //   "link": "https://www.cnblogs.com/luanhewei/",
          //   "icon": "reco-bokeyuan"
          // },
          // {
          //   "text": "WeChat",
          //   "link": "https://mp.weixin.qq.com/s/mXFqeUTegdvPliXknAAG_A",
          //   "icon": "reco-wechat"
          // }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "logo": "/head.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "最后更新",
    "author": "Jakey Yang",
    "record": "浙ICP备18046274号-2",
    "startYear": "2016"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: {
    'sitemap': {
      hostname: 'http://ioser.store'
    },
  }
}