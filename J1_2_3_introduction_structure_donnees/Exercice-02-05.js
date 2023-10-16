function ttc(prixHT, tva = 0.2) {
    // Vérification des types et conversion en nombres (floats) si nécessaire
    const prixHTNum = parseFloat(prixHT);
    const tvaNum = parseFloat(tva);
  
    if (isNaN(prixHTNum) || isNaN(tvaNum)) {
      return "Erreur de type";
    }
  
    // Calcul du prix TTC
    const prixTTC = prixHTNum * (1 + tvaNum);
  
    // Affichage du résultat avec au plus 2 chiffres après la virgule
    return prixTTC.toFixed(2);
  }
  
  console.log(ttc(100, 0.2));      // 120.00
  console.log(ttc(100.50, 0.2));   // 120.60
  
  // Gestion du type et conversion
  console.log(ttc("hello", 0.2));  // Erreur de type
  console.log(ttc(100.50, "hello"));// Erreur de type
  console.log(ttc("100", ".3"));    // 130.00
  