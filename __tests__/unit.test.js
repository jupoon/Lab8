// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//PHONE NUMS TESTS//
test('Dashes and Parenthesis', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
  });

test('No Dashes', () => {
expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('Too Long', () => {
    expect(functions.isPhoneNumber('123098409587093784509347823254123-45671234897014293781034298')).toBe(true);
});

test('Too Short', () => {
expect(functions.isPhoneNumber('123')).toBe(false);
});


//EMAIL TESTS//
test('Standard', () => {
expect(functions.isEmail('jupoon@ucsd.edu')).toBe(true);
});

test('Strange Characters', () => {
expect(functions.isEmail('234_789@gmail.com')).toBe(true);
});

test('Invalid Address', () => {
expect(functions.isEmail('hi@woah.thisistoolong')).toBe(false);
});

test('No Email', () => {
expect(functions.isEmail('clarence')).toBe(false);
});


//PASSWORD TESTS//
test('Includes Num & Special Character', () => {
expect(functions.isStrongPassword('P@55word')).toBe(false);
});

test('No Lowercase', () => {
expect(functions.isStrongPassword('P@55WORD')).toBe(false);
});

test('Only Lowercase', () => {
expect(functions.isStrongPassword('password')).toBe(true);
});

test('Only Uppercase', () => {
expect(functions.isStrongPassword('PASSWORD')).toBe(true);
});

//DATE TESTS//
test('Short Date', () => {
expect(functions.isDate('2/2/22')).toBe(false);
});

test('Long Date', () => {
expect(functions.isDate('02/02/2022')).toBe(true);
});

test('Good Date', () => {
    expect(functions.isDate('02/13/2022')).toBe(true);
    });

test('Invalid Day/Month/Year', () => {
expect(functions.isDate('69/69/420')).toBe(false);
});


//HEX TESTS//
test('Standard', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});

test('Short', () => {
    expect(functions.isHexColor('000')).toBe(true);
});

test('Too Long', () => {
    expect(functions.isHexColor('53535353535353')).toBe(false);
});

test('Wrong Letter', () => {
    expect(functions.isHexColor('XYZ')).toBe(false);
});