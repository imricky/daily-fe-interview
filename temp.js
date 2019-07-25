
//实现bind方法
//第一版,bind不传参数
Function.prototype.bind0 = function (context) {
  var self = this;
  return function(){
    return self.apply(context);
  }
}

//bind传参数  .bind(foo,'test')
Function.prototype.bind1 = function (context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments,1);
  return function () {
    // 这个时候的arguments是指bind返回的函数传入的参数
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(context,args.concat(bindArgs));
  }
}

Function.prototype.bind2 = function (context) {  
  var self = this;
  var args = Array.prototype.call(arguments,1);
  var fBound = function(){
    var bindArgs = Array.prototype.call(arguments);
    return self.apply(this instanceof fBound ? this:context,args.concat(bindArgs));
  }
  fBound.prototype = self.prototype;
  return fBound;
}

//完全版本
Function.prototype.bind3 = function (context) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  var fNOP = function () { };
  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
  }
  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
}



