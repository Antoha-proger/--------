// Повторение первой строки до длины второй строки
function repeatString(firstString, secondString) {
    let resultString = "";
    // Длина финальной строки
    let firstStringLength = firstString.length;
    let it = 0;
    for (let i = 0; i < secondString.length; i++) {
        if (i % firstStringLength === 0) {
            it = 0;
        }
        resultString += firstString[it];
        it++;
    }
    return resultString;
}

class Vigenere {
    constructor(alphabet) {
        this.alphabet = alphabet;
        this.square = [];
    }
    // Генерируем квадрат Виженера
    generateSquare() {
        for (let i = 0; i < this.alphabet.length; i++) {
            let row = this.alphabet.slice(i);
            row += this.alphabet.slice(0, i);
            this.square.push(row);
        }
    }
    getSquare() {
        return this.square;
    }
    encrypt(message, key) {
        let encryptMessage = "";
        // Дублируем ключ до длины сообщения
        let newKey = repeatString(key, message);
        // Генерируем квадрат Виженера
        this.generateSquare();
        for (let it = 0; it < message.length; it++) {
            // Индекс строки равный символу сообщения
            let i = this.alphabet.indexOf(message[it]);
            // Индекс колонки равный символу ключа
            let j = this.alphabet.indexOf(newKey[it]);
            // Зашифрованный символ равный пересечению индекса строки и колонки
            encryptMessage += this.square[i][j];
        }
        return encryptMessage;
    }
    decrypt(message, key) {
        let decryptMessage = "";
        let newKey = repeatString(key, message);
        this.generateSquare();
        for (let it = 0; it < message.length; it++) {
            // Берем символ ключа и ищем индекс строки с данным символом
            let i = this.alphabet.indexOf(newKey[it]);
            let j = this.square[i].indexOf(message[it]);
            decryptMessage += this.alphabet[j];
        }
        return decryptMessage;
    }
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
        encrypt_decrypt_btn.textContent = 'Зашифровать';
        enc = true;
    })

    decrypt_radio.addEventListener('click', () => {
        encrypt_decrypt_btn.textContent = 'Дешифровать';
        enc = false;
    })

    encrypt_decrypt_btn.addEventListener('click', () => {
        let alphabet = alphabetTables[user_text.value[0].toLowerCase() === user_text.value[0] ? 'en' : 'ru'];
        let key = (user_text.value[0].toLowerCase() === user_text.value[0]) ? 'LEMON' : 'ЛИМОН';
        let vigener = new Vigenere(alphabet);

        if (enc) {
            text_to_work = user_text.value;
            output.value = vigener.encrypt(text_to_work, key);
        } else {
            text_to_work = user_text.value;
            output.value = vigener.decrypt(text_to_work, key);
        }
    })
})