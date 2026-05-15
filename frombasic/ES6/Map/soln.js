const map = new Map();

map.set(1, "one");
map.set(true, "yes");
const objKey = { id: 1 };
map.set(objKey, "object key");
console.log(map.get(objKey)); // "object key"

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