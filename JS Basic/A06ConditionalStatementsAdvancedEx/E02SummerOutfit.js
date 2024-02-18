function e02SummerOutfit(input){

    let degree = Number(input[0]);
    let timeOfDay = input[1];
    let outfit;
    let shoes;

    switch (timeOfDay) {
        case "Morning":
            if (degree >= 10 && degree <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers"
            } else if (degree > 18 && degree <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins"
            } else if (degree >= 25) {
                outfit = "T-Shirt";
                shoes = "Sandals"
            }
            break;
        case "Afternoon":
            if (degree >= 10 && degree <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (degree > 18 && degree <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            } else if (degree >= 25) {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            }
            break;

        case "Evening":
            if (degree >= 10 && degree <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins"
            } else if (degree > 18 && degree <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins"
            } else if (degree >= 25) {
                outfit = "Shirt";
                shoes = "Moccasins";
            }
            break;
    }
    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
}
//e02SummerOutfit(["16", "Morning"]);
e02SummerOutfit(["22","Afternoon"]);
