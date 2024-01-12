/*
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
Write a code that gives out the total amount for different days(d).
*/
const rentalCarCost = d => {
    let cost = 40;
    if (d >= 3 && d < 7) {
       return (cost * d) - 20
    } else if (d >= 7) {
       return (cost * d) - 50
    }
    return cost * d
}

// under 3 days
console.log(rentalCarCost(1), 40);
console.log(rentalCarCost(2), 80);

// under 7 days
console.log(rentalCarCost(5), 180);
console.log(rentalCarCost(6), 220);

// 7 or more days
console.log(rentalCarCost(9), 310);
console.log(rentalCarCost(10), 350);    

/* refactored:

function baseCost(days, rate) {
  return days * rate;
}

function discountRate(days) {
  if ( days >= 7 ) {
    return 50;
  }
  else if ( days >= 3 ) {
    return 20;
  }
  else {
    return 0;
  }
}

function rentalCarCost(days) {
  return baseCost(days, 40) - discountRate(days);
}
*/
