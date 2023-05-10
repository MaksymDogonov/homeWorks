"use strict";

const createTable = () => {
  const tableElement = document.createElement("table");
  for (let i = 1; i <= 10; i++) {
    const rowElement = document.createElement("tr");
    for (let j = 1; j <= 10; j++) {
      const cellElement = document.createElement("td");
      cellElement.innerText = `${i * j}`;
      rowElement.appendChild(cellElement);
    }
    tableElement.appendChild(rowElement);
  }
  return tableElement;
};
const result = createTable();
document.body.appendChild(result);
