//find 2 nd max without sorting
const arr = [5, 1, 2, 6, 8, 7];
 let max =-Infinity;
    let secondmax= -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max ){
            secondmax = max; 
            max = arr[i];    
        } else if (arr[i] > secondmax && arr[i] < max) {
            secondmax= arr[i];
        }
    }
    console.log("secondmax :"+secondmax)