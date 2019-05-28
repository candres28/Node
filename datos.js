const fs = require('fs');
const express = require('express')
const app = express()

let crearArchivo = (nombre, cedula, data) => {
    texto = 'El estudiante ' + nombre + '\n' + 'con cedula: ' + cedula + '\n' + 'se inscribió al curso de: ' + data.nombre + ' con una duración de ' + data.duration + ' y una valor de ' + data.price

    console.log('Estudiante '+ nombre +' se ha realizado la inscripción exitosamente al curso '+ data.nombre);
}

module.exports = {
    crearArchivo
}

app.get('/', function (req, res) {
  res.send(texto)
})
 
app.listen(3000)