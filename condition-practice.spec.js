
const { test, expect } = require('@playwright/test');

const testData = [
  { marks: 85, expected: 'PASS' },
  { marks: 35, expected: 'FAIL' },
  { marks: 60, expected: 'PASS' },
  { marks: 20, expected: 'FAIL' }
];

function getResult(marks) {
  return marks >= 40 ? 'PASS' : 'FAIL';
}

test('Verify student results using a loop', async () => {
  for (const data of testData) {
    const actual = getResult(data.marks);

    console.log(data.marks, actual);

    expect(actual).toBe(data.expected);
  }
});
