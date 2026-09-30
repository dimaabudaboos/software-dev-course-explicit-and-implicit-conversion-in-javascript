/*
==================================================
Part 1: Debugging Challenge
==================================================
*/

// Original Bug: Relying on implicit conversion like "5" - 2.
// Fix: Use Number() for explicit conversion to clearly define data types and avoid unexpected behavior.
let inputString = "5";
let result = Number(inputString) - 2; 

// Explicitly convert the numeric result to a String before concatenation
console.log("The result is: " + String(result));


/*
==================================================
Part 2: Write Your Own Examples
==================================================
*/

// --- 1. Implicit Type Conversion (Edge Case: null) ---
console.log("\n--- Example 1: Implicit Type Conversion ---");
let nullValue = null;
console.log("Before - Value:", nullValue, "| Type:", typeof nullValue);

// Implicit Conversion: JavaScript automatically coerces null to 0 during subtraction (-)
let implicitResult = nullValue - 10; 
console.log("After - Value:", implicitResult, "| Type:", typeof implicitResult);


// --- 2. Explicit Type Conversion (Edge Case: undefined -> NaN) ---
console.log("\n--- Example 2: Explicit Type Conversion ---");
let undefinedValue = undefined;
console.log("Before - Value:", undefinedValue, "| Type:", typeof undefinedValue);

// Explicit Conversion: Converting undefined to a Number explicitly returns NaN (Not a Number)
let explicitResult = Number(undefinedValue); 
console.log("After - Value:", explicitResult, "| Type:", typeof explicitResult);
