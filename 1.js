let value=prompt("Введите значение");
value=+value;
let valueType=typeof(value);
if(valueType==='number' && !isNaN(value)){
  let valueProp = value%2 === 1 ? "Нечетное" : "Четное"; 
  console.log(valueProp);
}else{
  console.log("Упс, кажется, вы ошиблись");
}