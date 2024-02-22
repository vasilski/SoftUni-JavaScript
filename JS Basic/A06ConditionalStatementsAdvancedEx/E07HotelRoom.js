function e07HotelRoom(input) {
    let month = input[0];
    let numOfNight = Number(input[1]);
    let studioPrice;
    let apartmentPrice;

    switch (month) {
        case "May":
        case "October":
            if (numOfNight <= 7) {
                studioPrice = numOfNight * 50;
                apartmentPrice = numOfNight * 65;
            } else if (numOfNight > 7 && numOfNight <= 14) {
                studioPrice = numOfNight * 50 * 0.95;
                apartmentPrice = numOfNight * 65;
            } else if (numOfNight > 14) {
                studioPrice = numOfNight * 50 * 0.7;
                apartmentPrice = numOfNight * 65 * 0.9;
            }
            break;
        case "June":
        case "September":
            if (numOfNight > 14) {
                studioPrice = numOfNight * 75.2 * 0.8;
                apartmentPrice = numOfNight * 68.70 * 0.9;
            } else {
                studioPrice = numOfNight * 75.2;
                apartmentPrice = numOfNight * 68.70;
            }
            break;
        default:
            if (numOfNight > 14) {
                studioPrice = numOfNight * 76;
                apartmentPrice = numOfNight * 77 * 0.9;
            } else {
                studioPrice = numOfNight * 76;
                apartmentPrice = numOfNight * 77;
            }
            break;
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

//e07HotelRoom(["May", "15"]);
//e07HotelRoom(["June", "14"]);
e07HotelRoom(["August", "20"]);
