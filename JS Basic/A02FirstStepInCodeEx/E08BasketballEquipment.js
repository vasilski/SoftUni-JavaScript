function e08BasketballEquipment(input) {
    let priceForTraining = Number(input[0]);
    let priceForBasketballSneakers = priceForTraining - (priceForTraining * 0.4);
    let basketballOutfit = priceForBasketballSneakers - (priceForBasketballSneakers * 0.2);
    let priceForBall = basketballOutfit / 4;
    let basketballAccessorize = priceForBall / 5;

    let total = priceForTraining + priceForBasketballSneakers + basketballOutfit + priceForBall + basketballAccessorize;

    console.log(total)
}
e08BasketballEquipment([365])