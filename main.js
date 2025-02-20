document.addEventListener("DOMContentLoaded", function () {
    const galeria = document.querySelector(".galeria");

    function mostrarGaleria() {
        const rect = galeria.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            galeria.classList.add("visible");
        } else {
            galeria.classList.remove("visible"); // Para que se repita la animación al hacer scroll
        }
    }

    window.addEventListener("scroll", mostrarGaleria);
    mostrarGaleria(); // Llamada inicial en caso de que la galería ya sea visible al cargar la página
});

