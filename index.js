// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (drivers) => {
  const firstTwo = drivers.slice(0,2)
  return firstTwo;
}

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(numb1) {
  function fareMultiplier(numb2) {
    return numb1 * numb2;
  } 
  return fareMultiplier;
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driv, returnTwoDrivers) {
  return returnTwoDrivers(driv);
}
selectDifferentDrivers(drivers, returnLastTwoDrivers);
