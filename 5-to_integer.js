const userArgs = process.argv.slice(2); // Only user-passed arguments
const count = userArgs.length;

const arg1 = userArgs[0];
const arg1Num = parseInt(arg1);
const isArg1Num = !isNaN(arg1Num);
if (isArg1Num) {
  console.log(`My number: ${arg1Num}`);
} else {
  console.log("Not a number");
}
