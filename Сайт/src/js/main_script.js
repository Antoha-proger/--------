window.addEventListener('DOMContentLoaded', () => {
    let scroll_button = document.querySelector('.btn-up');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        
        if (scrollY > 400) {
            scroll_button.classList.add('btn-up-show');
        } else {scroll_button.classList.remove('btn-up-show')}
    })

    scroll_button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })

    let copy_input = document.querySelector('.input-button');
    let copy_notice = document.querySelector('.copy-input-result');
    let copy_output = document.querySelector('.output-button');
    let user_text = document.querySelector('#input-text');
    let output = document.querySelector('#output-text');

    copy_input.addEventListener('click', () => {
        copy_text('input');
    });

    copy_output.addEventListener('click', () => {
        copy_text('output');
    })
    

    function copy_text(button){
        let text;

        switch (button) {
            case 'input':
                text = user_text.value;
                break;
            case 'output':
                text = output.value;
        }

        navigator.clipboard.writeText(text).then(() => {
            if (text) {
                copy_notice.classList.add('copy-input-result_show');
                setTimeout(() => {
                    copy_notice.classList.remove('copy-input-result_show');
                }, 2000);
            }
        })
        
    }

})