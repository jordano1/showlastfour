//My answer

function maskify(cc) {
	var maskedString = '';
	cc = cc.toString();
	for (var i = 0; i < cc.length - 4; i++) {
		maskedString += '#';
	}

	for (var j = 4; j >= 1; j--) {
		var lastCharacter = cc.charAt(cc.length - j);
		var lastNums = lastCharacter;
		maskedString += lastNums;
	}

	return maskedString;
}

/* Description:

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

*******Best Practice Solution:

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

*/

console.log(maskify('4556364607935616')); // '############5616');
console.log(maskify('1')); // '1');
console.log(maskify('11111')); // '#1111');
console.log(maskify('22222222222222')); // '#1111');
console.log(maskify(1)); // '#1111');
console.log(maskify(4444444444)); // '#1111');