document.addEventListener('DOMContentLoaded', () => {
    // Cargar el footer dinámicamente
    const footerPlaceholder = document.getElementById("footer-placeholder");
    
    if (footerPlaceholder) {
        fetch("components/footer.html")
            .then(response => {
                if (!response.ok) throw new Error("Error al cargar el footer");
                return response.text();
            })
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => console.error("Error cargando el footer:", error));
    }

    
    // Formulario de contacto simulado
    const contactForm = document.querySelector('form:not(#tracking-form)');
    if(contactForm){
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            // Evitamos que salte en el login si ya pusiste lógica allí
            if(e.target.id !== 'login-form' && e.target.id !== 'resetForm'){
                alert("Gracias por contactar con RUES. Responderemos pronto.");
                contactForm.reset();
            }
        });
    }

    // Tracking form - Unificado para Index y Tracking.html
    const trackingForm = document.getElementById('tracking-form');
    const trackingResult = document.getElementById('tracking-result');
    const resultSection = document.getElementById('result-section'); // Para tracking.html

    if(trackingForm && trackingResult){
        trackingForm.addEventListener('submit', e => {
            e.preventDefault();
            const num = document.getElementById('tracking-number').value.trim().toUpperCase();

            // Si existe la sección contenedora (en tracking.html), la mostramos
            if(resultSection) {
                resultSection.style.display = 'block';
            }

            // Inyectamos el diseño de error
            trackingResult.innerHTML = `
                <div style="margin-top: 15px; padding: 12px; border: 1px solid #fee2e2; background: #fffafb; border-radius: 4px; display: flex; align-items: center; gap: 10px;">
                    <span style="font-size: 1.2rem;">⚠️</span> 
                    <div>
                        <p style="margin: 0; color: #b91c1c; font-size: 0.85rem; font-weight: bold;">
                            La referencia ${num} no figura en el sistema.
                        </p>
                        <p style="margin: 2px 0 0 0; color: #7f1d1d; font-size: 0.8rem; opacity: 0.8;">
                            Verifique el código o contacte con su oficina.
                        </p>
                    </div>
                </div>
            `;

            // Scroll suave si estamos en la página de seguimiento
            if(resultSection) {
                resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }
});