const links = document.querySelectorAll('.nav-link');
const section = document.querySelectorAll('.sections');

window.onscroll = () => {
    let current = "home";
    section.forEach((sections) => {
        const sectionTop = sections.offsetTop;
        if(pageYOffset >= sectionTop-60) {
            current = sections.getAttribute('id');
        }
    })
    links.forEach((item) => {
        item.classList.remove('active');
        if(item.href.includes(current)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    })
}