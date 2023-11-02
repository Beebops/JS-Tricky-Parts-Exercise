// Curried Add

// Write a function called curriedAdd. If you give this function a number, it returns a new function to you. If you give this function no arguments, it returns the total of all the numbers you’ve passed to it so far.

// let firstAdder = curriedAdd();
// let secondAdder = curriedAdd();
// let thirdAdder = curriedAdd();

// firstAdder(); // 0
// secondAdder(1)(2)(); // 3
// thirdAdder(2)(8)(5)(1)(); // 16

function curriedAdd() {
  const args = []
  function adder(num) {
    if (num === undefined) {
      return args.reduce((acc, current) => acc + current, 0)
    } else {
      args.push(num)
      return adder
    }
  }
  return adder
}
