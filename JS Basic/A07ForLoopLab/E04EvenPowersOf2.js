function e04EvenPowersOf2(input) {
    let number = Number(input[0]);
    console.log(1);
    if (number % 2 === 0 ) {
        for (let i = 2; i <= number; i+=2) {
            let num = Math.pow(2, i);
            console.log(num);
        }
    } else {
        for (let i = 2; i <= (number - 1); i+=2) {
            let num = Math.pow(2, i);
            console.log(num);
        }
    }
}
e04EvenPowersOf2(["7"])