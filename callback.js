//callback function ek esa function hota hai jo ek function ke ander pass hota hai
function product(a,b,c){
   return a*b*c;
}
//console.log(product(1,7,9));//63

function fun(x,y){//this x defines x. This is the call-back function.
   let a = x(1,4,3);
   console.log(a-y);//5
}

//fun(product(1,4,3),7);//5
fun(product,7);