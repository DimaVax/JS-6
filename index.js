// 1
// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i += 1
// }

// 2
// for(let i = 1; i <= 20; i += 1){
//     if(i % 2 === 0){
//         console.log(i);
//     }
//     else{
//         continue;
//     }
// }

// 3
// легкий спосіб 
// for(let i = 7; i <= 70; i += 7){
//     console.log(i);
// };

// складний спосіб
// for(let i = 1; i <= 70; i += 1){
//     if(i % 7 === 0){
//         console.log(i);
//     }
//     else{
//         continue;
//     }
// };

// Завдання 4 та 5 я зроблю не через масив, а просто змінними

// 4
// let i = 1;
// while(i <= 5){
//     console.log(i);
//     i += 1;
// }

// 5
// for(let i = 1; 1 <= 10; i += 1){
//     console.log(i);
//     if(i === 7){
//         break;
//     }
// }

// 6
// let n = 9;
// for(let i = 0; i < n; i += 1){
//   console.log(i);
//   if(i < n){
//     continue;
//   }
//   else{
//     break;
//   }
// }

// 7
let i = 0;
while(i <= 20){
    i += 1;
    if(i % 3 === 0){
        continue;
    }
    else{
        console.log(i);
    }
}