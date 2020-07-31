function StringCalculator(str) {
    let total = 0;
    if (str.length > 0) {
        let newArr = str.split(',');
        for (let i = 0; i < newArr.length; i++) {
            total = total + parseInt(newArr[i]);
        }
        console.log(total);

    } else {
        console.log("0");
    }
}

StringCalculator("1,2,3");