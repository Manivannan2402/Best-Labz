//find 3 rd max and mina = [5, 1, 2, 6, 8, 7];

const a = [5, 1, 2, 6, 8, 7];
let firstMax = -Infinity;
let secondMax = -Infinity;
let thirdMax = -Infinity;
let firstMin = Infinity;
let secondMin = Infinity;
let thirdMin = Infinity;
for (let i = 0; i < a.length; i++) {
    if (a[i] > firstMax) {
        thirdMax = secondMax;
        secondMax = firstMax;
        firstMax = a[i];
    } else if (a[i] > secondMax && a[i] < firstMax) {
        thirdMax = secondMax;
        secondMax = a[i];
    } else if (a[i] > thirdMax && a[i] < secondMax) {
        thirdMax = a[i];
    } 
    if (a[i] < firstMin) {
        thirdMin = secondMin;
        secondMin = firstMin;
        firstMin = a[i];
    } else if (a[i] < secondMin && a[i] > firstMin) {
        thirdMin = secondMin;
        secondMin = a[i];
    } else if (a[i] < thirdMin && a[i] > secondMin) {
        thirdMin = a[i];
    }
}
console.log("3rd Maximum:", thirdMax);
console.log("3rd Minimum:", thirdMin);