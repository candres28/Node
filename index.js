const { argv } = require('./inscribir')
const { crearArchivo } = require('./datos')

var cursos = [{
    id: 1,
    name: 'AngularJs Avanzado',
    duration: '64 horas',
    price: '$ 120.000'
},

{
    id: 2,
    name: 'JavaScript+Jquery',
    duration: '94 horas',
    price: '$ 340.000'
},

{
    id: 3,
    name: 'NodeJS',
    duration: '48 horas',
    price: '$ 40.000'
}
];

function viewcursos(array, delegate, delay) {
    var i = 0
    function loop() {
        delegate(array[i]);

        if (i++ < array.length - 1)
            setTimeout(loop, delay);
    }
    setTimeout(loop, delay);
}


if (argv.id=='' || argv.nombre=='' || argv.cedula == '') {
    console.log('Los campos nombre "-n" , id curso "-i" y cedula "-c" son requeridos');
}else
if (argv._.length != 0) {
    var sw = false;
    for (let i = 0; i < cursos.length; i++) {
        if (cursos[i].id == argv.id) {
            let data = {
                nombre: cursos[i].name,
                duration: cursos[i].duration,
                price: cursos[i].price
            };
            crearArchivo(argv.nombre, argv.cedula, data);
            sw = true;
            break;
        }
    }
    if (sw == false) {
        console.log('ID de curso no valido, por favor digite un ID de los siguientes cursos ofertados: ');
        viewcursos(cursos, function (obj) { console.log("El Id del curso es: " + obj.id + " Nombre curso: " + obj.name + " duración de: " + obj.duration + " con un valor de: " + obj.price) }, 2000)
    }
} else {
    viewcursos(cursos, function (obj) { console.log("El Id del curso es: " + obj.id + " Nombre curso: " + obj.name + " duración de: " + obj.duration + " con un valor de: " + obj.price) }, 2000)
}