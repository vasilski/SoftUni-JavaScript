function e01SumSeconds(input) {
    let fist = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    let totalSecond = fist + second + third;
    let minutes = Math.floor(totalSecond / 60);
    let seconds = totalSecond % 60;


    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

e01SumSeconds(["35", "45", "44"]);
