import React from 'react';

import confort from "../../assets/confort.webp";
import van from "../../assets/van.webp";
import hybride from "../../assets/hybride.webp";

const Driver = [
    {
        id: 1,
        places: 4,
        title: 'confort',
        imgInfo:{
            img:confort,
            alt:'Confort car'
        },
        descriptionInfo:{
            vehicule:'Vehicule spacieux',
            position:'5 min',
            price: 2
        },
        commission: 0
    },
    {
        id: 2,
        places: 8,
        title: 'Van',
        imgInfo:{
            img:van,
            alt:'Van car'
        },
        descriptionInfo:{
            vehicule:'Vehicule spacieux',
            position:'15 min',
            price: 2.5
        },
        commission: 0.12
    },
    {
        id: 3,
        places: 3,
        title: 'Hybride',
        imgInfo:{
            img:hybride,
            alt:'Hybride car'
        },
        descriptionInfo:{
            vehicule:'Vehicule spacieux',
            position:'30 min',
            price: 1.5
        },
        commission: 0.25
    }
]

export default Driver;