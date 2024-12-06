document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("puppyForm");
    const retrieveButton = document.getElementById("retrieveData");
    const outputDiv = document.getElementById("output");

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log('Formulario enviado'); // Depuración

            // Obtener los datos del formulario
            const nombre = document.getElementById('nombre').value;
            const ubicacion = document.getElementById('ubicacion').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            // Verifica que los valores se obtienen correctamente
            console.log('Nombre:', nombre);
            console.log('Ubicación:', ubicacion);
            console.log('Email:', email);
            console.log('Mensaje:', mensaje);

            // Crear un objeto para almacenar los datos
            const dogWalker = {
                nombre: nombre,
                ubicacion: ubicacion,
                email: email,
                mensaje: mensaje
            };

            // Convertir el objeto a una cadena JSON y guardarlo en Local Storage
            localStorage.setItem('dogWalker', JSON.stringify(dogWalker));
            console.log('Datos guardados en Local Storage'); // Depuración

            // Mostrar un mensaje de éxito
            alert('Datos guardados correctamente en el sistema.');
            console.log('Datos guardados:', dogWalker);
        });
    } else {
        console.log();
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
                console.log('Datos recuperados:', dogWalker); // Depuración
            } else {
                outputDiv.innerHTML = `<p>No hay datos guardados.</p>`;
                console.log('No hay datos guardados en Local Storage'); // Depuración
            }
        });
    } else {
        console.log();
    }
});