##  浏览器内多个标签页之间的通信方式有哪些？

一：websocket

通讯全双工(full-duplex)通信自然可以实现多个标签页之间的通信WebSocket是HTML5新增的协议，它的目的是在浏览器和服务器之间建立一个不受限的双向通信的通道，比如说，服务器可以在任意时刻发送消息给浏览器。为什么传统的HTTP协议不能做到WebSocket实现的功能？这是因为HTTP协议是一个请求－响应协议，请求必须先由浏览器发给服务器，服务器才能响应这个请求，再把数据发送给浏览器。

也有人说，HTTP协议其实也能实现啊，比如用轮询或者Comet。这个机制的缺点一是实时性不够，二是频繁的请求会给服务器带来极大的压力。

Comet本质上也是轮询，但是在没有消息的情况下，服务器先拖一段时间，等到有消息了再回复。这个机制暂时地解决了实时性问题，但是它带来了新的问题：以多线程模式运行的服务器会让大部分线程大部分时间都处于挂起状态，极大地浪费服务器资源。另外，一个HTTP连接在长时间没有数据传输的情况下，链路上的任何一个网关都可能关闭这个连接，而网关是我们不可控的，这就要求Comet连接必须定期发一些ping数据表示连接“正常工作”。

WebSocket并不是全新的协议，而是利用了HTTP协议来建立连接。为什么WebSocket连接可以实现全双工通信而HTTP连接不行呢？实际上HTTP协议是建立在TCP协议之上的，TCP协议本身就实现了全双工通信，但是HTTP协议的请求－应答机制限制了全双工通信。WebSocket连接建立以后，其实只是简单规定了一下：接下来，咱们通信就不使用HTTP协议了，直接互相发数据吧。安全的WebSocket连接机制和HTTPS类似。首先，浏览器用wss://xxx创建WebSocket连接时，会先通过HTTPS创建安全的连接，然后，该HTTPS连接升级为WebSocket连接，底层通信走的仍然是安全的SSL/TLS协议。WebSocket连接必须由浏览器发起，

特点：
（1）建立在 TCP 协议之上，服务器端的实现比较容易。
（2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
（3）数据格式比较轻量，性能开销小，通信高效。
（4）可以发送文本，也可以发送二进制数据。
（5）没有同源限制，客户端可以与任意服务器通信。
（6）协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。

二：定时器setInterval+cookie

在页面A设置一个使用 setInterval 定时器不断刷新，检查 Cookies 的值是否发生变化，如果变化就进行刷新的操作。由于 Cookies 是在同域可读的，所以在页面 B 审核的时候改变 Cookies 的值，页面 A 自然是可以拿到的。这样做确实可以实现我想要的功能，但是这样的方法相当浪费资源。虽然在这个性能过盛的时代，浪费不浪费也感觉不出来，但是这种实现方案，确实不够优雅。

三：使用localstorage

localstorage是浏览器多个标签共用的存储空间，所以可以用来实现多标签之间的通信(ps：session是会话级的存储空间，每个标签页都是单独的）。
直接在window对象上添加监听即可：`window.onstorage = (e) => {console.log(e)}`
// 或者这样
`window.addEventListener('storage', (e) => console.log(e))`
复制代码onstorage以及storage事件，针对都是非当前页面对localStorage进行修改时才会触发，当前页面修改localStorage不会触发监听函数。然后就是在对原有的数据的值进行修改时才会触发，比如原本已经有一个key会a值为b的localStorage，你再执行：`localStorage.setItem('a', 'b')`代码，同样是不会触发监听函数的。

四：html5浏览器的新特性SharedWorker普通的webworker直接使用new Worker()即可创建，这种webworker是当前页面专有的。然后还有种共享worker(SharedWorker)，这种是可以多个标签页、iframe共同使用的。SharedWorker可以被多个window共同使用，但必须保证这些标签页都是同源的(相同的协议，主机和端口号)首先新建一个js文件worker.js，具体代码如下：// sharedWorker所要用到的js文件，不必打包到项目中，直接放到服务器即可
```javascript
let data = ''
onconnect = function (e) {
  let port = e.ports[0]

  port.onmessage = function (e) {
    if (e.data === 'get') {
      port.postMessage(data)
    } else {
      data = e.data
    }
  }
}
```
复制代码webworker端(暂且这样称呼)的代码就如上，只需注册一个onmessage监听信息的事件，客户端(即使用sharedWorker的标签页)发送message时就会触发。注意webworker无法在本地使用，出于浏览器本身的安全机制，所以我这次的示例也是放在服务器上的，worker.js和index.html在同一目录。因为客户端和webworker端的通信不像websocket那样是全双工的，所以客户端发送数据和接收数据要分成两步来处理。示例中会有两个按钮，分别对应的向sharedWorker发送数据的请求以及获取数据的请求，但他们本质上都是相同的事件--发送消息。webworker端会进行判断，传递的数据为'get'时，就把变量data的值回传给客户端，其他情况，则把客户端传递过来的数据存储到data变量中。

下面是客户端的代码：// 这段代码是必须的，打开页面后注册SharedWorker，显示指定worker.port.start()方法建立与worker间的连接
```javascript
    if (typeof Worker === "undefined") {
      alert('当前浏览器不支持webworker')
    } else {
      let worker = new SharedWorker('worker.js')
      worker.port.addEventListener('message', (e) => {
        console.log('来自worker的数据：', e.data)
      }, false)
      worker.port.start()
      window.worker = worker
    }
// 获取和发送消息都是调用postMessage方法，我这里约定的是传递'get'表示获取数据。
window.worker.port.postMessage('get')
window.worker.port.postMessage('发送信息给worker')
```
复制代码页面A发送数据给worker，然后打开页面B，调用window.worker.port.postMessage('get')，即可收到页面A发送给worker的数据。



## 简述下你理解的优雅降级和渐进增强

#### 优雅降级
一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。（Web站点在所有新式浏览器中都能正常工作，如果用户使用的是老式浏览器，则代码会检查以确认它们是否能正常工作。由于IE独特的盒模型布局问题，针对不同版本的IE的hack实践过优雅降级了，为那些无法支持功能的浏览器增加候选方案，使之在旧式浏览器上以某种形式降级体验却不至于完全失效。）

#### 渐进增强
针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。（从被所有浏览器支持的基本功能开始，逐步地添加那些只有新式浏览器才支持的功能，向页面添加无害于基础浏览器的额外样式和功能。当浏览器支持时，它们会自动地呈现出来并发挥作用。）

#### 区别
区别：优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的、能够起作用的版本开始，并不断扩充，以适应未来环境的需要。



## 写一个判断数据类型的方法
```javascript
function judgeDataType(data){
  return Object.prototype.toString.call(data).replace(/\[object\s|\]/g,'')
}

var a = ['12','qw']
var b = 123

var result = judgeDataType(a);
var result1= judgeDataType(b);
console.log(result)
```


## 附加题：一道算法题，一个数组中找出所有相同的元素，并且做出分类，在彩笔白板上写完，面试官笑了一下，js写还真方便。
```javascript
function sameElement(arr){
  var final = arr.reduce((total,curValue,curIndex,arr)=>{
    total[curValue] != void 0 ? total[curValue] += 1 : total[curValue] = 1
    return total;
  },{})
  return final
}

var a = ['12','qw','12','qw','asd','qw','asd','asq']

var result = sameElement(a);
console.log(result)
```