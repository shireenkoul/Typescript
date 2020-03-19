function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

const n1 = 5;
const n2 = 2.5;
const printResult = true;
const resultPhrase = "Result is : ";

add(n1, n2, printResult, resultPhrase);
