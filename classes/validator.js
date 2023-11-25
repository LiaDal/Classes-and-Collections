/**
 * Реализуйте класс Validator, который будет проверять строки.
 * К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет.
 * Если является - возвращает true, если не является - то false.
 * Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена,
 * метод isDate для проверки даты и метод isPhone для проверки телефона:
 */
class Validator {

    isEmail(email) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
      }
  
      isDomain(domain) {
        const regex = /[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,5}/;
        return regex.test(domain);
      }
  
      isDate(date) {
        return !isNaN(new Date(date).getDate());
      }
  
      isPhone(phone) {
        const regex = /^([+]?[0-9\s-\(\)]{3,12})*$/;
        return regex.test(phone);
      }  

}

const validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны

module.exports = Validator;
