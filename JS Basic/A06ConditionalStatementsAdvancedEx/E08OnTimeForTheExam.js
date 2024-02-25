function e08OnTimeForTheExam(input) {
    let hourOfExam = Number(input[0]);
    let minuteOfExam = Number(input[1]);
    let hourOfCome = Number(input[2]);
    let minuteOfCome = Number(input[3]);


    let totalMinuteExam = (hourOfExam * 60) + minuteOfExam;
    let totalMinuteCome = (hourOfCome * 60) + minuteOfCome;

    let deference = totalMinuteExam - totalMinuteCome;

    if (deference < 0) {
        if (Math.abs(deference) > 59) {
            let hour = Math.floor(Math.abs(deference) / 60);
            let minutes = Math.abs(deference) % 60;
            if (minutes < 10) {
                console.log("Late");
                console.log(`${hour} 0${minutes} hours after the start`);
            } else {
                console.log("Late");
                console.log(`${hour} ${minutes} hours after the start`);
            }
        } else {
            console.log("Late");
            console.log(`${Math.abs(deference)} minutes after the start`);
        }

    } else if (deference > 0 && deference < 31) {
        console.log("On time");
        console.log(`${Math.abs(deference)} minutes before the start`);
    } else if (deference === 0) {
        console.log("On time");
    }else {
        if (deference > 59) {
            let hour = Math.floor(deference / 60);
            let minutes = deference % 60;
            if (minutes < 10) {
                console.log("Early");
                console.log(`${hour} 0${minutes} hours before the start`);
            } else {
                console.log("Early");
                console.log(`${hour} ${minutes} hours before the start`);
            }
        } else {
            console.log("Early");
            console.log(`${Math.abs(deference)} minutes before the start`);
        }
    }
}

//e08OnTimeForTheExam(["9", "30", "9", "50"]);
//e08OnTimeForTheExam(["9", "00", "8", "30"]);
//e08OnTimeForTheExam(["16", "00", "15", "00"]);
e08OnTimeForTheExam(["9", "00", "10", "30"]);