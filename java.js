
var frases = [
    "Aguas emocionales renuevan conexiones. Reflexión y empatía guiarán momentos impactantes.",
    "Deja correr el amor. Nuevas experiencias románticas y vínculos profundos florecen.",
    "Escucha corrientes internas. Decisión sabia y verdades emocionales reveladas en un mes intuitivo.",
    "Aguas tranquilas traen paz. Reflexiona para claridad emocional navegando con tranquilidad.",
    "Aguas unen corazones. Fortalece conexiones sumérgete en relaciones más profundas.",
    "Deja fluir la creatividad. Las aguas inspiran expresiones nuevas y perspectivas innovadoras.",
    "Hábitos saludables nutren cuerpo y mente. Fluye con la armonía para una salud duradera."
];


function predicciones() {
    var valorAleatorio = Math.floor(Math.random() * 7);
    var textoPrediccion = frases[valorAleatorio];

    var demoElement = document.getElementById("demo");
    demoElement.innerHTML = '<p class="respuesta">' + textoPrediccion + '</p>';
}

