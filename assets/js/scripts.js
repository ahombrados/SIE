// 1. Menu responsive
const nav = document.querySelector('.navbar');
const toggleBtn = document.querySelector('.toggle-nav');

if(toggleBtn){
    toggleBtn.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}

// 2. Formulario de contacto (SOLO para contact.html)
// Buscamos un formulario que tenga un ID específico o esté en la página de contacto
const contactForm = document.querySelector('#contact-form'); 

if(contactForm){
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        alert("Gracias por contactar con RUES. Responderemos pronto.");
        contactForm.reset();
    });
}