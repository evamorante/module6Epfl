function add(a, b) {
  var result = b + a;
  return "The result is " + result.toString();
}

message = add(10, 2);
console.log(message);

message = add(3, 2);
console.log(message);

message = add(7, 2);
console.log(message);
//ça ça marche, et .....
//ça ??

function add(a, b) {
    var result = b + a;
    var message = "The result is " + result.toString();
    return message;
}
console.log(add(10,3));
console.log(add(3,3));
console.log(add(7,3));