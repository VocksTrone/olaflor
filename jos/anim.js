// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tú y yo, los dos juntito' frente al mar", time: 14 },
  { text: "Sé por dónde quieres ir a parar", time: 18 },
  { text: "Aunque mires así no servirá", time: 23 },
  { text: "Si es que nos entendemos sin hablar", time: 27 },
  { text: "Muero cuando te vas", time: 32 },
  { text: "Toco el cielo si estás", time: 36 },
  { text: "Sentada en mi portal", time: 40 },
  { text: "Siempre haciéndote esperar", time: 45 },
  { text: "Y ahora quiero que vuelvas como un niño los finde'", time: 49 },
  { text: "Desde que te has ido no hacen gracia los chiste'", time: 53 },
  { text: "Me he cortado el pelo, me he comprado otro tinte", time: 58 },
  { text: "Buscando a ver si encuentro alguna como tú en Tinder", time: 63 },
  { text: "Mi niña, eres la prota' de mis canciones tristes", time: 66 },
  { text: "No pue'o cerrar los ojos mientras te me desvistes", time: 70 },
  { text: "Tú dile a las demás que no me quedan más chicles", time: 75 },
  { text: "Solo te doy a ti el amor, es así de simple", time: 79 },
  { text: "Woh, oh-oh, oh-oh-oh-oh", time: 81 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);