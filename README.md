# JavaScript Loose Comparison and NaN

This repository demonstrates a common JavaScript pitfall: unexpected behavior when using loose comparison (==) with NaN (Not a Number).  The `bug.js` file contains code that incorrectly handles NaN values due to the loose comparison.

The `bugSolution.js` file offers a corrected version using strict comparison (===) to address the issue and produce the expected results.

## Understanding the Problem

NaN is a special value in JavaScript that represents 'Not a Number'.  A key characteristic of NaN is that it's not equal to itself (NaN == NaN is false). This makes handling NaN with loose comparison tricky and error-prone.

## Solution

The solution employs strict comparison (===).  Strict comparison does not perform type coercion; therefore, NaN will not be misinterpreted.

## Learning Outcomes

This example highlights the importance of using strict equality (===) when working with NaN and other potentially problematic values to avoid unexpected results and ensure accurate conditional logic in JavaScript.