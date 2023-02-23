/*function max(a,b){
   if(a>b){
        return a;
    }
    else if(a==b){
        return a;
    }
    else {
        return b;
    };
};
console.log(max(2,4));*/


var toy = function(a,b){
    switch(true){
        case(a<b) : return a + "is smaller than" + b; 
        case(a>b) : return a + "is greater than" +b;
        default   : return a + "is equal to" +b;
    };
};
console.log(4)



function countOccurrences (array,x){
    let count = 0;
    let n = array.length;
    for (let i =0; i<n; i++)
   if(array[i]==x)
    count ++;
     return count;
};
