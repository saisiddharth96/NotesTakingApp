// var square = (x) => x*x;


// console.log(square(9));

// var user = { 
//     name : 'sid',
//     sayHI : () =>{
//         console.log(`HI`);
//     }
// };

// user.sayHI();

// function printArguments()  {
//     console.log(`No. of arguments ${arguments.length} \n`);
//     for(var i =0; i< arguments.length ; i++){
//         console.log(`Argument ${i} = ${arguments[i]} \n`);
//     }
// };

// printArguments();
// printArguments("A","B");
// printArguments(10,20,30);

// function addNumbers(){
//     var sum = 0;
//     if(arguments.length === 0){
//         console.log(`Count of arguments = 0 \n Sum of arguments = 0 `);
//     }
//     else{
//         for(var i =0 ; i<arguments.length; i++){
//             sum = sum + arguments[i];
//         }
//         console.log(`Count of arguments = ${arguments.length} \n Sum of arguments = ${sum}`);
//     }
// }
// addNumbers();
// addNumbers(1,5,10,15,20);

function printPattern(){
    var  i = 65 , j = 0; 
    for(i = 65 ; i<125 ; i++){
        console.log(`\t ${i}`);
        for(j=0;j<3;j++){
            console.log(`\t \t U++${String.fromCharCode(i)} ${i} `);
        }
        console.log(" ");
    }
}

printPattern();