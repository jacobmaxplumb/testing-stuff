const { addTwoNumbers } = require(".");

test("addTwoNumbers 1 and 3 gives me 4", () => {
    const x = 10;
    const result = addTwoNumbers(1,3);
    expect(result).toBe(5)
})