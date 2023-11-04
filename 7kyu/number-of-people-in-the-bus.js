/*
There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) 
and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, 
the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
*/

const number = function(busStops){
  let totalPeople = 0;

  for (const [getOn, getOff] of busStops) {
    totalPeople += getOn - getOff
   
  }
  return totalPeople;
}

console.log(number([[10,0],[3,5],[5,8]])); // => 5
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])); // => 17
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])); // => 21
console.log(number([[0,0]])); // => 0

/*
1. The number function takes one argument, busStops, which is an array of integer pairs.
2. It initializes a variable totalPeople to keep track of the total number of people on the bus. We start with 0 because the bus is initially empty at the first bus stop.
3. The function then uses a for...of loop to iterate through each pair of integers in the busStops array. The loop variable [getOn, getOff] represents 
   the number of people getting on and off the bus at each stop.

4. Inside the loop, it updates the totalPeople variable by adding the number of people who got on the bus (getOn) and subtracting the number of people who got off the bus (getOff). 
   This effectively keeps track of the changing number of people on the bus after each stop.

After iterating through all the bus stops, the function returns the totalPeople, which represents the number of people still on the bus after the last stop.
*/

/* Alternative:
const number = (busStops) => {
    let totalPeople = 0;

  for (let i = 0; i < busStops.length; i++) {
  	totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}
*/
