// for(var i = 0 ; i < 5 ; i++){
//     setTimeout(() => {
//         console.log(i);
//     } , i * 1000 )
// }

// for(var i = 0 ; i < 5 ; i++){
//     (function(j){
//         setTimeout(() => {
//             console.log(j);
//         } , j * 1000 )
//     })(i)
// }

for(var i = 0 ; i < 5 ; i++){
    setTimeout((j) => {
        console.log(j);
    } , i * 1000 , i)
}