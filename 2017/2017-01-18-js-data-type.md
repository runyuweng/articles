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
## 1.原始类型
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
## 2.引用类型
引用类型有哪些呢？简单来说就是除了上述五种基本类型之外的类型。  
其实可以统称为`对象`，对象是包含属性的无序列表，而属性是包含键（key）和值（value）。  
如果一个属性的值为函数，即可称他为`方法`。
### 2.1对象实例化
大家应该都清楚，一般对象如何实例化：  
```
var obj = new Object()；
obj.a = "a"； //为其添加属性
obj = null； //不适用对象时对其引用进行解除，释放内存
```
### 2.2如何鉴别引用类型
function可使用typeof方法来鉴别，  
而其他引用类型则需要使用instanceof方法了，例如
```
var arr = new Array();
console.log(arr instanceof Array); //true
```
### 2.3原始封装类型
下面再来看一段代码，js刚刚接触的同学可能就会产生疑惑：
```
var str = "hello";
var firstChar = str.charAt(0)  //H
```
为什么原始类型的数据也会有方法可以调用呢？  
其实js引擎在背后做了这些事：
```
var str = "hello";
var temp = new String(str);
var firstChar = temp.charAt(0);
temp = null;
```
这里的`String`就是原始封装类型，  
原始封装类型还有`Number`和`Boolean`,  
由于第二行把字符串当作对象使用，  
所以js引擎创建了字符串的实体以让其工作。  

js基础的东西还有很多，一时也写不出个完全，在以后的文章里会慢慢记录感悟。

（完）
