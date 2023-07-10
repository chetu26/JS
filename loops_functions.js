// If-Else Statement
let age = 18;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are not an adult yet");
}

// Switch Case Statement
let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}
console.log(dayName);

// Loops
// For Loop
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// While Loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// Functions
function greet(name) {
  console.log("Hello, " + name);
}

greet("John");

