//Question: Remove (filter out) even element
let arr = [1,9,2,7,4,5,6,2,8];
function fun(ele){
  if(ele%2 != 0) return true;
  else return false;
}
console.log(arr);//[1,9,2,7,4,5,6,2,8]

let brr = arr.filter(fun);
console.log(brr);//[ 1, 9, 7, 5 ]

let crr=[1,9,2,7,4,5,6,2,8];
let drr = crr.filter(function(ele){
  if(ele%2!=0) return true;
  else return false;
})
console.log(drr);//[ 1, 9, 7, 5 ]

let err=[1,9,2,7,4,5,6,2,8];
let frr=err.filter(ele=>ele%2);
console.log(frr);//[ 1, 9, 7, 5 ]

let grr=[1,9,2,7,4,5,6,2,8];
let hrr=grr.filter(ele=>{
  if(ele%2!=0) return true;
  else return false;
  //return (ele%2!=0) ? true : false;   //ternary operator
})
console.log(hrr);//[ 1, 9, 7, 5 ]