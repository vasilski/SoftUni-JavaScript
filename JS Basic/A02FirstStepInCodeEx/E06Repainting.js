function e06Repainting(input) {
    let quantityNylon = Number(input[0]);
    let quantityPaint = Number(input[1]);
    let quantityThinner = Number(input[2]);
    let hours = Number(input[3]);

    let priceForNylon = (quantityNylon + 2) * 1.5;
    let priceForPaint = (quantityPaint + (quantityPaint * 0.1)) * 14.50;
    let priceForThinner = quantityThinner * 5;
    let totalForMaterials = priceForNylon + priceForPaint + priceForThinner + 0.40;
    let priceForBuilders = (totalForMaterials * 0.3) * hours;

    let totalSum = totalForMaterials + priceForBuilders;

    console.log(totalSum);
}
e06Repainting(["10 ", "11 ", "4 ", "8 "])