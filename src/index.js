module.exports = function reverse(n) {
    let nPositive;
    n < 0 ? (nPositive = n * -1) : (nPositive = n);
    let result = "";
    let nStr = nPositive.toString();
    for (let i = nStr.length - 1; i >= 0; i--) {
        result = `${result}${nStr[i]}`;
    }
    let a = +result;
    return a;
};
