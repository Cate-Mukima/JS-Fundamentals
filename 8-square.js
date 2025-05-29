const size = parseInt(process.argv[2]);
if (isNaN(size)) {
  console.log("Missing size");
  return;
}

for (let j = 0; j < size; j++) console.log("x".repeat(size));
