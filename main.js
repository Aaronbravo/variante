
    // var numeroA = 1;
    // var numeroB = 3;
    // var resultado= numeroA + numeroB ;

    // console.log( numeroA + numeroB);

    // ejercicio 1

    let i = 3;
   { 
        if ( i % 2 === 0) {
            console.log(`el numero ${i} es par`)} 
        else {
            console.log(`el numero ${i} impar`) 
        }
    }
   
    // ejercicio 2 

    let N1 = 12;
    let N2 = 11;
    {
        if ( N1 > N2){
            console.log(`el numero ${N1} es mayor que ${N2}`)
        }
        else if (N2 > N1){
            console.log(`el numero ${N1} es menor que ${N2} `)
        }
        else{
            console.log(`Los numeros son iguales ${N1} y ${N2}.`) 

        }
    }

    // ejercicio 3

    let MS = 10;
    { 
         if ( MS % 5 === 0) {
             console.log(`el numero ${MS} es multiplo de 5`)} 
         else {
             console.log(`el numero ${MS} no es multiplo de 5`) 
         }
     }


    // ejercicio 4 
     for (let i=0; i<=20; i++){
        console.log (` ${i} `);
     }

    // ejercicio 5


    for (let o=1;  o<=20; o++ ){
        console.log ("aaron");
    }

    // ejercicio 6
    let bebidas =[
        "coca-cola",
        "fernet",
        "sprite",
        "gancia",
        "agua mineral",
        "baggio",
    ];

    for (let i = 0; i < bebidas.length ; i++) {
        console.log(bebidas[i]);
    }


    // ejercicio 7

    let Num = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
    ]
    

    for (let i = 0; i<Num.length; i++){
        if (i===2){
           continue;
        }
        console.log(`Los numeros que no fueron salteados son ${Num[i]}`)
    }


    // ejercicio 8 

  

    function multiplicar1(arrayn, number,){
        for(let i=0; i < arrayn.length; i++){
            console.log(arrayn[i] * number);
        }
    }

    var arrayn = [1,2,3,4,5,6,7,8,9,10];    
    multiplicar1(arrayn,3);     //   



