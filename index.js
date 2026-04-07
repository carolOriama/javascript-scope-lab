// In this lab, you will practice declaring variables in global scope, creating variables that are function-scoped, and creating variables that are block-scoped.

// Fork and clone this lab into your local environment. Navigate into its directory in the terminal, then run code . to open the files in Visual Studio Code.

// These are your tasks:

// burgers: Declare a variable in global scope called burgers using the const keyword and assign it the value of an array that has the following 2 elements: 'Hamburger' and 'Cheeseburger'.
// featuredDrink: Declare a variable in global scope called featuredDrink using the let keyword and assign it the value 'Strawberry Milkshake'.
// addBurger(): Write a function named addBurger that when called, does the following in this exact order:
// Creates a function-scoped variable named newBurger using the const keyword and assigns it the value 'Flatburger'.
// Uses the .push() array method to add newBurger to the burgers array.
// if(true): Write an if statement whose condition is true, so that the code in its block will always execute. The code inside of the if statement’s block should do the following in this exact order:
// Create a block-scoped variable named anotherNewBurger using the const keyword and assign it the value 'Maple Bacon Burger'.
// Use the .push() array method to add anotherNewBurger to the burgers array.
// changeFeaturedDrink(): Write a function named changeFeaturedDrink that when called, changes the value of the featuredDrink variable to 'The JavaShake'.

const burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

function addBurger() {
  const newBurger = "Flatburger";
  burgers.push(newBurger);
  console.log(burgers);

  if (true) {
    const anotherNewBurger = "Maple Bacon Burger";
    burgers.push(anotherNewBurger);

    console.log(burgers);
  }
}

function changeFeatureDrink() {
  featuredDrink = "The JavaShake";
  console.log(featuredDrink);
}

addBurger();
changeFeatureDrink();
