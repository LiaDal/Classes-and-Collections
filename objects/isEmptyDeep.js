/**

 * Описание задачи: Напишите функцию, которая делает глубокую проверку на пустоту объекта.
 * Пустые значения: '', null, NaN, undefined, [], {}
 * Ожидаемый результат: ({}) => true,
 ({ a: { b: undefined } }) => true,
 ({ a: { b: [] } }) => true
 * @param {Object} object - любой объект
 * @returns {boolean}
 */

const flatObject = (obj) => {
    function flat(o) {
      return Object.entries(o).flatMap(([key, val]) => {
        if (typeof val === 'object') return flat(val);
  
        return [
          [key, val]
        ];
      });
    }
  
    return Object.fromEntries(flat(obj));
};

export const isEmptyDeep = (object) => {
    let obj = flatObject(object)
 const objectKeys = Object.keys(obj);
    if (objectKeys.length === 0) {
      return true;
    }
  
    return !objectKeys.filter((key) => obj.key || obj.key === 0 || obj.key === false).length;
};

const data = {a: {b: undefined}};
const data2 = {a: {b: 1}};
console.log(isEmptyDeep(data)); // true
console.log(isEmptyDeep(data2)); // false
