'use strict'
const phonenum = require('./../index');
const code = require('code');
const supertest = require('supertest');
const Lab = require ('lab');
const lab = exports.lab = Lab.script();
const expect = code.expect;

lab.test('success for 1 + 1 = 2', (done) => {
				expect (1 + 1).to.equal(2);
				done();
});


lab.test('success for 123-234-3456 type case', (done) => {
				console.log(`the phonenum is ${JSON.stringify(phonenum)} `);
				expect (phonenum.isValid('123-234-3456')).to.equal(true);
				done();
});
lab.test('success for 123 234 3456 type case', (done) => {
				expect (phonenum.isValid('123 234 3456')).to.equal(true);
				done();
});

lab.test('success for 123.234.3456 type case', (done) => {
				expect (phonenum.isValid('123.234.3456')).to.equal(true);
				done();
});

lab.test('success for (123) 234 3456 type case', (done) => {
				expect (phonenum.isValid('(123) 234 3456')).to.equal(true);
				done();
});

lab.test('success for (123)234 3456 type case', (done) => {
				expect (phonenum.isValid('(123)234 3456')).to.equal(true);
				done();
});

lab.test('fail for 123/234/3456 type case', (done) => {
				expect (phonenum.isValid('123/234/3456')).to.equal(false);
				done();
});
lab.test('fail for 123) 234 3456 type case', (done) => {
				expect (phonenum.isValid('123) 234 3456')).to.equal(false);
				done();
});

lab.test('fail for 123234.3456 type case', (done) => {
				expect (phonenum.isValid('123234.3456')).to.equal(false);
				done();
});

lab.test('fail for (123 234 3456 type case', (done) => {
				expect (phonenum.isValid('(123 234 3456')).to.equal(false);
				done();
});

lab.test('fail for (123) 2343456 type case', (done) => {
				expect (phonenum.isValid('(123) 2343456')).to.equal(false);
				done();
});
lab.test('fail for 023 234 3456 type case', (done) => {
				expect (phonenum.isValid('023 234 3456')).to.equal(false);
				done();
});

lab.test('fail for (023)234 3456 type case', (done) => {
				expect (phonenum.isValid('(023)234 3456')).to.equal(false);
				done();
});

lab.test('fail for (023) 234-3456 type case', (done) => {
				expect (phonenum.isValid('(023) 234-3456')).to.equal(false);
				done();
});

lab.test('fail for (023) 234.3456 type case', (done) => {
				expect (phonenum.isValid('(023) 234.3456')).to.equal(false);
				done();
});

