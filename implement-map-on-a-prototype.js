//24MAR2022
//Lesson link : https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/implement-map-on-a-prototype

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach((a) => newArray.push(callback(a))); //Had to use the hints to solve the challenge. Used W3Schools to break down .map()
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

//Thoughts: had trouble grasping concept that map calls a function on a given object, then pushes into array.
