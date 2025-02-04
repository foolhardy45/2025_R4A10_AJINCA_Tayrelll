
// Pour ce fichier, toutes les questions à partir de Q1 nécessitent d'appeler cette fonction pour récupérer sa valeur
function getArray() {
  return [12, 7, 6, 15, 41, 24, 13];
}

module.exports = {
  // Renvoyer la valeur true depuis la fonction
  Q0() {
    return true;
  },

  //1) Récupérer le tableau depuis getArray() et renvoyer un nouveau tableau ne contenant que les valeurs supérieures ou égales à 15 
  // en utilisant une méthode de tableau
  Q1() {
    let newArray = [];
    for(let i = 0; i < getArray().length; i++){
      if(getArray()[i] >= 15){
        newArray.push(getArray()[i]);
      }
    }
  },

  //2) Renvoyer l'index de la première valeur strictement inférieure à 7
  Q2() {
    for(let i = 0; i < getArray().length; i++){
      if(getArray()[i] < 7){
        return i;
      }
    }
  },

  //3) Inverser le tableau en utilisant une méthode spécifiquement prévue à cet effet. Renvoyez ce tableau inversé
  Q3() {
    let newArray = [];
    newArray = getArray().reverse();
  },

  //4) Trier le tableau dans l'ordre croissant, renvoyez le tableau trié
  Q4() {
    let newArray = [];
    newArray = getArray().sort();
  },

  //5) Ajouter la valeur 0 en premier index du tableau, renvoyez le tableau modifié
  Q5() {
    let newArray = [];
    newArray = getArray().unshift(0);
  },

  //6) Faire la somme des éléments du tableau avec une boucle for. Renvoyez la somme
  Q6() {
    let somme = 0;
    for(let i =0; i < getArray().length; i++ ){
      somme = somme + getArray()[i];
    }
    return somme;
  },

  //7) Faire la somme des éléments du tableau avec une méthode spécifique de tableau (reduce), renvoyez la somme
  Q7() {
    let somme = 0;
    somme = getArray().reduce((x,y)=> x + y,0);
    return somme;
  },

  //8) Remplacer la troisième valeur du tableau par "ici", renvoyez le tableau
  Q8() {
    let newArray = getArray();
    for(let i = 0; i < newArray.length; i++){
      if(i === 2){
        newArray[i] = "ici";
      }
    }
    return newArray;
  },

  //9) Retirer le dernier index, renvoyez le tableau
  Q9() {
    let newArray = getArray();
    return newArray.pop();
    
  },

  //10) Renvoyez le type de la variable ARRAY
  Q10() {
    return typeof getArray();
  },

  //11) En utilisant une méthode spécifique aux tableaux, renvoyer un booléen vérifiant que le résultat de getArray() est bien un tableau
  Q11() {
    return Array.isArray(getArray());
  },

  //12) Renvoyer le tableau sous forme de chaîne de caractère où les éléments sont séparés par un tiret (-)
  Q12() {
    let newArray = getArray();
    return newArray.join("-");
  },

  //13) Renvoyer le tableau en gardant uniquement les 2 derniers éléments
  Q13() {
    let newArray = getArray();
    return newArray.slice(-2);
  }
};
