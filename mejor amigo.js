document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('commentForm');
    const commentSection = document.getElementById('commentSection');

    // Manejar envío de formulario
    if (commentForm) {
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const comentario = document.getElementById('comentario').value;

            // Crear un nuevo comentario
            const newComment = document.createElement('div');
            newComment.classList.add('comment');

            const commentName = document.createElement('h4');
            commentName.textContent = nombre;
            newComment.appendChild(commentName);

            const commentText = document.createElement('p');
            commentText.textContent = comentario;
            newComment.appendChild(commentText);

            // Añadir el nuevo comentario a la sección de comentarios
            commentSection.appendChild(newComment);

            // Limpiar formulario
            commentForm.reset();
        });
    }

    // Carrusel de imágenes (opcional)
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
