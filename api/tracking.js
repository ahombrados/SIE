document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tracking-form');
    const result = document.getElementById('tracking-result');

    if(form){
        form.addEventListener('submit', e => {
            e.preventDefault();
            const trackingNumber = document.getElementById('tracking-number').value.trim();

            if(trackingNumber === ""){
                result.innerHTML = "<p style='color:red;'>Por favor ingrese un número de seguimiento.</p>";
                return;
            }

            // Simulación de estado de envío
            const estados = [
                "En almacén, pendiente de clasificación",
                "En tránsito hacia destino",
                "Cargando en vehículo de reparto",
                "En reparto",
                "Entregado"
            ];
            const estadoAleatorio = estados[Math.floor(Math.random() * estados.length)];

            result.innerHTML = `<p>Estado del paquete <strong>${trackingNumber}</strong>: ${estadoAleatorio}</p>`;
        });
    }
});
