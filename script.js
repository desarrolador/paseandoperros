document.addEventListener('DOMContentLoaded', function() {
    // Manejar formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            // Simular envío de formulario y mostrar un mensaje de éxito
            alert(`Gracias por tu mensaje, ${nombre}. Nos pondremos en contacto contigo pronto.`);
            contactForm.reset();
        });
    }

    // Manejar formulario de aplicación
    const applicationForm = document.getElementById('applicationForm');
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const experiencia = document.getElementById('experiencia').value;

            // Simular envío de formulario y mostrar un mensaje de éxito
            alert(`Gracias por aplicar, ${nombre}. Revisaremos tu experiencia y nos pondremos en contacto contigo.`);
            applicationForm.reset();
        });
    }
});
