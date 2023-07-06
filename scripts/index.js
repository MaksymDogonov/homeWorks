"use strict";
(function () {
  const goods = [
    ["футболка", 15],
    ["шорты", 25],
    ["носки", 5],
  ];

  const totalCost = (arr) => {
    const map = new Map();
    let total = 0;

    for (let [item, price] of arr) {
      map.set(item, price);
    }

    map.forEach((value) => (total += value));
    return total;
  };
  console.log(totalCost(goods));
})();
