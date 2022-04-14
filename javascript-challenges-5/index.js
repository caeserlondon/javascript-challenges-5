/////// CHALLENGE 1  UNIQUE VALUES
///  find unique values by using Set() data structure

function unique(str) {
	let tempStr = new Set();
	for (let letter of str) {
		if (tempStr.has(letter)) {
			return false;
		}
		tempStr.add(letter);
	}
	return true;
}

console.log(unique("abcde"));
//true
console.log(unique("abacdefb"));
//false
