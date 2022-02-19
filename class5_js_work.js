// //1 Всі функції повинні бути описані стрілочним типом!!!! створити функцію яка приймає три числа та виводить найменьше.
// let someFunc = (num1, num2, num3) => {
//     if (num1 < num2 && num1 < num3) {
//         console.log(num1);
//
//     } else if (num2 < num1 && num2 < num3) {
//         console.log(num2);
//     } else {
//         console.log(num3);
//     }
// }
// someFunc(2,44,22);

// //2створити функцію яка приймає три числа та виводить найбільше.
// let someMaxValue=(num1,num2,num3) => {
//     if (num1 > num2 && num1 > num3){
//         console.log(num1);
//     }else if(num2 > num1 && num2 > num3){
//         console.log(num2);
//     }else{
//         console.log(num3)
//     }
// }
// someMaxValue(22,34,4);
//3творити функцію яка повертає найбільше число з масиву
// let someMass=[33,22,23,24,4,43,435];
// const arrayMaxMas = (array) =>{
//     let max = array[0];
//     for (let element of array) {
//         if (element > max){
//             max = element;
//         }
//     }
//     return max;
// }
// console.log(arrayMaxMas(someMass));
// //4.створити функцію яка повертає найменьше число з масиву
// let someMinValue=[3,32,232,435,31,5,6];
// let minFunc= (array) =>{
//     let min= array[0];
//     for (let element of array){
//         if (element < min){
//             min = element;
//         }
//     }
//     return min;
// }
// console.log(minFunc(someMinValue));
//5створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// let allValue=[22,324,24,55,453,70];
// let nameArg = (array) =>{
//     let sum = array[0];
//     for (let element of array){
//         sum = element + sum;
//     }
//     return sum;
// }
// console.log(nameArg(allValue));
//6.створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let allMas=[44,435,53,12,23,33];
// let someArg = (array) =>{
//     let avarageSum = array[0];
//     for (let element of array){
//         avarageSum= element + avarageSum;
//     }
//     return avarageSum/array.length;
// }
// console.log(someArg(allMas));
//7створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// let difArg=(...arg) =>{
//     console.log(arg);
//     let max = arg[0];
// let min = arg[0];
// for (let element of arg){
//     if (element > max){
//         max = element;
//     }
//     if (element < min){
//         min = element;
//     }
// }
// console.log(max);
// return min;
//     }
// console.log(difArg(22, 24, 1, 34));
//8створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let twoMeans = (length,limit) =>{
//     let emptyArray=[];
//     for (i = 0;i > length; i++){
//         emptyArray.push(Math.random()*limit);
//     }
//     return emptyArray;
// }
// console.log(twoMeans(10,100));
//9.Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array = [22,322,35,64,26]
// let reverse = (arr) =>{
//     let newArray = [];
//     for (let i = arr.length - 1, ri=0, i >= 0, i--, ri++){
//         newArray[ri]= arr[i];
//     }
//     return newArray;
// }
// console.log(reverse(array));