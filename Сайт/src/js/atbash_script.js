// Шифр Атбаш для русского алфавита
function atbashCipherRussian(text) {
    const russianAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const reversedRussianAlphabet = 'яюэьыъщшчцхфутсрпонмлкйизжёедгвба';
    let result = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();
        const index = russianAlphabet.indexOf(char);
        
        if (index !== -1) {
            if (text[i] === text[i].toUpperCase()) {
                result += reversedRussianAlphabet[index].toUpperCase();
            } else {
                result += reversedRussianAlphabet[index];
            }
        } else {
            result += text[i];
        }
    }
    return result;
}
    
// Шифр Атбаш для английского алфавита
function atbashCipherEnglish(text) {
    const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const reversedEnglishAlphabet = 'zyxwvutsrqponmlkjihgfedcba';
    
    let result = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();
        const index = englishAlphabet.indexOf(char);
        
        if (index !== -1) {
            if (text[i] === text[i].toUpperCase()) {
                result += reversedEnglishAlphabet[index].toUpperCase();
            } else {
                result += reversedEnglishAlphabet[index];
            }
        } else {
            result += text[i];
        }
    }
    return result;
}



window.addEventListener('DOMContentLoaded', () => {

    let user_text = document.querySelector('#input-text');
    let output = document.querySelector('#output-text');


    // Таблица соответствия букв алфавитов для расшифрования
    const alphabetTables = {
        en: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        ru: 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя',
    };

    let encrypt_radio = document.querySelector('.encrypt-radio');
    let decrypt_radio = document.querySelector('.decrypt-radio');
    let encrypt_decrypt_btn = document.querySelector('#encrypt-decrypt-btn');
    let enc = true;

    encrypt_radio.addEventListener('click', () => {
        output.value = '';
        user_text.value = '';
        encrypt_decrypt_btn.textContent = 'Зашифровать';
        enc = true;
    })

    decrypt_radio.addEventListener('click', () => {
        output.value = '';
        user_text.value = '';
        encrypt_decrypt_btn.textContent = 'Дешифровать';
        enc = false;
    })

    encrypt_decrypt_btn.addEventListener('click', () => {
        let languageMode = (alphabetTables['en'].includes(user_text.value[0])) ? 'en' : 'ru';

        if (enc) {
            text_to_work = user_text.value;

            switch(languageMode) {
                case "ru": 
                    output.value = atbashCipherRussian(text_to_work);
                    break;
                case "en":
                    output.value = atbashCipherEnglish(text_to_work);
                    break;
            }
        } else {
            text_to_work = user_text.value;

            switch(languageMode) {
                case "ru": 
                    output.value = atbashCipherRussian(text_to_work);
                    break;
                case "en":
                    output.value = atbashCipherEnglish(text_to_work);
                    break;
            
            }
        }
    })
})