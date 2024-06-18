const arr = [2,8,3,3]
console.log(arr);
arr.push(5);
console.log(arr);//[ 2, 8, 3, 3, 5 ]
arr[0]=10;
console.log(arr);//[ 10, 8, 3, 3, 5 ]
// arr = 2.4;
// console.log(arr);//error


brr=[[1,2,3],[5,6,7]];//2D array
console.log(brr);//[ [ 1, 2, 3 ], [ 5, 6, 7 ] ]

a = [4,"atanu", 7.9, true,[4,7,8,9]]
console.log(a);//[ 4, 'atanu', 7.9, true, [ 4, 7, 8, 9 ] ]
for(let i=0;i<arr.length;i++){
  console.log(a[i]);
}
// {output:
// 4
// atanu
// 7.9
// true
// [ 4, 7, 8, 9 ]}


//ForOf Loop
crr=[3,7,3,8,0,2]
for (const iterator of crr) {
  console.log(iterator);//3 7 3 8 0 2 in a column
}

for(let i=0;i<arr.length;i++){
  crr[i]*= 2;
}
console.log(crr);//[ 6, 14, 6, 16, 0, 2 ]

// for (const iterator of crr) {
//   iterator *= 2;
// }
// console.log(crr);//error 


//forEach loop
ar=[3,7,6,8,0];
ar.forEach((element,i,ar) => {
  console.log(element,i,ar);
});
// output
// 3 0 [ 3, 7, 6, 8, 0 ]
// 7 1 [ 3, 7, 6, 8, 0 ]
// 6 2 [ 3, 7, 6, 8, 0 ]
// 8 3 [ 3, 7, 6, 8, 0 ]
// 0 4 [ 3, 7, 6, 8, 0 ]

