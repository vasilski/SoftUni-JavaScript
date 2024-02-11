function e07Shopping(input) {

    let budget = Number(input[0]);
    let videoCard = Number(input[1]);
    let processor = Number(input[2]);
    let ramMemory = Number(input[3]);

    let totalPriceVideoCard = videoCard * 250;
    let totalPriceProcessor = (totalPriceVideoCard * 0.35) * processor;
    let totalPriceRamMemory = (totalPriceVideoCard * 0.1) * ramMemory;
    let totalMoneyNeeded = totalPriceVideoCard + totalPriceProcessor + totalPriceRamMemory;

    if (videoCard > processor) {
        totalMoneyNeeded = totalMoneyNeeded * 0.85;
    }

    let moneyLeft = 0;

    if (budget >= totalMoneyNeeded) {
        moneyLeft = budget - totalMoneyNeeded;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`)
    } else {
        moneyLeft = totalMoneyNeeded - budget;
        console.log(`Not enough money! You need ${moneyLeft.toFixed(2)} leva more!`);
    }

}
//e07Shopping(["900", "2", "1", "3"]);
e07Shopping(["920.45", "3", "1", "1"]);

