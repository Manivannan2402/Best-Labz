//fibinocci series
var n1= -1
var n2=1
var sum=0
for(i=1;i<10;i++){
   sum=n1+n2 
   n1=n2
   n2=sum
   console.log(sum )

}