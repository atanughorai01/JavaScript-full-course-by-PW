let s = "atanu ghorai";
console.log(s);//atanu ghorai
console.log(s.length);//12
console.log(s[4]);//u
for(let i=0;i<s.length;i++){
  console.log(s[i]);//atanu ghorai in a column
}

//forof loop
for (const char of s) {
  console.log(char);//atanu ghorai in a column
}

//for each loop does not workfor strings.