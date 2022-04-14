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
function unique(str) {
	return new Set(str).size === str.length;
}

console.log(unique("abcde"));
//true
console.log(unique("abacdefb"));
//false
