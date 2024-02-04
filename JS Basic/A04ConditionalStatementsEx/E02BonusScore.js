function e02BonusScore(input) {
    let number = Number(input[0]);

    let bonus = 0;

    if (number <= 100) {
        bonus += 5;
    } else if (number > 100 && number <= 1000) {
        bonus += number * 0.2;
    } else if (number > 1000) {
        bonus += number * 0.1;
    }

    if (number % 2 === 0 ) {
        bonus += 1;
    }
    let num = number % 10;

    if (num === 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(bonus + number);
}
e02BonusScore(["15875"]);