
let input = prompt("Nhập vào một chuỗi gồm 5 chữ số nguyên, cách nhau bằng dấu cách:");
let maxOnlyNumber = findnumber(input);
function findnumber(input) {
  let inputArray = input.split(" ");

  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i] = Number(inputArray[i]);
  }

  let maxOnlyNumber = null;

  for (let i = 0; i < inputArray.length; i++) {
    let aNumber = inputArray[i];
    let checkUnique = true;

    for (let j = 0; j < inputArray.length; j++) {
      if (i !== j && aNumber === inputArray[j]) {
        checkUnique = false;
        break;
      }
    }

    if ( checkUnique && (maxOnlyNumber === null || aNumber > maxOnlyNumber)) {
      maxOnlyNumber = aNumber;
    }
  }

  return maxOnlyNumber;
}

console.log("Số lớn nhất và duy nhất trong chuỗi:", maxOnlyNumber);


    
