//冒泡排序
function swap(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - 1 - i; j++) {
          if (arr[j] > arr[j+1]) {        //相邻元素两两对比
              var temp = arr[j+1];        //元素交换
              arr[j+1] = arr[j];
              arr[j] = temp;
          }
      }
  }
  return arr;
}

// var a = [5, 6, 2, 7, 8, 1, 9, 3, 4];
// var b = bubbleSort1(a);
// console.log(b);

//选择排序
function selectSort(arr) {
  var n = arr.length;
  for (var i = 0; i < n; i++) {
    var minIndex = i;
    for (var j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    if (i !== minIndex) {
      swap(arr, i, minIndex);
    }
  }
  return arr;
}

var a = [5, 6, 2, 7, 8, 1, 9, 3, 4];
var b = selectSort(a);
console.log(b);


