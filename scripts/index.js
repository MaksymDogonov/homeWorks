"use strict";
(function () {
  const player1 = { id: 1, name: "Иван", level: 10 };

  const addPlayerToLevelSet = (obj) => {
    const weakSet = new WeakSet();
    weakSet.add(obj);
    return weakSet;
  };
  console.log(addPlayerToLevelSet(player1));
})();
