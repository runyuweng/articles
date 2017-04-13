# React深层组件交流
如果不使用redux，如何来在两个或者多个无关的组件之间信息传递？

## 方法一：addEventListener
因为单页应用始终是在一个document中，  
所以可以通过事件的监听与派发来实现不同组件组件之间的通信。  
`步骤`：
- 在组件一中获取到某一个真实节点一，为其添加监听事件
- 在组件二中穿件event，并给一个真实节点二添加click事件
- 完成以上步骤后，在真实节点二受到点击时会向真实节点一派发click事件

`注意`：
- 以上步骤建议在componentDidMount()这个生命周期中完成。
- 在组件卸载时需要把取消的事件的订阅

组件一：
```
    this.refs.list.addEventListener('communicate', ()=>{
        //可以获取到组件儿中传递的信息
        alert('name',event.name,'id',event.id);
    });
```
组件二：
```
    var event = document.createEvent('HTMLEvents');
    event.initEvent("communicate", true, true);
    enent.name = "w";
    event.id = "001";
    this.refs.ul.addEventListener('click', ()=>{         
        obj.dispatchEvent(event);
        //obj为绑定事件的节点,也就是组件一中的this.refs.list
    });
```
`缺陷`:必须获取到派发事件目标的真实节点，这个可能在开发中比较麻烦，并且一旦代码规模起来不好维护。

## 方法二：使用订阅／发布
订阅发布是这个问题很好的解决策略之一，他避免了第一种方法所带来的问题，不必获取到真实节点，并且使用更方便。

`步骤`：
- 在index.html中加入创建publisher的代码，以保证在各个组件中都能获取到publisher对象   
- 在组件一中注册事件并加入回调函数
- 在组件二中发布注册过的事件

`注意`：
- 以上步骤建议在componentDidMount()这个生命周期中完成。
- 在组件卸载时需要把取消的事件的订阅

index.HTMLEvents
```
<script>
    var publisher = {
        subscribers : {
          any: []
        },
        subscribe: function(fn, type){
          type = type || 'any';
          if(typeof this.subscribers[type] === "undefined"){
              this.subscribers[type] = [];
          }
          this.subscribers[type].push(fn);
        },
        unsubscribe: function(fn, type){
          this.visitSubscribers('unsubscribe', fn, type);
        },
        publish: function(publication, type){
          this.visitSubscribers('publish', publication, type);
        },
        visitSubscribers: function(action, arg, type){
          var pubtype = type || 'any',
              subscribers = this.subscribers[pubtype],
              i,
              max = subscribers.length;
          for (var i = 0; i < max; i++) {
              if(action === 'publish'){
                  subscribers[i](arg);
              }else{
                  if(subscribers[i] === arg){
                      subscribers.splice(i, 1);
                  }
              }
          }
        }
    }
</script>
```
组件一：
```
    publisher.subscribe((arg)=>{
        alert(arg);
    },'alert')
```
组件二：
```
    onClick={() => {

        publisher.publish('参数','alert');

        this.setState({"active": i});
        this.props.change(value.category_id);

    }}
```
