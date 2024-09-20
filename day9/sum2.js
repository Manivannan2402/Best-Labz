/*
**##
**##
**##
**##  */
var n=4
 for(let i=0;i<n;i++){     
var s=''     
var c=2     
for(let j=0;j<n;j++){         
if(j<c){            
 s+='*'      
   }        
 else{            
 s+='#'        
 }    
 if(j==c+1){       
  c+=4   
  }    
 }    
 console.log(s) 
}