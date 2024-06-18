a=5;
b=5;
c='5';//in java sky value of string 5 is 53, but in javascript it converted the string into integer
console.log(a==b);//true
console.log(a==c);//true
console.log(a===c);//false, it takes sky value of c (5 sky value is 53)

