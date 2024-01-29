function e04InchesToCentimeters(input) {
    let bookPage = Number(input[0]);
    let pageForHour = Number(input[1]);
    let dayForBook = Number(input[2]);

    let totalTime = bookPage / pageForHour;
    let hoursPerDay = totalTime / dayForBook;

    console.log(hoursPerDay);
}
e04InchesToCentimeters(["212 ", "20 ", "2 "]
)