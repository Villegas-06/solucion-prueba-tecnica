//21,4,10,3,6
var i = 1;
var cp = 0;
var ci = 0;
var sp = 0;


while( i <= 5){
  var n = 0;
  var n = prompt('ingrese los números: ');
  console.log(n);
  
  if (n % 2 == 0){
      sp = sp + n;
      cp = cp + 1;
      
  }else{
      ci = ci + 1;
  }
 i++
}
console.log("i: " + i);
console.log("ci:" + ci); 
console.log("cp: " + cp);
console.log("sp: " + sp);

console.log(ci + "/" + (ci + cp));

if (cp != 0){
  console.log(sp + "/" + cp);
} 


