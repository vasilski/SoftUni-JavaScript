function e07FoodDelivery(input) {
    let menuChicken = Number(input[0]);
    let menuFish = Number(input[1]);
    let menuVegan = Number(input[2]);

    let totalForChickenMenu = menuChicken * 10.35;
    let totalForFishMenu = menuFish * 12.4;
    let totalForVeganMenu = menuVegan * 8.15;
    let totalForMenu = totalForChickenMenu + totalForFishMenu + totalForVeganMenu;
    let desertPrice = totalForMenu / 5;
    let total = totalForMenu + desertPrice + 2.5;

    console.log(total);
}
e07FoodDelivery(["2 ", "4 ", "3 "])