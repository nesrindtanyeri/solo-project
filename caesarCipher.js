// caesarCipher.js

// 1. Komut satırından cümle ve kaydırma sayısını al // take a phrase and a shift number as inputs from process.argv
const phrase = process.argv[2];
const shift = parseInt(process.argv[3]);

// 2. Her harfi Caesar Cipher ile şifreleyen fonksiyon // Encrypt the phrase by shifting each letter, based on its position in the english alphabet, by the specified number. 
// Case insensitive
// A negative shift means shift to the left
// A positive shift means shift to the right
function caesarCipher(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt();
            let base = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
    }).join('');
}

// 3. Şifrelenmiş metni ekrana yazdır // encrypted phrase
const encryptedPhrase = caesarCipher(phrase, shift);
console.log(encryptedPhrase);
