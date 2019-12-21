import leapYear from './index.js';

it ('should not be a leap year if divisible by 100, not 400', () => {
    const input = 1900;
    const expectedOutput = false;
    expect(leapYear(input)).toBe(expectedOutput);
});

it ('should not be less than year 1582', () => {
    const input = 1581;
    expect(() => {
        leapYear(input);
    }).toThrow();
});

it ('should be a leap year if divisible by 4 and not divisible by 100', () => {
    const input = 1604;
    const expectedOutput = true;
    expect(leapYear(input)).toBe(expectedOutput);
});

it ('should be a leap if divisible by 400', () => {
    const input = 2000;
    const expectedOutput = true;
    expect(leapYear(input)).toBe(expectedOutput);
});

it ('should not be a leap if not divisible by 4', () => {
    const input = 1983;
    const expectedOutput = false;
    expect(leapYear(input)).toBe(expectedOutput);
});