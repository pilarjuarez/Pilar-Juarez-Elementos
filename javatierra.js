var frases = [
    "Los signos de tierra destacan en la estabilidad y la perseverancia.",
    "Los signos de tierra se destacan por decisiones pragmáticas y acciones concretas.",
    "Como la tierra fértil, florece el crecimiento.",
    "Los signos de tierra cosechan reconocimiento y nuevas oportunidades.",
    "Fortalece la base relacional. Nutre relaciones sólidas y profundas, construyendo lazos duraderos.",
    "Oportunidades financieras destacan, impulsando el crecimiento económico para los signos de tierra.",
    "Cultiva el bienestar. Enfocate en hábitos saludables, creando una base sólida para el bienestar duradero de cuerpo y mente.",
];



function predicciones() {
    var valorAleatorio = Math.floor(Math.random() * 7);
    var textoPrediccion = frases[valorAleatorio];

    var demoElement = document.getElementById("demo");
    demoElement.innerHTML = '<p class="respuesta">' + textoPrediccion + '</p>';
}
