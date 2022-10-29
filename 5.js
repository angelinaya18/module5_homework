let array=[1,4,7,'a','b'];

console.log('Количество элементов массива: '+array.length);

console.log('Элементы массива:');
array.map(function(item,index,array){
  console.log(item);
});