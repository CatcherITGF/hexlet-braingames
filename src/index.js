#!/usr/bin/env node
import readlineSync from 'readline-sync';

const userName = () => {
	console.log('Welcome to the Brain Games!\n');
	const actual = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${actual}!`);
};

export default userName;