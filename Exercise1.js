/*3 and 5 is fixed , number is changing*/
function checkMultiple(howmanytimes){
    for(i=1;i<=howmanytimes;i++)
    {
    var remainder3= i%3 
    var remainder5= i%5
    if(remainder3==0 || remainder5 ==0)
    {
        org.push(i);
    }
}

   /* for(i=1;i<=howmanytimes;i++)
        {
        var remainder= i%5
        if(remainder==0)
        {
            org.push(i);
        }
}*/

};

let howmanytimes=100;
let org=[];
checkMultiple(howmanytimes);
console.log(org);

console.log(org[2]);

/**very inefficent method, try to do it in 1 loop find both */