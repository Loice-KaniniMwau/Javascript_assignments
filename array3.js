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
function primenums(){
    for(let i=0; i <100;i++){
        if(i %2 !==0){
            console.log(i)
        }
    }
}
primenums()
function allprime(){
    let start=0
    let end=100
    while(start <=end){
        start++
        break
        if(start % 2 !==0){
            console.log(start)
        }
    }
}
allprime()
 //the last four multiply by 12 ,first two add by two
 function multiply_add(mynums){
    
for(let i=0;i <mynums.length-4;i++){
        console.log(mynums[i]*12)
}
for(let j=0;j<=1;j++){
console.log(mynums[j]+=2);
}

 }
 multiply_add([1,2,3,4,5,6,7,7])
 //finding a target in unsorted array
function divideArray(num){
    if(num.length<=1){
        return num
    }
let middle=Math.floor((num.length)/2)
let left=num.slice(0,middle)
let right=num.slice(middle)
return sortedArray(divideArray(left),divideArray(right))
}
function sortedArray(left,right){
    let empty=[]
    while(left.length && right.length){
        if(left[0]< right[0]){
            empty.push(left.shift())
        }
        else {
            empty.push(right.shift())
        }

    }
    return[...empty,...left,...right]
}
let num=[45,12,6,89,2,5]
let sorted=divideArray(num)
let target=6
console.log(sorted)
divideArray(num)
//binary search
function binary_search(num,target){
    let myleft=0
    let myright=num.length-1
    while(myleft <= myright){
        let mymiddle=(myleft+myright)/2
        if(num[mymiddle] ===target){
            return mymiddle
        }
        else if(num[mymiddle] < target ){
            myleft=mymiddle+1
        }
        else if(num[mymiddle]> target) {
              myright=mymiddle-1
        }
          
    }
   
}
console.log(binary_search(sorted,target))
//while loop and break when the index gets to index four
function breakingloop(mynumss){
    let start=1
    while( start <= mynumss.length){
        console.log(start)
        start+=1
          
        if(start==mynumss[4]){
            break
            
        }   
    }
    
}
breakingloop(mynumss=[1,2,3,4,5,6,7,8,9])
//capitalizing first 
// //most occuring element in an array
// function most_occurring(fruitss){
//     let frequency={}
//     let maxelement=fruitss[0]
//     let maxCount=1
//     for(let i=0;i < fruitss.length;i++){
//         let element=fruitss[i]
//         if(frequency[element]){
//             frequency[element]++
//         }
//     }
   

// }
// let fruitss=["apple","straberries","grapes","grapes"]
// most_occurring(fruitss)
//.reduce in arrays
//reduce all the values in the ray into a single output
let nums=[1,2,3,4,5]
let sum=nums.reduce((accumulator,currentvalue)=>{
    //the reduce method takes in two arguments ,callback fun
    //call back functioon and the starting point
    return accumulator+currentvalue;
},0)
console.log(sum)
//capitalizing the first letter
function capitalize(myname){
    let titlecase=myname.split("").map(element=>element[0].toUpperCase()+ element[1

    ].to)
}
