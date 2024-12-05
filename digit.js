function digitize(n) {
    //code here
    return [...''+n].reverse().map(Number)
  }

console.log(digitize(123405))