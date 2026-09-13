/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FORMATAGE MONÉTAIRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction formater(montant) qui prend 1234567 (Number ou String) et retourne "1 234 567 MAD". (Vous pouvez chercher comment utiliser les regex pour insérer des espaces, ou utiliser les boucles/slice).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day05/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function formater(montant){

let montantString = montant.toString();

let part1 = montantString.slice(0 , -3) 
let part2 = montantString.slice(-3) 
let part1a = part1.slice(0 , -3)
let part1b = part1.slice(-3)

console.log(part1a + " " + part1b + " " + part2 + " mad")


}
formater(1234567)