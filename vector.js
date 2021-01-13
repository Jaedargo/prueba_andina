function randonficador(min, max) {
  return   Math.round (Math.random() * (max - min));
}


numeros = [];

for(var i = 0; i < 100;i++){


numerorandom=randonficador(0, 100001);
 numeros[i]=numerorandom;
//console.log('hola mundo Node! '+ numeros[i]); 

  }

//console.log('80 '+ numeros[80]); 
numeros_ordenados= numeros.sort(function (a, b){ return b - a;})

console.log(numeros_ordenados)

