function e07SumOfNumbers(input) {
    let text = input[0];
    let sum = 0;

    for (let i = 0; i < text.length; i++) {
        let number = Number(text.charAt(i));
        sum += number;
    }
    console.log(`The sum of the digits is:${sum}`);
}
e07SumOfNumbers(["564891"]);