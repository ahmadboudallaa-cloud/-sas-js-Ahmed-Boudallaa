/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day05/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function tableau(nombres){
  
 let max = nombres[0];
           let min = nombres[0];
    for(let i = 0 ; i < nombres.length ; i++){
          
     if(nombres[i] >= max){
      max = nombres[i];
     }else if (nombres[i] <= min){
        min = nombres[i];
     }


    }
    
return "le plus grand nombre est : " + max + "le plus petit est : "+ min 


}
console.log(tableau([55,55,88,54,54,554,5548,6484,]))