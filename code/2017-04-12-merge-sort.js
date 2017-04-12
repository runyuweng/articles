function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    var length = arr.length,  //获取数组长度
        index = Math.floor(length/2),   //将数组一分为二
        leftArr = arr.slice(0, index),  //定义划分后的左数组
        rightArr = arr.slice(index, length);  //定义划分后的右数组
    var left = mergeSort(leftArr);
    var right = mergeSort(rightArr);
    return mergeArr(left, right);  //返回合并后的数组
}
function mergeArr(left, right){
    var arr = [];
    while(left.length>0 || right.length>0){
        if(left.length == 0 && right.length > 0){
            arr = arr.concat(right);
            right = [];
        }else if(right.length == 0 && left.length > 0){
            arr = arr.concat(left);
            left = [];
        }else if(left[0] <= right[0]){
            arr.push(left.shift());
        }else if(left[0] > right[0]){
            var sh = right.shift();
            arr.push(sh);
        }
    }
    return arr;
}
var result = mergeSort([9,1,2,21,14,3,5,6,2,9,1]);
console.log(result);
