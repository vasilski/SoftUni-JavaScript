function e05GodzillaVsKong(input) {
    let budgetMovie = Number(input[0]);
    let numberExtras = Number(input[1]);
    let priceClothes = Number(input[2]);

    let decor = budgetMovie * 0.1;
    let totalPriceClothes = priceClothes * numberExtras;

    if (numberExtras > 150) {
        totalPriceClothes = totalPriceClothes * 0.9;
    }
    let moneyForMovie = decor + totalPriceClothes;

    if (moneyForMovie <= budgetMovie) {
        let leftMoney = budgetMovie - moneyForMovie;
        console.log("Action!");
        console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`);
    } else {
        let leftMoney = moneyForMovie - budgetMovie;
        console.log("Not enough money!");
        console.log(`Wingard needs ${leftMoney.toFixed(2)} leva more.`);
    }
}
//e05GodzillaVsKong(["20000", "120", "55.5"]);
//e05GodzillaVsKong(["15437.62", "186", "57.99"]);
e05GodzillaVsKong(["9587.88", "222", "55.68"]);
