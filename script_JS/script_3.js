
console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

let nombre = prompt("Rentre le nombre d'étages")

for (let i = 0; i <= nombre; i++) {
  let espace = " ".repeat(nombre - i);
  let blocs = "#".repeat(i)
  console.log(espace + blocs);
}