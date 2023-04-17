// This function takes a boolean parameter
// that says if password was entered correctly
// (true = yes, false = no)
function logIn(passwordIsCorrect) {
    if (passwordIsCorrect != true) {
      console.log("Your password is not correct, you can't log in");
    }
}
//it seems that the console.log last statement is an opened door for anyone with wrong passeword could enter in
//   console.log("Welcome back! You are now signed in.");
// }

console.log("Welcome back! You are now signed in.");
  