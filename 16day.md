## [html] 元素的alt和title有什么区别？

这两个属性是有些重复了。在不同浏览器里面表现有些不同。在alt和title同时设置的时候，alt作为图片的替代文字出现，title是图片的解释文字。

## [css] 请描述margin边界叠加是什么及解决方案
形成BFC

```
1，使用padding代替，但是父盒子要减去相应的高度
2，使用boder（透明）代替（不推荐，不符合书写规范，如果父盒子子盒子时有颜色的不好处理）
3，给父盒子设置overflow：hidden(如果有移除元素无法使用)
4，给父盒子设置1px的padding
5，给父盒子设置1px的透明border，高度减1px
6，子盒子使用定位position
7，子盒子浮动, 但是居中比较难以控制
8，给子盒子设置display: inline-block;
9，子盒子上面放一个table标签
```

## [js] 返回到顶部的方法有哪些？把其中一个方法出来
```js
window.scrollTo(0,0);

document.documentElement.scrollTop = 0;
```

## [软技能] 你在的公司有没有做代码审查（CodeReview）？如果有是怎么做的？如果没有你觉得应该怎么做才更好？
做一些代码审查，比较少，我觉得组里面应该相互审查，拿捏不定的再去找更高级别的人审查，这样既可以进步，领导又不用太累