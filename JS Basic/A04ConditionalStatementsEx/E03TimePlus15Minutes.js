function e03TimePlus15Minutes(input) {
    let hour = Number(input[0]);
    let minute = Number(input[1]);
    minute += 15

    if (minute > 59) {
        hour++;
       let mun= minute % 60;
       minute = mun;
    }
    if (hour > 23) {
        hour = 0;
    }

    if (minute < 10) {
        console.log(`${hour}:0${minute}`);
    } else {
        console.log(`${hour}:${minute}`);
    }
}
e03TimePlus15Minutes(["23", "59"])

