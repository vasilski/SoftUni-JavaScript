function e04CleverLily(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let LilyMoney = 0;
    let numOfToys = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            LilyMoney += i * 5;
            LilyMoney--;
        } else {
            numOfToys++
        }
    }
    let totalMoneyFromToys = toyPrice * numOfToys;
    let totalMoney = LilyMoney + totalMoneyFromToys;
    let needMoney = 0;

    if (totalMoney < washingMachinePrice) {
        needMoney = washingMachinePrice - totalMoney;
        console.log(`No! ${needMoney.toFixed(2)}`);
    } else {
       needMoney = totalMoney - washingMachinePrice;
       console.log(`Yes! ${needMoney.toFixed(2)}`);
    }
}
//e04CleverLily(["10", "170.00", "6"]);
e04CleverLily(["21", "1570.98", "3"]);
