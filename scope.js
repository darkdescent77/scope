//variable var

var x = 10; //en este caso la cariable x es global y se ejecutara en todo el código

if (true) {
  var y = 20;
  console.log(x); // dentro de la funcío la variable global var x = 10 conserva su valor 
  console.log(y); // var y tiene valor 20 
}

console.log(x); // fuera de la función var x = 10
console.log(y); // la variable y declarada dentro de la función conserva su valor 20

// variable let

function ejemplo() {
    let x = 10;
  
    if (true) {
      let y = 20;
      console.log(y); // En este caso y tiene el valor definido dentro de la función
    }
  
    console.log(x); // Acceso a la variable con alcance de bloque fuera del bloque
  
    console.log(y); /* la variable let y = 20 dará un error fuera del bloque donde fue declarada lo que lo hace mas preciso que la variable var */
  }
  
  ejemplo();
