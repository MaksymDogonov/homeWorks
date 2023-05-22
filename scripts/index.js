"use strict";

export const INFO_KEY = "formInfo";

void (function () {
  const form = document.querySelector("#todoForm");
  const inputs = form.querySelectorAll("input:not([type=reset]), textarea ");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const info = {};

    inputs.forEach(({ name, value }) => (info[name] = value));
    localStorage.setItem(INFO_KEY, JSON.stringify(info));
  });
})();
