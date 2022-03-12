const personas = [

];

function mostrarPersonas(){
    console.log("Se muestran personas");
    let registros = '';
    for (let persona of personas){
        console.log(personas);
        registros += `<li>${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById("personas").innerHTML = registros;
}

function agregarPersonas (){
    const formulario = document.forms['formulario'];
    const nombre = formulario["nombre"];
    const apellido = formulario["apellido"];

    if(nombre.value != '' && apellido.value != ''){
        const persona = new Persona (nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }else {
        alert("No se pueden agregar elementos vacios")
    }

}