/**

 * Описание задачи: Напишите функцию, которая делает глубокое сравнение объектов.
 * Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
 * @param {Object} firstObj - Объект с любыми значениями
 * @param {Object} secondObj - Объект с любыми значениями
 * @returns {boolean}
 */
export const isEqualDeep = (obj1, obj2) => {
    const objKeys1 = Object.keys(obj1);
    const objKeys2 = Object.keys(obj2);
  
    if (objKeys1.length !== objKeys2.length) return false;
  
    for (var key of objKeys1) {
      const value1 = obj1[key];
      const value2 = obj2[key];
  
      const isObjects = isObject(value1) && isObject(value2);
  
      if ((isObjects && !isEqualDeep(value1, value2)) ||
        (!isObjects && value1 !== value2)
      ) {
        return false;
      }
    }
    return true;
  };
  
  const isObject = (object) => {
    return object != null && typeof object === "object";
};
const data = {a: 1, b: {c: 1}};
const data2 = {a: 1, b: {c: 1}};
const data3 = {a: 1, b: {c: 2}};
console.log(isEqualDeep(data, data2)); // true
console.log(isEqualDeep(data, data3)); // false
