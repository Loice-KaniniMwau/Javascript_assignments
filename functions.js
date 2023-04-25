//Create an array containing the names of all items in the inventory maximum of 10.
let item=["mango","pineapple","kiwi","watermelon"]
let stock_quantity=[10,20,50,100]
// let final={}
// item.forEach((element,index)=>{
// final[element]=stock_quantity[index]

// })
// console.log(final)
let final=[{item:"mango",stock_quantity: 10},{item:"pineapple",stock_quantity:20},
{item:"kiwi",stock_quantity:50},{item:"watermelon",stock_quantity:100}]
console.log(final.item)
//Write a function to add a new item to the inventory, updating both arrays.

function addnew(){
  
   final.push({ item:"guava",stock_quantity:20})
   console.log( final)
}
addnew()
// function addnew(){
//     final.guava=20
    
// }
// addnew()
// console.log(final)

//Write a function to update the stock quantity of an existing item

    let updates=final.map(element=>{
        if( element.item=="pineapple"){
            element.stock_quantity=150;
           
        }
        return element
    })

console.log(updates)
// function updating(){
//     final["pineapple"]=150
// }
// updating()
// console.log(final)
//Write a function to calculate the total number of items in the inventory.
let counter = 0;
function calculate_total(){
   
   final.forEach(each=>{
    counter += each.stock_quantity
   console.log( counter)
   })
    
}
 calculate_total()
// let counter=0;
// function calculate_total(){
// let sum=stock_quantity.reduce((prev,current)=>prev+current,
//  counter);
// console.log(sum)
// }
// calculate_total()
 
// //Write a function to find the item with the lowest stock quantity.
function lowest_quantity(){
let minimumStock=Math.min(...final.map(element=>element.stock_quantity))
console.log(minimumStock)
}
lowest_quantity()
// function lowest_quantity(){
//     let minimumStock=Math.min(...stock_quantity)
//     console.log(minimumStock)
// }
// lowest_quantity()

//correction//updating an item
let check=item.indexOf("watermelon")
if(check > -1){
    stock_quantity[check]=200
    console.log(stock_quantity)
}
else{
    console.log("item not in the inventory")
}
//item with lowest quantity
let min=Math.min(...stock_quantity)
let index=stock_quantity.indexOf(min)
console.log(item[index])



