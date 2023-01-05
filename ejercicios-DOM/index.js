//  function guardar(){
//  //Capturar los datos de los inputs
//  let nom = document.getElementById("nombretxt").value;
//  let apelli = document.getElementById("apellidotxt").value;
//  let age = document.getElementById("edadtxt").value;
//  //Guardar los datos en el localstorage
//  localStorage.setItem("Nombre",nom);
//  localStorage.setItem("Apellido",apelli);
//  localStorage.setItem("Edad",age);
//   //Limpiar los campos o inputs
//   localStorage.getElementById("nombretxt").value = "";
//   localStorage.getElementById("apellidotxt").value = "";
//   localStorage.getElementById("edadtxt").value =""; 
//   render()
//  }
//  function render(){
     
//      //Obtener datos alamacenados
//      let nombre = localStorage.getItem("Nombre");
//      let apellido = localStorage.getItem("Apellido");
//      let edad = localStorage.getItem("Edad");
//      //mostrar datos almacenados 
//      document.getElementById("nombre").innerHTML = nombre; 
//      document.getElementById("apellido").innerHTML = apellido;
//      document.getElementById("edad").innerHTML = edad; 
//  }

//  render()


function guardar(){
    //Capturar los datos de los inputs
  let nom = document.getElementById("nombretxt").value;
  let apelli = document.getElementById("apellidotxt").value;
  let age = document.getElementById("edadtxt").value;
  //Guardar los datos en un array 
  //let datos = new Array();
  let datos = JSON.parse(localStorage.getItem("usuarios")) ? JSON.parse(localStorage.getItem("usuarios")) : []
  console.log(datos)
  datos.push(nom,apelli,age)
console.log(JSON.stringify(datos))
localStorage.setItem("usuarios", JSON.stringify(datos))
//Guardar los datos en el localstorage

//borrar los elementos del formulario
document.getElementById("nombretxt").value = "" ;
document.getElementById("apellidotxt").value = ""; 
document.getElementById("edadtxt").value = ""; 
render()
}

function render(){
    let lista = document.getElementById("lista");
    let datos = JSON.parse(localStorage.getItem("usuarios")) ? JSON.parse(localStorage.getItem("usuarios")) : []
    console.log(datos)
    lista.innerHTML = ''
    datos.forEach(element => {
        console.log(element)
        lista.innerHTML += `
        <p> ${element} </p>
        `
    });
}

render()