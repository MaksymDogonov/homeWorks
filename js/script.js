"use strict";

const formInfo = (event) => {
  const formData = new FormData(event.target);
  const resultObj = {};
  formData.forEach((value, key) => (resultObj[key] = value));
  console.log(resultObj);
  event.preventDefault();
};

document.documentElement.addEventListener("submit", formInfo);
