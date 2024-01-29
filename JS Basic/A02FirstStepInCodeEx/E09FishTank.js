function e09FishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let total = length * width * height / 1000;
    let needLiters = total * (1 - (percentage / 100));

    console.log(needLiters);
}
e09FishTank(["85 ", "75 ", "47 ", "17 "])