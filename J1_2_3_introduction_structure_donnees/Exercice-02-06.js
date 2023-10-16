function sumTTC(...pricesHT) {
    // Vérification des types et conversion en nombres (floats) si nécessaire
    const tva = parseFloat(pricesHT.pop());
    let sumTTC = 0;
  
    for (let priceHT of pricesHT) {
      const priceHTNum = parseFloat(priceHT);
      if (isNaN(priceHTNum)) {
        return "Erreur de type";
      }
      sumTTC += priceHTNum * (1 + tva);
    }
  
    // Affichage du résultat avec au plus 2 chiffres après la virgule
    return sumTTC.toFixed(2);
}
  
const priceHT = [100.50, 200.8, 55.7];

console.log(sumTTC(...priceHT)); // Somme TTC avec TVA par défaut (20%)
console.log(sumTTC(...priceHT, 0.3)); // Somme TTC avec TVA spécifiée (30%)

// Vérification du type des variables (provoque une erreur de type)
const badPriceHT = [100.50, "hello", 55.7];
console.log(sumTTC(...badPriceHT, 0.3)); // Erreur de type
  