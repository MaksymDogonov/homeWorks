"use strict";

void (function () {
  const form = document.querySelector("#form");
  const inputs = form.querySelectorAll("input, select, textarea ");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const info = {};
    inputs.forEach(({ name, value }) => (info[name] = value));
    console.log(info);
  });
})();
