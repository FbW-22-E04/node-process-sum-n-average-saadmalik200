// console.log(process.argv.slice(2));

let total = 0;
function sum() {
  if (process.argv[2] === "sum" || process.argv[2] === "average") {
    for (let i = 3; i < process.argv.length; i++) {
      if (isNaN(parseInt(process.argv[i]))) {
        console.log(
          `Sorry, the argument ${process.argv[i]} is not a number, please try again`
        );
        return;
      } else {
        total += Number(process.argv[i]);
        // console.log("we are here");
      }
    }
  } else {
    console.log(
      'I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)'
    );
  }
  console.log(total);
}

let total2 = 0;
let averageValue = 0;

function average() {
  if (process.argv[2] === "average" || process.argv[2] === "sum") {
    for (let i = 3; i < process.argv.length; i++) {
      total2 += Number(process.argv[i]);
    }

    averageValue = total2 / process.argv.slice(3).length;

    console.log(averageValue);
  } else {
    console.log(
      'I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)'
    );
  }
}

if (process.argv[2] === "sum") {
  sum();
} else {
  average();
}
