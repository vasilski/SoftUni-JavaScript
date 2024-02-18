function e03NewHouse(input) {
    let flower = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
    let totalMoneyForFlower = 0;
    let leftMoney = 0;

    switch (flower) {
        case "Roses":
            if (quantity <= 80) {
                totalMoneyForFlower = quantity * 5;
            } else {
                totalMoneyForFlower = (quantity * 5) * 0.9;
            }
        break;
        case "Dahlias":
            if (quantity <= 90) {
                totalMoneyForFlower = quantity * 3.8;
            } else {
                totalMoneyForFlower = (quantity * 3.8) * 0.85;
            }
            break;
        case "Tulips":
            if (quantity <= 80) {
                totalMoneyForFlower = quantity * 2.8;
            } else {
                totalMoneyForFlower = (quantity * 2.8) * 0.85;
            }
            break;
        case "Narcissus":
            if (quantity <= 120) {
                totalMoneyForFlower = quantity * 3;
            } else {
                totalMoneyForFlower = (quantity * 3) * 0.85;
            }
            break;
        case "Gladiolus":
            if (quantity <= 80) {
                totalMoneyForFlower = quantity * 2.5;
            } else {
                totalMoneyForFlower = (quantity * 2.5) * 0.8;
            }
            break;
    }
    if (totalMoneyForFlower <= budget) {
        leftMoney = budget - totalMoneyForFlower;
        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${leftMoney.toFixed(2)} leva left.`);
    } else {
        leftMoney = totalMoneyForFlower - budget;
        console.log(`Not enough money, you need ${leftMoney.toFixed(2)} leva more.`);
    }
}
//e03NewHouse(["Roses", "55", "250"]);
e03NewHouse(["Tulips", "88", "260"]);
