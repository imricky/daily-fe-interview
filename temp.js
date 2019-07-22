
//如何快速让一个数组乱序，写出来
function shuffle(array) {
  var _array = array.concat();

  for (var i = _array.length -1 ; i>0; i-- ) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = _array[i];
    _array[i] = _array[j];
    _array[j] = temp;
  }

  return _array;
}

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var res = shuffle(a);
console.log(res)