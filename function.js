function OnetoN(n){
for(let i=1;i<=n;i++){
  console.log(i);
}
}
OnetoN(6);//1 to 6 print in a column
OnetoN(9);//1 to 9 print in a column

function sum(a,b){
  console.log(a+b);
}
sum(1,2);//3
sum(90,10);//100

function eqn(c,d){
  return Math.abs(c*c*c)+Math.abs(d*d*d);
}
console.log(eqn(-2,4));//72
