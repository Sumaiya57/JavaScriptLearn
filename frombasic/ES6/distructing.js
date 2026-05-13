const array = [1,2,3,4,5];
const a= array[0];
const b= array[1];
const c= array[2];
const d= array[3];
const e= array[4];

console.log(a,b,c,d,e);

//array destructuring 
const numbers= [1,2,3,4,5];

const [x, y, z, w, v] = numbers;
console.log(x, y, z, w, v);



const student = {
    name: "Sakib",
    age: 22
};

const name = student.name;
const age = student.age;

console.log(name);
//object destructuring

const student1 = {
    name1: "Sakib",
    age1: 22
};

const { name1, age1 } = student1;

console.log(name1);