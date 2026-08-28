/**
 * Les montants sont stockes et transmis en centimes (entiers), comme l'exige
 * Stripe. Toute conversion vers l'affichage passe par ces helpers, pour eviter
 * la dispersion de `/100` qui a deja produit un affichage 100x trop eleve
 * (FinanceCard affichait "2300€" pour une course a 23,00 €).
 */

/** Convertit des centimes en euros. */
export const centsToEuros = (cents) => Number(cents || 0) / 100;

/** Formate des centimes en chaine monetaire, ex. 2300 -> "23,00 €". */
export const formatCents = (cents) =>
    new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'})
        .format(centsToEuros(cents));
