export const formConfig = {
  immatriculation: {
    rules: {
      required: true,
      minLength: 3,
      maxLength: 25,
      pattern: /^[A-Z]{2}((-[0-9]{3}-[A-Z]{2})|( [0-9]{4}))$/,
    },
    type: 'text',
    name: 'immatriculation',
    placeholder: 'Immatriculation',
  },
  car: {
    name: 'car',
  },
  marque: {
    rules: {
      required: true,
      minLength: 2,
      maxLength: 25,
    },
    type: 'text',
    name: 'marque',
    placeholder: 'Marque',
  },
  modele: {
    rules: {
      required: true,
      minLength: 2,
      maxLength: 25,
    },
    type: 'text',
    name: 'modele',
    placeholder: 'Modèle',
  },
  place : {
    rules: {
      required: true,
      minLength: 1,
      maxLength: 2,
      pattern: /^[0-9]+$/,
    },
    type: 'text',
    name: 'place',
    placeholder: 'Nombre de place',
  }
}