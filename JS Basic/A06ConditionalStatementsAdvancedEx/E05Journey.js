function e05Journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let moneyForJourney;
    switch (season) {
        case "summer":
            if (budget <= 100) {
                moneyForJourney = budget * 0.3;
                console.log("Somewhere in Bulgaria");
                console.log(`Camp - ${moneyForJourney.toFixed(2)}`);
            } else if (budget > 100 && budget <= 1000) {
                moneyForJourney = budget * 0.4;
                console.log("Somewhere in Balkans");
                console.log(`Camp - ${moneyForJourney.toFixed(2)}`);
            } else {
                moneyForJourney = budget * 0.9;
                console.log("Somewhere in Europe");
                console.log(`Hotel - ${moneyForJourney.toFixed(2)}`);
            }

            break;

        case "winter":
            if (budget <= 100) {
                moneyForJourney = budget * 0.7;
                console.log("Somewhere in Bulgaria");
                console.log(`Hotel - ${moneyForJourney.toFixed(2)}`);
            } else if (budget > 100 && budget <= 1000) {
                moneyForJourney = budget * 0.8;
                console.log("Somewhere in Balkans");
                console.log(`Hotel - ${moneyForJourney.toFixed(2)}`);
            } else {
                moneyForJourney = budget * 0.9;
                console.log("Somewhere in Europe");
                console.log(`Hotel - ${moneyForJourney.toFixed(2)}`);
            }
                break;
    }
}

//e05Journey(["50", "summer"]);
e05Journey(["312", "summer"]);