//print 1 to 10 but with delay of 1sec after each number gets printed

function hello(){
console.log("Hello");
}
function mello(){
console.log("Mello");
}
setTimeout(hello, 2*1000);//after running the code (press the run button) it will print after 2 sec.
setTimeout(mello, 3*1000);//after running the code (press the run button) it will print after 3 sec. 

// setTimeout(function(){
//   console.log("hello");
// },2*1000);
// setTimeout(function(){
//   console.log("mello");
// },1*1000);
// setTimeout(function(){
//   console.log("aur bhai");
// },5*1000);

//QUESTION: print 1 to 10 but with delay of 1sec after each number gets printed
for(let i=1;i<=10;i++){
  setTimeout(function print(){
    console.log(i);//this function is called call-back function
  },i*1000)
}