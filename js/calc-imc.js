let pacientes = document.querySelectorAll(".paciente")

for (let i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso") // tomo el valor de el TD luego tendria que tomar lo que hay dentro
    let tdAltura = paciente.querySelector(".info-altura")

    peso = tdPeso.textContent; // de esta manera tomo el contenido dentro del Td de la tabla
    altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc") // selecciono con el DOM el lugar donde ira 

    let Px = document.querySelector(".paciente") // le asigno el valor dentro del elemento.

    let pesoValido = true
    let alturaValida = true

    if ((peso < 0) || (peso > 1000)) {
        pesoValido = false
        tdImc.textContent = "Peso Invalido"
        paciente.classList.add("paciente-incorrecto")
    }

    if ((altura < 0) || (altura > 4)) {
        alturaValida = false
        tdImc.textContent = "Altura Invalida"
        paciente.classList.add("paciente-incorrecto")
    }

    if (pesoValido && alturaValida) {
        tdImc.textContent = calcularImc(peso, altura)
    }
}

function calcularImc(peso, altura) {
    let imc = peso / (altura * altura)
    return imc.toFixed(2);
}