/// 1
// Le code suivant est valide. 
// La fonction bar est déclarée en tant que fonction avant son appel, ce qui signifie qu'elle est accessible lorsque vous appelez bar(). 
// L'ordre de déclaration est important pour les fonctions déclarées (aussi appelées "définitions de fonction") car elles sont hissées (hoisted), ce qui signifie qu'elles sont déclarées au début de leur portée.

bar();

function bar() {
  console.log("bar");
}

// 2
// Le code suivant n'est pas valide. 
// Vous appelez myFunc avant de l'avoir définie, ce qui générera une erreur. Les expressions de fonction (ou fonctions anonymes) ne sont pas hissées comme les fonctions déclarées, donc elles doivent être définies avant d'être appelées.

myFunc(); // Erreur ici

const myFunc = function() {
  console.log("Expression");
}

// Pour que le code soit valide, vous devriez déplacer l'appel à myFunc après avoir défini la fonction :

const myFuncCorrect = function() {
    console.log("Expression");
 }
 
 myFuncCorrect(); // Maintenant, c'est valide