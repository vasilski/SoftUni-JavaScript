function e04ToyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzle = Number(input[1]);
    let talkingDoll = Number(input[2]);
    let teddyBear = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalPuzzlePrice = puzzle * 2.6;
    let totalTalkingDollPrice = talkingDoll * 3;
    let totalTeddyBearPrice = teddyBear * 4.1;
    let totalMinionsPrice = minions * 8.2;
    let totalTrucksPrice = trucks * 2;

    let totalPrice = totalPuzzlePrice + totalTalkingDollPrice + totalTeddyBearPrice
    + totalMinionsPrice + totalTrucksPrice;
    let totalToy = puzzle + talkingDoll + teddyBear + minions + trucks;
    let discount = totalPrice * 0.25;

    if (totalToy >= 50) {
        totalPrice = totalPrice - discount;
    }
    totalPrice = totalPrice - (totalPrice * 0.1);


    if (totalPrice >= tripPrice) {
        let leftMoney = totalPrice - tripPrice;
        console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`);
    } else{
        let leftMoney = tripPrice - totalPrice;
            console.log(`Not enough money! ${leftMoney.toFixed(2)} lv needed.`)
    }
}
e04ToyShop(["40.8", "20", "25", "30", "50", "10"]);
