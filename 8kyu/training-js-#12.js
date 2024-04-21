/*
In lesson #11, we learned that the for loop can be used to traverse an array. If we want to traverse an object, we can use a variant of the for: for..in. This can traverse all the keys of the object. An example:

function showObjectKeys(obj){
  for (var key in obj){
    console.log(key);
  }
}
function showObjectValues(obj){
  for (var key in obj){
    console.log(obj[key]);
  }
}
var ob={item1:"This",item2:"is",item3:"an",item4:"example"};
console.log("keys of ob:")
showObjectKeys(ob);
console.log("values of ob:")
showObjectValues(ob);

Ok, lesson is over, let's do a task with for..in.

Task:
The function giveMeFive accepts 1 parameter, obj, which is an object.
Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. 
Separately, if the length of the value is equal to 5, then push the value to your array.
At the end, return your array.
You should use for..in in your code, otherwise your solution may not pass this kata.
*/
function giveMeFive(obj){
    let result = [];
    for (let key in obj) {
      if (key.length === 5) result.push(key)
      if (obj[key].length === 5) result.push(obj[key])

    }
    return result;
}
console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}),["earth","world"]);
console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}),["Ihave","money","model"]);
console.log(giveMeFive({Pears:"than",apple:"sweet"}),["Pears","apple","sweet"]);
