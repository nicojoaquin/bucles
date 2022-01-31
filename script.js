//Ejercicio 1
for (let i = 1; i <= 17; i++) {
  console.log(i);
}

console.log(".................");

//Ejercicio 2
for (let i = 7; i <= 12; i++) {
  console.log(i);
}

console.log(".................");

//Ejercicio 3
let arr = [4, 5, 734, 43, 45];

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

arr.push(getRandomNum(1, 99));
arr.push(getRandomNum(1, 99));

console.log(arr);
