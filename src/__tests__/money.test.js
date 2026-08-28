import {describe, it, expect} from 'vitest';
import {centsToEuros, formatCents} from '../utils/money';

/**
 * Non-regression S10 : les montants sont stockes en centimes.
 * FinanceCard affichait "2300€" pour une course a 23,00 EUR.
 */
describe('formatage monetaire', () => {
    it('convertit les centimes en euros', () => {
        expect(centsToEuros(2300)).toBe(23);
        expect(centsToEuros(0)).toBe(0);
    });

    it('tolere une valeur absente', () => {
        expect(centsToEuros(undefined)).toBe(0);
        expect(centsToEuros(null)).toBe(0);
    });

    it('formate un montant en euros et non en centimes bruts', () => {
        const formate = formatCents(2300);
        expect(formate).toContain('23');
        expect(formate).not.toContain('2300');
    });

    it('conserve les centimes a l affichage', () => {
        expect(formatCents(2345)).toContain('23');
        expect(formatCents(2345)).toContain('45');
    });
});
