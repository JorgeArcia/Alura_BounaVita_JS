let pacientes = document.querySelectorAll(".paciente")

for (let i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso") // tomo el valor de el TD luego tendria que tomar lo que hay dentro
    let tdAltura = paciente.querySelector(".info-altura")

    peso = tdPeso.textContent; // de esta manera tomo el contenido dentro del Td de la tabla
    altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc") // selecciono con el DOM el lugar donde ira 

    let Px = document.querySelector(".paciente") // le asigno el valor dentro del elemento.

    let pesoValido = validarPeso(peso)
    let alturaValida = validarAltura(altura)

    if (!pesoValido) {
        tdImc.textContent = "Peso Invalido"
        paciente.classList.add("paciente-incorrecto")
    }

    if (!alturaValida) {
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

function validarPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true
    } else {
        return false
    }
}

function validarAltura(altura) {
    if (altura >= 0 && altura < 3) {
        return true
    } else {
        return false
    }
}