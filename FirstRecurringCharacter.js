const numbers = [1, 4, 3, 7, 3, 8];

const firstRecurringCharacter = numbers => {
  let map = {};
  for (let number of numbers) {
    if (!!map[number]) {
      return number;
    } else {
      map[number] = true;
    }
  }
  return undefined;
};

console.time("firstRecurringCharacter");
firstRecurringCharacter(numbers);
console.timeEnd("firstRecurringCharacter");

console.log(
  "firstRecurringCharacter function result",
  firstRecurringCharacter(numbers)
);
