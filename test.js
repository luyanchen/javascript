var a = "001110";
        var t,i,j=0;
        var leftnum,rightnum=0;
        var result;
        var left = "";
        var right = "";
        if(a.indexOf("01") > 0){
            t = a.indexOf("01");
            left = a.slice(0,t+2);
            right = a.slice(t+2);
            i=t;j=t+1;
            leftnum=0;
            rightnum = 0;
            while(left.length>0){
                while(i>=0){
                   if(left[i] == 0){
                     leftnum++;
                     i--;
                   }
                }
                if(leftnum < (t+1)/2){
                     left = left.slice(1);
                }else{
                    break;
                }              
            }
            while(right.length>0){
                while(j<a.length){
                   if(right[j] == 0){
                     rightnum++;
                     j++;
                   }
                }
                if(rightnum < (a.length-t-1)/2){
                     right = right.slice(t+1,a.length-1);
                }else{
                    break;
                }              
            }
            if(left.length>0 && right.length>0){
                result.push(left.length+right.length);
            }
            a = a.slice(t+2);
           
        }