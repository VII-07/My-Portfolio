import gsap from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "restart restart restart pause",
    scroller: ".wrapper",
    duration: 3
  });


let tl = gsap.timeline();


function scale(elem, color) {
    const container = gsap.utils.toArray(elem);
    container.forEach((e) => {
        let hover = gsap.to(e, {
            scale: 1.1,
            background: color,
            duration: 0.3,
            ease: "ease-in-out",
            paused: true,
            yoyo: true
        })
        e.addEventListener("mouseleave", () => hover.reverse());
        e.addEventListener("mouseenter", () => hover.play());
    })
}

// let tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.header',
//         start: 'bottom bottom',
//         end: 'bottom center',
//         scrub: true,
//     }
// });


gsap.from('.navbar', {
    y: '-250%',
    duration: 0.75,
    ease: "power1.inOut",
});
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
    scrollTrigger:'.header'
})
gsap.from('.header__title', {
    x: '500%',
    duration: 2,
    ease: "power4.out",
    scrollTrigger:'.header'
    
})
gsap.from('.header__description', {
    y:'200%',
    opacity:0,
    duration:2,
    scrollTrigger: '.header',
    ease: "power4.out"
})
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
    scrollTrigger:'.about',
    ease: "power4.out",
});
gsap.from('.about__title-prime', {
    x: '-200%',
    duration: 2,
    scrollTrigger:'.about',
    ease: "power4.out",
});
gsap.from('.about__title',{
    x:'50%',
    opacity:0,
    duration:2,
    scrollTrigger:'.about',
    ease: "power4.out",
})
gsap.from('.about__description', {
    y: '200%',
    opacity: 0,
    duration: 3,
    scrollTrigger:'.about',
    ease: "power4.out",
});
gsap.from('.about__img-1', {
    rotation: 360,
    duration: 12,
    ease: 'none',
    repeat: -1,
});
gsap.from('.about__img-1', {
    duration: 5,
    y: '-10%',
    repeat: -1,
    ease: 'none',
    yoyo: true,
});
//contacts
gsap.from('.contacts__type', {
    y: '300%',
    opacity: 0,
    duration: 2.5,
    scrollTrigger:'.contacts',
    ease: "power4.out",
});
gsap.from('.contacts__content', {
    y: '-300%',
    opacity: 0,
    duration: 2.5,
    scrollTrigger:'.contacts',
    ease: "power4.out",
});
gsap.from('.contacts__title', {
    x: '200%',
    opacity: 0,
    duration: 2,
    scrollTrigger:'.contacts',
    ease: "power4.out",
});
gsap.from('.contacts__title-prime', {
    x: '-200%',
    duration: 2,
    scrollTrigger:'.contacts',
    ease: "power4.out",
});


scale('.social__network-link', 'rgb(37, 98, 254)');
scale('.about__img-2');