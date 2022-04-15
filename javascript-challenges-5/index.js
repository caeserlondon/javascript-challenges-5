/////// CHALLENGE 1  UNIQUE VALUES
///  find unique values by using Set() data structure
/// solutin 1
// function unique(str) {
// 	let tempStr = new Set();
// 	for (let letter of str) {
// 		if (tempStr.has(letter)) {
// 			return false;
// 		}
// 		tempStr.add(letter);
// 	}
// 	return true;
// }

// console.log(unique("abcde"));
// //true
// console.log(unique("abacdefb"));
// //false
//////////
/// solution 2
// function unique(str) {
// 	return new Set(str).size === str.length;
// }

// console.log(unique("abcde"));
// //true
// console.log(unique("abacdefb"));
// //false
///////////////////////////////////////////////////////////////

//// CHALLENGE 2
/// find unique object property values

// let products = [
// 	{
// 		title: "Iphone 8",
// 		company: "apple",
// 	},
// 	{
// 		title: "Galaxy",
// 		company: "samsong",
// 	},
// 	{
// 		title: "Iphone 7",
// 		company: "apple",
// 	},
// 	{
// 		title: "Iphone Xs",
// 		company: "apple",
// 	},
// 	{
// 		title: "HTC phone",
// 		company: "htc",
// 	},
// 	{
// 		title: "Galaxy HD",
// 		company: "samsong",
// 	},
// ];

// /////// solution 1

// // function getUnique(arr) {
// // 	let tempArr = arr.map((item) => item.company);
// // 	return [...new Set(tempArr)];
// // }
// // console.log(getUnique(products));

// /// solution 2
// function getUnique(arr) {
// 	return [
// 		...arr.reduce((acc, curr) => {
// 			acc.add(curr.company);
// 			return acc;
// 		}, new Set()),
// 	];
// }
// console.log(getUnique(products));

////////////////////////////////////////////////////

/// CHALLENGE 3
//return first word with the greatest number of repeated letters

// function countLetters(str) {
// 	let tempArr = str.split(" ");
// 	tempArr = tempArr.map((item) => {
// 		let tempItemArr = item.toLowerCase().split("");
// 		return tempItemArr.reduce(
// 			(acc, curr) => {
// 				acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
// 				if (acc[curr] > acc.max) {
// 					acc.max = acc[curr];
// 				}
// 				return acc;
// 			},
// 			{ max: 1, word: item }
// 		);
// 	});
// 	let amount = 1;
// 	let word = "";
// 	for (let item of tempArr) {
// 		if (item.max > amount) {
// 			amount = item.max;
// 			word = item.word;
// 		}
// 	}
// 	if (amount > 1) {
// 		return word;
// 	}

// 	return -1;
// }
// console.log(countLetters("Javascript is the greatest programming languageee"));

///////////////////////////////////////////////////////

// //////////// CHALLENGE 4
// //// sort the array and find the second item from right and from left.
// /// delete dublicate

// function secondValue(arr) {
// 	let values = [...new Set(arr)].sort((a, b) => a - b);
// 	if (values.length < 2) {
// 		return `${values[0]}`;
// 	} else if (values.length === 2) {
// 		return `${values[0]} ${values[1]}`;
// 	} else {
// 		return `${values[1]} ${values[values.length - 2]}`;
// 	}
// }

// console.log(secondValue([1]));
// //1
// console.log(secondValue([4, 2]));
// // 2 4
// console.log(secondValue([11, 44, 22]));
// //11,22,44 === 22 , 22
// console.log(secondValue([3, 2, 88, 3, -11, 67, 7]));
// // -11,2,3,7,67,88 === 2 , 67

//////////////////////////////////////////////////////

///////  CHALLENGE 5
/// return number with most repeat
/// if two numbers are repeated then repeat the first
/// if none repeated then return -1

// function testRepeat(arr) {
// 	let max = 1;
// 	let position = 0;
// 	let value = -1;
// 	let tempNumbers = arr.reduce((acc, curr, index) => {
// 		acc[curr] = acc[curr]
// 			? { ...acc[curr], amount: acc[curr]["amount"] + 1 }
// 			: { amount: 1, index };
// 		let amount = acc[curr].amount;
// 		let place = acc[curr].index;
// 		if (amount > max || (amount === max && place <= position && amount > 1)) {
// 			max = amount;
// 			value = curr;
// 			position = place;
// 		}
// 		return acc;
// 	}, {});
// 	return value;
// }

// console.log(testRepeat([5, 2, 2, 1, 5]));
// // return 5
// console.log(testRepeat([6, 5, 5, 10, 10, 10]));
// // return 10
// console.log(testRepeat([3, 4, 1, 6, 10]));
// // return -1;

/////////////////////////////////////////////////////////////

///// CHALLENGE 6
//prime number = can only be divided by itself or one.

/// solution 1
// function isPrime(num) {
// 	if (num < 2) {
// 		return false;
// 	}
// 	for (let i = 2; i < num; i++) {
// 		if (num % i === 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// console.log(isPrime(8));
// // false
// console.log(isPrime(11));
// // true
// console.log(isPrime(121));
// // false
// console.log(isPrime(127));
// // true

///////// solution 2 : faster for big numbers.

// function isPrime(num) {
// 	if (num < 2) {
// 		return false;
// 	}
// 	let root = Math.ceil(Math.sqrt(num));

// 	for (let i = 2; i <= root; i++) {
// 		if (num % i === 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// console.log(isPrime(8));
// // false
// console.log(isPrime(11));
// // true
// console.log(isPrime(121));
// // false
// console.log(isPrime(127));
// // true
////////////////////////////////////////////////

//// CHALLENGE 7
/// count repeating letters
/// string will not contain numbers or sumbols..  only letters

function countLetters(str) {
	let tempArr = str.split("");
	let letters = [];
	let count = 1;

	for (let i = 0; i < tempArr.length; i++) {
		if (tempArr[i] === tempArr[i + 1]) {
			count++;
		} else {
			let value = `${count}${tempArr[i]}`;
			letters = [...letters, value];
			count = 1;
		}
	}
	return letters.join("");
}
console.log(countLetters("ffffeerttttooo"));
/// should return 4f2e1r4t3o
