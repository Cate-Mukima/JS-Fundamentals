const userArgs = process.argv.slice(2); // Only user-passed arguments
const count = userArgs.length;

console.log(
  count === 0
    ? "No argument"
    : count === 1
    ? "Best Argument found"
    : "Best School Arguments found"
);
