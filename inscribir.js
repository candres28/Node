const opciones={
    id: {
        default: '',
        demand: true,
        alias: 'i'
    },
    nombre:{
        default: '',
        demand: true,
        alias: 'n'
    },
    cedula:{
        default: '',
        demand: true,
        alias: 'c'
    }
}

const argv=require('yargs')
.command('inscribir', 'Inscripciones', opciones).argv

module.exports={
    argv
};

