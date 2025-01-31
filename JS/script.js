const wordtext = document.querySelector('.words');
const countbtn = document.querySelector('.countbtn');
const resetbtn = document.querySelector('.reset');
const wordcount = document.querySelector('#word-count');

function countWords(){
    const text = wordtext.value.trim();
    const words = text.split(' ');
    wordcount.innerHTML = words.length;
}

countbtn.addEventListener('click', countWords);

function reset(){
    wordtext.value = '';
    wordcount.innerHTML = 0;
}

resetbtn.addEventListener('click', reset);

