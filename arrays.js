arr = [1,6,8,3];
console.log(arr);//[1,6,8,3]
console.log(arr.length);//4
for(let i=0;i<arr.length;i++){
  console.log(arr[i]);//1 6 8 3
}
console.log(arr[2]);//8

//C++: vectors, Java: ArrayList for dynamically add element  but in javascript arr works for everything
arr.push(9);
console.log(arr);//[ 1, 6, 8, 3, 9 ]
arr.push(0);
console.log(arr);//[ 1, 6, 8, 3, 9, 0 ]
arr.pop()
console.log(arr);//[ 1, 6, 8, 3, 9 ]
arr.unshift(2);
console.log(arr);//[ 2, 1, 6, 8, 3, 9 ] it add element in the bigining index
arr.shift();
console.log(arr);//[ 1, 6, 8, 3, 9 ] it remove element from the bigining index
