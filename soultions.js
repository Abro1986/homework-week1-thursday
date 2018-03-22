// 2. a parameter is used in the parathensis of a function, an argument is passed into a function.
// 3. console.log is just looged to the console and then deleted. a return stores a value

function checkPalindrome(str) {
	return str === str.toLowerCase().split("").reverse().join("");
		console.log(str);
}

console.log(checkPalindrome("racecar"));