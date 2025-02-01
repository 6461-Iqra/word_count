const wordtext = document.querySelector('.words');
const countbtn = document.querySelector('.countbtn');
const resetbtn = document.querySelector('.reset');
const wordcount = document.querySelector('#word-count');
const charcount = document.querySelector('#char-count');

function countWords(){
    const text = wordtext.value.trim();
    const words = text.split(/\s+/); // Split text by whitespace
    const characters = text.replace(/\s+/g, ''); // Remove all whitespace to count characters
    
    wordcount.innerHTML = words.length;
    charcount.innerHTML = characters.length;
}

countbtn.addEventListener('click', countWords);

function reset(){
    wordtext.value = '';
    wordcount.innerHTML = 0;
}

resetbtn.addEventListener('click', reset);

