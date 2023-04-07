//strings concatenation
boy="john"
second="maina"
console.log(`my name is ${boy} ${second}`);
// index ,slice,trim,split,charAt,insert,includes,toUppercase ,toLowerc
//case,
let d="the girl went to church";
console.log(d[0]);
console.log(d.indexOf("w"));
console.log(d.lastIndexOf("c"));
console.log(d.charAt(-5));
//slice -access multiple elements
console.log(d.slice(3,6));
console.log(d.slice(-6,-1));
//mapping
let m="a busy office";

let c=m.split(" ").map(a => a[0].toUpperCase()+a.substring(1).toLowerCase()).join(" ");
console.log(c);
let n=" ";
//mapping
//let b=[1,2,3,4,5];
//b=b.map((a)=>a*2);
//console.log(b);
//let mynames=["loice,faith,maryanne"];

//mynames=mynames.map((word)=>word[0].toUpperCase());
//console.log(mynames);
let a="loice went to the market";

 let e=a.split(" ").map((names)=>names[0].toUpperCase()+ substring(1).toLowerCase());
console.log(e);





















































































