// Callbacks 
function mostrar(some){
    console.log(some)
  }
  function calculadora(num1,num2,callback){
    let num = num1 + num2;
    callback(num)
  }
  
  calculadora(5,26,mostrar)
//--------------------------
// Escriba una función llamada numeros que reciba una matriz y una devolución de llamada como argumentos. Si al menos dos elementos de la matriz devuelven un valor verdadero cuando se pasan como argumento a la devolución de llamada, numeros debería devolver verdadero. Si no hay al menos dos elementos de la matriz que devuelvan un valor verdadero cuando se pasan como argumentos a la devolución de llamada, numeros debería devolver falso.

// Damos como parametros los numeros de los arrays y los dividimos entre dos para sacar los valores
const impar = (num) => {
    return num % 2 === 1;
  };

  // En esta constante se coloca el callback teniendo como argumento  el array y un callback que a su vez el array creara un nuevo array donde todos los elementos cumplan la función (metodo filter()), este a su vez contendra el parametro del callback que le asignameros con la lectura del ancho del array para así determinas que si hay dos elementos o menos duelva falso 
const numeros = (array, callback) => array.filter(callback).length >= 2;

numeros([1, 2, 3, 4, 5], impar);
numeros([2, 4, 6], impar);
numeros([1, 2, 3, 4, 5], (t) => t > 3);
 
//------------------ 

function crearCita(cita, callback){ 
    var miCita = "Como yo siempre digo, " + cita;
    callback(miCita); // 2
  }
  
  function logCita(cita){
    console.log(cita);
  }
  
  crearCita("come tus vegetales!", logCita)
//------------------ 

// Ejercicio 1
const exclaim = (str) => `${str}!`;

exclaim("Adrian");
exclaim(exclaim("Adrian"));

// Ejercicio 2 
list.forEach(function(e,i) {
    console.log("i=", i, "list=", e);
  });

// Ejercicios 3
function useCallback(callback)
{
    callback(1);
    callback(2);
    callback(3);
}

function callback(sentence) {
 console.log(sentence)   // TODO: print out sentence
}

 callback('Done')


// --------Promesas-------------
const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);
// ---------------

var promise = new Promise(function(resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"
    if(x === y) {
    resolve();
    } else {
    reject();
    }
    });
    
    promise.then(function () {
    console.log('Excelente, eres un GEEK a mucha honra');
    }).catch(function () {
    console.log('Algún error ha ocurrido');
    });
// ---------------
    //  const imprimiren2seg = (saludo,valor) => {
    //      return new Promise(resolve => {
    //        setTimeout(() => {
    //          console.log(saludo,valor);
    //          resolve();
    //        },2000)
    //      })
    //    }
    //    imprimiren2seg("hola mundo",2)
    //    .then(() => imprimiren2seg("hola mundo",3))
    //    .then(() => imprimiren2seg("hola mundo",4))

//-------------
 let success = true;
 function getUsers() {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       if (success) {
         resolve([
           { username: 'john', email: 'john@test.com' },
           { username: 'jane', email: 'jane@test.com' },
         ]);
       } else {
         reject('Failed to the user list');
       }
     }, 1000);
   });
 }
 function onFulfilled(users) {
   console.log(users);
 }
 function onRejected(error) {
   console.log(error);
 }
 const promise = getUsers();
 promise.then(onFulfilled, onRejected);
 // Ejercicio 1
 const promise = new Promise((resolve, reject) => {
    const res = true;
    // An asynchronous operation.
    if (res) {
      resolve('Resolved!');
    }
    else {
      reject(Error('Error'));
    }
  });
  
  promise.then((res) => console.log(res), (err) => alert(err)); 
  // Ejercicio 2
  const enMiCumpleaños = (estaJennyEnferma) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!estaJennyEnferma) {
          resolve(2);
        } else {
          reject(new Error("Estoy triste"));
        }
      }, 2000);
    });
  };
  
  enMiCumpleaños(false)
    .then((result) => {
      console.log(`I have ${result} cakes`); // In the console: I have 2 cakes  
    })
    .catch((error) => {
      console.log(error); // Does not run
    })
    .finally(() => {
      console.log("Party"); // Shows in the console no matter what: Party
    });

    // ------ Async/await --------