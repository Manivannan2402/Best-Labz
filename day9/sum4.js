/*     2 
     2 4
   2 4 6
 2 4 6 8*/
 for(i=0;i<4;i++)
    {
        var v=2
        var s= " "
        for(j=0;j<4;j++)
        {
            if(j<3-i){
                s+="  "}
            else{
                s+=v+" "
                v+= 2
        }
    }
        console.log(s);
    }