function e10InvalidNumber(input) {
    let number = Number(input[0]);

    if (number >= 100 && number <=200 || number === 0) {
    } else {
        console.log("invalid");
    }
}
e10InvalidNumber([220]);