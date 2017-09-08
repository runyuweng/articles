# React渲染逻辑
主要分为this.setState()、this.forceUpdate和初始时的render。  
重点描述前两个方法将会进行的详细操作。  
看完下图你可以轻松回答这几个问题：  
- setState为何要做批处理，批处理在何时开始又是何时结束？
- 在一次onClick事件中多次调用forceUpdate方法会触发几次render？
...

![](../img/React渲染逻辑.png)