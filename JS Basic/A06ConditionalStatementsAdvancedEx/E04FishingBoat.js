function e04FishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherman = Number(input[2]);
    let totalBoatPrice;
    let boatPrice;

    switch (season) {
        case "Spring":
        boatPrice = 3000;
        totalBoatPrice = discount(fisherman, boatPrice);
            if (fisherman % 2 === 0) {
                totalBoatPrice = totalBoatPrice * 0.95;
            }
            break;
        case "Summer":
            boatPrice = 4200;
            totalBoatPrice = discount(fisherman, boatPrice);
            if (fisherman % 2 === 0) {
                totalBoatPrice = totalBoatPrice * 0.95;
            }
            break;
        case "Autumn":
            boatPrice = 4200;
            totalBoatPrice = discount(fisherman, boatPrice);

            break;
        case "Winter":
            boatPrice = 2600;
            totalBoatPrice = discount(fisherman, boatPrice);
            if (fisherman % 2 === 0) {
                totalBoatPrice = totalBoatPrice * 0.95;
            }
            break;
    }

    let leftMoney;

    if (budget >= totalBoatPrice) {
        leftMoney = budget - totalBoatPrice;
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);
    } else {
        leftMoney = totalBoatPrice - budget;
        console.log(`Not enough money! You need ${leftMoney.toFixed(2)} leva.`);
    }

    function discount(fisherman, boatPrice) {
        let price;
        if (fisherman <= 6) {
        price = boatPrice * 0.9;
        } else if (fisherman > 6 && fisherman <= 11) {
            price = boatPrice * 0.85;
        } else if (fisherman > 11) {
            price = boatPrice * 0.75;
        }

        return price;
    }
}
//e04FishingBoat(["3000", "Summer", "11"]);
//e04FishingBoat(["3600", "Autumn", "6"]);
e04FishingBoat(["2000", "Winter", "13"]);


