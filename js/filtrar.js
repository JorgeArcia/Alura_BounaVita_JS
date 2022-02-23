var filtro = document.querySelector("#filtrar-tabla")

filtro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente")

    if (this.value.length > 0) {
        pacientes.forEach(paciente => {
            var tdNombre = paciente.querySelector(".info-nombre")
            var nombre = tdNombre.textContent
            var expresion = new RegExp(this.value, "i")
            if (!expresion.test(nombre)) {
                paciente.classList.add("invisible")
            } else {
                paciente.classList.remove("invisible")
            }
        })
    } else {
        pacientes.forEach(p => {
            p.classList.remove("invisible")
        })
    }
})