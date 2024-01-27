function e05SuppliesForSchool(input) {
    let pen = Number(input[0]);
    let marker = Number(input[1]);
    let cleaning = Number(input[2]);
    let discount = Number(input[3]);

    let amountForPen = pen * 5.8;
    let amountForMarker = marker * 7.2;
    let amountForCleaning = cleaning * 1.2;

    let total = amountForPen + amountForMarker + amountForCleaning;
    let priceWithDiscount = total - (total * (discount / 100));

    console.log(priceWithDiscount);
}
e05SuppliesForSchool(["2 ", "3 ", "4 ", "25 "]
)