
export const formConfig = {
    nom: {
        rules: {
            required: true,
            minLength: 3,
            maxLength: 25,
            pattern: /^[A-Za-z]+$/,
        },
        type: 'text',
        name: 'nom',
        placeholder: 'Nom',
    },
    prenom: {
        rules: {
            required: true,
            minLength: 3,
            maxLength: 25,
            pattern: /^[A-Za-z]+$/,
        },
        type: 'text',
        name: 'prenom',
        placeholder: 'Prénom',
    },
    mail: {
        rules: {
            required: true,
            minLength: 3,
            maxLength: 25,
            email: true,
        },
        type: 'email',
        name: 'mail',
        placeholder: 'Email',
    },
    tel: {
        rules: {
            required: true,
            minLength: 10,
            maxLength: 10,
            pattern: /^[0-9]+$/,
        },
        type: 'tel',
        name: 'tel',
        placeholder: 'Téléphone',
    },
    adresse: {
        rules: {
            required: true,
            minLength: 3,
            maxLength: 25,
            pattern: /^[\dA-Za-z ]+[A-Za-z]+$/,
        },
        type: 'text',
        name: 'adresse',
        placeholder: 'Adresse',
    },
    ville: {
        rules: {
            required: true,
            minLength: 3,
            maxLength: 25,
            pattern: /^[A-Za-z]+$/,
        },
        type: 'text',
        name: 'ville',
        placeholder: 'Ville',
    },
    cp: {
        rules: {
            required: true,
            minLength: 5,
            maxLength: 5,
            pattern: /^[0-9]+$/,
        },
        type: 'text',
        name: 'cp',
        placeholder: 'Code postal',
    },
    mdp: {
        rules: {
            required: true,
            maxLength: 25,
            passwordPattern: true,
        },
        type: 'password',
        name: 'mdp',
        placeholder: 'Mot de passe',
    },
    confirmMdp: {
        rules: {
            required: true,
            maxLength: 25,
            passwordConfirm: true,
        },
        type: 'password',
        name: 'confirmMdp',
        placeholder: 'Confirmer le mot de passe',
    },
};