window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (!header) return;

    // Calcula el desplazamiento del scroll
    const scrollY = window.scrollY;
    // Solo mueve el fondo, no el avatar
    header.style.backgroundPosition = `center ${scrollY * -0.05}px`;
});