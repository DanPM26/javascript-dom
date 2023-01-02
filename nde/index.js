// const verduras = require("./app");

// verduras.forEach((verdura) =>{
//     console.count(verdura)
// })

// importar
// const {verduras, dinero} = require("./app")

// verduras.forEach((verdura) =>{
//      console.count(verdura)
//      })
//      console.log("mi dinero actual es:", dinero);

// Ejercicio 1
//  const student = require("./app")

// console.log(student);
//    delete student.userno;
//    console.log(student);

// Ejercicio 2 
 const museos = require("./app")

function añadirmuseo(museo,costo,localidad){
    museos.push({museo,costo,localidad})
  }
function imprimir(){
    console.log(museos)
}

añadirmuseo("Bellas Artes",50,"cdmx")
imprimir()