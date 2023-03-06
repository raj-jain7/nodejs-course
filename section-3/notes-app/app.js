const adding = require("./utils.js");
const message = require("./notes.js");
const validator = require("validator");
const sum = adding(300, 400);
console.log(sum);
console.log(message());
if (validator.isEmail("rajkjain04@gmail.com") === true) {
  console.log("Your email is correct");
}
