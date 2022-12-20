/* let numeros =[]

function addElement(array){
  numeros.push(array)
}

function imprimir(){
  console.log(numeros)
}

addElement(5)
addElement(6)
addElement(7)
imprimir() */

/* let numeros =[]
function addElement(array){
  //Si el array no existe o está vacio
  if ( array.length == 0 || array.length === undefined){
    array.push(numeros)
  } else {
    console.log(`Este es el array: ${array}`)
  }
}

function imprimir(){
  console.log(numeros)
}

addElement(5)
addElement(6)
addElement(7)

console.log(imprimir) */

// function addElement(array){
//     let num = new Array();
//     if (num.length === 0){
//       num.push(array)
//     } else {
//       console.log(num)
//     }
//   }
  
//   addElement(5,6,7)

//----
var arr = [1, 2, 3];
printEntries(arr);

arr.length = 5; // establecer la longitud de la matriz en 5 mientras que actualmente es 3.
printEntries(arr);

function printEntries(arr) {
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    console.log(arr[i]);
  }
  console.log('=== printed ===');
}

//------------Ejercicios que salieron---------------

let numeros = [5,8,7]

function addElement(array,element){
  
  if ( numeros.length == 0 || numeros.length == undefined){
    console.log(`El elemento es ${array}`)
    numeros.push(array)
  } else {
    console.log(`El elemento que se agrego es ${array}`)
    numeros.push(array)
  }
  
  
}

addElement(5)
addElement(5)

console.log(numeros)

//........Otro que salió.........

function addElement(array,masSize){
    array = [8,8,5,8,9,9,6,5,84,5,7];
    masSize;
   
   // Slice is JS function
   masSize = array.slice(0, 7)+'...'; 
     
    return masSize 
   }
   
   addElement()

//--------

function slice(arr, start, end) {
    let result = [];
    from = Math.max(start, 0);
    to = Math.min(end);
    
    if((!end) || (end > arr.length)) {
      for(let i = from; i<arr.length; i++) {
      result.push(arr[i]);}
    } else { 
      for(let i = from; i<to; i++) {
      result.push(arr[i]);
      }
    }
    return result;
    }
    
    slice([1, 2, 3, 4, 5], 2, 4);
//---------------

// Crear un método que reciba como parámetros un arreglo de números, un número para agregarlo al arreglo y un tamaño máximo del arreglo:
// 		addElement(array, element, masSize)
// y se debe considerar lo siguiente:

// Si el elemento no existe en el arreglo y no se ha alcanzado el tamaño máximo, agregar al nuevo elemento al final.
// 	addElement([1,2,3,4], 10, 5) // [1,2,3,4,10]


// Si el elemento no existe en el arreglo y se ha alcanzado el tamaño máximo, el nuevo elemento debe reemplazar el último elemento del arreglo.
// 	addElement([1,2,3,4], 10, 4) // [1,2,3,10]


// Si el elemento ya existe en el arreglo, se debe desplazar el elemento del arreglo al final.
// 	addElement([1,2,3,4], 2, 5) // [1,3,4,2]

//--------Otro intento--------

function addElement(array,element,masSize){
    array = []
    let maximo = function(masSize){
      if(array.length >= 7){
        array.splice(0,6)
        //Elimina un solo elemento en la posición 6
      }
    }
    
    if( array.length == 0 || array.length == undefined && array.length <= maximo){
      console.log(`Se añadío el elemento al final ${element}`)   
      
      array.push(element)
    } else {
      console.log(`Te pasaste, se remplazó ${element}`)
     array.findIndex( (element,index) => element === 1 )
    }
    
    return array
  }
  
  addElement(5,6)
  
  addElement(5,7)
  
  addElement(5,6)
  
  addElement(5,6)
  
  addElement(5,6)

  //-------------------

  function addElement(array,element,masSize){
    array =[1,2,3,4,5];
    element;
    masSize = array.slice(0,7)+"..."
    
    
    if (array.length > masSize){
      console.log(`No se alcanzó el tamaño maximo del arreglo, se puede agregar el elemento ${element}`)
      numeros.push(element)
    } else {
      console.log(`Lo siento, se alcanzó el limite maximo se replazó por ${element}`)
      array.push(element)
    }
    
    return array
  }
  
  
  addElement(2)

  ///------------------
  
function addElement(array,element,masSize){
    array = [0,5];
    masSize;
   masSize = array.slice(0, 7)+ '...'; 
   
      if ( array.length == undefined || array.length == masSize){
       console.log(`Se añadió el elemento al final ${element}`)
       masSize.push(element)
     } else {
       console.log(`Ups, te pasaste, se remplazó el elemento ${element}`)
   
     }
     
    
   return masSize 
   }
   
   addElement(4,5)