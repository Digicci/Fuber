import {describe, it, expect, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import {MemoryRouter, Routes, Route} from 'react-router-dom';
import PrivateRoute from '../utils/Router/Routes/privateRoute/Client';

/**
 * Non-regression M5 + M6.
 *
 * L'ancienne version appelait navigate() dans un useEffect, or cette fonction
 * *retournait* du JSX <Navigate/> : aucune redirection ne se produisait.
 * isConnected() declenchait par ailleurs un setState pendant le rendu, si bien
 * que le premier rendu se croyait toujours deconnecte.
 */

const mockAuth = {loading: false, isConnected: () => false};
vi.mock('../utils/hook/Client/useAuth', () => ({
    useAuth: () => mockAuth
}));

function renderAt(initial = '/prive') {
    return render(
        <MemoryRouter initialEntries={[initial]}>
            <Routes>
                <Route path="/login" element={<div>page de connexion</div>} />
                <Route path="/prive" element={
                    <PrivateRoute><div>contenu protege</div></PrivateRoute>
                } />
            </Routes>
        </MemoryRouter>
    );
}

describe('PrivateRoute client', () => {
    it('redirige vers /login quand la session est absente', () => {
        mockAuth.loading = false;
        mockAuth.isConnected = () => false;
        renderAt();
        expect(screen.getByText('page de connexion')).toBeInTheDocument();
        expect(screen.queryByText('contenu protege')).not.toBeInTheDocument();
    });

    it('affiche le contenu quand la session est valide', () => {
        mockAuth.loading = false;
        mockAuth.isConnected = () => true;
        renderAt();
        expect(screen.getByText('contenu protege')).toBeInTheDocument();
    });

    it('ne redirige pas tant que la session est en cours de verification', () => {
        // Sans cet etat d'attente, une session valide etait rejetee au premier rendu.
        mockAuth.loading = true;
        mockAuth.isConnected = () => false;
        renderAt();
        expect(screen.queryByText('page de connexion')).not.toBeInTheDocument();
        expect(screen.queryByText('contenu protege')).not.toBeInTheDocument();
    });
});
