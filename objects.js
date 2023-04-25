
//Given an array of objects, each object representing a person with a name and age property,
// write a function that returns a new array containing the names of all people
// who are 18 years old or older.
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];
function ages(){
let empty=[]
for(let i=0; i< people.length;i++){
    
    if(people[i].age >= 18){
        empty.push( people[i].name)
       
}

}
return empty
}
console.log(ages())
//Write a function that takes an array of objects, 
//where each object represents a product with a name, price, and category property//
 //The function should return an object that groups the products by their categories,
// with the category names as keys and the arrays of products as values.
const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Shirt', price: 25, category: 'Clothing' },
  { name: 'Headphones', price: 80, category: 'Electronics' },
  { name: 'Shoes', price: 60, category: 'Clothing' }]

  const myproducts=products.reduce((group,arr)=>{
    const{category}=arr;
    group[category]=group[category]??[];
    group[category].push(arr);
    return group;
  },
  {})
  console.log(myproducts)
  //Given an array of objects, where each object represents a student with a name and an
  // array of scores, write a function that returns a new array 
  //containing the names of all students whose average score is greater than or equal to 85.
const students = [
  { names: 'John', scores: [90, 80, 85] },
  { names: 'Jane', scores: [95, 92, 88] },
  { names: 'Jim', scores: [70, 80, 75] },
  {names:'Jill',scores:[85,90,84]}
]
function myavg(){
  let averageScore=[]
  for (let i = 0; i < students.length; i++){
   
    let average = students[i].scores.reduce((total, next)=> total + next) / students[i].scores.length;
    // console.log(average);
    if(average>=85) {
      averageScore.push(students[i].names)

    }

}
return averageScore
}
console.log(myavg())
//question4
const car = {
  make: 'Ford',
  model: 'Ranger',
  year: 2023,
  displayInfo: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  },
};

function carage(){
  

}
car.age()
carage()

