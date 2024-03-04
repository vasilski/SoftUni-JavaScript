function e03Histogram(input) {
    let num = input[0];
    let first = 0;
    let second = 0;
    let third = 0;
    let fourth = 0;
    let fifth = 0;

    for (let i = 1; i < input.length; i++) {
        let num = input[i];
        if (num < 200) {
            first++;
        } else if (num >= 200 && num < 400) {
            second++;
        } else if (num >= 400 && num < 600) {
            third++;
        } else if (num >= 600 && num < 800) {
            fourth++;
        } else if (num >= 800) {
            fifth++;
        }
    }
    let proc = 100 / num;

    console.log(`${(first * proc).toFixed(2)}%`);
    console.log(`${(second * proc).toFixed(2)}%`);
    console.log(`${(third * proc).toFixed(2)}%`);
    console.log(`${(fourth * proc).toFixed(2)}%`);
    console.log(`${(fifth * proc).toFixed(2)}%`);
}

//e03Histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
e03Histogram(["3", "1", "2", "999"]);


