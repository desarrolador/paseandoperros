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
});
