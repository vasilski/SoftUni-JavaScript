function e09YardGreening (input) {
    let square = Number(input);

    let totalPrice = square * 7.61;
    let discount = 0.18 * totalPrice;
    let finalPrice = totalPrice - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
e09YardGreening("550");