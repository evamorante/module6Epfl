var a = 0;
console.log(a); // log
a = a + 10;
// at this point, a == 10
console.log(a); // log
a = a * 2 + 1;
// at this point, a == 21
console.log(a); // log
//a = a + 3 / 2; ERROR HERE - PUT PARENTHESIS FOR HAVING A GOOD CALCULATION
// at this point, a == 12
a = (a+3)/2;
console.log(a); // log
a = a - 11;
// at this point, a == 1
console.log(a); // log

console.log(a);

//Perfect. Now the bug is gone. This technique of hunting for bugs is simply called logging assumptions and it works very well.