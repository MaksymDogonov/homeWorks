"use strict";

const generateList = (array) => {
  const ul = document.createElement("ul");

  array.forEach((el) => {
    const li = document.createElement("li");
    let childEl;

    if (Array.isArray(el)) {
      childEl = generateList(el);
    } else {
      childEl = document.createTextNode(el);
    }
    li.appendChild(childEl);
    ul.appendChild(li);
  });
  return ul;
};
const result = generateList([1, 2, [1.1, 1.2, 1.3], 3]);
document.body.appendChild(result);
