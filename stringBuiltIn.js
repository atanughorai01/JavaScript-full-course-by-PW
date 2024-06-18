let s = "Atanu";
console.log(s);//Atanu
console.log(s.toUpperCase());//ATANU
console.log(s.toLowerCase());//atanu
s.toUpperCase();//yea kuch nahi karega
let s2 = s.toUpperCase();
console.log(s,s2);//Atanu ATANU
console.log(s.trim());//cut the space from front and back
console.log(s.indexOf('A'));//0
console.log(s.charAt(3));//n
console.log(s.slice(2));//anu, substring from index 2 to end
console.log(s.slice(1,4));//tan, substring from index 2 to 5

let s3 = "  Atanu Ghorai  ";
console.log(s3,s3.length);//  Atanu Ghorai   16
let s4 = s3.trim();
console.log(s4,s4.length);//Atanu Ghorai 12
console.log(s3.lastIndexOf('a'));//12

let s5 = "Atanu Ghorai is a student";
console.log(s5);
let arr = s5.split();
let brr = s5.split(' ');
console.log(arr);//[ 'Atanu Ghorai is a student' ]
console.log(brr);//[ 'Atanu', 'Ghorai', 'is', 'a', 'student' ]
for (const iterator of arr) {
  console.log(iterator);//Atanu Ghorai is a student
}

for (const iterator of brr) {
  console.log(iterator);//Atanu Ghorai is a student in a column
}
