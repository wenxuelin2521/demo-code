# vue-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 项目基本目录结构介绍
```
vue-app
├─ .browserslistrc
├─ .eslintrc.js
├─ .gitignore
├─ babel.config.js        :babel配置
├─ package-lock.json
├─ package.json           :依赖和脚本配置
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
├─ src
│  ├─ assets               :静态资源
│  │  ├─ fonts
│  │  ├─ iconfont
│  │  ├─ img
│  │  ├─ js
│  │  └─ scss
│  │     └─ reset.scss
│  ├─ components            :通用组件
│  ├─ pages                 :多页面应用 
│  │  ├─ business
│  │  │  ├─ App.vue
│  │  │  ├─ main.js
│  │  │  ├─ router.js
│  │  │  ├─ store.js
│  │  │  ├─ tpl.html
│  │  │  └─ views
│  │  │     ├─ About
│  │  │     │  └─ index.vue
│  │  │     └─ Home
│  │  │        └─ index.vue
│  │  └─ index
│  │     ├─ App.vue          :跟组件
│  │     ├─ main.js          :入口函数
│  │     ├─ router.js        :路由配置
│  │     ├─ store.js         :状态管理
│  │     ├─ tpl.html         :模板页面
│  │     └─ views            :单页面应用中对应的不同视图
│  │        ├─ About
│  │        │  └─ index.vue
│  │        └─ Home
│  │           └─ index.vue
│  └─ utils                  :工具函数
│     ├─ ajax                :封装请求方法
│     │  ├─ api.js
│     │  └─ commonAjax.js
│     └─ tool.js             :通用方法
└─ vue.config.js             :vue-cli配置文件

```