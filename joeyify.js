const thesaurus = require("thesaurus");

module.exports = function(text){

  const synonym = function(mark, el){
    return (thesaurus.find(el.replace(mark, ''))[0] || el.replace(mark, '')) + mark;
  }

  const findSynonym = function(mark, el, firstUppercase){
    let x = synonym(mark, el);
    return firstUppercase ? uppercaseFirstLetter(x) : x;
  }

  const checkFirstLetter = function(el){
    return (isNaN(el) && el[0] == el[0].toUpperCase());
  }

  const uppercaseFirstLetter = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const lowercaseFirstLetter = function(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }

  const findSynonymWithoutMark = function(el, firstUppercase){
    let x = thesaurus.find(el)[0];
    if(firstUppercase && typeof x == 'undefined') return uppercaseFirstLetter(el);
    if(typeof x == 'undefined') return el;
    if(firstUppercase && typeof x !== 'undefined') return uppercaseFirstLetter(x);
    if(!firstUppercase) return x;
  }

  return text
        .split(' ')
        .map(function(el) {
          let firstUppercase = checkFirstLetter(el);
          if(firstUppercase) el = lowercaseFirstLetter(el);
          if(el.includes('.')) return findSynonym('.', el, firstUppercase);
          if(el.includes(',')) return findSynonym(',', el, firstUppercase);
          return findSynonymWithoutMark(el, firstUppercase);
        })
        .join(' ');
}
