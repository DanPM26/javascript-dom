function guardar(){
    //Capturar los datos de los inputs
  let nom = document.getElementById("nombretxt").value;
  let apelli = document.getElementById("apellidotxt").value;
  let age = document.getElementById("edadtxt").value;
   // Fuardamos los valores en una variable
  let inputValues = ({
    "nombre": nom,
    "apellido": apelli,
    "edad": age
  })

  //Guardar los datos en un array 
  //let datos = new Array();
  let datos = JSON.parse(localStorage.getItem('usuarios')) ? JSON.parse(localStorage.getItem('usuarios')) : []
  console.log(inputValues)
  datos.push(inputValues)
  console.log(datos)
 console.log(JSON.stringify(datos))
 localStorage.setItem('usuarios', JSON.stringify(datos))
//Guardar los datos en el localstorage

//borrar los elementos del formulario
document.getElementById("nombretxt").value = '' ;
document.getElementById("apellidotxt").value = ''; 
document.getElementById("edadtxt").value = ''; 
render()
}

function render(){
    console.log(localStorage.getItem('usuarios'));
    let lista = document.getElementById("lista");
    let datos = JSON.parse(localStorage.getItem("usuarios")) ? JSON.parse(localStorage.getItem("usuarios")) : []
    console.log(datos)
    lista.innerHTML = ''
    datos.forEach(element => {
        console.log(element)
        lista.innerHTML += `
        <p> ${element.nombre} </p>
        <p> ${element.apellido} </p>
        <p> ${element.edad} </p>
        `
    });
}
render()

// Segundo ejercicio

document.addEventListener('keydown',zoomIn);
 function zoomIn(e){
     if(e.keyCode == '38'){
       let myImage = document.getElementById('baloon');
       let changewith = myImage.clientWidth;
       if(changewith >= 120){
        alert('Es el nivel maximo')
        myImage.src = "explosion.png"
       } else {
        myImage.style.width = (changewith + 10) + "px";
       }
     }
  }

  window.addEventListener('keydown', zoomOut);
  function zoomOut(e){
     if(e.keyCode == '40'){
        let myImage = document.getElementById('baloon');
        let changewith = myImage.clientWidth;
        if(changewith == 20){
            alert ("Nivel máximo, ya está roto :(")
        } else {
            myImage.style.width = (changewith - 10) + "px"
        }
     }
  }

