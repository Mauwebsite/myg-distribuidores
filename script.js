
function enviarWhatsApp() {
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;
    const telefono = '+51940165950';

    // Codificar la URL para asegurar que los caracteres especiales sean tratados correctamente
    const urlCodificada = encodeURIComponent(`Hola MyG, quisiera que me traigan este producto:  ${mensaje}, el costo en dólares es de: ${nombre}, cuánto me va a costar traerlo?`);

    // Construir la URL completa
    const url = `https://wa.me/${telefono}?text=${urlCodificada}`;

    // Intentar abrir la URL y mostrar un mensaje de error si falla
    try {
        window.open(url, '_blank');
    } catch (error) {
        alert('Ocurrió un error al enviar el mensaje. Por favor, intenta más tarde.');
    }
    
}