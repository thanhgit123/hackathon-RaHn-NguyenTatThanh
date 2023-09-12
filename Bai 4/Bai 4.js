let input = prompt("nhập một chuối ký tự bao gồm chữ và số:");
    function removeNumbers(input) {
        let result = "";
        for (let i = 0; i < input.length; i++) {
            if (Number.isNaN(parseInt(input[i]))) {
                result += input[i];
            }
        }
        return result;
    }
    let result_string = removeNumbers(input);
    console.log("chuỗi đã xóa số:", result_string);
    