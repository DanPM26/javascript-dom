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
  //let datos = new Array(); -> aunque no es tan necesario
  // Recordemos que localstorage obtiene los valores como cadenas de texto por lo que el JSON.parse convierte las cadenas de texto en JSON (objetos) -> A su vez, añadimos el operador ternario bajo la sintaxis : condicional ? expresion1 : expresion2 
  let datos = JSON.parse(localStorage.getItem('usuarios')) ? JSON.parse(localStorage.getItem('usuarios')) : []
  console.log(inputValues)
  datos.push(inputValues)
  console.log(datos)
  // Una vez obteniendo los objetos , los convertiremos a strings
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

// Evento keydown, se produce cuando se presiona una tecla 
document.addEventListener('keydown',zoomIn);
 function zoomIn(e){
  // propiedad KEYCODE que va a leer el elemento en ASCII en este caso la tecla de arriba es el 38 
     if(e.keyCode == '38'){
       let myImage = document.getElementById('baloon');
       // utilizaremos la propiedad CLIENWIDTH ya que devuelve  el ancho visible de un elemento en píxeles, incluido el relleno, pero no el borde, la barra de desplazamiento o el margen.
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

