 function visible(){
     let x = document.getElementById("miparrafo");
     if (x.style.display === "none"){
         x.style.display = "block";
     } else {
         x.style.display = "none"
     }
 }

//-------Adivina un número-----------
let y = Math.floor(Math.random() * 10 + 1);
let adivinar = 1;

function adivina(){
let x = document.getElementById("adivina").value;
if(x == y)
 {
 console.log("acertaste")
 document.getElementById("result").innerHTML = "Acertaste en el número"
 }
 else if(x > y){
 adivinar++;
 console.log("Intenta un número más pequeño")
 document.getElementById("result").innerHTML = "Intenta un número más pequeño"

 }
 else
 {
 adivinar++;
 console.log("Intenta un número más grande")
 document.getElementById("result").innerHTML = "Intenta un número más grande"
 }

 }


// Conversor 

function pesos(){
    let pesos = document.getElementById("pesos").value
    let euros = 21
    let resultado = document.getElementById("resultado1")

    resultado.innerHTML = "Euros: "+ (pesos / euros)
}

function euros(){
    let euros = document.getElementById("euros").value
    let dolar = 1.06
    let res = document.getElementById("resultado2")
    
    res.innerHTML = "Dolares:"+ (euros * dolar)
}

function dolares(){
    let dolares = document.getElementById("dolares").value
    let bitcoin = 0.000060
    let resul = document.getElementById("resultado3")

    resul.innerHTML = "Bitcoin:" + (dolares * bitcoin)
}

// localStorage

const json = {"result":true, "count":42};
const string= JSON.stringify(json)
console.log(string)

const obj = JSON.parse(string)
console.log(obj.count)
console.log(obj.result)
//-----------
let miscoches =[
    {
        marca: "Toyota",
       modelo: "Aygo X",
       año: 2022
    },
    {
        marca: "Nissan",
       modelo: "Versa",
       año: 2018
    },
    {
        marca: "Volskwagen",
       modelo: "Polo",
       año: 2021
    }
] 

localStorage.setItem("lista", JSON.stringify(miscoches))
let recibirstring = localStorage.getItem("lista")
console.log(recibirstring)

console.log(typeof(recibirstring))

const Objeto = JSON.parse(recibirstring)
console.log(Objeto)

//---------------
function guardarDatos() {
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.password = document.getElementById("password").value;
}

function recuperarDatos() {
    if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + " Password: " + localStorage.password;
    } else {
        document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
    }
}
//---------------
//Guardar clicks
function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result2").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
      document.getElementById("result2").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }


