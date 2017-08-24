function test(cb, type) {
  let arr = new Array(1000000),
    length = arr.length;
  const startTime = new Date().getTime();
  cb(arr, length);
  const endTime = new Date().getTime();
  console.log(`${type}:${endTime - startTime}`)
}

function forDemo(arr, length) {
  for (let i = 0; i < length; i++) {}
}

function forInDemo(arr, length) {
  for (i in arr) {}
}

function forEachDemo(arr, length) {
  arr.forEach(() => {})
}

function mapDemo(arr, length) {
  arr.map(() => {})
}

function reduceDemo(arr, length) {
  arr.reduce(() => {}, [])
}

function everyDemo(arr, length) {
  arr.every(() => {})
}

function someDemo(arr, length) {
  arr.some(() => {})
}

function filterDemo(arr, length) {
  arr.filter(() => {})
}

test(forDemo, 'for')
test(forInDemo, 'for in')
test(forEachDemo, 'forEach')
test(mapDemo, 'map')
test(reduceDemo, 'reduce')
test(everyDemo, 'every')
test(someDemo, 'some')
test(filterDemo, 'filter')