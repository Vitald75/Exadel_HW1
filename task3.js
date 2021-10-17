"use strict";
const prices = [
  64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421,
  9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123,
];

let sum = 0;
for (let i = 0; i < prices.length; i++) {
  sum += prices[i];
}

const averagePrice = sum / prices.length;
console.log(
  "Итого: " +
    sum +
    " гривен, средняя цена товара " +
    averagePrice.toFixed(2) +
    " гривен"
);
