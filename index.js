class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}
class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}
class Dinner {
  #dessert; 

  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#dessert = dessert; 
  }
  getDessert() {
    return this.#dessert;
  }
}
let breakfast1 = new Breakfast("Pancakes", "Coffee");
let breakfast2 = new Breakfast("Omelette", "Orange Juice");

console.log(breakfast1); 
console.log(breakfast2); 

let lunch1 = new Lunch("Caesar Salad", "Tomato Soup", "Lemonade");
let lunch2 = new Lunch("Greek Salad", "Chicken Noodle Soup", "Iced Tea");

console.log(lunch1); 
console.log(lunch2); 

let dinner1 = new Dinner("House Salad", "Minestrone", "Steak", "Cheesecake");
let dinner2 = new Dinner("Garden Salad", "Clam Chowder", "Salmon", "Tiramisu");

console.log(dinner1); 
console.log(dinner2); 

console.log(dinner1.getDessert()); 
console.log(dinner2.getDessert()); 
