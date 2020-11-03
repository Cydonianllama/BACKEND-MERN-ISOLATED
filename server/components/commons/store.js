var dataAlumnos      = require('./model').alumnos;
var dataAsistencia   = require('./model').asistencia; 

async function AllAlumnos(dataDB){
    let data = await dataAlumnos;
    return data;
}

async function Alumno(dataDB){
    let data = await dataAsistencia;
    return data;
}

module.exports = {AllAlumnos,Alumno};