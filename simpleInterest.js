let data = [
    { principal: 2500, time: 1.8 },
    { principal: 1000, time: 5 },
    { principal: 3000, time: 1 },
    { principal: 2000, time: 3 }
]


function interestCalculator(arr) {
    let rate;
    let interest;
    let interestData = [];    //variable to store new array of objects inclusive of rate and interest
    arr.forEach(i => {
        let principal = i.principal;
        let time = i.time;

        if (principal >= 2500 && (time > 1 && time < 3)) {
            rate = 3;
        } else if (principal >= 2500
            && time >= 3) {
            rate = 4;
        } else if (principal < 2500 || time <= 1) {
            rate = 2;
        } else {
            rate = 1;
        }

        interest = (principal * rate * time) / 100;    //interest formula

        //new object with appropriate rate and time
        let newObj = {
            principal: principal,
            rate: rate,
            time: time,
            interest: interest
        }

        interestData.push(newObj);


    });

    console.log(interestData);
    return interestData;
}


interestCalculator(data);   //calls function