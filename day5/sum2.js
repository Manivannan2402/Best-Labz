//prime factorize
var n =100003
if(n ==2||n==3){
    console.log("prime");
}
else if(n==1||n%2==0||n%3==0){
console.log("not prime");
}
else{
var a=0
for(var i=5;i*i<=n;i+=6){
    if(n%i==0||n%(i+2)==0){
        a=1
    }
}
if(a==0){
    console.log("prime");
    
}else{
    console.log("not prime"); 
}
}