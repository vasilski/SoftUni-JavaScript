function e08LunchBreak(input) {
    let serialName = input[0];
    let duration = Number(input[1]);
    let lunchBreak = Number(input[2]);

    let timeForLunch = lunchBreak / 8;
    let timeForRest = lunchBreak / 4;

    let leftLunchBreakTime = lunchBreak - timeForLunch - timeForRest;
    let leftTime = 0


    if (leftLunchBreakTime >= duration) {
        leftTime = Math.ceil(leftLunchBreakTime - duration);
        console.log(`You have enough time to watch ${serialName} and left with ${leftTime} minutes free time.`);
    } else {
        leftTime = Math.ceil(duration - leftLunchBreakTime);
        console.log(`You don't have enough time to watch ${serialName}, you need ${leftTime} more minutes.`);
    }
}
//e08LunchBreak(["Game of Thrones", "60", "96"]);
e08LunchBreak(["Teen Wolf", "48", "60"]);