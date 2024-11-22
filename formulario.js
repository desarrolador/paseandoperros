document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("puppyForm");
    const retrieveButton = document.getElementById("retrieveData");
    const outputDiv = document.getElementById("output");

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
        console.error();
    }

    if (retrieveButton) {
        retrieveButton.addEventListener('click', () => {
            // Recuperar los datos de Local Storage
            const storedData = localStorage.getItem('dogWalker');
            if (storedData) {
                const dogWalker = JSON.parse(storedData);
                outputDiv.innerHTML = `
                    <p>Nombre: ${dogWalker.nombre}</p>
                    <p>Ubicación: ${dogWalker.ubicacion}</p>
                    <p>Email: ${dogWalker.email}</p>
                    <p>Mensaje: ${dogWalker.mensaje}</p>
                `;
            } else {
                outputDiv.innerHTML = `<p>No hay datos guardados.</p>`;
            }
        });
    } else {
        console.error();
    }
});


