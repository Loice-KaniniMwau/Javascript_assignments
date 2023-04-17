//Create an array containing the names of all items in the inventory maximum of 10.
let item=["mango","pineapple","kiwi","watermelon"]
let final=[{item:"mango",stock_quantity: 10},{item:"pineapple",stock_quantity:20},
{item:"kiwi",stock_quantity:50},{item:"watermelon",stock_quantity:100}]

//Write a function to add a new item to the inventory, updating both arrays.

function addnew(){
  
   final.push({ item:"guava",stock_quantity:20})
   console.log( final)
}
addnew()

//Write a function to update the stock quantity of an existing item

    let updates=final.map(element=>{
        if( element.item=="pineapple"){
            element.stock_quantity=150;
           
        }
        return element
    })

console.log(updates)
//Write a function to calculate the total number of items in the inventory.
let counter = 0;
function calculate_total(){
   
   final.forEach(each=>{
    counter += each.stock_quantity

   console.log( counter)
   })
    
}
 calculate_total()
 
// //Write a function to find the item with the lowest stock quantity.
function lowest_quantity(){
let minimumStock=Math.min(...final.map(element=>element.stock_quantity))
console.log(minimumStock)
}
lowest_quantity()


