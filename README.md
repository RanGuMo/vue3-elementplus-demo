# vue3-elementplus-demo

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

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 项目说明

- 基于 vue3 + vite + element-plus 搭建的后台管理系统

## TailwindCSS 安装使用

- 安装

```
npm install -D tailwindcss postcss autoprefixer
// 如果上面不行用低版本
npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

npx tailwindcss init
```

- 配置

```css
// src/styles/tailwind.css

@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

```tsx
//main.ts
import "./styles/tailwind.css";
```

```js
//tailwind.config.js

/\*_ @type {import('tailwindcss').Config} _/;
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```js
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [require("tailwindcss"), require("autoprefixer")],
        },
      },
    },
  },
};
```

## 测试用例

```
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0">
            <img class="h-12 w-12" src="../assets/img/404.gif" alt="ChitChat Logo" />
        </div>
        <div>
            <div class="text-xl font-medium text-black">ChitChat</div>
            <p class="text-slate-500">You have a new message!</p>
        </div>
    </div>
```
