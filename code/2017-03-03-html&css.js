//深拷贝
let test = {
  id:'0',
  name:'test',
  interest:['react','webpack']
}
//方法1
let test1 = JSON.parse(JSON.stringify(test));

//方法2
function deepClone(obj){
  let newObj = {};
  for(let o in obj){
    if(obj[o] instanceof Array){
      newObj[o] = [];
      obj[o].map((value)=>{
        newObj[o].push(value);
      })
    }else if(typeof obj[o]==="object"){
      newObj[o] = deepClone(obj[o]);
    }else{
      newObj[o] = obj[o];
    }
  }
  return newObj;
}
console.log(deepClone({a:{b:1,c:[1,2,3]}}));
