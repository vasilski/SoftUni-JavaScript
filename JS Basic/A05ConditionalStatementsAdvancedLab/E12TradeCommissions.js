function e12TradeCommissions(input) {
    let city = input[0];
    let quantity = Number(input[1]);
    let comm = 0;
    switch (city) {
        case"Sofia":
            if (quantity > 0 && quantity <= 500) {
                comm = quantity * 0.05;
            } else if (quantity > 500 && quantity <= 1000) {
                comm = quantity * 0.07;
            } else if (quantity > 1000 && quantity <= 10000) {
                comm = quantity * 0.08;
            } else if (quantity > 10000) {
                comm = quantity * 0.12;
            } else if (quantity < 0) {
                console.log("error")
            }
            break;
        case"Varna":
            if (quantity > 0 && quantity <= 500) {
                comm = quantity * 0.045;
            } else if (quantity > 500 && quantity <= 1000) {
                comm = quantity * 0.075;
            } else if (quantity > 1000 && quantity <= 10000) {
                comm = quantity * 0.10;
            } else if (quantity > 10000) {
                comm = quantity * 0.13;
            } else if (quantity < 0) {
                console.log("error")
            }
            break;
        case"Plovdiv":
            if (quantity > 0 && quantity <= 500) {
                comm = quantity * 0.055;
            } else if (quantity > 500 && quantity <= 1000) {
                comm = quantity * 0.08;
            } else if (quantity > 1000 && quantity <= 10000) {
                comm = quantity * 0.12;
            } else if (quantity > 10000) {
                comm = quantity * 0.145;
            } else if (quantity < 0) {
                console.log("error")
            }
            break;
        default:
            console.log("error");
    }
    if (comm !== 0) {
        console.log(comm.toFixed(2));
    }
}

//e12TradeCommissions(["Sofia", "1500"]);
e12TradeCommissions(["Plovdiv", "499.99"]);
//e12TradeCommissions(["Kaspichan", "-5"]);
