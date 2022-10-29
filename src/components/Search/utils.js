import { Users } from "../../db";


const db = [
  ...Object.values(Users).map(user => ({title: user.username, ...user}))
];

const fuzzy = function (items, key) {
  return function (query) {
    var words = query.toLowerCase().split(' ');

    return items.filter(function (item) {
      var normalizedTerm = item[key].toLowerCase();

      return words.every(function (word) {
        return normalizedTerm.indexOf(word) > -1;
      });
    });
  };
};

export function getValueFromQuery(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const searchByTitle = fuzzy(db, 'title');

export { searchByTitle };