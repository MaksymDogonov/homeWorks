"use strict";
import { INFO_KEY } from "./script";

void (function () {
  const infoKey = "formInfo";
  const ul = document.createElement("ul");
  const loadedInfo = () => {
    const data = JSON.parse(localStorage.getItem(infoKey));
    if (!data) throw new Error("Local storage is empty");

    for (const [key, value] of Object.entries(data)) {
      const li = document.createElement("li");
      li.innerText = `${key}: ${value}`;
      ul.appendChild(li);
    }
  };
  document.body.appendChild(ul);
  loadedInfo();
})();
