let arr = [1,9,2,7];
console.log(arr);

brr = arr.sort();
console.log(brr);//[ 1, 2, 7, 9 ]
crr = arr.sort(function(a,b){//we can make our sort as custome sorting.
   return b-a;
});
console.log(crr);//[ 9, 7, 2, 1 ]


drr=arr.sort((a,b)=>b-a);//b-a gives decreasing order sort
console.log(drr);//[ 9, 7, 2, 1 ]

let err = [1,-9,-2,7];
console.log(err);//[1,-9,-2,7]
err=err.sort();
console.log(err);//[ -2, -9, 1, 7 ] --> It gives wrong sorting order. we can sort it through custom comparator.
err.sort((a,b)=>a-b);//a-b gives increasing order sort   
console.log(err);//[ -9, -2, 1, 7 ] --> proper (actual) increasing order sort
//ignore negative value and short (take absolute value)
err = err.sort((a,b)=>Math.abs(a)-Math.abs(b));
console.log(err);//[ 1, -2, 7, -9 ]
