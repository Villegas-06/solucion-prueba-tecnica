var x = 0;
var y = 0;

function Pn (){
    var z = 0;
    z = 2;
    x = 3;
    y = 2;
    
    console.log("Pn :" + x,y,z);
    MMM(x,z);
    console.log("Pn2 :" + x,y,z)

}

Pn();

function MMM(){
    var z = 0;
    var A = 3;
    var B = 2;

    x = A + B;
    B = B * 2;
    z = x + B;
    y = y + x * B;

    console.log(x,B,z);
}

MMM();