let a = prompt("mời bạn nhập 1 câu bất kì");
let words = a.split(' ');
let reversedWords = words.map(word => {
    return word.split('').reverse().join('');
});
let reversedString = reversedWords.join(' ');
document.write(reversedString);