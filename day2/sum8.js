//Add  5 two digit random number using for loop decrement type
var b
var c=0
for(i=5;i>=1;i--){
    b=Math.floor(Math.random()*90+10)
    console.log(b);
    c=c+b
}
console.log("sum :"+c);