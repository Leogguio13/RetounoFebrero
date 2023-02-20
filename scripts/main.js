'use restrict';

const formulario = document.getElementById('formulario');
formulario.addEventListener("submit",eventoFormulario,)
const valorUnidad = 400000;

function eventoFormulario(e){
    
    const cantidad = document.getElementById('cantidad').value ;
    const total = cantidad*valorUnidad;
    const respuesta = document.getElementById('print');
    const op = document.getElementById('color').value;
    e.preventDefault();

    if(op ==='negro'){
        respuesta.innerHTML=`<h1>Total:$ ${total}</h1>
        <h1>Cantidad: ${cantidad}</h1>
        <style>
        div{
            margin: 0px;
            padding: 20px;
            width: 25px;
            height: 25px;
            background-color: black;
            border-radius:50%;
            text-align: left;
        }
        </style>
        <div></div>
        `;  
    } else if (op==='gris'){
        respuesta.innerHTML=`<h1>Total:$ ${total} </h1>
        <h1>Cantidad: ${cantidad}</h1>
        <style>
        div{
            margin: 0px;
            padding: 20px;
            width: 25px;
            height: 25px;
            background-color: gray;
            border-radius:50%;
            text-align: left;
        }
        </style>
        <div></div>
        `;   
        
    } else if (op==='rojo'){
        respuesta.innerHTML=`<h1>Total:$ ${total}</h1>
        <h1>Cantidad: ${cantidad}</h1>
        <style>
        div{
            margin: 0px;
            padding: 20px;
            width: 25px;
            height: 25px;
            background-color: red;
            border-radius:50%;
            text-align: left;
        }
        </style>
        <div></div>
        `;
      
    }else if(op==='fucsia'  ){
        respuesta.innerHTML=`<h1>Total:$ ${total}</h1>
        <h1>Cantidad: ${cantidad}</h1>
        <style>
        div{
            margin: 0px;
            padding: 20px;
            width: 25px;
            height: 25px;
            background-color: fuchsia;
            border-radius:50%;
            text-align: left;
        }
        </style>
        <div></div>
      
        `; 
    }
  
}

