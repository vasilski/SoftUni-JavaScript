function e02MultiplicationTable(input) {
    let num = Number(input[0]);

    for (let i = 1; i <= 10; i++) {
            let result = i * num;
            console.log(`${i} * ${num} = ${result}`);
    }
}
e02MultiplicationTable(["5"]);