// 2. a parameter is used in the parathensis of a function, an argument is passed into a function.
// 3. console.log is just looged to the console and then deleted. a return stores a value

//Verbal questions

function checkPalindrome(str) {
	return str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
		
}

//Palindrome


console.log(checkPalindrome("Racecar"));

function sumDigits(num) {
let newNum = num.toString().split(""); 
let sum = 0
console.log(newNum);
	for (let i = 0; i <= newNum.length-1; i++) {
		parseInt(newNum[i]);
		sum = sum + parseInt(newNum[i]);
	}; return sum;

}

//console.log(sumDigits(123));


//This function makes me so mad and so happy all at the same time(IM NOT SUBMITTING THIS AS HOMEWORK)

//function sumDigits1(num) {
//	return (num - 1) % 9 + 1;
//}

// Pythagoras



function calculateSide(sideA, sideB) {
	var sideC = Math.sqrt((sideA * sideA) + (sideB * sideB));
	return sideC
} 

console.log(calculateSide(5, 12));

function sumArray(array1) {
	let sum = 0;
	for (let i = 0; i < array1.length; i++) {
		sum = sum + array1[i];
		
	} return sum;

}

console.log(sumArray([1, 2, 3, 70]));

//Prime Numbers

function checkPrime(num) {
	array5 = [1, 2, 3, 4, 5];
	let num7 = 0
	for (let i = 0; i <= array5.length; i++) {
		if (Math.sqrt([i]) === [i]) {
			console.log(array5[i]);
		}
	}
}

//Insert Dash


function insertDash(array1) {
	let var1 = 0
	for (var1 = 0; var1 <array1.length-1; var1++) {
		if ([var1] % 2 === 1) {
			console.log(array1.join("-"));
		} else if ([var1] % 2 === 0 ) {
			console.log(var1[1]);
		} return var1[2];
	}
}

console.log(insertDash([1,2,3,4,5,5,6]));

function insertDash1(num) {
	let var1 = (num+"").split("");

	console.log(var1); 
	for (let i = 0; i < var1.length; i++) {
		console.log(typeof(parseInt(var1[i])));
	}
}

console.log(insertDash1(12345));

let num3 = "123456"
console.log(num3.toString());
console.log(num3.indexOf(4))








