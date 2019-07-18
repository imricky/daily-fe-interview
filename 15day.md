## [html] title与h1的区别、b与strong的区别、i与em的区别？
它们的区别就再于一个是物理元素，一个是逻辑元素。
什么是物理元素？什么是逻辑元素？

物理元素所强调的是一种物理行为，比如说我把一段文字用b标记加粗了，我的意思是告诉浏览器应该给我加粗了显示这段文字，从单词的语义也可以分析得出，b是Bold(加粗)的简写，所以这个B标记所传达的意思只是加粗，没有任何其它的作用。

而Strong我们从字面理解就可以知道他是强调的意思，所以我们用这个标记向浏览器传达了一个强调某段文字的消息，而这个Strong就是我们所说的逻辑元素，他是强调文档逻辑的，并非是通知浏览器应该如何显示。

同样，I是Italic(斜体)，而em是emphasize(强调)。

所以说：物理元素是告诉浏览器我应该以何种格式显示文字，逻辑元素告诉浏览器这些文字有怎么样的重要性。


[tite与h1的区别 、b与strong的区别 、i与em的区别](https://www.jianshu.com/p/59691c0900d3)
------------------------------


## [css] style标签写在body前和body后的区别是什么？

从有html标准以来到目前为止（2017年5月），标准一直是规定style元素不应出现在body元素中。（

除非style处于template元素中，因为template中的内容是不直接在dom树中的。另外曾经<style scoped>这一特殊用法是可以在body元素中的。）

不过网页浏览器一直有容错设计。如果style元素出现在body元素，最终效果和style元素出现在head里是一样的。但是可能引起FOUC、重绘或重新布局。

注意，根据当前标准，<link rel=stylesheet ...> 是可以出现在body元素中的。并且也可能引起上述问题。然而link是引用资源，意味着可以用于故意设计的异步加载。

而style元素是直接内嵌的，并没有合理的use case去使用它。所以html标准中允许body中出现link，而不允许style。

不过，虽然20年以来，把style放在body中一直是不合标准的，但仍然有大量网站这样用了，所以这个问题是有一定争议的。参见 style tag should be allowed in body · Issue #1605 · whatwg/html 。



## [js] 写一个数组去重的方法（支持多维数组）
```js
// 数组去重

function removeDumpArr(arr) {
  let final = [];
  for(let i in arr){
    if(arr[i] instanceof Array){
      removeDumpArr(arr[i])
    }else{
      if(final.indexOf(arr[i]) == -1){
        final.push(arr[i])
      }
    }
  }
  return final;
}


//方法二。set
// var removeDumpArr = (arr) => {
//   return [...new Set(arr)]
// }

var a = [1,2,3,4,3,2,4,5,6,[1,2,[1,4]]]
var result = removeDumpArr(a)
console.log(result)
```


## [软技能] 对于加班你是怎么看的？

加班就像借钱，救急不救穷