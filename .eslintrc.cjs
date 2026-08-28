module.exports = {
    root: true,
    env: {browser: true, es2020: true, node: true},
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['build', 'dist', '.eslintrc.cjs', 'vite.config.js'],
    parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
    settings: {react: {version: '18.2'}},
    overrides: [
        {
            files: ['**/*.test.js', '**/*.test.jsx', 'src/setupTests.js'],
            globals: {
                describe: 'readonly', it: 'readonly', test: 'readonly',
                expect: 'readonly', vi: 'readonly',
                beforeEach: 'readonly', afterEach: 'readonly',
                beforeAll: 'readonly', afterAll: 'readonly',
            },
        },
    ],
    rules: {
        'no-console': 'warn',
        // Les arguments de callback non utilises sont idiomatiques (handlers,
        // signatures imposees) : seules les variables reellement inutiles
        // restent signalees, en avertissement car c'est du nettoyage.
        'no-unused-vars': ['warn', {
            args: 'none',
            varsIgnorePattern: '^_',
            ignoreRestSiblings: true,
        }],
        // Dette documentee, alignee sur fuber-dash : la validation des props
        // reste visible sans bloquer la CI, le temps d'etre traitee.
        'react/prop-types': 'warn',
        // Dette documentee : 8 composants derivent leur etat dans un effet
        // plutot qu'au rendu. Le motif provoque un rendu supplementaire mais
        // n'est pas fautif ; le corriger demande de revoir le flux de donnees
        // de chaque composant, a traiter separement.
        'react-hooks/set-state-in-effect': 'warn',
    },
}
