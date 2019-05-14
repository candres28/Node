const fs = require('fs');

let crearArchivo = (nombre, cedula, data) => {
    texto = 'El estudiante ' + nombre + '\n' + 'con cedula: ' + cedula + '\n' + 'se inscribió al curso de: ' + data.nombre + ' con una duración de ' + data.duration + ' y una valor de ' + data.price

    fs.writeFile('informacion.txt', texto, (err) => {
        if (err) throw (err);
        console.log('Estudiante '+ nombre +' se ha realizado la inscripción exitosamente al curso '+ data.nombre);
    });
}

module.exports = {
    crearArchivo
}