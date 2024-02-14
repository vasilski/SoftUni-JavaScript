function e05SmallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let bill;

    if (city === "Sofia") {
        if (product === "coffee") {
            bill = quantity * 0.5;
        } else if (product === "water") {
            bill = quantity * 0.8;
        } else if (product === "beer") {
            bill = quantity * 1.2;
        } else if (product === "sweets") {
            bill = quantity * 1.45;
        } else if (product === "peanuts") {
            bill = quantity * 1.6;
        }

    } else if (city === "Plovdiv") {
        if (product === "coffee") {
            bill = quantity * 0.4;
        } else if (product === "water") {
            bill = quantity * 0.7;
        } else if (product === "beer") {
            bill = quantity * 1.15;
        } else if (product === "sweets") {
            bill = quantity * 1.3;
        } else if (product === "peanuts") {
            bill = quantity * 1.5;
        }

    } else if (city === "Varna") {
        if (product === "coffee") {
            bill = quantity * 0.45;
        } else if (product === "water") {
            bill = quantity * 0.7;
        } else if (product === "beer") {
            bill = quantity * 1.1;
        } else if (product === "sweets") {
            bill = quantity * 1.35;
        } else if (product === "peanuts") {
            bill = quantity * 1.55;
        }
    }
    console.log(bill);
}

e05SmallShop(["coffee", "Sofia", "2"]);
e05SmallShop(["sweets", "Sofia", "2.23"]);

