const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ")
const entrepreneurIn1970 = entrepreneurs.filter(function(element) {
  return element.year >= 1970 && element.year < 1980;
});
console.log(entrepreneurIn1970);


console.log("Sors une array qui contient le prénom et le nom des entrepreneurs")
const firstAndLastName = entrepreneurs.map(function(element) {
  return { first: element.first, last: element.last };
});
console.log(firstAndLastName)

console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
const ageDesEntrepreneursToday = entrepreneurs.map(function(element) {
  const age = new Date().getFullYear() - element.year;
  return {first: element.first,  age: age };
});
console.log(ageDesEntrepreneursToday)



console.log("Trie des entrepreneurs par ordre alphabétique du nom de famille?")
const trieParOrdreAlphabetique = entrepreneurs.sort(function(a , b) {
  const lastNameA = a.last.toLowerCase();
  const lastNameB = b.last.toLowerCase();

  if (lastNameA < lastNameB) {
    return -1;
  }
  if (lastNameA > lastNameB) {
    return 1;
  }
  return 0;
});

console.log(trieParOrdreAlphabetique);

