/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function parentheses(value) {
    if(value === '') {
        return false 
     }
     const stack = [];
     for (const el of value) {
       if (el === '(') {
         stack.push(el);
       } else if (el === ')') {
         if (!stack.pop()) {
           return false;
         }
       }
     }
   
     return stack.length === 0;
}

module.exports = parentheses;
