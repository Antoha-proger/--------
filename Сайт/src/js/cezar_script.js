window.addEventListener('DOMContentLoaded', () => {
    let user_text = document.querySelector('#input-text');
    const step = 3;
    let output = document.querySelector('#output-text');
    let encrypt_button = document.querySelector('#encrypt-btn');
    let decrypt_button = document.querySelector('#decrypt-btn');
    // let encrypt_decrypt_btn = document.querySelector('#encrypt_decrypt_btn');
    let text_to_work;
    let pos;

    // Список со спец. символами
    let OtherSymbols = [' ',',','.',':',';','!','?','-','_','=','+','(',')','[',']','@','`',"'",'"','<','>','|','/','%','$','^','&','*','~'];

    // Список с цифрами
    let Numbers = ['0','1','2','3','4','5','6','7','8','9'];

    // Русский алфавит с прописными буквами
    let RusAlfUp = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];

    // Русский алфавит со строчными буквами
    let RusAlfLower = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

    // Английский алфавит с прописными буквами
    let EngAlfUp = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    // Английский алфавит со строчными буквами
    let EngAlfLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','m','o','p','q','r','s','t','u','v','w','x','y','z'];

    // Создание пустых массивов, в которые будут сохранятся измененные массивы
    let RusAlfUpEncrypt = Array(33);
    let RusAlfLowerEncrypt = Array(33);
    let EngAlfUpEncrypt = Array(26); 
    let EngAlfLowerEncrypt = Array(26);
    let NumbersEncrypt = Array(10);

    initEncrypt();

    function initEncrypt() {
        RusAlfUpEncrypt = CezarEncrypt(step, RusAlfUp);
        RusAlfLowerEncrypt = CezarEncrypt(step, RusAlfLower);
        NumbersEncrypt = CezarEncrypt(step, Numbers);
        EngAlfUpEncrypt = CezarEncrypt(step, EngAlfUp);
        EngAlfLowerEncrypt = CezarEncrypt(step, EngAlfLower);
    }

    function CezarEncrypt(step, arr) {
        let copy_alf = arr.slice();
        let i = 0;

        while ((i + step) < (copy_alf.length)) {
            let buff = copy_alf[i];
            copy_alf[i] = copy_alf[i + step]
            copy_alf[i + step] = buff;
            i++;
        }
        return copy_alf;
    }

    function contains(symb, arr) {
        let letter = symb;
        pos = 0;

        for (let i = 0; i < arr.length; i++) {
            if (letter === arr[i]) {
                pos = i;
                return true;
            }
        }
    }

    function encrypt(text) {
        let result = '';

        for (let i = 0; i <= text.length; i++) {
            let symbol = text[i];

            if (contains(symbol, OtherSymbols)) {
                result += symbol;
            }

            if (contains(symbol, Numbers)) {
                symbol = NumbersEncrypt[pos];
                result += symbol;
            }

            if (contains(symbol, RusAlfUp)) {
                symbol = RusAlfUpEncrypt[pos];
                result += symbol;
            }

            if (contains(symbol, RusAlfLower)) {
                symbol = RusAlfLowerEncrypt[pos];
                result += symbol;
            }

            if (contains(symbol, EngAlfUp)) {
                symbol = EngAlfUpEncrypt[pos];
                result += symbol;
            }

            if (contains(symbol, EngAlfLower)) {
                symbol = EngAlfLowerEncrypt[pos];
                result += symbol;
            }
        }
        return result;
    }

    function decrypt(text) {
        let result = '';

        for (let i = 0; i <= text.length; i++) {
            let symbol = text[i];

            if (contains(symbol, OtherSymbols)) {
                result += symbol;
            }

            if (contains(symbol, NumbersEncrypt)) {
                symbol = Numbers[pos];
                result += symbol;
            }

            if (contains(symbol, RusAlfUpEncrypt)) {
                symbol = RusAlfUp[pos];
                result += symbol;
            }

            if (contains(symbol, RusAlfLowerEncrypt)) {
                symbol = RusAlfLower[pos];
                result += symbol;
            }

            if (contains(symbol, EngAlfUpEncrypt)) {
                symbol = EngAlfUp[pos];
                result += symbol;
            }

            if (contains(symbol, EngAlfLowerEncrypt)) {
                symbol = EngAlfLower[pos];
                result += symbol;
            }
        }
        return result;
    }

    // encrypt_button.addEventListener('click', function() {
    //     text_to_work = user_text.value;
    //     output.value = encrypt(text_to_work);
    // });

    // decrypt_button.addEventListener('click', function() {
    //     text_to_work = user_text.value;
    //     output.value = decrypt(text_to_work);
    // })

    let encrypt_radio = document.querySelector('.encrypt-radio');
    let decrypt_radio = document.querySelector('.decrypt-radio');
    let encrypt_decrypt_btn = document.querySelector('#encrypt-decrypt-btn');
    let enc = true;

    encrypt_radio.addEventListener('click', () => {
        encrypt_decrypt_btn.textContent = 'Зашифровать';
        enc = true;
    })

    decrypt_radio.addEventListener('click', () => {
        encrypt_decrypt_btn.textContent = 'Дешифровать';
        enc = false;
    })

    encrypt_decrypt_btn.addEventListener('click', () => {
        let radio_encrypt = document.querySelector('#encrypt-radio');
        let radio_decrypt = document.querySelector('#decrypt-radio');

        if (enc) {
            text_to_work = user_text.value;
            output.value = encrypt(text_to_work);
        } else {
            text_to_work = user_text.value;
            output.value = decrypt(text_to_work);
        }
    })
})