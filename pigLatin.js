// pigLatin.js

// 1. Komut satırından alınan cümleyi alıyoruz // English phrase as an input from process.argv.
const sentence = process.argv.slice(2).join(' ');

// 2. Her kelimeyi Pig Latin'e çeviren fonksiyon // Convert each word to Pig Latin:
// If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add “ay.” Example: Happy = appyh + ay = appyhay
// If a word starts with two consonants move the two consonants to the end of the word and add “ay.” Example: Child = Ildch + ay = Ildchay
// If a word starts with a vowel add the word “way” at the end of the word. Example: Awesome = Awesome +way = Awesomeway
 
function translateToPigLatin(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(word[0].toLowerCase())) {
        return word + "way";
    } else if (!vowels.includes(word[0].toLowerCase()) && !vowels.includes(word[1].toLowerCase())) {
        return word.slice(2) + word.slice(0, 2) + "ay";
    } else {
        return word.slice(1) + word[0] + "ay";
    }
}

// 3. Cümledeki her kelimeyi çevir ve birleştir //  translated and combined phrase
const pigLatinSentence = sentence
    .split(' ')
    .map(translateToPigLatin)
    .join(' ');

// 4. Sonucu ekrana yazdır
console.log(pigLatinSentence);
