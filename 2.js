let x=5;
let xType=typeof(x);

switch(xType){
  case 'number': 
    console.log('x - число'); 
    break;
  case 'string':
    console.log('x - строка'); 
    break;
  case 'boolean':
    console.log('x - логическое значение'); 
    break;
  default:
    console.log('Тип x не определен'); 
    break;
}