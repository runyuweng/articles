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
由此可以引出原始类型数据和引用类型数据的定义：
>原始类型：保存为简单的数据值。
>引用类型：保存为对象，其本质是指向内存位置的引用。

这就不难解释为什么上述代码输出的分别是`false`和`true`了，  
在第二个小例子中`c`和`d`同时指向一个内存位置，  
所有把他们做比较返回的是`true`。
## 原始类型
js有五种原始类型：
- boolean，布尔类型，值为`true` 或`false`
- number，数字类型，值为数字（包括整形和浮点型）
- string，字符串类型，值为字符串（用引号括住）
- null，空类型，值为`null`
- undefined，未定义类型，值为`undefined`  

鉴别原始类型可以使用`typeof`方法，除了`null`，当使用
```
console.log(typeof null);
```
会输出"object",因此当检验`null`时可以使用"==="。
