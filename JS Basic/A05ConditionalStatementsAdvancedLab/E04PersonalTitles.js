function e04PersonalTitles(input) {
    let year = Number(input[0]);
    let gender = input[1];

    if (year < 16) {
        if (gender === 'm') {
            console.log("Master");
        } else {
            console.log("Miss")
        }
    } else {
        if (gender === 'm') {
            console.log("Mr.");
        } else {
            console.log("Ms.")
        }
    }
}

//e04PersonalTitles(["12", "f"]);
e04PersonalTitles(["17", "m"]);
