var frases = ["La chispa de los signos de fuego se intensificará, impulsando la acción y la vitalidad.",
"La creatividad arderá en los corazones de los signos de fuego desatando ideas innovadoras.",
"El deseo de aventura se avivará, llevando a los signos de fuego a emocionantes experiencias y descubrimientos.",
"Las llamas del amor brillarán intensamente promoviendo momentos románticos.",
"Las finanzas estarán al rojo vivo para los signos de fuego.",
"La dedicación de los signos de fuego será recompensada con reconocimiento y oportunidades profesionales.",
"La inspiracion y creatividad de los signos de fuego está en llamas!"]



function predicciones() {
    var valorAleatorio = Math.floor(Math.random() * 7);
    var textoPrediccion = frases[valorAleatorio];

    var demoElement = document.getElementById("demo");
    demoElement.innerHTML = '<p class="respuesta">' + textoPrediccion + '</p>';
}
