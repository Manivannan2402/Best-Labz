/*  ****
    ****
    ####
    #### */
    var n=4
    let k=0;
    for(let i=1;i<=n;i++)
    {
        if(k==0)
        {
           if(i%2==0)
              k=1;
            let s=""
           for(let j=1;j<=n;j++)
           {
               s+="*";
           }
           console.log(s)
           
        }
        else{
            if(i%2==0)
              k=0;
            let s=""
            for(let j=1;j<=n;j++){
                s+="#";
            }
            console.log(s);
        }
        }