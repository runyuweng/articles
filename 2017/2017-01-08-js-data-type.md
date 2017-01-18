# js数据类型
首先来看一个例子：
```
// 原始类型
var a = 'Hi';
var b = a;
b = b + 'weng';
console.log(a === b);  // false

//引用类型
var c = ['Hi', 'weng'];
var d = c;
d.push('!');
console.log(c === d); // true
```
