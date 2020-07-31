const greet = require('./greet');

test('The method should return a string "Hello, Bob.', () => {
    expect(greet("Bob")).toBe("Hello, Bob.");
});

test('When name is null, then the method should return the string', () => {
    expect(greet()).toBe("Hello, my friend.");
});

test('When name is all uppercase, then the method should shout back to the user.', () => {
    expect(greet("JERRY")).toBe("HELLO JERRY!");
});