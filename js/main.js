// ===== CONFIGURACIÓN FÁCIL =====

// Cambiar frutas (solo modificar rutas)
const symbols = [
    "img/cereza.jpg",
    "img/limon.jpg",
    "img/campana.jpg",
    "img/bar.jpg",
    "img/siete.jpg"
];

// Audios
const spinSound = new Audio("audio/Gambling.Mp3");
const winSound  = new Audio("audio/Win.MP3");

// Estadísticas
let wins = 0, almost = 0, losses = 0;

// Elementos del DOM
const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");
const resultText = document.getElementById("result");

document.getElementById("spinBtn").addEventListener("click", () => {
    
    spinSound.currentTime = 0;
    spinSound.play();

    // Pequeña animación opcional
    resultText.textContent = "Girando...";
    resultText.style.color = "white";

    setTimeout(() => {
        const s1 = symbols[Math.floor(Math.random() * symbols.length)];
        const s2 = symbols[Math.floor(Math.random() * symbols.length)];
        const s3 = symbols[Math.floor(Math.random() * symbols.length)];

        r1.src = s1;
        r2.src = s2;
        r3.src = s3;

        evaluar([s1, s2, s3]);

    }, 400);
});

function evaluar([a, b, c]) {

    if (a === b && b === c) {
        resultText.textContent = "GANASTE";
        resultText.style.color = "lime";
        wins++;
        winSound.play();
    }
    else if (a === b || a === c || b === c) {
        resultText.textContent = "CASI";
        resultText.style.color = "yellow";
        almost++;
    }
    else {
        resultText.textContent = "PERDISTE";
        resultText.style.color = "red";
        losses++;
    }

    // Actualizar tabla
    document.getElementById("wins").textContent = wins;
    document.getElementById("almost").textContent = almost;
    document.getElementById("losses").textContent = losses;
}