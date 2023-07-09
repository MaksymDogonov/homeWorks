"use strict";
(function () {
  const students = [
    { name: "John", age: 20, subject: "Math" },
    { name: "Alice", age: 22, subject: "English" },
    { name: "Bob", age: 21, subject: "History" },
  ];

  const printGreetings = (arr) => {
    let stings = [];
    let result = "";

    for (let { name, subject } of arr) {
      const sting = `Привет, ${name}! Ты изучаешь предмет ${subject}`;
      stings.push(sting);
      result = stings.join("\n");
    }
    return result;
  };

  console.log(printGreetings(students));
})();
