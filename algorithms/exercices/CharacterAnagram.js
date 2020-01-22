const anagram = (string1, string2) => {
  //if the arrays have the same size
  if (string1.length != string2.length) return false;

  let frequencyArr1 = {};
  let frequencyArr2 = {};

  for (let index in string1) {
    frequencyArr1[string1[index]] = (frequencyArr1[string1[index]] || 0) + 1;
  }

  for (let index in string2) {
    frequencyArr2[string2[index]] = (frequencyArr2[string2[index]] || 0) + 1;
  }

  for (let char in frequencyArr1) {
    if (!(char in frequencyArr2) || frequencyArr1[char] != frequencyArr2[char])
      return false;
  }

  return true;
};

let string1 = "qtywer";
let string2 = "qwerty";
let string3 = "aaz";
let string4 = "zza";

console.time("anagram");
anagram(string1, string2);
console.timeEnd("anagram");

console.log("anagram function result", anagram(string1, string2));
