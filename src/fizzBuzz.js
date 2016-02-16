function FizzBuzz() {

}
FizzBuzz.prototype.play = function(number) {
  if (number === 3) {
    return "fizz";
  }
  else if(number === 5) {
    return "buzz";
  }
}
