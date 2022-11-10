function createBase(toAdd1) {
    return function (toAdd2) {
        return toAdd1 + toAdd2;
    }
}
var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

console.log(addSix(10));
console.log(addSix(21));