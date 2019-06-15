var M = 0;

function Pn (){
    var A, B =0;
    M = 1;
    A = 2;
    B = 5;

    console.log(A,B,M)
    PPP(B);
    B = B + PPP (B);

    console.log(A,B,M);
}

Pn();

function PPP (){
    var x = 1
    var M, A, B = 0
    A = 2;
    B = 3;

    if(x % 2 == 0){
        M = A * B;
    }else{
        M = A + B;
    }
    return M;
}

/*Caso de la funcion PPP si se cambiara
"x mod 2 = 0" por "x mod 2 != 0"*/

//Prueba

function PPP_con_cambio (){
    var x = 1
    var M, A, B = 0
    A = 2;
    B = 3;

    if(x % 2 != 0){
        M = A * B;
    }else{
        M = A + B;
    }

    console.log("el resultado de 'M' sería: " + M)
}

PPP_con_cambio();