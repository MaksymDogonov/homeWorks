"use strict";
(function () {
  const student = { name: "Иван Иванов" };
  const grades = { math: 90, fiz: 85, eng: 95 };

  const saveGrades = (student, grades) => {
    const weakMap = new WeakMap();
    weakMap.set(student, grades);
    return weakMap;
  };
  console.log(saveGrades(student, grades));
})();
