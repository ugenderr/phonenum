'use strict'

const ph = require('./index');


console.log(`the value should be true:  ${ph.isValid('123-456-7899')}`);
console.log(`the value should be true:  ${ph.isValid('(123)-456-7899')}`);
console.log(`the value should be true:  ${ph.isValid('(123) 456 7899')}`);
console.log(`the value should be true:  ${ph.isValid('(123)456-7899')}`);
console.log(`the value should be true:  ${ph.isValid('(123)/456/7899')}`);
console.log(`the value should be true:  ${ph.isValid('(123).456.7899')}`);
console.log(`the value should be true:  ${ph.isValid('123.456.7899')}`);
console.log(`the value should be false:  ${ph.isValid('123).456.7899')}`);
console.log(`the value should be false:  ${ph.isValid('(123.456.7899')}`);
console.log(`the value should be false:  ${ph.isValid('123456.7899')}`);
console.log(`the value should be false:  ${ph.isValid('123 4567899')}`);
