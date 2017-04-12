# js实现归并排序
归并排序的主要思想是分治法，把问题划分成若干个小问题逐个击破。  
归并排序的主要步骤有以下三个：
- 将数组划分成两个大小尽可能相等的小数组
- 将小数组重复以上操作直至数组的长度为1，然后返回当前数组
- 将返回的数组进行合并操作，并返回合并后的新数组
- 重复以上操作直到所有小数组都被合并

这里较为重要的一点是，由于已将数组划分成最小元素，所以和并小数组时合并的时有序数组。
## 第一步
创建一个mergeSort函数，用来递归执行将数组划分。
```
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
```
## 第二步
创建mergeArr函数，用来将两个顺序数组（小数组）合并。  
循环直至左右数组都已被合并如新数组，这里再循环中分四种情况:
1.左数组以合并入新数组而右数组中还含有元素  
2.右数组以合并入新数组而左数组中还含有元素  
3.左右数组都含有元素而左数组的第一个元素小于等于右数组的第一个元素  
4.左右数组都含有元素而左数组的第一个元素大于右数组的第一个元素
```
function mergeArr(left, right){
    var arr = [];   //返回的新数组

    while(left.length>0 || right.length>0){
        if(left.length == 0 && right.length > 0){
            //注意 Array.prototype.concat() 方法是返回一个新的数组而不是在原数组上进行修改
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
```
## 第三步
调用以上两个方法，返回结果。
```
var result = mergeSort([9,1,2,21,14,3,5,6,2,9,1]);
console.log(result);
```
## 完整代码
以下是完整代码：
```
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
```
