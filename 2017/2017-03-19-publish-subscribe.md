# redux实现
## redux简单介绍
redux主要有以下几个名词个人认为较为重要
- store 存储状态
- reducer 一些逻辑的处理
- dispatch 用于分发action
- action 改变store的唯一方法

## 实现要求
- 能存储状态
- 实现绑定
- 实现监听
- 一旦触发将把执行相应逻辑后的结果派发到目标对象
- 可以通过方法获取到当前的store的内容

## 代码
```
//reducer必须返回一个新的state
function redux(reducer, initialState){
  var currentState = initialState,
      events = [];
  //获取当前state的快照
  function getState(){
    return currentState;
  }
  //订阅事件
  function subscribe(event){
    events.push(event);
  }
  //派发事件
  function dispatch(action){
    newState = reducer(action);
    events.map((func)=>{
      func();
    })
  }
  return {
    getState,
    subscribe,
    dispatch
  }
}

var store = redux(function(){ return 1},2);
console.log(store.getState());

```
