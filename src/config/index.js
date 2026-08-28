/**
 * Configuration applicative, resolue depuis l'environnement de build.
 *
 * Les URLs etaient auparavant ecrites en dur dans useAxios, useCsrf,
 * useWebSocket et AddCard, ce qui rendait tout deploiement impossible.
 */

function required(name) {
    const value = process.env[name];
    if (!value) {
        throw new Error(
            `Variable d'environnement manquante : ${name}. ` +
            `Copiez .env.example vers .env et renseignez-la.`
        );
    }
    return value;
}

export const API_BASE_URL = required('REACT_APP_API_BASE_URL');
export const SOCKET_URL = required('REACT_APP_SOCKET_URL');
export const STRIPE_PUBLIC_KEY = required('REACT_APP_STRIPE_PK');
export const PUBLIC_APP_URL = (process.env.REACT_APP_PUBLIC_URL || window.location.origin).replace(/\/$/, '');
