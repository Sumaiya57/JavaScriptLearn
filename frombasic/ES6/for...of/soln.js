//works with strings
const name="sumaiya";
for(let char of name){
    console.log(char);
}
//works with arrays
const fruits=["apple","banana","grapes"];
for(let fruit of fruits){
    console.log(fruit);
}
//works with maps
const map=new Map();
map.set("name","sumaiya");
map.set("age",22);
for(let [key,value] of map){
    console.log(`${key}: ${value}`);
}

//works with sets
const set=new Set();
set.add("apple");
set.add("banana");
set.add("grapes");
for(let fruit of set){
    console.log(fruit);
}

//works with numbers
const numbers=[1,2,3,4,5];
for(let num of numbers){
    console.log(num*3);
}

//
const Lnumbers = [5, 12, 8, 20, 3];
for(let num of Lnumbers){
    if(num > 10){
        console.log(`At least one number is greater than 10: ${num}`);
        
    }
}

//To-Do Printer
const todos = [
  "Learn JS",
  "Practice ES6",
  "Build project"
];
for(let todo of todos){
    console.log(`Todo: ${todo}`);
}