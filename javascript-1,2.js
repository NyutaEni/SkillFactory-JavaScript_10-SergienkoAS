// #1
let num = +prompt ('Введите значение');

  if (typeof (num) === 'number' && !isNaN(num)) {
   if ((num % 2) === 0) {
        console.log('Четное число');
        }  else {
        console.log('Нечетное число');
        }
   } 

  else {
    console.log('Упс кажется вы ошиблись');
  }

// #2

let x = true;

switch (typeof x) {
    case 'number':
    console.log(x + ' — число');
    break;

    case "string":
        console.log(x + '- строка' )
    break;

    case "boolean":
        console.log(x + '- логический тип')
    break;

    default:
        console.log(x + '- Тип x не определен')
    break;
}
