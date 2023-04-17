//Exercise 05. in module 6
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
//DONE IT !!!

//bullshit !
//the door entrance has to be in the function
//so :
// This function takes a boolean parameter
// that says if password was entered correctly
// (true = yes, false = no)
function logIn(passwordIsCorrect) {
    if (passwordIsCorrect != true) {
      console.log("Your password is not correct, you can't log in");
    }
    else{
      console.log("Welcome back! You are now signed in.");}
     
}
//line test :
logIn(true);



  
function litersToGallons(liters) {
//it seems that it is an error of typing and of syntax and also of calculation
//  var reslut = liters * 3.785
    var result = liters / 3.785;
    var message = liters.toString() + " liters are " + result.toString() + " gallons.";
//it seems that it is an error of upper or lower case in console.log
//  Console.log(message);
    console.log(message);
  }
//line test :
litersToGallons(10);
//DONE IT !!


//it seems that the parameter is not valid between ""
//function isGreatherThan10("number") {
function isGreatherThan10(number) {
    if (number > 10) {
      return "The number is greater than 10.";
    } else if (number == 10) {
      return "The number is 10";
    }else {
      return "The number is smaller than 10.";
    }
  }
//has to call the function with parameter number to check
console.log(isGreatherThan10(8));
console.log(isGreatherThan10(12));
console.log(isGreatherThan10(10));
//DONE IT !!
  
  