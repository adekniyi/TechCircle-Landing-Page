const navSlide = () => {
    const burger = document.querySelector('.burger');
    // const nav = document.querySelector('.nav-links');
    const nav = document.querySelector('nav ul');
    const midcont = document.querySelector('.midcont');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        midcont.classList.toggle('fade')
    })
}

navSlide();