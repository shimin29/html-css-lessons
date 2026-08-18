//Array Methods 1 

// Length.
 const fruits = ["apple", "durian","kiwi","mango","orange"]
 console.log(fruits.length)

//Using length, can you write a loop to output all the fruits?
for(var i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

//Addition, Subtraction, Add in the from, Take from the middle
//Push, Pop, Shift, Unshift


fruits.push("banana") //addition
console.log(fruits)
fruits.pop("banana") //subtraction 
console.log(fruits)
fruits.unshift("pineapple")  //add in the from
console.log(fruits)
fruits.shift("apple")
console.log(fruits)

//Splice, Slice

//Remove the second element
//.splice(index, how_many)
fruits.splice(1,1)
console.log(fruits)

//Add an element in the middle
//.splice(index, 0, 'item')
fruits.splice(1,0,'Passion fruit')
console.log(fruits)

//You can also remove and add at the same time
//fruits.splice(1,1, 'Passion fruit')

//sample replace
fruits.splice(1,1,"dragon fruit")
console.log(fruits)

//slice
//.slice(start, end)
// console.log(fruits.slice(0,3))

const firstThree = fruits.slice(0,3)
console.log(firstThree)

//Get the last few elements
//.slice(stop_position_from_last) 
console.log(fruits.slice(3))