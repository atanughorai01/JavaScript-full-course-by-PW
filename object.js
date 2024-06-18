//Object is kind of like map/dictionary where we hava key-value pairs
var details = ["Atanu", 22, 92.5, false];
let x ={//x is the object
  name: "Atanu",//this are object keys or attribute.
  "nik name": "Anni",
  age: 22,
  percentage: 92.5,
  isMarried: false
};
console.log(x);
// output
// {
//   name: 'Atanu',
//   'nik name': 'Anni',
//   age: 22,
//   percentage: 92.5,
//   isMarried: false
// }
console.log(x.name);//Atanu
console.log(x.name,x.age,x['nik name'],x.percentage);//Atanu 22 Anni 92.5
x.age=30;
console.log(x.age);//30
//forin loop
for (const key in x) {
  if (Object.hasOwnProperty.call(x, key)) {
    console.log(x[key]);//Atanu Anni 30 92.5 false --> this are print in a column
    
  }
}


let car ={
  name: "Tata Motors",
  mielage: 25.8,
  speed: 200,
};
console.log(car);//{ name: 'Tata Motors', mielage: 25.8, speed: 200 }
