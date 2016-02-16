describe("FizzBuzz", function(){

  var fizzbuzz;
  // beforeEach(function(){
    fizzbuzz = new FizzBuzz();
  // });
  // fizzbuzz = new Fizzbuzz();


  it("should print fizz when number is 3", function() {
    expect(fizzbuzz.play(3)).toEqual("fizz");

  });
  it("should print buzz when number is 5", function() {
    expect(fizzbuzz.play(5)).toEqual("buzz");
  });
  it("should print 4 when number is 4", function() {
    expect(fizzbuzz.play(4)).toEqual("4");
  });
});
