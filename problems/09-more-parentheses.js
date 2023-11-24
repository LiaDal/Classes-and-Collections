/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */
function parentheses(value) {
    if(value === '') {
        return false 
    }

    let chars = value.split('');
    let stack = [];
    let open = ['{', '(', '[', '<'];
    let close = ['}', ')', ']', '>'];
    let closeIndex;
    let openIndex;

    for (let i = 0, len = chars.length; i < len; i++) {
       openIndex = open.indexOf(chars[i]);
       if (openIndex !== -1) {
           stack.push(openIndex);
           continue;
       }

       closeIndex = close.indexOf(chars[i]);
       if (closeIndex !== -1) {
           openIndex = stack.pop();
           if (closeIndex !== openIndex) {
               return false;
           }
       }
    }
    if (stack.length !== 0) {
        return false;
    }

    return true;
}

module.exports = parentheses;
