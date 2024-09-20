//Multiply  5 two digit random number using for loop 
var b
var c=1
for(i=1;i<=5;i++){
    b=Math.floor(Math.random()*90+10)
    console.log(b);
    c=c*b
}
console.log("product :"+c);

//sum of n digit
var n=123
var a= 0
var rem
while(n>0)
{
    rem=n%10
    a=a+rem
    n=Math.floor(n/10)
}
console.log(a);