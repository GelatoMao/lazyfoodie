### lazyfoodie 目录结构
```
├── README.md
├── config
│   ├── env.js
│   ├── getHttpsConfig.js
│   ├── jest
│   │   ├── cssTransform.js
│   │   └── fileTransform.js
│   ├── modules.js
│   ├── paths.js
│   ├── pnpTs.js
│   ├── webpack.config.js
│   └── webpackDevServer.config.js
├── package.json
├── public
│   ├── index.html
│   └── manifest.json
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
├── src
│   ├── App.js  页面路由
│   ├── admin.js  页面外层结构
│   ├── api  请求数据接口 
│   │   └── index.js
│   ├── common.less  页面样式
│   ├── components  组件目录
│   │   ├── CardList  卡片列表组件
│   │   ├── Footer  底部组件
│   │   ├── Header  头部组件
│   │   ├── NavLeft  左侧导航
│   │   └── NavRight  右侧标签
│   ├── config  菜单配置
│   │   └── menuConfig.js
│   ├── index.js  入口文件
│   ├── pages  页面
│   │   ├── Collections  收藏页
│   │   ├── Detail  详情页
│   │   ├── Home  首页
│   │   ├── Meat
│   │   ├── Ordinary
│   │   ├── Vegetables
│   │   ├── bake.js
│   │   ├── breakfast.js
│   │   ├── fish.js
│   │   ├── nomatch.js
│   │   ├── noodles.js
│   │   ├── search.js
│   │   ├── soup.js
│   │   ├── staple.js
│   │   └── vegetarian.js
│   ├── reset.css  重置样式
│   ├── store  redux数据管理
│   │   ├── actionTypes.js
│   │   ├── createActions.js
│   │   ├── index.js
│   │   └── reducers.js
│   └── utils  工具类
│       └── index.js
└── yarn.lock
```

