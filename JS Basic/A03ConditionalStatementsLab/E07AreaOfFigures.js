function e07AreaOfFigures (input) {
    let figure = input[0];

    if (figure === "square") {
        let sideA = Number(input[1]);

        let area = sideA * sideA;
        console.log(area);

    } else if (figure === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);

        let area = sideA * sideB;
        console.log(area);

    } else if (figure === "triangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);

        let area = sideA * sideB / 2;
        console.log(area);

    } else if (figure === "circle") {
        let sideA = Number(input[1]);

        let area = Math.PI * sideA * sideA;
        console.log(area);

    }
}
//e07AreaOfFigures(["square", "5"]);
//e07AreaOfFigures(["rectangle", "7", "2.5"]);
e07AreaOfFigures(["circle", "6"]);
//e07AreaOfFigures(["triangle", "4.5", "20"]);