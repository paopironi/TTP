import { randomInt } from "node:crypto";
import * as readline from "node:readline";

function guessANumber(min = 0, max = 20) {
	// Generate a random number between min and max;
	const num = randomInt(min, max + 1);
	// Use the readline Node module to prompt the user and accept user input
	const rl = readline.createInterface(process.stdin, process.stdout);
	rl.setPrompt(`Guess a number between ${min} and ${max}: `);
	rl.prompt();
	// Prevent input of alphabetic characters
	rl.on("line", (line) => {
		if (line.match(/[A-Z]|[a-z]/g) !== null) {
			console.log("Only numbers are permitted, please try again: ");
			rl.setPrompt("");
			rl.prompt();
			return;
		}
		// The input is either a decimal or a integer number
		const ans = parseFloat(line);
		if (!isNaN(ans)) {
			// Prevent input of a decimal number
			if (String(ans).includes(".")) {
				console.log(
					"Decimal numbers are not permitted, please try again: "
				);
				rl.setPrompt("");
				rl.prompt();
				return;
			}
			// Check if the number is in the correct range
			if (ans > max) {
				console.log(
					`The number should be between ${min} and ${max}, please try again: `
				);
				rl.setPrompt("");
				rl.prompt();
				return;
			}
			if (ans < min) {
				console.log(
					`The number should be between ${min} and ${max}, please try again: `
				);
				rl.setPrompt("");
				rl.prompt();
				return;
			}
			// If in correct range, check if greater or lower that the number to guess
			if (ans > num) {
				console.log(
					"Your guess is greater than the mistery number, try again:"
				);
				rl.setPrompt("");
				rl.prompt();
				return;
			}
			if (ans < num) {
				console.log(
					"Your guess is lower than the mistery number, try again:"
				);
				rl.setPrompt("");
				rl.prompt();
				return;
			}
			// Terminate game if the number is found
			if (ans == num) {
				console.log(
					"Congratulations! You found the mistery number! Good bye."
				);
				rl.close();
				return;
			}
		}
	});
}

guessANumber();
