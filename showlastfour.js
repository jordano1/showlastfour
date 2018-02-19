
// return masked string
function maskify(cc) {
	// return masked string
	var pizza = "asdf"
	var rizza = 123124214
	var trizza = "asdfoijasofijawofijewofijw19024419085775klsdjfl.,xcz.v,mn./.z,mx./v/x,.mv.,zx"
	function maskify(cc) {
		var dd = cc.toString();
		var mask = dd.replace(/\d(?=.{4,}$)|\w(?=.{4,}$)|[.,/](?=.{4,}$)/g, "#");
		console.log(mask);
		return mask;
	}
}


/* Description:

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

*******Best Practice Solution:

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
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
*/
console.log(maskify(124124124))
console.log(maskify(pizza))
console.log(maskify(rizza))
console.log(maskify(trizza))
console.log(maskify('4556364607935616')); // '############5616');
console.log(maskify('1')); // '1');
console.log(maskify('12')); // '1');
console.log(maskify('123')); // '1');
console.log(maskify('1234')); // '1');
console.log(maskify('11111')); // '#1111');
console.log(maskify('22222222222222')); // '#########2222');
console.log(maskify(1)); // '#1111');
console.log(maskify(4444444444)); // '#####4444');
