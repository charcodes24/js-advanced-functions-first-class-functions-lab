// Code your solution in this file!
const returnFirstTwoDrivers = (function(drivers) {
    return drivers.slice(0,2);
}); 

const returnLastTwoDrivers = (function(drivers) {
    return drivers.slice(drivers.length-2);
});

let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

function createFareMultiplier(num) {
    function multiplier(fare) {
        return fare * num;
    };
    multiplier();
    return multiplier;
}

/*const fareDoubler = fare => {
    const doubler = createFareMultiplier(2);
    return doubler;
}

fareDoubler(10);*/

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    let firstTwo = returnFirstTwoDrivers(drivers);
    return firstTwo;
}