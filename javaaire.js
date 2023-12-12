var frases = [
    "La agilidad mental impulsa a los signos de aire hacia nuevas ideas y comunicación fluida.",
    "La creatividad fluye. Ideas frescas y enfoque adaptable destacan en un mes de aire inspirador.",
    "La búsqueda de conocimiento y nuevas perspectivas impulsará experiencias enriquecedoras.",
    "La adaptabilidad es clave. Los vientos de innovación y transformación soplan este mes.",
    "Forja vínculos significativos mediante el intercambio de ideas y la comprensión profunda.",
    "Deja volar la mente. Encuentra inspiración y expansión mental.",
    "Abrazá la libertad emocional después de vientos fuertes!"
];


function predicciones() {
    var valorAleatorio = Math.floor(Math.random() * 7);
    var textoPrediccion = frases[valorAleatorio];

    var demoElement = document.getElementById("demo");
    demoElement.innerHTML = '<p class="respuesta">' + textoPrediccion + '</p>';
}

