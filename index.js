"use strict"
class phonenum {
	constructor() {
	}
	isValid(number) {
		return /^(([1-9]{3}[-. ])|(\([1-9]{3}\)[-. ]?))\d{3}[-. ]\d{4}$/.test(number);
	}
}
module.exports = new phonenum(); 
