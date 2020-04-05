let data = [
    {
        principal: 2500,
        time: 1.8
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    }
];
const interestCalculator = arr => {
    let interestData = [];
    arr.forEach(({ principal, time }) => {
        let rate = getRate({ principal, time });
        let interest = (principal * rate * time) / 100;
        interestData.push({ principal, rate, time, interest });
    });
    console.log(interestData);
    return interestData;
};
const getRate = ({ principal, time }) => {
    if (principal >= 2500 && time > 1 && time < 3) return 3;
    if (principal >= 2500 && time >= 3) return 4;
    if (principal < 2500 || time <= 1) return 2;
    return 1;
};
interestCalculator(data)