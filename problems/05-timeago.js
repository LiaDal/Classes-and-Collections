/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */
function timeago(seconds) {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const week = Math.floor(days / 7);
  
    if (seconds >= 0 && seconds <= 9) {
      return 'just now';
    } else if (seconds >= 10 && seconds < 60) {
      return `${Math.floor(seconds / 10) * 10} seconds ago`;
    } else if (seconds >= 60 && seconds < 120) {
      return '1 minute ago';
    } else if (seconds >= 120 && seconds < 180) {
      return `2 minutes ago`;
    } else if (minutes >= 10 && minutes <= 30) {
      return `${minutes} minutes ago`;
    } else if (minutes > 30 && minutes < 60) {
      return '30 minutes ago';
    } else if (hours === 1) {
      return `1 hour ago`;
    } else if (hours >= 2 && hours < 12 ) {
      return `${hours} hours ago`;
    } else if (hours >= 12 && hours < 24 ) {
      return '12 hours ago';
    } else if (days === 1) {
      return '1 day ago';
    } else if (days > 1 && days < 7) {
      return 'a few days ago';
    } else if (week === 1) {
      return  '1 week ago';
    } else if (week > 1 && week <= 3) {
      return `${week} weeks ago`;
    } else {    
      return 'undefined';
    }
  }

module.exports = timeago;
