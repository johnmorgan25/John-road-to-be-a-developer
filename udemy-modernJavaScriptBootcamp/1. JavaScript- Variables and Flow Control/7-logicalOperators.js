let temp = 65;

if (temp >= 60 && temp <= 90) {
  console.log("It is nice outside");
} else if (temp <= 0 || temp >= 120) {
  console.log(`Don't go outside`);
} else {
  console.log("Eh, Do what you want");
}

// Logical and --> True if both sides are true, False otherwise
// Logical or  --> False if both sides are false, True otherwise

// challenge area
let isGuestOneVegan = false;
let isGuestTwoVegan = false;

// are both vegan --> provide only vegan food
// are one of them vegan -->make sure to provide some vegan options
// are no one of them are vegan --> provide no vegan options

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Only vegan dishes");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("Some vegan dishes");
} else {
  console.log("No vegan options - Anythnig on the menue");
}
