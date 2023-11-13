'use strict'

//CodeWars

//1. Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool){
	return `${bool === true ? 'Yes' : 'No'}`;
}

console.log(boolToWord(false));

//2. Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
	return -number;
}

console.log(opposite(5));

//3. Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr (n, s) {
	return s.repeat(n);
}

console.log(repeatStr(5, 'Hello'));

//4. Simple, given a string of words, return the length of the shortest word(s).
//	  String will never be empty and you do not need to account for different data types.

function findShort(s){
	const res = s.split(" ").reduce((a,b) => a.length < b.length ? a : b);
	return res.length;
}

console.log(findShort('qwe qwqwe qwqwe qqqq qqqweqeqweqw qq qweqw q qq qqqq'));

//5. Create a function with two arguments that will return an array of the first n multiples of x.
//   Assume both the given number and the number of times to count will be positive numbers greater than 0.
//   Return the results as an array or list ( depending on language ).
//   Example:
//   countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
//   countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
	let z = [];
 
	for(let i = 1; i <= n; i++) {
		z.push(i*x); 
	}

	return z;
}

console.log(countBy(2,5));

//6. Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. 
//   It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
//   Ribonucleic acid, RNA, is the primary messenger molecule in cells. 
//   RNA differs slightly from DNA its chemical structure and contains no Thymine. 
//   In RNA Thymine is replaced by another nucleic acid Uracil ('U').
//   Create a function which translates a given DNA string into RNA.
//   For example:
//   "GCAT"  =>  "GCAU"

function DNAtoRNA(dna) {
	return dna.replace(/T/g, 'U');
}

console.log(DNAtoRNA('GCAT'));

//7. Let's play! You have to return which player won! In case of a draw return Draw!.
//   Examples(Input1, Input2 --> Output):
//   "scissors", "paper" --> "Player 1 won!"
//   "scissors", "rock" --> "Player 2 won!"
//   "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
	switch(p1) {
		case 'paper':
			if(p2 === 'scrissors') {
				return 'Player 2 won!';
			} else if (p2 === 'rock') {
				return 'Player 1 won';
			} else {
				return 'Draw';
			}
		case 'rock':
			if(p2 === 'scrissors') {
				return 'Player 1 won';
			} else if (p2 === 'paper') {
				return 'Player 2 won';
			} else {
				return 'Draw';
			}
		case 'scrissors':
			if(p2 === 'rock') {
				return 'Player 2 won';
			} else if (p2 === 'paper') {
				return 'Player 1 won!';
			} else {
				return 'Draw';
			}
	}
};

console.log(rps('scrissors', 'paper'));

//8. Given an array of integers, return a new array with each value doubled.
//   For example:
//   [1, 2, 3] --> [2, 4, 6]

function maps(x){
	return x.map((e) => e * 2);
}

console.log(maps([1, 2, 5]));

//9. You were camping with your friends far away from home, 
//   but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away!
//   You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
//   Considering these factors, write a function that tells you if it is possible to get to the pump or not.
//   Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
	return (fuelLeft * mpg) >= distanceToPump ? true : false;
};

console.log(zeroFuel(50, 25, 2));

//10. Complete the solution so that it reverses the string passed into it.
//    'world'  =>  'dlrow'
//    'word'   =>  'drow'

function solution(str){
	return str.split('').reverse().join('');
};

console.log(solution('abw'));

// 11. After a hard quarter in the office you decide to get some rest on a vacation. 
//     So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
//     You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
//     Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, 
//     if you rent the car for 3 or more days, you get $20 off your total.
//     Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
	if(d >= 7) {
		return d * 40 - 50;
	} else if (d >= 3 ) {
		return d * 40 - 20;
	} else {
		return d * 40;
	}
};

// 12. Write a function which calculates the average of the numbers in a given list.
//     Note: Empty arrays should return 0.

function findAverage(array) {
	return array.length === 0 ? 0 : (array.reduce((curr, res) => curr + res, 0)/ array.length);
};

console.log(findAverage([27, 61, 67, 59, 2]));

//13. Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//    Note: input will never be an empty string

function fakeBin(x){
	let res = '';
	x.split('').forEach(e => e < 5 ? res += 0 : res += 1);
	return res;
};

console.log(fakeBin('1231552'));

//14. Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//    Return your answer as a number.

function sumMix(x){
	return x.reduce((acc, curr) => acc + Number(curr), 0);
};

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));

//15. Build a function that returns an array of integers from n to 1 where n>0.
//    Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
	let res = [];
	for(let i = 1; i <= n; i++) {
		res.push(i);
	}
	return res.reverse();
 };

 console.log(reverseSeq(5));