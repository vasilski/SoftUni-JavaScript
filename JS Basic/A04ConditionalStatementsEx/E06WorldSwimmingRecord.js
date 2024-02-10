function e06Repainting(input){
    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timeForSwimForMeter = Number(input[2]);

    let needToSwim = distance * timeForSwimForMeter
    let slowWaterTime = Math.floor(distance / 15);
    let addTime = slowWaterTime * 12.5;
    let totalTime = needToSwim + addTime;

    if (worldRecord <= totalTime) {
        let difference = totalTime - worldRecord;

        console.log("");
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}
//e06Repainting(["10464", "1500", "20"]);
e06Repainting(["55555.67", "3017", "5.03"]);