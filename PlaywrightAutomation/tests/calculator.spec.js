const { test, expect } = require('@playwright/test');

function add(a, b) {
    return a + b;
}
function subtract (a, b) {
    return a - b;
}
function multiply (a , b) {
    return a * b;
}
function divide (a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;  
}

test('Verify calculator oprations', async () => {
    expect(add(10, 20)).toBe(30);
    expect(subtract(20, 10)).toBe(10);
    expect(multiply(10, 21)).toBe(210);
    expect(divide(20, 10)).toBe(2);


    console.log('Calculator Addition operations passed', add(10, 20));
    console.log('Calculator Subtraction operations passed', subtract(20, 10));
    console.log('Calculator Multiplication operations passed', multiply(10, 21));
    console.log('Calculator Division operations passed', divide(20, 10));

});