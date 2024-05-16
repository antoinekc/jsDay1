
let nombre = prompt("De quel nombre veux tu calculer la factorielle ? ")

nombre = parseInt(nombre);

let factorielle = 1

if (Number.isInteger(nombre) && nombre >= 0) {
  // Calculate the factorial using a loop
  for (let i = 1; i <= nombre; i++) {
    factorielle *= i; // Multiply by each number from 1 to nombre
  }

  console.log(`La factorielle de ${nombre} est : ${factorielle}`);
} else {
  console.log("Veuillez entrer un nombre entier positif.");
}