let personas = [];

function Persona(nombre, cedula, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen, cancionesFavoritas) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.fechaNacimiento = fechaNacimiento;
    this.correo = correo;
    this.ciudadResidencia = ciudadResidencia;
    this.ciudadOrigen = ciudadOrigen;
    this.cancionesFavoritas = cancionesFavoritas;
}

function mostrarFormularioAgregar() {
    document.getElementById('formulario-agregar').style.display = 'block';
    document.getElementById('formulario-mostrar').style.display = 'none';
}

function mostrarFormularioMostrar() {
    document.getElementById('formulario-agregar').style.display = 'none';
    document.getElementById('formulario-mostrar').style.display = 'block';
}

function agregarPersona() {
    let nombre = document.getElementById('nombre').value;
    let cedula = document.getElementById('cedula').value;
    let fechaNacimiento = document.getElementById('fechaNacimiento').value;
    let correo = document.getElementById('correo').value;
    let ciudadResidencia = document.getElementById('ciudadResidencia').value;
    let ciudadOrigen = document.getElementById('ciudadOrigen').value;
    let cancionesFavoritas = [
        document.getElementById('cancion1').value,
        document.getElementById('cancion2').value,
        document.getElementById('cancion3').value
    ].filter(cancion => cancion.trim() !== "");

    let persona = new Persona(nombre, cedula, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen, cancionesFavoritas);

    personas.push(persona);
    alert("Persona agregada correctamente.");
    document.getElementById('form-agregar').reset();
}

function mostrarPersona() {
    let posicion = document.getElementById('posicion').value;

    posicion = parseInt(posicion);
    if (isNaN(posicion) || posicion < 0 || posicion >= personas.length) {
        alert("Posición inválida. Por favor, ingrese un número entre 0 y " + (personas.length - 1) + ".");
    } else {
        let persona = personas[posicion];
        let info = `
            <p>Nombre: ${persona.nombre}</p>
            <p>Cédula: ${persona.cedula}</p>
            <p>Fecha de Nacimiento: ${persona.fechaNacimiento}</p>
            <p>Correo Electrónico: ${persona.correo}</p>
            <p>Ciudad de Residencia: ${persona.ciudadResidencia}</p>
            <p>Ciudad de Origen: ${persona.ciudadOrigen}</p>
            <p>Canciones Favoritas:</p>
            <ul>
        `;
        for (let i = 0; i < persona.cancionesFavoritas.length; i++) {
            info += `<li>${persona.cancionesFavoritas[i]}</li>`;
        }
        info += `</ul>`;
        document.getElementById('resultado').innerHTML = info;
    }
}
