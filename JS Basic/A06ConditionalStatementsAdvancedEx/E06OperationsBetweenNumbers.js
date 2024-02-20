function e06OperationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];
    let result;
    let oddOrEven

    function checkNumber(result) {
        if (result % 2 === 0) {
            return "even"
        }
        return "odd";
    }

    switch (operator) {
        case "+":
            result = n1 + n2;
            oddOrEven = checkNumber(result);
            console.log(`${n1} + ${n2} = ${result} - ${oddOrEven}`);
            break;

        case "-":
            result = n1 - n2;
            oddOrEven = checkNumber(result);
            console.log(`${n1} - ${n2} = ${result} - ${oddOrEven}`);
            break;

        case "*":
            result = n1 * n2;
            oddOrEven = checkNumber(result);
            console.log(`${n1} * ${n2} = ${result} - ${oddOrEven}`);
            break;

        case "/":
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
                break;
            }
            result = n1 / n2;
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
            break;

        case "%":
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
                break;
            }
            result = n1 % n2;
            console.log(`${n1} % ${n2} = ${result}`);
            break;
    }
}
//e06OperationsBetweenNumbers(["10", "12", "+"]);
//e06OperationsBetweenNumbers(["123", "12", "/"]);
//e06OperationsBetweenNumbers(["112", "0", "/"]);
e06OperationsBetweenNumbers(["10", "0", "%"]);
