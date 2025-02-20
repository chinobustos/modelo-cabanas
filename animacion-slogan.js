// Crear un observador para detectar cuando el eslogan entra en vista
const eslogan = document.querySelector('.eslogan');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Si el eslogan es visible, se activa la animación
            eslogan.style.animation = 'none'; // Remover la animación actual
            void eslogan.offsetWidth; // Forzar un reflow para reiniciar la animación
            eslogan.style.animation = 'entradaEslogan 1s ease-out forwards'; // Reaplicar la animación
        }
    });
}, {
    threshold: 0.5  // Ejecuta cuando el 50% del eslogan esté visible
});

// Iniciar el observador
observer.observe(eslogan);
