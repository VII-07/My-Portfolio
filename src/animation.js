import gsap from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "restart restart restart pause",
});


let tl = gsap.timeline();

//hover effect
function scale(elem, color) {
    const container = gsap.utils.toArray(elem);
    container.forEach((e) => {
        let hover = gsap.to(e, {
            scale: 1.1,
            y: '-10%',
            background: color,
            duration: 0.2,
            ease: "ease-in-out",
            paused: true,
            yoyo: true
        })
        e.addEventListener("mouseleave", () => hover.reverse());
        e.addEventListener("mouseenter", () => hover.play());
    })
}

scale('.social__network-link', 'rgb(37, 98, 254)');
scale('.about__img-2');

//navbar
gsap.from('.navbar', {
    y: '-250%',
    duration: 1,
    ease: "power4.inOut",
    delay: 1
});

//header
tl.to('.social__network-link-1', {
    y: -15,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5
})
tl.to('.social__network-link-2', {
    y: -15,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5
})
tl.to('.social__network-link-3', {
    y: -15,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5
});

gsap.from('.header__title-prime', {
    x: '-200%',
    duration: 2,
    ease: "power4.out",
    yoyo: true,
    scrollTrigger: '.header',
    delay: 1
})
tl.to('.header__btn', {
    y: '-50%',
    duration: 1.5,
    yoyo: true,
    delay: 1.5,
    repeat: -1
})

gsap.from('.header__title', {
    x: '500%',
    duration: 2,
    ease: "power4.out",
    scrollTrigger: '.header',
    delay: 1

})
gsap.from('.header__description', {
    y: '200%',
    opacity: 0,
    duration: 2,
    scrollTrigger: '.header',
    ease: "power4.out",
    delay: 1
})

// about

//typewrite effect
let app = document.querySelector('.about__title');
let typewriter = new Typewriter(app, {
    loop: true
});
typewriter.typeString('Developer')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Student')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Tea lover')
    .pauseFor(1000)
    .start();

gsap.from('.about__img-1, .about__img-2', {
    x: '200%',
    duration: 3,
    scrollTrigger: '.about',
    ease: "power4.out",
    delay: 1
});
gsap.from('.about__title-prime', {
    x: '-200%',
    duration: 2,
    scrollTrigger: '.about',
    ease: "power4.out",
    delay: 1
});
gsap.from('.about__title', {
    x: '50%',
    opacity: 0,
    duration: 2,
    scrollTrigger: '.about',
    ease: "power4.out",
    delay: 1.5
})
gsap.from('.about__description', {
    y: '100%',
    opacity: 0,
    duration: 3,
    scrollTrigger: '.about',
    ease: "power4.out",
    delay: 1
});
gsap.from('.about__img-1', {
    rotation: 360,
    duration: 12,
    ease: 'none',
    repeat: -1,
    delay: 1
});
gsap.from('.about__img-1', {
    duration: 5,
    y: '-10%',
    repeat: -1,
    ease: 'none',
    yoyo: true,
    delay: 1
});

//portfolio

gsap.from('.portfolio__title-prime', {
    x: '-200%',
    opacity: 0,
    duration: 2,
    scrollTrigger: '.portfolio',
    ease: "power4.out",
    delay: 1.5
});
gsap.from('.carousel', {
    x: '-30px',
    opacity: 0,
    duration: 6,
    scrollTrigger: '.portfolio',
    ease: "power4.out",
    delay: 1
});

//contacts
gsap.from('.contacts__type', {
    y: '100%',
    opacity: 0,
    duration: 2.5,
    scrollTrigger: '.contacts',
    ease: "power4.out",
    delay: 1
});
gsap.from('.contacts__content, .social__network-2', {
    y: '100%',
    opacity: 0,
    duration: 2.5,
    scrollTrigger: '.contacts',
    ease: "power4.out",
    delay: 1
});

gsap.from('.contacts span', {
    opacity: 0,
    duration: 2.5,
    scrollTrigger: '.contacts',
    ease: "power4.out",
    delay: 2.5
});

gsap.from('.contacts__title', {
    x: '200%',
    y: '-300%',
    opacity: 0,
    duration: 2,
    scrollTrigger: '.contacts',
    ease: "power4.out",
    delay: 1
});
gsap.from('.contacts__title-prime', {
    x: '-200%',
    duration: 2,
    scrollTrigger: '.contacts',
    ease: "power4.out",
    delay: 1.
});
gsap.from('.contacts__img-item', {
    y: 200,
    opacity: 0,
    duration: 2,
    scrollTrigger: '.contacts',
    ease: "power4.inOut",
    delay: 1
});
gsap.to('.contacts__img-item', {
    keyframes: {
        '0%': {
            y: 0,
            x: 0,
            scale: 1
        },
        '25%': {
            y: 30,
            x: 15,
            scale: 1.05
        },
        '50%': {
            y: 0,
            x: 0,
            scale: 1
        },
        '75%': {
            y: 30,
            x: -15,
            scale: 1.05
        },
        '100%': {
            y: 0,
            x: 0,
            scale: 1
        },
    },
    duration: 20,
    repeat: -1,
})