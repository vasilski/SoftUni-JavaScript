function e09SkiTrip(input) {
    let dayTrip = Number(input[0]);
    let typeOfRoom = input[1];
    let valuation = input[2];
    let totalPrice = valuationPrice(dayTrip, typeOfRoom);

    if (dayTrip < 10) {
        if (typeOfRoom === "apartment") {
            totalPrice = totalPrice * 0.7;
        } else if (typeOfRoom === "president apartment") {
            totalPrice = totalPrice * 0.9;
        }
    } else if (dayTrip > 10 && dayTrip < 15) {
        if (typeOfRoom === "apartment") {
            totalPrice = totalPrice * 0.65;
        } else if (typeOfRoom === "president apartment") {
            totalPrice = totalPrice * 0.85;
        }
        } else if (dayTrip > 15) {
            if (typeOfRoom === "apartment") {
                totalPrice = totalPrice * 0.5;
            } else if (typeOfRoom === "president apartment") {
                totalPrice = totalPrice * 0.8;
            }
        }


    if (valuation === "positive") {
        totalPrice = totalPrice * 1.25;
    } else if (valuation === "negative") {
        totalPrice = totalPrice * 0.9;
    }

    console.log(totalPrice.toFixed(2));
    function valuationPrice(dayTrip, typeOfRoom) {
        let price = 0;

        if (typeOfRoom === "room for one person") {
            price = (dayTrip - 1) * 18;
        } else if (typeOfRoom === "apartment") {
            price = (dayTrip - 1) * 25;
        } else if (typeOfRoom === "president apartment") {
            price = (dayTrip - 1) * 35;
        }
        return price;
    }
}
//e09SkiTrip(["14", "apartment", "positive"]);
e09SkiTrip(["30", "president apartment", "negative"]);