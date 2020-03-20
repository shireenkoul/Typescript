function add(n1, n2) {
    return n1 + n2;
}
function printResult(n1) {
    console.log("Result : " + n1);
}
printResult(add(5, 3));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// let combineValues : Function;
var combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(2, 2));
addAndHandle(2, 5, function (result) {
    console.log(result);
});
