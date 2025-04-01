const carousel = document.querySelector('.testimonials__carousel');
const prevButton = document.querySelector('.button__arrow-left');
const nextButton = document.querySelector('.button__arrow-right');

const containerProducts = document.querySelector('.container__products')
const innerContainer = document.querySelector('.item__container-products')

let pressed = false, startX, startScrollLeft

const dragStart = (e) => {
    pressed = true
    containerProducts.classList.add("dragging")
    startX = e.pageX
    startScrollLeft = containerProducts.scrollLeft
}

const dragging = (e) => {
    if (!pressed) return
    e.preventDefault()
    containerProducts.scrollLeft = startScrollLeft - (e.pageX - startX)
}

const dragStop = () => {
    pressed = false
    containerProducts.classList.remove("dragging")
}

containerProducts.addEventListener("mousedown", dragStart)
containerProducts.addEventListener("mousemove", dragging)
containerProducts.addEventListener("mouseup", dragStop)

document.addEventListener("DOMContentLoaded", () => { 
    gsap.from(".header__logo-text", { duration: 2, opacity: 0, scale: 0.3, ease: "back" });
})

prevButton.addEventListener('click', () => { 
    console.log('click');
    carousel.scrollBy({
        left: -500,
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    console.log('click');
    carousel.scrollBy({
        left: 500,
        behavior: 'smooth'
    });
});

const navigation = (link) => {
    
}