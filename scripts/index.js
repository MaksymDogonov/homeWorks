"use strict";
(function () {
  class Hamburger {
    constructor(size, filling) {
      this.price = size.price + filling.price;
      this.calories = size.calories + filling.calories;
    }

    static SIZE_SMALL = {
      price: 50,
      calories: 20,
    };

    static SIZE_BIG = {
      price: 100,
      calories: 40,
    };

    static STUFFING_CHEESE = {
      price: 10,
      calories: 20,
    };

    static STUFFING_SALAD = {
      price: 20,
      calories: 5,
    };

    static STUFFING_POTATO = {
      price: 15,
      calories: 10,
    };

    static TOPPING_SAUCE = {
      price: 15,
      calories: 0,
    };

    static TOPPING_MAYO = {
      price: 20,
      calories: 5,
    };

    addTopping(item) {
      this.price += item.price;
      this.calories += item.calories;
    }

    calculateCalories() {
      return this.calories;
    }

    calculatePrice() {
      return this.price;
    }
  }

  const hamburger = new Hamburger(
    Hamburger.SIZE_SMALL,
    Hamburger.STUFFING_CHEESE
  );

  hamburger.addTopping(Hamburger.TOPPING_MAYO);
  console.log("Calories: " + hamburger.calculateCalories());
  console.log("Price: " + hamburger.calculatePrice());
  hamburger.addTopping(Hamburger.TOPPING_SAUCE);
  console.log("Price with sauce: " + hamburger.calculatePrice());
})();
