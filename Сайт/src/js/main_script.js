window.addEventListener('DOMContentLoaded', () => {
    let scroll_button = document.querySelector('.btn-up');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        
        if (scrollY > 400) {
            scroll_button.classList.add('btn-up-show');
        } else {scroll_button.classList.remove('btn-up-show')}
    }); 

    scroll_button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
})