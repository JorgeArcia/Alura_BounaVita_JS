document.querySelector('#adicionar-paciente').addEventListener("click", adicionar)

function adicionar() {
    event.preventDefault()
    var formulario = document.querySelector("#form-adicionar")
    var px = capturarDatosPx(formulario)

    var errorsPx = validarPx(px)
    if (errorsPx.length > 0) {
        showErrors(errorsPx)
        return
    }

    var pxTr = construirTr(px)
    tabla = document.querySelector("#tabla-pacientes")
    tabla.appendChild(pxTr)
    formulario.reset()

    var mensajeErrores = document.querySelector("#mensajes-errores")
    mensajeErrores.innerHTML = ""
}

function capturarDatosPx(form) {
    var px = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    return px
}

function construirTr(px) {
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(construirTd(px.nombre, "info-nombre"))
    pacienteTr.appendChild(construirTd(px.peso, "info-peso"))
    pacienteTr.appendChild(construirTd(px.altura, "info-altura"))
    pacienteTr.appendChild(construirTd(px.gordura, "info-gordura"))
    pacienteTr.appendChild(construirTd(px.imc, "info-imc"))

    return pacienteTr
}

function construirTd(dato, clase) {
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;

    return td
}

function validarPx(px) {
    var errores = []
    if (!validarPeso(px.peso)) {
        errores.push("El peso es incorrecto")
    }
    if (!validarAltura(px.altura)) {
        errores.push("La altura es incorrecta")
    }
    if (px.nombre.length == 0) {
        errores.push("El nombre no puede estar vacio")
    }
    if (px.peso.length == 0) {
        errores.push("El peso no puede estar vacio")
    }
    if (px.altura.length == 0) {
        errores.push("La altura no puede estar vacio")
    }
    if (px.gordura.length == 0) {
        errores.push("El % de gordura no puede estar vacio")
    }

    return errores
}

function showErrors(errores) {
    var ul = document.querySelector("#mensajes-errores")
    ul.innerHTML = "" //me saca los errores cada vez que pase.
    errores.forEach(error => {
        var li = document.createElement("li")
        li.textContent = error
        ul.appendChild(li)
    });
}