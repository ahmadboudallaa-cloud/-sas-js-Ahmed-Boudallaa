/**
 * JOUR 06 — GUIDE 02
 * Parcourir avec for...of
 *
 * OBJECTIF
 * Vous avez notes = [12, 15, 8, 19]. Calculez la moyenne des notes en parcourant le tableau.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

let notes = [12, 15, 8, 19] ;
let result = 0 ;


for(let i  of notes){
    result += i;
    
}
let moyenne = result / notes.length 

console.log(moyenne)


