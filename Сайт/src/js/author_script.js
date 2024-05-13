window.addEventListener('DOMContentLoaded', () => {
    let technology_toggle_button = document.querySelector('.technique__toggle-button');
    let switch_buttons_block = document.querySelector('.technique__switch-buttons');
    let technology_title = document.querySelectorAll('.technique__tech-title');
    let technology_logo = document.querySelectorAll('.technique__tech-logo');
    let technology_switch_items = document.querySelectorAll('.technique__switch-item');
    let technology_description = document.querySelector('.technique__technology-description');
    let radiobutton_list = document.querySelectorAll('.technique__btn-check');
    let technology_description_text = document.querySelector('.technique__description-text');
    
    technology_toggle_button.addEventListener('click', () => {
        switch_buttons_block.classList.toggle('technique__switch-buttons_wrap');
        technology_toggle_button.classList.toggle('technique__toggle-button_wrap');
        technology_description.classList.toggle('technique__technology-description_wrap');

        technology_title.forEach(item => {
            item.classList.toggle('technique__tech-title_wrap');
        });

        technology_logo.forEach(item => {
            item.classList.toggle('technique__tech-logo_wrap');
        });

        technology_switch_items.forEach(item => {
            item.classList.toggle('technique__switch-item_wrap');
        });
    });

    radiobutton_list.forEach(item => {
        item.addEventListener('click', () => {
            if (radiobutton_list[0].checked) {
                technology_description_text.textContent = "HTML используется для создания разметки на странице.Всё что вы видите на стринце: текст, картинки, кнопки и т.д.,создается при помощи этой технологии.";
            }

            if (radiobutton_list[1].checked) {
                technology_description_text.textContent = "CSS используется создателями веб-страниц для задания цветов, шрифтов, стилей, расположения отдельных блоков и других аспектов представления внешнего вида этих веб-страниц.";
            }

            if (radiobutton_list[2].checked) {
                technology_description_text.textContent = "JavaScript – это язык программирования, который используют разработчики для создания интерактивных веб-страниц. Функции JavaScript могут улучшить удобство взаимодействия пользователя с веб-сайтом: от обновления ленты новостей в социальных сетях и до отображения анимации и интерактивных карт.";
            }
            
        })
    })

})