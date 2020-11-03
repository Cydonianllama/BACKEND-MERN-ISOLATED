var store = require('./store');

async function getAllAlumnos(){
    let data = await store.AllAlumnos();
    return data;
}
async function getAlumno(typeFind,dataFind){
    let data = await store.Alumno();
    let returnData;    

    function findAlumno(type){
        switch (type) {
            case 'codigo':
                data.forEach((res)=>{
                    if(res.codigo === dataFind){
                        returnData = res;
                        break;     
                    }
                })
                break;
            case 'nombres':
                data.forEach()
                break;
        }
    }
    
    return data;
}

module.exports = {getAllAlumnos,getAlumno};
