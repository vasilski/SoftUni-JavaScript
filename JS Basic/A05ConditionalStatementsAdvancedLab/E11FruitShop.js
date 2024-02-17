function e11FruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let totalPrice = 0;

    switch (day) {
        case `Monday`:
        case `Tuesday`:
        case `Wednesday`:
        case `Thursday`:
        case `Friday`:
            if (fruit === "banana") {
                totalPrice = quantity * 2.5;
            } else if (fruit === "apple") {
                totalPrice = quantity * 1.2;
            } else if (fruit === "orange") {
                totalPrice = quantity * 0.85;
            } else if (fruit === "grapefruit") {
                totalPrice = quantity * 1.45;
            } else if (fruit === "kiwi") {
                totalPrice = quantity * 2.7;
            } else if (fruit === "pineapple") {
                totalPrice = quantity * 5.5;
            } else if (fruit === "grapes") {
                totalPrice = quantity * 3.85;
            } else {
                console.log("error");
            }
            break;
        case `Saturday`:
        case `Sunday`:
            if (fruit === "banana") {
                totalPrice = quantity * 2.7;
            } else if (fruit === "apple") {
                totalPrice = quantity * 1.25;
            } else if (fruit === "orange") {
                totalPrice = quantity * 0.90;
            } else if (fruit === "grapefruit") {
                totalPrice = quantity * 1.60;
            } else if (fruit === "kiwi") {
                totalPrice = quantity * 3;
            } else if (fruit === "pineapple") {
                totalPrice = quantity * 5.6;
            } else if (fruit === "grapes") {
                totalPrice = quantity * 4.20;
            } else {
                console.log("error");
            }
            break;
        default:
            console.log("error");
    }
    if (totalPrice !== 0) {
        console.log(totalPrice.toFixed(2));
    }
}
//e11FruitShop(["apple", "Tuesday", "2"]);
//e11FruitShop(["orange", "Sunday", "3"]);
e11FruitShop(["beer", "Friday", "3"]);

