document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('puppyForm');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // Obtener los datos del formulario
            const nombre = document.getElementById('nombre').value;
            const ubicacion = document.getElementById('ubicacion').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            // Crear un objeto para almacenar los datos
            const dogWalker = {
                nombre: nombre,
                ubicacion: ubicacion,
                email: email,
                mensaje: mensaje
            };

            // Convertir el objeto a una cadena JSON y guardarlo en Local Storage
            localStorage.setItem('dogWalker', JSON.stringify(dogWalker));

            // Mostrar un mensaje de éxito
            alert('Datos guardados correctamente en el sistema.');
            console.log('Datos guardados:', dogWalker);
        });
    } else {
        console.log('El formulario con id "puppyForm" no fue encontrado.');
    }
});

