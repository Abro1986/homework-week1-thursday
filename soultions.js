// 2. a parameter is used in the parathensis of a function, an argument is passed into a function.
// 3. console.log is just looged to the console and then deleted. a return stores a value

function checkPalindrome(str) {
	return str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
		
}

console.log(checkPalindrome("Racecar"));

function sumDigits(num) {
let newNum = num.toString().split(""); 
let sum = 0
console.log(newNum);
	for (let i = 0; i <= newNum.length-1; i++) {
		parseInt(newNum[i]);
		sum = sum + parseInt(newNum[i]);
	}; return sum

}

console.log(sumDigits(123))

//