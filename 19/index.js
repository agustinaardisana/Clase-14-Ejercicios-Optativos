const calcularPuntaje = (facil, normal, dificil) => {
    console.log((facil * 3) + (normal * 5) + (dificil * 10))
}

// facil: 3 puntos
// normal: 5 puntos
// dificil: 10 puntos
calcularPuntaje(3, 0, 0) // 9
calcularPuntaje(0, 2, 1) // 20
calcularPuntaje(5, 1, 2) // 40