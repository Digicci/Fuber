import {describe, it, expect, vi, beforeEach} from 'vitest';
import {renderHook, act} from '@testing-library/react';
import {RaceProvider, useRace} from '../utils/hook/Client/useRace';

/**
 * Non-regression C3 : le navigateur ne transmet plus aucun montant.
 *
 * `total`, `driverPrice` et `commissionPrice` etaient calcules cote client
 * depuis le localStorage puis envoyes tels quels a l'API, qui les passait a
 * Stripe. Editer `raceTotal` suffisait a payer une course 0,01 EUR.
 */

const postMock = vi.fn(() => Promise.resolve({data: {}}));

vi.mock('../utils/hook/useAxios', () => ({
    useAxios: () => ({post: postMock, get: vi.fn(), put: vi.fn(), del: vi.fn(), api: {}})
}));

const wrapper = ({children}) => <RaceProvider>{children}</RaceProvider>;

describe('commande de course', () => {
    beforeEach(() => {
        postMock.mockClear();
        localStorage.clear();
    });

    it("n'envoie aucun montant a l'API", async () => {
        const {result} = renderHook(() => useRace(), {wrapper});

        await act(async () => {
            result.current.commandRace('pm_123', 'csrf_token');
        });

        expect(postMock).toHaveBeenCalledTimes(1);
        const [url, body] = postMock.mock.calls[0];
        expect(url).toBe('race/add');
        expect(body).not.toHaveProperty('total');
        expect(body).not.toHaveProperty('driverPrice');
        expect(body).not.toHaveProperty('commissionPrice');
    });

    it('transmet la destination, le chauffeur et la distance', async () => {
        const {result} = renderHook(() => useRace(), {wrapper});

        await act(async () => {
            result.current.commandRace('pm_123', 'csrf_token');
        });

        const [, body] = postMock.mock.calls[0];
        expect(body).toHaveProperty('destination');
        expect(body).toHaveProperty('driverId');
        expect(body).toHaveProperty('dist');
        expect(body).toHaveProperty('pm', 'pm_123');
    });

    it('ignore un montant falsifie dans le localStorage', async () => {
        // Ancien vecteur d'attaque : forcer raceTotal a 1 centime.
        localStorage.setItem('raceTotal', '1');
        localStorage.setItem('raceDriverPrice', '1');

        const {result} = renderHook(() => useRace(), {wrapper});
        await act(async () => {
            result.current.commandRace('pm_123', 'csrf_token');
        });

        const [, body] = postMock.mock.calls[0];
        expect(JSON.stringify(body)).not.toContain('"total"');
        expect(JSON.stringify(body)).not.toContain('"driverPrice"');
    });
});
