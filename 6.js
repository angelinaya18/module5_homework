let arr=[1,1,2,1];

let count=0;

arr.forEach(function(item,index,array){
  if(item===arr[0]) count++;
});

if(count===arr.length) console.log(true);
else console.log(false);