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