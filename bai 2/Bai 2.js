let a = prompt("Mời bạn nhập số nguyên cách nhau bằng dấu phẩy");
let numbers = a.split(",").map(Number);
 function myNumber(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
            return false;
        }
    }
         return true;
}
     let total = 0;
     for (let i = 0; i < numbers.length; i++) {
        if (myNumber(numbers[i])) {
            total += numbers[i];
        }
    }
     console.log("tổng các số nguyên tố trong chuỗi:", total);