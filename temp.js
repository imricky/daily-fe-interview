//你对new操作符的理解是什么？手动实现一个new方法

function objectFactory() {

  var obj = new Object(),

  Constructor = [].shift.call(arguments);

  obj.__proto__ = Constructor.prototype;

  var ret = Constructor.apply(obj, arguments);

  return typeof ret === 'object' ? ret : obj;

};