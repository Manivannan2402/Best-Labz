/* i/p a = ["a","a","c","d","c","a","b"]
o/p 
a is 3times
c is 2times
d is 1times
b is 1times */

var a = ["a","a","c","d","c","a","b"]
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