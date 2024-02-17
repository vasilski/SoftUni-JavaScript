function e01Cinema(input) {
    let type = input[0];
    let row = Number(input[1]);
    let col = Number(input[2]);

    if (type === "Premiere") {
        let price = row * col * 12;
        console.log(price.toFixed(2));
    } else if (type === "Normal") {
        let price = row * col * 7.5;
        console.log(price.toFixed(2));
    } else if (type === "Discount") {
        let price = row * col * 5;
        console.log(price.toFixed(2));
    }
}

e01Cinema(["Premiere", "10", "12"]);
e01Cinema(["Normal", "21", "13"]);
