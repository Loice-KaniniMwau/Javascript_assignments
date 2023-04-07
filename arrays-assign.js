//1
rr1 = [3,7,34,90,12]
arr2 = [true, "green", "where",12,56]
console.log(rr1.slice(-1));
console.log(arr2.slice(-1));
//we can also use .length[-1]
//2.Write a JS program that will join the following a
//rray elements into a string
myPets = ["Cow", "Python", "Snake", "Dog"];
console.log(myPets.toString()); //console.log(mypets.join("")); //
//3Write a JS script to sort the following array items

//sorting in descending order
var arr4=[-1,-9,-18,5,3,9];
var arr6=arr4.sort();
console.log(arr6.reverse());

//we can also use filter (which takes in an item and its index)
//or count how many times an elem
var myfruits=["apple","mango","apple","orange","mango","mango"];
var finalFruit


//5.f the word is present, console it else console "the search word was not found"

let arr5 = ["the", "way", "x", 4, 23];
if(arr5.includes(4)){
    console.log(4);
}else{
    console.log("the search word was not found");
}

//6.let word = "lufituaeb";

let word = "lufituaeb"
let words=word.split("");
words.sort();
console.log(words.join(""));

//replace to titlecase
const a="a busy office"
//replace //match
let test="he bought a car"
let result=test.replace(/h|b|c/gi, function(x) {
    return x.toUpperCase()
});
console.log(result);
//match
let me="she went to office";
let hername=me.match(/to/gi);
console.log(hername.length);
b="she sells sea shells at the shore";
c=b.match(/s/gi);
console.log(c.length);
e="s";
console.log(b.split(e).length-1);

let m="eiolc";
let n=m.split("");
n.sort();
console.log(n.join(""));
//
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr4=arr3.sort(sortedarray)
function sortedarray(a,b){
return a-b
}
console.log(arr4)
console.log(arr4.reverse())
//4.Write a program to remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates
var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
var finalList=[];
arr.forEach(letter=> {
    if(!finalList.includes(letter)){
        finalList.push(letter)
    }
    
})
console.log(finalList);
//or
//filtering age
var people=[{names:"loice",age:13},{
names:"kanini",age:16},{names:"jecinta",age:19
}]
var final=people.filter(adults)
function adults(value){
return value.age>=18
}
console.log(final)
