"use strict";

void (function () {
  const form = document.querySelector("#form");
  const inputs = form.querySelectorAll("input, select, textarea ");
  const infoKey = "formInfo";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const info = {};
    inputs.forEach(({ name, value }) => (info[name] = value));
    localStorage.setItem(infoKey, JSON.stringify(info));
  });
})();
