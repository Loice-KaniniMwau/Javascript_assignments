//xtract the first four characters from the string below;
//"beautiful"
var a="beautiful";
console.log(a[0]);
console.log(a[1]);
console.log(a[2])
console.log(a[3]);
//Insert the following string at the tenth index of the below variable:
//"eat"
const food = "I did not have appetite today";
const Index=10;
const output=food.slice(0,Index)+"eat";
console.log(output);
//Count how many times the following string appears in the string variable:
//1. "the"

const story= "She sells sea shells at the sea shore";
const story1="the";
const story2=story.split(story1).length-1;
console.log(story2);
//2."s"
const story3="s";
const story4=story.split(story3).length-1;
console.log(story4);
const girl="CONfidant";
console.log(girl.toUpperCase());
const school="amazing";
console.log(school.toLowerCase());
const identity="beautiFUL";
console.log(identity.toLowerCase());
//3. Title case "A busy office"
let m="A busy office";

 let n=m.split(" ").map(w=>w[0].toUpperCase()+w.substring(1).toLowerCase());
 console.log(n);





//const string1 = "The lady went to the market with her sister";
// 1."market"
const string1 = "The lady went to the market with her sister";
console.log(string1.indexOf("market"));
//2. "season"
const string2 = "My favorite season is spring";
console.log(string2.indexOf("season"));