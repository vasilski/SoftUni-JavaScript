function e02RadiansToDegrees(input) {
    let radians = Number(input[0]);
    let degrees = radians * 180 / Math.PI;

    console.log(degrees);
}

e02RadiansToDegrees(["3.1416"])