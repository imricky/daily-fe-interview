## [html] 请说说`<script>、<script async>和<script defer>`的区别
```js
 `<script>` : 加载的时候是同步的会阻塞后面代码的执行，加载立即执行。
 `<script async>`: 异步加载，加载和执行是并行的。
 `<script defer>`: 异步加载，需等到所有文档加载完才执行。
```

![script运行](./img/25day/script.png)

## [css] 在页面中的应该使用奇数还是偶数的字体？为什么呢？
偶数字体

1. 常用偶数号字体,但奇数号字体也没关系,例如 知乎正文使用15px字体,豆瓣电影使用13px字体

2. UI设计师导出的设计稿一般都是偶数号字体

3. 偶数字号容易和页面其他标签的其他属性形成比例关系

4. Windows 自带的点阵宋体（中易宋体）从 Vista 开始只提供 12、14、16 px 这三个大小的点阵，而 13、15、17 px 时用的是小一号的点阵（即每个字占的空间大了 1 px，但点阵没变），于是略显稀疏。(没试过)


## [js] 写一个判断设备来源的方法

**使用`navigator.userAgent`**

```js
   deviceType()
    window.addEventListener('resize', function(){
        deviceType()
    })

 function deviceType(){
        var ua = navigator.userAgent;
        var agent = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        for(var i=0, i<agent.length; i++){
            if(ua.indexOf(agent[i])>0){
                alert(agent[i])
                break
            }
        }
    }
```

## [软技能] 说说你工作中遇到过比较难的技术问题是什么？是如何解决的？
回答思路：

问题出现的背景，比如说：‘在使用Vue开发xxx功能时中遇到xxx...’

问题出现的原因在哪里，如果定位到的。比如：'在使用xx调试发现的问题出现在xx..'

查找问题解决方法，比如：‘在xx论坛看到解决方法，在某某交流群内提问，询问身边(网上)的技术大佬’

问题解决后达到了什么效果，比如：‘加载速度提升了约4倍，受到领导同事的一致好评..’

问题解决后有什么感悟或收获，比如：‘原来使用xx方法就能xx，记录到我的bug-log中..’
