// 简要描述下什么是回调函数并写一个例子出来

function callback() {
  alert("I am in the callback!");
}

function work(func) {
  alert("I am calling the callback!");
  func(); 
}

work(callback);