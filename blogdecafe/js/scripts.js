const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', readText);
email.addEventListener('input', readText);
mensaje.addEventListener('input', readText);

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const { nombre: nombreValor, email: emailValor, mensaje: mensajeValor } = datos;
    if (nombreValor === '' || emailValor === '' || mensajeValor === '') {
        alert('¡Todos los campos son obligatorios!', true);

        return;
    }

    alert('¡Mensaje enviado correctamente!');

    formulario.reset();

    datos.nombre = '';
    datos.email = '';
    datos.mensaje = '';
});

function readText(e) {
    datos[e.target.id] = e.target.value;
}

// Alerts
function alert(m, isError = false) {
    let existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }

    const alert = document.createElement('P');
    alert.textContent = m;
    alert.classList.add('alert'); // Añadir clase común para todas las alertas

    if (isError) {
        alert.classList.add('error');
    } else {
        alert.classList.add('send');
    }

    formulario.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 3000);
}