const obtenerNombreCompleto = (nombre, apellido) => {
    return (`${nombre} ${apellido}`)
}

const saludar = (obtenerNombreCompleto) => {
    return(`Hola ${obtenerNombreCompleto}, un gusto conocerte`)
}

const gritar = (saludo) => {
    return (`!${saludo}!`)
}

const nombreCompleto = obtenerNombreCompleto('Ada', 'Lovelace')

const saludo = saludar(nombreCompleto)

const grito = gritar(saludo)

console.log(grito)

