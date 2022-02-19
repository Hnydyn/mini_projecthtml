// // //1 створити функцію яка приймає три числа та виводить найменьше.
// function threeNumber(num1,num2,num3) {
//     if (num1 < num2 && num1 < num3) {
//         console.log(num1);
//     } else if (num2 < num1 && num2 < num3) {
//         console.log(num2);
//     } else {
//         console.log(num3);
//     }
// }
// threeNumber(22,33,42);
//2.створити функцію яка приймає три числа та виводить найбільше.
// function threeNUmber(numb1,numb2,numb3) {
//     if (numb1 > numb2 && numb1 > numb3) {
//         console.log(numb1);
//     } else if (numb2 > numb1 && numb2 > numb3) {
//         console.log(numb2);
//     } else {
//         console.log(numb3);
//     }
// }
// threeNUmber(25,99,44);
//3.створити функцію яка повертає найбільше число з масиву
// let bigMas=[1,32,424,33,53,53,3,];
// function maxAray(lilAray){
//     let max = lilAray[0];
//     for (const element of lilAray){
//         if ( element > max){
//             max = element;
//         }
//     }
//     return max;
// }
// console.log(maxAray(bigMas));
//4.створити функцію яка повертає найменьше число з масиву
// let smallELement=[114,3,44,2323,23,242,4];
//     function lilAray(allElemts){
//     let min = allElemts[0];
//     for (const element of allElemts){
//     if ( element < min){
//         min = element;
//          }
//     }
//     return min;
// }
// console.log(lilAray(smallELement));
//5.створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад
// let allMAs = [3,2,4,5,3,2,4];
//     function acceptAll(array){
//         let itp = 0;
//         for (const pidstawliaje of array)
//         itp = pidstawliaje + itp;
//         return itp;
//     }
//     console.log(acceptAll(allMAs));
//6.створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let allMAs = [3,2,4,5,3,2,4];;
// function midlValue(pidstawa){
//     let some= 0;
//     for (const somethingPidst of pidstawa){
//         some = somethingPidst + some;
//     }
//     return some/pidstawa.length;
// }
// console.log(midlValue(allMAs));
//7.створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function all(array){
//     let min=arguments[0];
//     let max=arguments[0];
//     for (const  differentValue of arguments) {
//         if (differentValue > max){
//             max = differentValue;
//         }
//         if (differentValue < min){
//             min = differentValue;
//       }
//     }
//         console.log("max", max)
//         return min;
//     }
//     document.write(all(100,212,12,123,1))
//8,створити функцію яка заповнює масив рандомними числами
// function funRandom (length) {
//     let arrayEmpty = [];
//     for (let i = 0; i < length; i++){
//         arrayEmpty.push(Math.floor(Math.random()*100));
//     }
// return arrayEmpty
// };
//
// document.write(funRandom(12))
//9. створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

