//1.Користувач вводить або має два числа.Потрібно знайти та вевести максимальне число з тих двох.
let a = 10;
let b = 1;
let c = ('False')
if (a > b) {
    console.log(a);
} else if (b > a) {
    console.log(b);
} else if (a === b) {
    cosnole.lo(c);
}
//2.У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
//let number = +prompt('Which number?')
//if (number >= 1 && number <= 20) {
// console.log('firstHouse')
//} else if (number >= 21 && number <= 48) {
// console.log('secondHouse');
//} else if (number >= 49 && number <= 90) {
//  console.log('thirdHouse');
//}
// 3.Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
//let number2 = +prompt('Write the number!')
//if (number2 === 10) {
//  console.log('correct');
//}else  {
// console.log('inCorrect');
//}
//4. Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else
//let x = prompt('Write someValue');
//if (typeof x==='number'){
  //  console.log('1');
//}else if (typeof x==='string'){
  //  console.log('2');
//}else if (typeof x==='boolean'){
   // console.log('3')
//}else if (typeof x==="object"){
  //  console.log('4')
//}else if (typeof x==='array'){
  //  console.log('4')
//} else{
//    console.log('againf please');
//}
//5.Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
//let allWeeks=prompt('Which of days?')
//switch (allWeeks){
//    case '1':
  //      alert('йдемо гуляти')
      //  break;
   // case'2':
     //   alert('йдемо бігати!')
    //     break;
    // case'3':
    //     alert('йдемо їсти!')
    //     break;
    // case'4':
    //     alert('йдемо грати футбол!')
    //     break;
    // case'5':
    //     alert('йдемо грати у ігри!')
    //     break;
    // case'6':
    //     alert('йдемо лежати!')
    //     break;
    // case'7':
       // alert('йдемо спати!')
       // break;
//}
//6.- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// function isLeep(year){
//     if(year % 4 === 0) {
//         return 'високосний';
//     }
//     return 'не високосний';
//     }
//
// console.log(isLeep(2012))
//7. Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//let official=prompt('Which official name JavaScript?')
// if (official==='ECMAScript') {
//     console.log('Правильно!');
// } else {
   // console.log('Не знаєте?EcmaScript!');
// }