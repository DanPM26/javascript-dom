 function guardar(){
     let name = document.getElementById("nombretxt").value;
     let email = document.getElementById("emailtxt").value;
     let coment = document.getElementById("comentariotxt").value; 
     let inputValue = ({
         "nombre": name,
         "email": email,
         "comentario": coment 
     })
     let datos = JSON.parse(localStorage.getItem('Comentarios')) ? JSON.parse(localStorage.getItem('Comentarios')) : []
      console.log(inputValue)
      datos.push(inputValue)
      console.log(JSON.stringify(datos))
      localStorage.setItem('Comentarios', JSON.stringify(datos))
      document.getElementById("nombretxt").value = '' ;
      document.getElementById("emailtxt").value = ''; 
      document.getElementById("comentariotxt").value = ''; 
      render()
 }
 function render(){
     console.log(localStorage.getItem('Comentarios'))
     let lista = document.getElementById('lista')
     let datos = JSON.parse(localStorage.getItem('Comentarios')) ? JSON.parse(localStorage.getItem('Comentarios')) : []
     lista.innerHTML = ''
     datos.forEach(element => {
         console.log(element)
         lista.innerHTML += `
         <p>${element.nombre} </p>
         <p>${element.email} </p>
         <p>${element.comentario} </p>
         <td><button> Borrar</button></td>
         <td><button> Editar</button></td> 
         `
     });
 }
 render()

