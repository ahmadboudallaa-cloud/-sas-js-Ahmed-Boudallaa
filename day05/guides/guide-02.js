/**
 * JOUR 05 — GUIDE 02
 * Recherche de mot-clé (Sensibilité à la casse)
 *
 * OBJECTIF
 * Vérifiez si le mot "javascript" est présent dans la phrase "J'apprends le JavaScript à YouCode". La recherche doit ignorer les majuscules/minuscules.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

let phrase = "J'apprends le JavaScript à YouCode" ;

let phraseMin = phrase.toLowerCase();
 

function chercherMot(mot){

   mot = mot.toLowerCase()

 if(phraseMin.search(mot) != -1){
    return true ;
 }else{
    return false;
 }

}

console.log(chercherMot("youcode"))


