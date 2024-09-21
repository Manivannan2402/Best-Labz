//find 2 nd min without sorting
const arr = [5, 1, 2, 6, 8, 7];
 min = Infinity;
    let secondMin = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            secondMax = min; 
            min = arr[i];    
        } else if (arr[i] < secondMin && arr[i] > min) {
            secondMin = arr[i];
        }
    }
    console.log("secondMin:"+secondMin)