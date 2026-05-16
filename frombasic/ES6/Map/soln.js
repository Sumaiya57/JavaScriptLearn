//ex-1
const map = new Map();

map.set(1, "one");
map.set(true, "yes");
const objKey = { id: 1 };
map.set(objKey, "object key");
console.log(map.get(objKey)); // "object key"

//ex-2
const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);
console.log(map1.size);
console.log(map1);
map1.has("a"); // true
map1.delete("a");

console.log(map1.size);
console.log(map1);
map1.clear();
console.log(map1);

//ex-3
const map2 = new Map();
const objKey1 = { name: "Rahim", marks: 85 };
map2.set(102, objKey1);
console.log(map2.get(102)); // { name: "Rahim", marks: 85 }
const objKey2 = { name: "Karim", marks: 90 };
map2.set(103, objKey2);
console.log(map2.get(103)); // { name: "Karim", marks: 90 }
const objKey3 = { name: "Jabbar", marks: 90 };
map2.set(104, objKey3);
console.log(map2.get(104)); // { name: "Jabbar", marks: 70 }

for(let [key, value] of map2){
    if(value.marks > 80){
        console.log(`Student: ${value.name}, Marks: ${value.marks}`);
    }
}
let highestMarks = 0;
let topStudent = "";
for(let [key, value] of map2){
         if(value.marks > highestMarks){
        highestMarks = value.marks;
        topStudent = value.name;
    }
         
}
console.log(`Top Student: ${topStudent}, Marks: ${highestMarks}`);