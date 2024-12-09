//Failing test example
function multiply(a: number, b: number): number {
    return a * b;
}

test('multiply should correctly multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(10); // Intentionally incorrect expected value
});
