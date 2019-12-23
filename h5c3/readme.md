#h5c3知识简单梳理

## HTML5：新的超文本标记语言。

### 区别：

1. 新增了很多语义化标签
2. 新增了很多功能、视频标签video、画布标签、本地存储、地理位置、webscoket等等

### 常见的语义化的标签：

| 标签名  | 释义     | 描述 |
| ------- | -------- | ---- |
| header  | 头部标签 |      |
| nav     | 导航标签 |      |
| section | 区块标签 |      |
| article | 文章标签 |      |
| hgound  | 标题集合 |      |
| aside   | 侧边标签 |      |
| footer  | 尾部标签 |      |
| time    | 时间标签 |      |
| adress  | 地址标签 |      |

### DOM操作拓展

1. 获取dom元素的方式：

```js
document.querySelector()
document.querySelectorAll()
```

2. 四种操作class的方式

```
dom.classList.add() // 给dom元素添加class
dom.classList.remove() // 给dom移除class
dom.classList.contains() // 判断dom元素是否包含某个class
dom.classList.toggle() // 切换dom元素的class
```

3. 自定义属性：data-*

```
//html
<div data-title="这是一个自定义属性"></div>

以前获取：dom.getAttribute("title")

现在获取：dom.dataset.title
```

### 多媒体标签

1. audio标签：播放声音。支持格式：目前，<audio> 元素支持的3种文件格式：MP3、Wav、O

   **对应的属性，方法，事件查看W3C**

2. Video标签：视频标签。支持格式：MP4、WebM、Ogg

   **对应的属性，方法，事件查看W3C**

### 文件操作

Input type="file" .onchange()：选择了文件触发

FileReader对象

FileReader.readAsText()：将文件以文本的形式读入到FileReader对象中

FileReader.readAsDataUrl()：将图片以图片数据的形式读入到FileReader对象中（路径的形式是普通的base64）

FileReader.result：存放文件读入的数据

FileReader.onload()：文件读取完毕之后触发

### 本地存储

| 名称           | 是否可以跨页面 | 是否持久化（关闭浏览器还存在） | 备注                       |
| -------------- | -------------- | ------------------------------ | -------------------------- |
| SessionStorage | 否             | 否                             | 刷新页面还存在             |
| LocalStorage   | 是             | 是                             | 只要不手动删除，一直都存在 |
| Cookie         | 否             | 可以设置过期时间               | 一直沿用的本地存储技术     |

