/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · CHALLENGE
 * GESTION DE PANIER E-COMMERCE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous codez la logique du panier d'achat d'une boutique en ligne.
 *
 * Consignes :
 * 1. Vous avez un tableau représentant les ID des articles dans le panier : panier = [101, 105, 101, 102].
 * 2. Créez une fonction ajouterAuPanier(id) qui ajoute l'article au tableau.
 * 3. Créez une fonction retirerDuPanier(id) qui retire Toutes les occurrences de cet ID du panier (ex: retirer 101).
 * 4. (Bonus) Créez une fonction afficherQuantites() qui compte et affiche le panier sous forme : Article 101 : 2 exemplaires, Article 105 : 1 exemplaire...
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day05/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
let panier = [101,101, 105, 101, 102];
let result = [];
let dejaVue = [];
function ajouterAuPanier(id){
    panier.push(id)
    return panier
}

function retirerDuPanier(id){
for(let i = panier.length - 1 ; i >= 0  ; i--){
if(panier[i] == id){
    panier.splice(i, 1)
    
    
}


}
return panier
}


function  afficherQuantites(){

    for(let i = 0 ; i < panier.length ; i++){
        let compteur = 0 ; 
         for(let a=0 ; a < panier.length ; a++){
   
        if(panier[i] == panier[a]){
   
           ++compteur
    
            
        }
        }if(dejaVue.includes(panier[i])){
         
             dejaVue.push(panier[i])
        }else{
             result.push("article " + panier[i] + " : " + compteur + " exemplaires")
             dejaVue.push(panier[i])
        }


    }
return result
}

console.log(afficherQuantites(panier))