//write a function that accepts an array of strings and console.logs each element using a for loop.
let mystrings=["loice","kanini","mwau","maureen"]
array(mystrings)
function array(mystrings){

  for (let item = 0; item < mystrings.length; item++) {
        
        console.log(mystrings[item])
    }
}
//write a function that accepts an array of numbers and uses the forEach() method
// to console.log each number multiplied by 2.
 let myNumbers=[1,2,3,4,5]
 numbers(myNumbers)
 function numbers(myNumbers){
    myNumbers.forEach(num=> {
        console.log( num*2)
     });
 }
// //write a function that takes in an array of numbers and consoles 
// //the first four items multiplied by 8 and the last two added by 5.
// // Console the array with the new values
 let mynumbers=[1,2,3,4,5,6]

 multiply_add(mynumbers)
 function multiply_add(mynumbers){
    for(let multiply=0; multiply <4 ; multiply++){
        mynumbers[multiply]*=8
    }
    for(let add=mynumbers.length-2; add<mynumbers.length;add++){
        mynumbers[add]+=5
    }
    console.log(mynumbers)
}

//rite a function that takes in the following array and use a while loop 
//to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
let i=0;
mynumbersS(arrNum)
function mynumbersS(arrNum){


while(i < arrNum.length ){
    console.log(arrNum[i])
    i++
    
    if(i==5){
        
        break;
        
}

}
    
}
//rite a function that takes in a an array of strings and use a continue 
//statement when the item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi']
myfruits(fruits)
function myfruits(fruits){
for(let i=0; i<fruits.length;i++){
   
   if(i==2){
       continue;
     
   }
   console.log(fruits[i])
   
}

}
 