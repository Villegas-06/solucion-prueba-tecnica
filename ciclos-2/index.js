
var i = 1;

while(i <= 5){

    var n = [21,4,10,3,6];

    if(n %2==0){
        var sp = sp+n;
        var cp = cp+1;
      }else{
       var ci = ci+1;
         }

    i = i+1;
}
console.log(ci/(ci+cp));
if(cp != 0){
console.log(sp/cp);
}

console.log(cp);
console.log(sp);
