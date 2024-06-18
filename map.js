//Map basically ager mughe ek array se ek aur array banana ha to ussise related with some specific changes
// let arr = [1,6,3,8];
// console.log(arr);//[ 1, 6, 3, 8 ]
// let brr=[];
// for (const ele of arr) {
//   brr.push(ele*2);
// }
// console.log(brr);//[ 2, 12, 6, 16 ]

function square(ele){
  return ele*ele;
}
let arr=[1,-6,-3,8];
console.log(arr);//[1,-6,-3,8]
let brr = arr.map(square);
console.log(brr);//[ 1, 36, 9, 64 ]

let crr=arr.map(function(ele){
  return ele*ele*ele;
});
console.log(crr);//[ 1, -216, -27, 512 ]

let drr=arr.map(ele=>{
  return 2*ele;
});
console.log(drr);//[ 2, -12, -6, 16 ]

let err=arr.map(ele=>ele*3);
console.log(err);//[ 3, -18, -9, 24 ]