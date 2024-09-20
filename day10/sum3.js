/*
a=[3,4,3,6,4,4,6,8]
o/p 
3 is 2times
4 is 3times
6 is 2times
8 is 1times */

var a = [3,4,3,6,4,4,6,8]
let count = {};
var k
for(let i = 0; i<a.length; i++){
if(count[a[i]]){
count[a[i]] = count[a[i]]+1
}
else{
count[a[i]] = 1;
}
}
for(k in count)
{
    console.log(`${k} is ${count[k]}times`);
    
}