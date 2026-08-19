const cards = document.querySelectorAll(".creator-card");

if (cards.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                entry.target.style.transitionDelay = ${index * 60}ms;

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, { threshold: 0.12 });

    cards.forEach(card => {

        card.classList.add("reveal");

        observer.observe(card);

    });

    document.addEventListener("DOMContentLoaded",()=>{

    const items=document.querySelectorAll(".reveal");

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },{threshold:0.12});

    items.forEach(item=>observer.observe(item));

});
}