/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
function rle(value) {
    if(value === ''){
        return value
    }
    let result = ''
    let count = 0
    for(let i = 0; i <= value.length; i++) {
        if(value.charAt(i) == value.charAt(i+1)) count++;
        else {
            result += (count ? count + 1 : '') + value.charAt(i);
            count = 0;
        }
    }
    return result;
}

module.exports = rle;
