import React from 'react';

import confort from "../../../assets/confort.webp";
import van from "../../../assets/van.webp";
import hybride from "../../../assets/hybride.webp";

const Driver = [
    {
        id: 1,
        title: 'confort',
        imgInfo:{
            img:confort,
            alt:'Confort car'
        },
        descriptionInfo:{
            vehicule:'Vehicule spacieux',
        }
    },
    {
        id: 2,
        title: 'Van',
        imgInfo:{
            img:van,
            alt:'Van car'
        },
        descriptionInfo:{
            vehicule:'Vehicule spacieux',
        },
    },
    {
        id: 3,
        title: 'Hybride',
        imgInfo:{
            img:hybride,
            alt:'Hybride car'
        },
        descriptionInfo:{
            vehicule:'Vehicule spacieux',
        }
    }
]

export default Driver;