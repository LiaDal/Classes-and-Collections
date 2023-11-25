/**
 * Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

class MyString {

    reverse(string){
        if (arguments.length === 0) return undefined;
        if(string === '') return ''  
        return string.split('').reverse().join('');
      }
  
      ucFirst(string){
        if (arguments.length === 0) return undefined;
        if(string === '') return ''
        return string.trim().charAt(0).toUpperCase() + string.trim().slice(1);
      }   
  
      ucWords(string){
        if (arguments.length === 0) return undefined;
        if(string === '') return ''
        let str = string.replace(/\s+/g, ' ').trim();
        return str.replace(/(^|\s)\S/g, ((a) =>  a.toUpperCase())).trim();
      }   
}

const str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

module.exports = MyString;
