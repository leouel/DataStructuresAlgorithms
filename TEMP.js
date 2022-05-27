function main() {
  let pizza = {
    sauce: "tomato",
    cheese: "mozzarella",
    toppings: ["mushrooms"],
  };

  console.log(pizza);
  console.log(pizza.cheese);
  console.log(pizza.toppings[0]);
  pizza.cheese = "provolone";
  console.log(pizza.cheese);
}

main();
