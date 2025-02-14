function foo(a, b) {
  if (a === 0 && b === 0) {
    return 'both are zero';
  } else if (a === 0) {
    return 'a is zero';
  } else if (b === 0) {
    return 'b is zero';
  } else {
    return 'none are zero';
  }
}

console.log(foo(0, NaN)); // Unexpected output: 'none are zero'