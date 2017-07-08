"use strict"
class phonenum {
	constructor() {
	}
	isValid(number) {
		return /^((\d{3}[-. ])|(\(\d{3}\)[-. ]?))\d{3}[-. ]\d{4}$/.test(number);
	}
}
module.exports = new phonenum(); 
