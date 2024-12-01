/*ScrollReval*/

ScrollReveal({ 
    //reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.hero, .heading, .about-image', { origin: 'top' });
ScrollReveal().reveal('.about-text h2, .timeline-contenuto', { origin: 'bottom' });
ScrollReveal().reveal('.about-text p', { origin: 'left' });
ScrollReveal().reveal('.skills-list', { origin: 'right' });


// Funzione per resettare il modulo dopo l'invio
function resetForm() {
    // Pausa per consentire a Formspree di inviare i dati
    setTimeout(function() {
        // Resetta il modulo
        document.getElementById("contact-form").reset();
        
        // Scorri verso l'alto
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Scroll con animazione
        });
    }, 1000); // 1 secondo di attesa prima di resettare il modulo
}
// Mostra il bottone solo quando si scorre giù
window.onscroll = function() {
    var btn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
    // Elementi principali
    let menuIcon = document.querySelector('#menu-icona');
    let navbar = document.querySelector('.navbar');
    let navLinks = document.querySelectorAll('.navbar a');
    let header = document.querySelector('header');
    let sections = document.querySelectorAll('section');

    // Mostra/nasconde il menu
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Chiude il menu quando si clicca su un link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });

    // Evidenzia i link durante lo scroll e gestisce il menu sticky
    window.onscroll = () => {
        let top = window.scrollY;

        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
                });
            }
        });

        // Aggiunge/rimuove la classe sticky all'header
        header.classList.toggle('sticky', top > 100);

        // Chiude il menu durante lo scroll
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
});


