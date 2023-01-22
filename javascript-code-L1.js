let input = "2 Star1 10 100 100 100 100 90 90 90 90 90 100 Star2 6 100 100 100 80 100 100";
let input2 = "Star1 10 100 100 100 100 90 90 90 90 90 100";

const planetFinder = (input) => {
	let inputArr = input.split(" ");

	//separate the array by stars
	let arrOfStarsData = separateByStar(inputArr);

	console.log("separate by stars:", arrOfStarsData);

	// build the output of counting the consecutive numbers
	let newOutput = arrOfStarsData.map((star) => {
		// debugger;
		starIntoArray = star.split(" "); // in orider to be able to apply array methods
		let starName = starIntoArray[0];
		let starNumbers = starIntoArray.slice(2); // remove the first two elements in order to start from the numbers that ar to be counted
		let countNumberRepetitions = countConsecutiveNumbers(starNumbers);
		return `${starName} ${countNumberRepetitions}`;
	});

	return newOutput.join(" ");
};

const separateByStar = (arr) => {
	// debugger;
	let output = [];
	let index = 0;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i].match(/^[A-Za-z]/)) {
			//if it reaches "star", prepare to build a new element in the array
			output[index] = arr[i];
			index++;
		} else {
			output[index - 1] = output[index - 1] + " " + arr[i]; // just add the next element in the same index. Starts from index-1 because it certainly starts from Star, which is on arr[1]
		}
	}
	return output;
};

const countConsecutiveNumbers = (input) => {
	let output = "";
	// debugger;
	let currentNumber = input[0];
	let counter = 1;
	for (let i = 1; i <= input.length; i++) {
		// i starts from 1 because it wouldn't make sense to count the first number twice
		if (input[i] === currentNumber) {
			// as long as it's the same, increase the count
			counter++;
		} else {
			// at this point we can just write what we've counted earlier
			output += currentNumber + " " + counter + " ";
			counter = 1; // reset the counter for the next number
			currentNumber = input[i]; // change the current number for the next in the for interation
		}
	}
	return output;
};

console.log("planet finder: ", planetFinder(input));
