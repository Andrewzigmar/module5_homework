const x = +prompt('ведите число','');
if(typeof x !=="number"){
  alert('Упс, кажется, вы ошиблись');
}
else if(isNaN(x % 2)){
  alert('Это не число!');
} 
else if(x % 2 === 0){
  alert('число четное');
}
else{
  alert('число не четное')
}