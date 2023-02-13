let arr = [1,2,4,7,8,9,3,11,17,21];

let x = arr.filter(elem => elem % 2 == 0);
console.log( x.length ); 

let y = arr.filter(elem => elem % 2 !== 0);
console.log( y.length );
