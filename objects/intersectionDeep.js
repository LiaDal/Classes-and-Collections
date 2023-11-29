/**

 * Описание задачи: Напишите функцию, которая глубоко находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
 * @param {Object} firstObject - объект любых значений
 * @param {Object} secondObject - объект любых значений
 * @returns {Object}
 */

const intersectionDeep = (firstObject, secondObject) => {
    return Object.assign(...Object.keys(object1).map(k => {
        let temp;
        if (!(k in object2)) {
            return {};
        }
        if (object1[k] && typeof object1[k] === 'object' &&
            object2[k] && typeof object2[k] === 'object') {
            temp = intersectionDeep(object1[k], object2[k]);
            return Object.keys(temp).length ? { [k]: temp } : {};
        }
        if (object1[k] === object2[k]) {
           return { [k]: object1[k] };
        }
        return {};
    }));
};

const data = {a: 1, b: {c: 3}};
const data2 = {c: 1, b: {c: 3}};
console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }

module.exports = intersectionDeep;
