function e08NumbersDivisibleBy9(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = 0

    for (let i = start; i <= end; i++) {
        let number = i;
        if ( number % 9 === 0) {
            sum += number;
        }
    }
    console.log(`The sum: ${sum}`);

    for (let i = start; i <= end; i++) {
        let number = i;
        if ( number % 9 === 0) {
            console.log(number)
            sum += number;
        }
    }
}
e08NumbersDivisibleBy9(["100", "200"]);