const userArgs = process.argv.slice(2); // Only user-passed arguments
const count = userArgs.length;

console.log(count <= 1 ? "No argument" : userArgs[0]);
