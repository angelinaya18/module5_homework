let myMap=new Map();

myMap.set("key 1","prop 1");
myMap.set("key 2","prop 2");
myMap.set("key 3","prop 3");

for(let key of myMap.keys()){
  console.log(`Ключ - ${key}, значение - ${myMap.get(key)}`);
};