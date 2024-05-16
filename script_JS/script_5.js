const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ? ")
const rentedOnce = books.map(function(element) {
  const rented = element.rented 

  if (rented > 0) {
  return true
   } else {
  return false
}
});

console.log(rentedOnce)


console.log("Quel est le livre le plus emprunté ? ");
let maxRented = 0;
let mostRentedBook;

books.forEach(function(book) {
  if (book.rented > maxRented) {
    maxRented = book.rented;
    mostRentedBook = book;
  }
});
console.log("Le livre le plus emprunté est :", mostRentedBook.title);

// ---------------------------------- //

console.log("Quel est le livre le moins emprunté ? ");
let minRented = Infinity;
let minRentedBook;

books.forEach(function(book) {
  if (book.rented < minRented) {
    minRented = book.rented;
    minRentedBook = book;
  }
});

console.log("Le livre le moins emprunté est :", minRentedBook.title);

// ---------------------------------- //

console.log("Trouve le livre avec l'ID 873495");

function isfounded(book) {
  return book.id === 873495;
}
console.log(books.find(isfounded));

// ---------------------------------- //

// IDs
const firstId = (book) => {
  return book.id === 873495
}

console.log("\nLe livre avec l'id 873495 est : ")
console.log(books.find(firstId))

// ---------------------------------- //

console.log("Supprime le livre avec l'ID: 133712")

const bookToDelete = books.findIndex(function(book) {
  return book.id = 133712
});

if (bookToDelete !== -2) {
  books.splice(bookToDelete, 1);
  console.log("Le livre a été supprimé")
}
console.log(books)



console.log("Voici le tri des livres par ordre alphabetique")

sortedBooks = books.sort(function( a , b ) {
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();

  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  return 0;
});

console.log(sortedBooks)