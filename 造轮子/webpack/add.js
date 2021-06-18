// exports.default = function add(num, num2) {
// 	return num + num2
// }


// eval('exports.default = function add(num, num2) {return num + num2}')





function require(file) {
	
	var exports = {};
	
	(function(exports, code) {
		eval(code)
	})(exports, 'exports.default = function(a,b){return a + b}')

}

var add = require('./add.js').default;
console.log(add)
