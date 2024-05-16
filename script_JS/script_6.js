const serine = ["UCU", "UCC", "UCA", "AGU", "AGC"]
const proline = ["CCU", "CCC", "CCA", "CCG"]
const leucine = ["UUA", "UUG"]
const arginine = ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"]
const tyrosine = ["UAU", "UAC"]

// arn = prompt("Fourni nous un ADN malheureux")
const allAminoAcids = [serine, proline, leucine, arginine, tyrosine];
console.log(allAminoAcids);

const arn = prompt("Fourni nous un ADN")

const newArn = arn.match(/.{1,3}/g);
console.log(newArn)

function checkAminoAcids(allAminoAcids, newArn) {
  let results = "";
  for (let i = 0; i < newArn.length; i++) {
    for (let j = 0; j < allAminoAcids.length; j++) {
      if (allAminoAcids[j].includes(newArn[i])) {
        results += Object.keys({ serine, proline, leucine, arginine, tyrosine })[j] + "-";
        break;
      }
    }
  }
  // Remove the trailing dash if results is not empty
  if (results.length > 0) {
    results = results.slice(0, -1);
  }
  return results;
}

console.log(checkAminoAcids(allAminoAcids, newArn));




// newArnarn.forEach(element => {
//   index0 = newArn.index
// });


// //
// pour chaque index de mon array arn
// je trouve mon index[i] dans mon array newArn
// et return 