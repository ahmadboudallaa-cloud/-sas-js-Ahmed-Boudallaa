/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * OCCURRENCES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de mots ["pomme", "banane", "pomme", "orange", "banane", "pomme"]. Comptez combien de fois chaque élément apparaît. (Vous pouvez afficher : "pomme: 3, banane: 2, orange: 1").
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day05/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function mots(tableau){

 let result = [];
 let dejaVue = [];

    for(let i=0 ; i<tableau.length ; i++){
        let compteur = 0;
        for(let a=0 ; a<tableau.length ; a++){
   
        if(tableau[i] == tableau[a]){
   
           ++compteur
    
            
        }
        }
        
        if(dejaVue.includes(tableau[i])){
         
             dejaVue.push(tableau[i])
        }else{
             result.push(tableau[i] + ":" + compteur)
             dejaVue.push(tableau[i])
        }
        
 
    }
   
return result
}
console.log( mots( ["pomme", "banane", "pomme", "orange", "banane", "pomme"]))