const express = require('express');
const app = express();
const path = require('path');


const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));


//variable de entorno que toma el puerto del servidpr de despliegue con render
const PORT= process.env.PORT || 8000; //proceso que voy a levantar, node main.js// lee el proceso donde lo levante// o que levante el puerto 8000

app.get('/home', (req, res)=> {
  //res.send("Hola, estamos en el home")
  res.sendFile(path.join(__dirname, '/view/homev2.html'));
})

let saludo = "Bienvenido/a, ahora estamos en tu perfil"

// Escribir tu código aquí
app.get('/perfil', (req,res)=> {
    res.send(saludo)
})

let producto ={
  "tipoProducto": null,
  "precio": null,
  "cantidad": null
}

app.get('/producto/agregar', (req,res) => {
   res.send(producto)
   
})

app.listen(PORT, ()=> console.log('Levantando un servidor con ${PORT}'))