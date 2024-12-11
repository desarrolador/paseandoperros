document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    let currentImageIndex = 0;

    function showNextImage() {
        const images = gallery.querySelectorAll('img');
        images.forEach((img, index) => {
            img.style.display = index === currentImageIndex ? 'block' : 'none';
        });
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos
    showNextImage(); // Inicializa la galería mostrando la primera imagen
});
