let input = prompt(" nhập một chuỗi bất kì");
let words = input.split(' ');
let newText = words.map(word => {
    return word.split('').reverse().join('');
});
let newStr = newText.join(' ');
document.write(newStr);