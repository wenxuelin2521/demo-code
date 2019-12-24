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



## CSS3

### 选择符

- 元素选择符
- 关系选择符
- 属性选择符
- 伪类选择符
- 微元素选择符



### 盒子模型

标准模式（以前的盒子模型）：真实的宽度 =  content + padding + border

怪异模式（内减模式）：真实的宽度（代码里面写的width） =  content + padding + border



### 阴影

- 文本阴影：4个参数（水平偏移、垂直偏移、模糊值、颜色）

```css
text-shadow:10px 10px 10px red , -1px -1px 1px blue
```

- 边框阴影：5个参数（水平偏移、垂直偏移、模糊值、外延值、颜色）

```css
box-shadow:10px 10px 10px 10px #ccc;
```

- 边框圆角：
  - 提供2个参数，2个参数以”/“分隔，每个参数允许设置1~4个参数值，第一个参数表示水平半径，第二个参数表示垂直半径，如果第二个参数省略，则默认等于第一个参数
  - 水平半径：如果提供四个参数值，将按上左、上右、下右、下左的顺序作用于四个角
  - 如果提供一个参数值，将作用于全部的四个角
  - 如果提供两个，第一个作用于上左和下右，第二个作用于上右和下左
  - 如果提供三个，第一个作用于上左，第二个作用于右上和下左，第三个作用于下右
  - 垂直半径也遵循以上4点

```
border-radius:50%
```



### 边框图片 

(用的不多可以自己去查手册)

```
border-image-sourced
border-image-slice
border-image-width
border-image-outset
border-image-repeat
//符合写法：
border-image:url(images/border1.png) 27 fill/81px repeat;
```



### 背景

- background-size

```
background-size:auto（原始图片大小） || number（数值） || percentage（百分比） || cover（放大铺满） || contain（缩小铺满）
```

- background-origin：规定background-position属性相对于什么位置来定位。默认值是left top 左上角

```
background-origin:padding-box（相对于内边距来定位） || border-box （相对于边框盒来定位） || content-box（相对于内容框来定位）
```

- background-clip：规定背景的绘制区，虽然是设置裁切，但是控制的是显示。说白了，就是设置最终显示那些区域

```
background-clip:border-box (背景被裁切到边框盒) || padding-box（背景被裁切到内边框） || content-box（背景被才见到内容框）
```

- 综合

```
background-image：指定对象的背景图像。可以是真实图片路径或者使用简便创建的背景图像
background-position：指定对象的背景图位置
background-size：指定对象的背景图像的尺寸大小
background-repeat：指定对象的背景图像如何铺满填充
background-attachment：指定对象的背景图像是随对象内容滚动还是固定的
background-origin：指定对象的背景图像显示的原点
background-clip：指定对象的背景图像向外裁剪的区域
background-color：指定对象的背景颜色
```



### 颜色

1. RGBA：红色值、绿色值、蓝色值、透明度
2. HSLA：色调、饱和度、亮度、透明度



### 过渡

```css
//语法：
transition:property duration timing-function delay;
```

参数说明：

transition属性是一个简写属性，用于设置四个过渡属性：transition-property|transition-duration|transition-timing-function|transition-delay

| 值                         | 描述                             |
| -------------------------- | -------------------------------- |
| transition-property        | 规定设置过渡效果的css属性名称    |
| transition-duration        | 规定完成过渡效果需要多少秒或毫秒 |
| transition-timing-function | 规定速度效果的速度曲线           |
| transition-delay           | 定义过渡效果何时开始             |

**trnsition-timing-function**取值说明

| 值                    | 描述                                                         |
| --------------------- | ------------------------------------------------------------ |
| linear                | 规定以相同速度开始至结束的过渡效果（等于cubic-bezier(0,0,1,1)） |
| ease                  | 规定慢速开始，然后变快，然后慢速结束的过渡效果               |
| ease-in               | 规定以慢速开始的过渡效果                                     |
| ease-out              | 规定以慢速结束的过渡效果                                     |
| ease-in-out           | 规定以慢速开始和结束的过渡效果                               |
| cubic-bezier(n,n,n,n) | 在cubic-bezier函数中定义自己的值，可能的值是0至1之间的数值   |



### 渐变

- 线性渐变

```css
linear-gradient([point || angle]?stop,stop,[stop]*)
```

第一个参数表示线性渐变的方向 to left || to right || to top || to bottom（默认值），也可以直接指定读书，如45deg；

第二个参数是起点的颜色，可以指定颜色的位置

第三个参数是终点的颜色，你还可以在后面添加更多的参数，表示多种颜色的渐变

