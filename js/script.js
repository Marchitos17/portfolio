let menuIcon = document.querySelector('#menu-icona');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
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

