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
//////////////////////////

//// CHALLENGE 2
/// find unique object property values

let products = [
	{
		title: "Iphone 8",
		company: "apple",
	},
	{
		title: "Galaxy",
		company: "samsong",
	},
	{
		title: "Iphone 7",
		company: "apple",
	},
	{
		title: "Iphone Xs",
		company: "apple",
	},
	{
		title: "HTC phone",
		company: "htc",
	},
	{
		title: "Galaxy HD",
		company: "samsong",
	},
];

/// solution 1

function getUnique(arr) {
	let tempArr = arr.map((item) => item.company);
	return [...new Set(tempArr)];
}
console.log(getUnique(products));
