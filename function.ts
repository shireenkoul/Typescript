function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(n1: number): void {
  console.log("Result : " + n1);
}

printResult(add(5, 3));

function addAndHandle(n1: number, n2: number, cb: (n3: number) => void) {
  const result = n1 + n2;
  cb(result);
}

// let combineValues : Function;

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

// combineValues = 5;

console.log(combineValues(2, 2));

addAndHandle(2, 5, result => {
  console.log(result);
});