```css
div{
		width:400px;
		height:400px;
		margin:100px auto;
		background:linear-gradient(0deg,red,orange,yellow,green,blue,purple)
}
```

- 径向渐变

```css
background-image: radial-gradient(shape size at position, start-color, ..., last-color);
```

position确定圆心的位置。如果提供2个参数，第一个表示横坐标，第二个表示纵坐标；如果只提供一个，第二个默认为50%。即center。

shape：渐变的形状，ellipse表示椭圆形，circle表示圆形。默认为ellipse如果元素形状为正方形的元素，则ellipse和circle显示一样。

size：渐变的大小，即渐变到哪里停止，它有四个值。closest-side：最近边；fathest-side：最圆边；closest-corner：最近角；fathest-corner：最圆角。默认的就是最远角：fathest-corner。

```css
.div{
		width:200px;
		height:200px;
		margin:10px auto;
		background:radial-gradient(circle at center,red,blue);
}
```



### 转换

- 位移

  2d移动：translate()。把元素从原来的位置移动。参照点是元素左上角原点。

  ```css
  //语法
  translate(tx) | translate(tx,ty)
  
  //tx是一个代表x轴移动的向量长度，当其为正值时候，元素向x轴右方向移动，当为负值时，元素向x轴左方向移动
  //ty是一个代表y轴移动的向量长度，当其为正值时候，元素向y轴下方向移动，当为负值时，元素向y轴上方乡移动。如果ty没有显式设置时候，相当于ty=0
  //也可以使用translateX(tx)或者translate(ty)
  ```

- 旋转

  2d旋转：rotate()。通过指定的角度参数对元素根据对象原点指定一个2d旋转。它主要在二维空间内进行操作，接受一个角度值，用来指定旋转的幅度。如果这个值为正值，元素相对原点中心顺时针旋转；如果这个值为负值，元素相对原点中心逆时针旋转

  ```css
  //语法
  rotate(a)
  ```

- 缩放

  2d缩放：默认为1。0.01~0.99使元素缩小；大于或者等于1.01让元素放大

  ```css
  scale(sx|sy) | scale(sx,sy)
  //sx指定x轴方向的缩放量
  //sy指定y轴方向的缩放量
  //也可以用scaleX(sx)或者scaleY(sy)
  ```

- 斜切

  2d斜切：skew()。让元素倾斜显示。它可以将一个对象以其中心位置围绕着X轴和Y轴按照一定的角度倾斜。与rotate函数不同，skew函数不会旋转，而只会改变元素的形状

  ```css
  skew(ax) | skew(ax,ay)
  //ax指定元素水平方向倾斜的角度
  //ay指定元素垂直方向倾斜的角度，未设置，默认为0
  //也可以用skewX(sx)或者skewY(sy)
  ```

- 转换的中心位置

  transform-origin：

  设置或检索对象以某个原点进行转换。

  该属性提供2个参数值。

  如果提供两个，第一个用于横坐标，第二个用于纵坐标

  如果只提供一个，该值将用于横坐标，纵坐标将默认为50%

- 透视

  给父元素加上透视，子元素发生3d转换的时候才有效果

  ```css
  transform-style:preserve-3d
  ```

  景深，远小近大

  ```css
  perspective:1px;
  ```

  头试点的位置相对屏幕

  ```css
  perspective-origin:(x,y)
  //let top center bottom right px %
  ```

### 动画

动画是css3中具有颠覆性的特征之一，可通过设置多个节点来精确控制一个或一组动画，常用来实现付下的动画效果

1. 必要元素
   - 通过@keyframes指定动画序列；自动补间动画，确定两个点，系统会自动计算中间过程。这两个点就称为关键帧。我们可以设置多个关键帧
   - 通过百分比将多花序列分割成多个节点
   - 在各个节点中分别定义各属性
   - 通过animation将动画应用于相应元素
2. animate样式常用shux
   - 动画序列的名称：animation-name:move;
   - 动画的持续时间：animation-duration:1s;
   - 动画的延时：animation-delay:1s;
   - 播放状态：animation-play-state:paused|running
   - 播放速度：animation-timing-function:liner | ease | ease-in | ease-out | ease-in-out
   - 播放次数animation-iteration-count:1 | infinite
   - 动画播放完结后的状态：animation-fill-mode:none默认值，不设置对象对话以外的状态 | forwards设置对象状态为动画结束时的状态 | backwards设置对象状态为动画开始时的状态 | both设置对象状态为动画结束或开始的状态;
   - 循环播放时，交叉动画：animation-direction:normal正常方向 | reverse反向方运行 | alternate动画先正常运行再反方向运行，并持续交替与进行 | alternate-reverse动画先范运行再正方向运行，并且持续交替运行

### 











