"use strict";
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Число " + i + " делится без остатка на 3 и на 5");
    continue;
  }
  if (i % 3 === 0) {
    console.log("Число " + i + " делится без остатка на 3");
    continue;
  }
  if (i % 5 === 0) {
    console.log("Число " + i + " делится без остатка на 5");
    continue;
  }
  console.log("Число " + i + " не соответствует заданным условиям"); // i missed it 
}
