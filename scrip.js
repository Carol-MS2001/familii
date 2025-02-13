document.addEventListener("DOMContentLoaded", function() {
    // Botón de reproducción de música
    const playMusicButton = document.getElementById("playMusic");
    const music = document.getElementById("musica");

    playMusicButton.addEventListener("click", function() {
        if (music.paused) {
            music.play();
            playMusicButton.textContent = "⏸ Pausar Música";
        } else {
            music.pause();
            playMusicButton.textContent = "🎵 Reproducir Música";
        }
    });

    // Funcionalidad para mostrar imágenes y texto
    const botonesMostrar = document.querySelectorAll(".mostrar");

    botonesMostrar.forEach((boton) => {
        boton.addEventListener("click", function() {
            const tarjeta = this.closest(".foto");
            const imagen = tarjeta.querySelector("img");
            const texto = tarjeta.querySelector("p");

            if (imagen.style.display === "none") {
                imagen.style.display = "block";
                texto.style.display = "block";
                this.textContent = "Ocultar";
            } else {
                imagen.style.display = "none";
                texto.style.display = "none";
                this.textContent = "Ver";
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    function crearCorazon() {
        const corazon = document.createElement("div");
        corazon.classList.add("corazon");
        corazon.innerHTML = "❤️";

        corazon.style.left = Math.random() * 100 + "vw"; // Posición aleatoria en la pantalla
        corazon.style.animationDuration = Math.random() * 3 + 2 + "s"; // Velocidad aleatoria

        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 5000); // Se elimina después de 5 segundos para que no sature la pantalla
    }

    setInterval(crearCorazon, 300); // Genera un nuevo corazón cada 300ms
});