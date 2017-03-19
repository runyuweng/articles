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
