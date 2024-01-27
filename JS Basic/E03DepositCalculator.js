function e03DepositCalculator(input) {
    let deposit = Number(input[0]);
    let month = Number(input[1]);
    let interest = Number(input[2]);

    let interestForYear = deposit * (interest / 100);
    let interestForMonth = interestForYear / 12;
    let totalDeposit = deposit + month * interestForMonth;

    console.log(totalDeposit);

}
e03DepositCalculator(["200 ", "3 ", "5.7 "]
)