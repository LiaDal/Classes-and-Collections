/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 *
 * @param {string} color
 * @returns {string}
 */
function hexToRgb(color) {
    let rgb = color.replace('#', '');
        rgb = rgb.match(new RegExp('(.{'+rgb.length/3+'})', 'g'));

        for(let i = 0; i < rgb.length; i++)
            rgb[i] = parseInt(rgb[i].length === 1 ? rgb[i]+rgb[i] : rgb[i], 16);

        return 'rgb('+rgb.join(', ')+')';
}

module.exports = hexToRgb;
