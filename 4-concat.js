const userArgs = process.argv.slice(2); // Only user-passed arguments
const count = userArgs.length;

const arg1 = userArgs[0];
const arg2 = userArgs[1];

console.log(`${arg1} is ${arg2}`);
