1. 手写call
```javascript
Function.prototype._call = function(ctx = window, ...args) {
  const fnKey = 'tmp_' + Date.now();
  ctx[fnKey] = this;
  const result = ctx[fnKey](...args);
  delete ctx[fnKey];
  return result;
};

// 第二个参数是数组
Function.prototype._apply = function(ctx = window, args = []) {
  const fnKey = 'tmp_' + Date.now();
  ctx[fnKey] = this;
  const result = ctx[fnKey](...args);
  delete ctx[fnKey];
  return result;
};

let obj = { x: 1 };
function fn() {
  console.log(this.x, arguments);
}
fn._call(obj, 1, 2, 3);
fn._apply(obj, [1, 2, 3]);
```
