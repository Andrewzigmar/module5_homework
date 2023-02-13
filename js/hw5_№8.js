let myMap = new Map();
myMap.set(1,2);
myMap.set('key','num');
myMap.set(3,5);

for (let name of myMap.keys()){
  console.log('ключ-',name);
}
for (let name of myMap.values()){
  console.log('значение',name);
}